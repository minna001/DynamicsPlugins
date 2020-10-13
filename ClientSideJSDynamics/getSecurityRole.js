function GetSecurityRolesOfCurrentUser(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the Current User Guid
    var userRoles = formContext.context.getUserRoles();
    Xrm.Utility.alertDialog(userRoles);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }