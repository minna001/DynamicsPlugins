function SetDateFieldValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the current Date
    var dateOfBirth = new Date();
    //Set the Current Date to date field
    formContext.getAttribute("new_dateofbirth").setValue(dateOfBirth);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }