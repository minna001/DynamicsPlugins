function ClearFormNotification(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Clear Form Notification
    formContext.ui.clearFormNotification("This is a MS DYNAMICS CRM Form Notification", "INFO", "1");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }