function SetLookUpFieldValue(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    var lookupValue = new Array();
    var lookupValue[0]= new Object();
    lookupValue[0].id = "919F28C4-F9BB-E911-A977-000D3AF04F8C";//Guid of the Record to be set
    lookupValue[0].name = "Tata Consultancy Services"; //Name of the record to be set
    lookupValue[0].entityType = "new_organization" //Entity Logical Name
    formContext.getAttribute("new_organizationid").setValue(lookupValue);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }