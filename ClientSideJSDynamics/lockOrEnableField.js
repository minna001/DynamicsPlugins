function SetTheFieldState(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Set field as Read only
    formContext.getAttribute("new_dateofbirth").setDisabled(true);
    //Set field as Editable
    formContext.getAttribute("new_dateofbirth").setDisabled(false);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }