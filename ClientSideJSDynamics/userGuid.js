function GetGuidOfTheRecord(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the Current User Guid
    var userGuid = formContext.context.getUserId();
    Xrm.Utility.alertDialog(userGuid);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }