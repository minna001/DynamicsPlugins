function CloseForm(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Close Form
    formContext.ui.close();
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }