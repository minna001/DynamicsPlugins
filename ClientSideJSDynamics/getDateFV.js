function GetDateFieldValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Getvalue of the field here, Give field logical name here
    var dateOfBirth = formContext.getAttribute("new_dateofbirth").getValue();
    Xrm.Utility.alertDialog(dateOfBirth);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }