function GetLookupName(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get lookup name here, Give lookup field logical name here
    var lookupName = formContext.getAttribute("new_organizationid").getValue()[0].name;
    Xrm.Utility.alertDialog(lookupName);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }