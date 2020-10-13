function GetTheCurrentUserName(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the Current User Name
    var userName = formContext.context.userSettings.userName;
    Xrm.Utility.alertDialog(userName);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }