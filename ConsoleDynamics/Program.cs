using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk.Client;
using System.Runtime.Remoting.Contexts;

namespace DynamicsConsole
{
    class Program
    {
        static void Main(string[] args)
        {

            //Authenticate
            string connectionstring = "AuthType=Office365;Url = https://org31728cfd.crm.dynamics.com/; Username = minnamorato@dep.nyc.gov;Password = 3452Anj1!";
            CrmServiceClient service = new CrmServiceClient(connectionstring);

            //create a contact

            Entity account = new Entity("account");
            account.Attributes.Add("name", "Acme2");

            Guid guid = service.Create(account);

            Console.WriteLine(guid);
            
            Console.Read();
            Console.WriteLine("If no writing above this it failed.");

            // fetch xml learning
            string query = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
            <entity name='account'>
            <attribute name='name' />
            <attribute name='address1_city' />
            <attribute name='primarycontactid' />
            <attribute name='telephone1' />
            <attribute name='accountid' />
            <order attribute='name' descending='false' />
            <filter type='and'>
            <condition attribute='ownerid' operator='eq-userid' />
            <condition attribute='statecode' operator='eq' value='0' />
            </filter>
            <link-entity name='contact' from='contactid' to='primarycontactid' visible='false' link-type='outer' alias='accountprimarycontactidcontactcontactid'>
            <attribute name='emailaddress1' />
            </link-entity>
            </entity>
            </fetch>";

            EntityCollection collection = service.RetrieveMultiple(new FetchExpression(query));

            foreach (Entity Account in collection.Entities)
            {
                Console.WriteLine(Account.Attributes["name"].ToString());
            }


            // Count number of Account using fetch

            string query2 = @"<fetch distinct='false' mapping='logical' aggregate='true'>
            <Entity name='entity name'>
            <Attribute name='attribute name' aggregate='count alias='aliasname'/>
            </entity>
            </fetch>";

            EntityCollection collection2 = service.RetrieveMultiple(new FetchExpression(query2));
            foreach(Entity item in collection2.Entities)
            {
               Console.WriteLine(((AliasedValue)item.Attributes["aliasname"]).Value.ToString());
            }

            // Note Aggregate limit 50,000 Values

            //using Linq to query collection
                using (OrganizationServiceContext context = new OrganizationServiceContext(service))
                {
                    var records = from account2 in context.CreateQuery("account")
                                  select account2;

                    foreach(var record in records)
                    {
                        if(record.Attributes.Contains("name"))
                            Console.WriteLine(record.Attributes["name"].ToString());
                    }
                }

            // Using join statements using Linq
            using (OrganizationServiceContext contex2 = new OrganizationServiceContext(service))
            {
                var records2 = from c in contex2.CreateQuery("account")
                               join
                               a in contex2.CreateQuery("contact")
                               on c["parentcustomerid"] equals a["accountid"]
                               where c["accountid"] != null
                               select new
                               {
                                   name = c["name"],
                                   Accountname = a["Fullname"]

                               };
                foreach(var record in records2)
                {
                    Console.WriteLine(record.name + " " + record.Accountname);
                }

            }

            // Create Contact using Late Binding
            Entity c = new Entity("contact");

            // Early binding need to add the classes using CRM utility tool use in command line then interactive mode to generate class file
            // Contact contact = new Contact();
            // contact. // Add Your Attribute
            
            // Linq query with early binding
            // using (svcContext context = new svcContext(service))
            // {
            //      get accounts
                //  var accounts = from a in context.AccountSet
                  //             where a.address1_City == "Seattle"
                    //           select a;
            // }
        }
    }
}
