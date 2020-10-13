function ClearProgressIndicator() {
    try {
    Xrm.Utility.closeProgressIndicator();
    }
    catch (e) {
    Xrm.Utility.alertDialog(e.message);
    }
    }