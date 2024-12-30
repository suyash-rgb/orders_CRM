function onchange(e) {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var edited_range = sheet.getRange(sheet.getActiveCell().getRow(), sheet.getActiveCell().getColumn());
	var value = edited_range.getValue();
	let row = edited_range.getRow();
	let column = edited_range.getColumn();

	var sheetforteam = SpreadsheetApp.getActiveSpreadsheet();
	var teamSheet = sheetforteam.getSheetByName("Company Team");
	var teamData = teamSheet.getDataRange();
	var teamValues = teamData.getValues();
	var warehouseManager = teamValues[1][1];
	var sneha = teamValues[2][1];
	var abhishek = teamValues[3][1];


	var editedSheetName = sheet.getSheetName();

	if (editedSheetName == "Order Management Sheet") {
    
		var orderIDvalue = sheet.getRange(row, 1).getValue();
		var namevalue = sheet.getRange(row, 2).getValue();
		var addressvalue = sheet.getRange(row, 3).getValue();
		var phonenumbervalue = sheet.getRange(row, 4).getValue();
		var productvalue = sheet.getRange(row, 5).getValue();
    var quantityvalue = sheet.getRange(row, 6)
		var trackinglinkvalue = sheet.getRange(row, 7).getValue();
    var deliverystatusvalue = sheet.getRange(row, 8).getValue();
		var installationrequiredvalue = sheet.getRange(row, 9).getValue();
		var installationstatusvalue = sheet.getRange(row, 10).getValue();
		var demovideolinkvalue = sheet.getRange(row, 11).getValue();
		var reviewlinkvalue = sheet.getRange(row, 12).getValue();
		var reviewstatusvalue = sheet.getRange(row, 13).getValue();

		///If the Delivery Status is Confirmed or Delivered or Dispatched
		if (column == 8) {
      //Tested
			if (column == 8 && value == "Confirmed") { 
        // Email to Customer 
        var customerEmailBody = ` 
        Dear ${namevalue}, 
        \n\nWe hope this message finds you well. 
        \n\nThank you for your recent order with [Your Company Name]. We are pleased to inform you that we have received your order for ${productvalue}. 
        \n\nWe will keep you updated regarding the delivery for Order Number: ${orderIDvalue}. 
        \n\nThank you for choosing [Your Company Name]. We appreciate your business and look forward to serving you again. 
        \n\nBest regards, 
        \n[Your Full Name] 
        \n[Your Position] 
        \n[Your Company Name] 
        \n[Your Contact Information] 
        `; 
        
        MailApp.sendEmail({ 
          to: phonenumbervalue, // Change this to actual customer email 
          subject: "Your Order Confirmation – " + orderIDvalue, 
          body: customerEmailBody 
          
        }); 
        
        // Email to Warehouse Manager 
        var warehouseEmailBody = ` 
        Dear Warehouse Manager, 
        \n\nI hope this message finds you well. 
        \n\nWe have received a new order with the following details: 
        \n• Order Number: ${orderIDvalue} 
        \n• Product Name: ${productvalue} 
        \n• Quantity: ${quantityvalue} 
        \n\nPlease check the inventory, start the packaging process, and facilitate the dispatch of this order at your earliest convenience. 
        \n\nThank you for your prompt attention to this matter. 
        \n\nBest regards, 
        \n[Your Full Name] 
        \n[Your Position] 
        \n[Your Company Name] 
        \n[Your Contact Information] 
        `; 
        
        MailApp.sendEmail({ 
          to: warehouseManager, 
          subject: "Order Processing Request – " + orderIDvalue, 
          body: warehouseEmailBody 
        }); 
      }
    }
  }
}
