
function ContactLoad ()
{
    
    alert("this is onload event of the form")

}

function ContactSave()
{
    alert("This is saving of a contact ")

}

function EmailOnChange()
{
    alert("This is email onchange event of email")

}

// Getting formContext Client API

//function DisplayHelloWorld(executionContext)
//{
  //  var formContext = executionContext.getFormContext();
//}

// two objects
//Data Object
// formContext.data.entity.attributes
//
//UI object
// formContext.ui.controls

function DisplayHelloWorld(executionContext)
{
    var formContext = executionContext.getFormContext();
    var firstName =
    formContext.data.entity.attributes.get("firstname").getValue();
    alert("Hello world" + firstName);
    
    // or use shortcut
    //var firstName = formContext.getAttribute("firstname").getValue();

        // this function will get the first name fromform then it will return an alert saying helloworld 'firstname'
    
}

