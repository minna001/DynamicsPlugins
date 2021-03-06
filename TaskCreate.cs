﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using System.ServiceModel;

namespace MyPlugins
{
    public class TaskCreate : IPlugin
    {
        int tax;
        public TaskCreate(string unSecuredConfig, string unSecuredConfig)
        {
            tax = Convert.ToInt32(unSecuredConfig);

        }
        public void Execute(IServiceProvider serviceProvider)
        {
            // Extract the tracing service for use in debugging sandboxed plug-ins.  
            // If you are not registering the plug-in in the sandbox, then you do  
            // not have to add any tracing service related code.  
            ITracingService tracingService =
                (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // Obtain the execution context from the service provider.  
            IPluginExecutionContext context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));
          
            // Obtain the organization service reference which you will need for  
            // web service calls.  
            IOrganizationServiceFactory serviceFactory =
                (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            
            //Impersonation if calling user above does not have admin rights can use the impersonatiion user below(Admoinservice in the logic)
            IOrganizationService adminservice = serviceFactory.CreateOrganizationService(new Guid(""));

            

            // The InputParameters collection contains all the data passed in the message request.  
            if (context.InputParameters.Contains("Target") &&
                context.InputParameters["Target"] is Entity)
            {
                // Obtain the target entity from the input parameters.  
                Entity contact = (Entity)context.InputParameters["Target"];

                try
                {
                    // Plug-in business logic goes here.  
                    //make shared variable
                    context.SharedVariables.Add("Key1","Some Info");
                    
                    Entity taskRecord = new Entity("task");
                   
                    //set single line of text
                    taskRecord.Attributes.Add("subject","Follow up");
                    taskRecord.Attributes.Add("description","Please follow up on the Mod");
                   
                    //Date
                    taskRecord.Attributes.Add("scheduledend",DateTime.Now.Add(2));
                   
                    // Option set
                    taskRecord.Attribute.Add("prioritycode", new OptionSetValue(2));        
                   
                    // Parent record lookup owner of the task
                    taskRecord.Attribute.Add("regardingobjectid", new EntityReference("contact", contact.Id));
                    
                    //Shortcut
                    
                    //taskRecord.Attribute.Add("regardingobjectid", contact.ToEntityReference());                    
                    
                    Guid taskGuid =  service.Create(taskRecord);    


                }

                catch (FaultException<OrganizationServiceFault> ex)
                {
                    throw new InvalidPluginExecutionException("An error occurred in MyPlug-in.", ex);
                }

                catch (Exception ex)
                {
                    tracingService.Trace("MyPlugin: {0}", ex.ToString());
                    throw;
                }
            }
        }
    }
}
