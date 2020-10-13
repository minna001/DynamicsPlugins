function GetOptionSetTextValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get text value of the option set field here, Give field logical name here
    var optionSetTextValue = formContext.getAttribute("new_gender").getText();
    Xrm.Utility.alertDialog(optionSetTextValue);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }