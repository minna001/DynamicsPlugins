function CallSynchronousAction(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    var webApiVersionNumber = "v9.1";
    var serverURL = formContext.context.getClientUrl() + "/api/data/" + webApiVersionNumber + "/";;
    var actionName = "new_customaction"; //Action name
    var data = {}; //Action Parameters
    if (typeof (data) === "undefined") {
    data = {};
    }
    var oDataEndPoint = serverURL + actionName;
    var req = new XMLHttpRequest();
    req.open("POST", oDataEndPoint, false); //Action will be invoked synchronously
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.onreadystatechange = function () {
    if (this.readyState === 4) {
    req.onreadystatechange = null;
    if (this.status === 204 || this.status === 200) {
    if (this.statusText === "No Content" || this.statusText === "") // In case of 204
    var response = req.response;
    else {
    var response = JSON.parse(req.response);
    }
    } else {
    var error = JSON.parse(req.response).error;
    Xrm.Utility.alertDialog(error.message);
    }
    }
    };
    req.send(JSON.stringify(data));
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }