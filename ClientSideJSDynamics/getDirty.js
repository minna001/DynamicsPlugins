function GetFormDirtyFields(executionContext) {
try {
//Get the form context
var formContext = executionContext.getFormContext();
var attributes = formContext.data.entity.attributes.get()
for (var i in attributes) {
var attribute = attributes[i];
if (attribute.getIsDirty()) {
Xrm.Utility.alertDialog("Attribute dirty: " + attribute.getName());
}
}
}
catch (e) {
Xrm.Utility.alertDialog(e.message);
}
}