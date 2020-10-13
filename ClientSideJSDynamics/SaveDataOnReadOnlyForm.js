function ForceSaveDataOnReadOnlyField(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Save forcefully
    formContext.getAttribute("new_employeetype").setSubmitMode("always");
    //Save forcefully
    formContext.getAttribute("new_employeetype").setSubmitMode("never");
    //Save forcefully
    formContext.getAttribute("new_employeetype").setSubmitMode("dirty");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }