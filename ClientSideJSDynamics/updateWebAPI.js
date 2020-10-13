function UpdateRecord() {
    try {
    var entityName = "new_organization"; //Entity Logical Name
    var recordId = "919F28C4-F9BB-E911-A977-000D3AF04F8C"; //Guid of the Record
    //Data used to Create record
    var data = {
    "new_organizationname": "Tata Consultancy Services",
    "new_description": "This is the description of Tata Consultancy Services",
    "new_noofemployees": 450000,
    "new_revenue": 30000000
    }
    Xrm.WebApi.updateRecord(entityName, recordId, data).then(
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