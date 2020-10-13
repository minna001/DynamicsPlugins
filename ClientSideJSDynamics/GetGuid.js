function GetGuidOfTheRecord(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Get the current Record Guid
    var recordGuid = formContext.data.entity.getId();
    Xrm.Utility.alertDialog(recordGuid);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }