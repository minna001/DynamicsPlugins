using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;



namespace TaxEmailWorkflow
{
    public class TaxEmailWorkflow : CodeActivity
    {

        [Input("Key")]
        public InArgument<string> Key {get; set;}

        [Output("Tax")]
        public OutArgument <string> Tax {get; set;}

        protected override void Execute(CodeActivityContext executionContext)
        {
            //tracing service
            ITracingService tracingService = executionContext.GetExtension<ITracingService>();
            // create Context
            IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.InitiatingUserId);

            string key = Key.Get(executionContext);

            // Get Data from config entity
            //call org web service
            QueryByAttribute query = new QueryByAttribute("contoso_configuration");
            query.ColumnSet = new ColumnSet(new string[]{"contoso_value"});
            query.AddAttributeValue("contoso_name",key);
            EntityCollection collection = service.RetriveMultiple(query);
            if (collection.Entities.Count !=1)
            {
                tracingService.Trace("Something is wrong with the config");
            }
            
            Entity config =  collection.Entities.FirstOrDefault();
            Tax.Set(executionContext, config.Attributes["contoso_value"].ToString());

        }





    }







}