function GetTwoOptionSetDataBaseValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the value of the two option set field here, Give field logical name here
    var databaseValue = formContext.getAttribute("new_type").getValue();
    Xrm.Utility.alertDialog(databaseValue);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }