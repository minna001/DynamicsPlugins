function SaveForm(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Save Form
    formContext.data.entity.save();
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }