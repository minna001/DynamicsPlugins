function AssociateRequest(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    var serverURL = formContext.context.getClientUrl();
    var currentEntityPlurarName = "fieldsecurityprofiles";
    var currentEntityId = "4E7C654C-7150-E711-811F-C4346BACBA84";//Get Field Security Profile id
    var relationShipName = "systemuserprofiles_association";
    var otherEntityPlurarName = "systemusers";
    var otherEntityId = "2F5FC0F6-F247-E811-810F-C4346BDCF131"; //Get System User id
    var associate = {}
    associate["@odata.id"] = serverURL + "/api/data/v9.1/" + otherEntityPlurarName + "(" + otherEntityId + ")";
    var req = new XMLHttpRequest();
    req.open("POST", serverURL + "/api/data/v9.1/" + currentEntityPlurarName + "(" + currentEntityId + ")/" + relationShipName + "/$ref", false);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.onreadystatechange = function () {
    if (this.readyState == 4 /* complete */) {
    req.onreadystatechange = null;
    if (this.status == 204) {
    //Success
    } else {
    var error = JSON.parse(this.response).error;
    Xrm.Utility.alertDialog(error.message);
    }
    }
    };
    req.send(JSON.stringify(associate));
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }