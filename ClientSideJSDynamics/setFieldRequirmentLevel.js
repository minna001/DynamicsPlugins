function SetTheFieldRequirementLevel(executionContext){
    try {
    //Get the form context
    var formContext = executionContext.getFormContext();
    //Set as Business Required
    formContext.getAttribute("new_dateofbirth").setRequiredLevel("required");
    //Set as Buiness Recommended
    formContext.getAttribute("new_dateofbirth").setRequiredLevel("recommended");
    //Set as Optional
    formContext.getAttribute("new_dateofbirth").setRequiredLevel("none");
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }