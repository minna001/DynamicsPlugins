function OnChange(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Sample code for On Change Event
    Xrm.Utility.alertDialog("This is an alert for On Change Event.");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }