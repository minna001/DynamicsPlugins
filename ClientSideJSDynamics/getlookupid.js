function GetLookupId(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get lookup ID here, Give lookup field logical name here
    var lookupId = formContext.getAttribute("new_organizationid").getValue()[0].id;
    Xrm.Utility.alertDialog(lookupId);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }