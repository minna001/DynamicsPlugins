function ShowHideFields(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Show Field
    formContext.getAttribute("new_dateofbirth").setVisible(true);
    //Hide Field
    formContext.getAttribute("new_dateofbirth").setVisible(false);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }