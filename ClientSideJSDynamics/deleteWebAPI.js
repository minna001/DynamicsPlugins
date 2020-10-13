function DeleteRecord() {
    try {
    var entityName = "new_organization"; //Entity Logical Name
    var recordId = "919F28C4-F9BB-E911-A977-000D3AF04F8C"; //Guid of the Record
    Xrm.WebApi.deleteRecord(entityName, recordId).then(
    function success(result) {
    Xrm.Utility.alertDialog("Success");
    },
    function (error) {
    Xrm.Utility.alertDialog("Error");
    }
    );
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }