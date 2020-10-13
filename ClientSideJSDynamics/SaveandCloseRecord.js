function SaveFormAndClose(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Save Form and Close
    formContext.data.entity.save("saveandclose");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }