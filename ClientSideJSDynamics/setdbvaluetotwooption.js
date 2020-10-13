function SetTwoOptionSetDataBaseValue(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Set the field value here - true
    formContext.getAttribute("new_type").setValue(true);
    //Set the field value here - false
    formContext.getAttribute("new_type").setValue(false);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }