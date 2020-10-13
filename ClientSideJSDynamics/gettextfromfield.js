function GetTextValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get text value of the field here, Give field logical name here
    var textValue = formContext.getAttribute("new_employeebusinessid").getValue();
    Xrm.Utility.alertDialog(textValue);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }