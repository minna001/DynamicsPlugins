function SaveFormAndOpenCreateForm(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Save Form and Close
    formContext.data.entity.save("saveandnew");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }