function ShowHideSections(executionContext) {
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    var isProcessed = formContext.getAttribute("progres_isprocessed").getValue(); //Two Option set field
    var generalTab = formContext.ui.tabs.get("GENERAL"); //Get Tab
    var asstPackages = generalTab.sections.get("ASSISTANCE_PACKAGES"); //Get sections
    var payments = generalTab.sections.get("PAYMENT_RECORDS"); //Get sections
    if (isProcessed === false) {
    asstPackages.setVisible(true); //Show Section
    payments.setVisible(false); //Hide Section
    } else {
    asstPackages.setVisible(false); //Show Section
    payments.setVisible(true); //Show Section
    }
    formContext.ui.tabs.get("CASH_PLAN_FLOW_DETAILS").setDisplayState("collapsed"); //Collapse Tab
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }