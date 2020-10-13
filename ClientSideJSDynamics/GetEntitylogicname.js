function GetEntityLogicalName(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get entity logical name here, Give lookup field logical name here
    var entityName = formContext.getAttribute("new_organizationid").getValue()[0].entityType;
    Xrm.Utility.alertDialog(entityName);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }