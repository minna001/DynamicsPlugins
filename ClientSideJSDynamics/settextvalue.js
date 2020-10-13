function SetTextFieldValue(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Set the field value here
    formContext.getAttribute("new_employeebusinessid").setValue("abcd");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }