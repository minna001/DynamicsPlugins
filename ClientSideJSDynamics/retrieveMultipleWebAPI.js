function RetrieveMultipleRecords() {
    try {
    var entityName = "new_organization"; //Entity Logical Name
    var query = "?$select=new_organizationname, new_noofemployees, new_revenue&$top=3"; //Columns to Retrieve
    Xrm.WebApi.retrieveMultipleRecords(entityName, query).then(
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