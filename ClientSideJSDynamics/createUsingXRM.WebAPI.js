function CreateRecord() {
    try {
    var entityName = "new_organization"; //Entity Logical Name
    //Data used to Create record
    var data = {
    "new_organizationname": "Tata Consultancy Services",
    "new_description": "This is the description of Tata Consultancy Services",
    "new_noofemployees": 400000,
    "new_revenue": 20000000
    }
    Xrm.WebApi.createRecord(entityName, data).then(
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