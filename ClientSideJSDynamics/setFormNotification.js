function SetFormNotification(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Set Form Notification
    formContext.ui.setFormNotification("This is a MS DYNAMICS CRM Form Notification", "INFO", "1");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }