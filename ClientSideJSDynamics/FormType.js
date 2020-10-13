var Sdk = window.sdk || {};
(function () {
//code to run in the form onload event

this.formOnLoad = function (executionContext)
{
    var formContext = executionContext.getFormContext();
}

this.lookupformType (executionContext)
{
    try {
        //Get the form context
        var formContext = executionContext.getFormContext();
        //Get the Current User Name
        var userName = formContext.context.userSettings.userName;
        Xrm.Utility.alertDialog(userName);
        }
        catch (e) {
        Xrm.Utility.alertDialog(e.message);
        }
        
    var formContext = executionContext.getFormContext();
    var formtype = formContext.ui.getFormType();

    if (formtype == 1) 
    {
        formContext.ui.setFormNotification(userName + "is creating account","INFO","1");    
    }
    else if (formtype == 2) 
    {
        formContext.ui.setFormNotification(userName + "is working in an exisintg account","INFO",);    
    }
    else if (formtype == 3) 
    {
        formContext.ui.setFormNotification(userName + "does not have permissions to edit the record","INFO","3");   
    }
  
    
}


}).call(Sdk);

//Form Types Values
// 0 undefined
// 1 Create
// 2 Update
// 3 Read only
// 4 disabled
// 6 bulk edit
