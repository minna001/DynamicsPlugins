var Sdk = window.sdk || {};
(function () {
//code to run in the form onload event

this.formOnLoad = function (executionContext)
{
    var formContext = executionContext.getFormContext();
}

this.lookupmethodOnChange (executionContext)
{
    var formContext = executionContext.getFormContext();
    var lookuparray = formContext.getAttribute('parentcustomerid').getAttributeType();

    if(lookuparray[0] !=null)
    {
        var guidofAccount = lookuparray[0].id;
        var nameofaccount = lookuparray[0].name;
        var entitytypeofaccount = lookuparray[0].entityType;

        formContext.ui.setformNotification("GUID of the account is " + guidofAccount, "INFO", "1");
        formContext.ui.setformNotification("Name of the account is " + nameofaccount, "INFO", "2");
        formContext.ui.setformNotification("Entity Type of the account is " + entitytypeofaccount, "INFO", "3");
    }
}


}).call(Sdk);