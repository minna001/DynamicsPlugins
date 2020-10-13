function ApplyLookUpFilter(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the custom filter
    var filter = "";
    //Get the lookup field
    var lookupField = formContext.getAttribute("new_organizationid");
    
    //Apply custom Filter for lookup
    lookupField.addPreSearch(function () {
    lookupField.addCustomFilter(filter);
    });
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }