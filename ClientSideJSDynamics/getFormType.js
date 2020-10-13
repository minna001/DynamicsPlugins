function GetFormType(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get Form Type
    var formType = formContext.ui.getFormType();
    Xrm.Utility.alertDialog(formType);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }