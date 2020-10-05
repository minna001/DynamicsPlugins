var Sdk = window.sdk || {};
(function () {
//code to run in the form onload event

this.formOnLoad = function (executionContext)
{
    var formContext = executionContext.getFormContext();
}

this.shippingmethodOnChange (executionContext)
{
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("address1_shippingmethodcode").getText() == "FedEx")
    {
        formContext.getControl('address1_freighttermscode').setDisabled(true);

    }
    else
    {
        formContext.getControl('address1_freighttermscode').setDisabled(false);
    }

}


}).call(Sdk);