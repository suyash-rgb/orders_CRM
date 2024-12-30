function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Company Team');

  var number = sheet.getRange(2,1).getValue();
  Logger.log(number);
}
