function doPost(e) {
    return handleRequest(e);
}

function handleRequest(e) {

    let lock = LockService.getScriptLock();
    lock.waitLock(30000);

    try {

        const PAYLOAD = JSON.parse(e.postData.contents);

        writeToDatabase(PAYLOAD);

        return ContentService.createTextOutput(JSON.stringify(PAYLOAD)).setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService.createTextOutput(e);

    } finally {
        lock.releaseLock();
    }
}

const TEST_PAYLOAD = JSON.parse('{"imageList":["https://img.alicdn.com/imgextra/i1/6000000003677/O1CN01sGMuXv1d26vqMXjMQ_!!6000000003677-0-tbvideo.jpg_400x400.jpg","https://gd4.alicdn.com/imgextra/i4/0/O1CN01yl54sm1Fbn0RHkhXb_!!0-item_pic.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN017RwrJ01Fbn0SUygIN_!!0-item_pic.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01Bmkmf51Fbn0RA4naD_!!672500506-0-lubanu-s.jpg","https://gd4.alicdn.com/imgextra/i4/672500506/O1CN01pRjk9W1Fbn0RA4b66_!!672500506-0-lubanu-s.jpg","https://gd2.alicdn.com/imgextra/i2/672500506/O1CN01YeJGgi1Fbn0Q3bHCw_!!672500506-0-lubanu-s.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01b2pjN81Fbn4KfgoEy_!!0-item_pic.jpg"],"variation":[{"sku":";20509:28316;1627207:28341;","variable1Name":"尺码","variable1Value":"L","variable2Name":"颜色","variable2Value":"黑色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28315;1627207:28320;","variable1Name":"尺码","variable1Value":"M","variable2Name":"颜色","variable2Value":"白色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:6145171;1627207:28320;","variable1Name":"尺码","variable1Value":"2XL","variable2Name":"颜色","variable2Value":"白色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28316;1627207:28320;","variable1Name":"尺码","variable1Value":"L","variable2Name":"颜色","variable2Value":"白色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28315;1627207:28341;","variable1Name":"尺码","variable1Value":"M","variable2Name":"颜色","variable2Value":"黑色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:6145171;1627207:28341;","variable1Name":"尺码","variable1Value":"2XL","variable2Name":"颜色","variable2Value":"黑色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28317;1627207:28320;","variable1Name":"尺码","variable1Value":"XL","variable2Name":"颜色","variable2Value":"白色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28317;1627207:28341;","variable1Name":"尺码","variable1Value":"XL","variable2Name":"颜色","variable2Value":"黑色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:6145171;1627207:28335;","variable1Name":"尺码","variable1Value":"2XL","variable2Name":"颜色","variable2Value":"绿色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28317;1627207:28335;","variable1Name":"尺码","variable1Value":"XL","variable2Name":"颜色","variable2Value":"绿色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28315;1627207:28335;","variable1Name":"尺码","variable1Value":"M","variable2Name":"颜色","variable2Value":"绿色","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28316;1627207:28335;","variable1Name":"尺码","variable1Value":"L","variable2Name":"颜色","variable2Value":"绿色","originalPrice":"138.00","promotionPrice":"69.00"}]}')

function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
    const SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Database');
    const LAST_ROW = SHEET.getLastRow();
    const MAX_ROW = SHEET.getMaxRows();
    if (LAST_ROW == MAX_ROW) {
        SHEET.insertRowAfter(LAST_ROW);
    }

    const NUMBER_OF_ITEM = PAYLOAD.variation.length;
    let imgList = new Array(NUMBER_OF_ITEM);
    imgList.fill(PAYLOAD.imageList.concat(Array(8 - PAYLOAD.imageList.length).fill('')));

    const ITEM_VARIATION = PAYLOAD.variation;

    const SKU = ITEM_VARIATION.map(e => [e.sku.replace(/;/g, "s")]);
    const VARIABLE1 = ITEM_VARIATION.map(e => [e.variable1Name, e.variable1Value]);
    const VARIABLE2 = ITEM_VARIATION.map(e => [e.variable2Name, e.variable2Value]);
    const PROMOTION_PRICE = ITEM_VARIATION.map(e => [e.promotionPrice]);

    SHEET.getRange(`D${LAST_ROW+1}:D${LAST_ROW+NUMBER_OF_ITEM}`).setValues(SKU);
    SHEET.getRange(`F${LAST_ROW+1}:G${LAST_ROW+NUMBER_OF_ITEM}`).setValues(VARIABLE1);
    SHEET.getRange(`I${LAST_ROW+1}:J${LAST_ROW+NUMBER_OF_ITEM}`).setValues(VARIABLE2);
    SHEET.getRange(`K${LAST_ROW+1}:K${LAST_ROW+NUMBER_OF_ITEM}`).setValues(PROMOTION_PRICE);
    SHEET.getRange(`O${LAST_ROW+1}:V${LAST_ROW+NUMBER_OF_ITEM}`).setValues(imgList);
}