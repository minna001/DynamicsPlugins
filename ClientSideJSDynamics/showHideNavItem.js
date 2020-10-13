function ShowHideNavigationItems(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Show Organizations
    formContext.ui.navigation.items.get("organizations").setVisible(true);
    //Hide Organizations
    formContext.ui.navigation.items.get("organizations").setVisible(false);
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }