// microsoft recomends to use namespace notation

var Sdk = window.sdk || {};
(function () {
//code to run in the form onload event

this.formOnLoad = function (executionContext)
{
    var formContext = executionContext.getFormContext();
    var firstName = 
    formContext.data.entity.attributes.get("firstname").getValue();
    alert("Hello world" + firstName);

}

this.formOnSave = function (executionContext)
{
    alert("When something saves");

}

this.firstNameOnChange = function (executionContext)
{
    var formContext = executionContext.getFormContext();
    var firstName = 
    formContext.data.entity.attributes.get("firstname").getValue();
    alert("Hello world" + firstName);
}

}).call(Sdk);

