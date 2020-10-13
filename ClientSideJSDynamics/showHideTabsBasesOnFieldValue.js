function ShowHideTabs(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    var isProcessed = formContext.getAttribute("progres_isprocessed").getValue(); //Two Option set field
    var generalTab = formContext.ui.tabs.get("GENERAL"); //Get Tab
    if (isProcessed === false) {
    generalTab.setVisible(false); //Hide Tab
    } else {
    generalTab.setVisible(true); //Show Tab
    }
    formContext.ui.tabs.get("CASH_PLAN_FLOW_DETAILS").setDisplayState("collapsed"); //Collapse Tab
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }