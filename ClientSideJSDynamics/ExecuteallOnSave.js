function OnSave(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Sample code for On Save Event
    Xrm.Utility.alertDialog("This is an alert for On Save Event.");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }