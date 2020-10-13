function SetOptionSetDataBaseValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Set the field value here
    formContext.getAttribute("new_gender").setValue(123456);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }