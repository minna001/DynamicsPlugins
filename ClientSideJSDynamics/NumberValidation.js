// microsoft recomends to use namespace notation

var Sdk = window.sdk || {};
(function () {
//code to run in the form onload event

this.formOnLoad = function (executionContext)
{

}

this.formOnSave = function(executionContext)
{
    var eventArgs = executionContext.getEventArgs();
    if (eventArgs.getSaveMode()== 70 || eventArgs.getSaveMode() == 2) 
    {
        eventArgs.preventDefault();
    }
}

this.phoneOnChange = function (executionContext)
{
    var formContext = executionContext.getFormContext();
    var phoneNumber = 
    formContext.data.entity.attributes.get("telephone1").getValue();
    var expression = new RegExp("((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}");
    if (!expression.test(phoneNumber)) 
    {
        formContext.getControl("telephone1").setNotification("Enter phone number in US Format!" + " " + "(123)-456-7891" + "Try again","telephonemsg");
        formContext.ui.setFormNotfication("Telephone Number not in US Format","INFO","formnoti1");
    }
    else
    {
        formContext.getControl("telephone1").clearNotification("telephonemsg");
        formContext.ui.clearFormNotification("formnoti1");

    }
}

}).call(Sdk);

//Form Notification
// formContext.ui.setFormNotification(message,level,uniqueid)
// Three levels INFOR, ERROR, WARNING

// field notification
//formContext.getControl("attribute").setNotification(message,uniqueid);


//prevent auto save

/* function preventAutoSave(executionContext) {
    var eventArgs = executionContext.getEventArgs();
    if (eventArgs.getSaveMode()== 70 || eventArgs.getSaveMode() == 2) 
    {
        eventArgs.preventDefault();
    }

} */

// FormContext
//Data Object
// formContext.data.entity.attributes
// UI object
// formContext.ui.controls

 