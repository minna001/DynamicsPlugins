function OnLoad(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Sample code for On Load Event
    Xrm.Utility.alertDialog("This is an alert for On Load Event.");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }