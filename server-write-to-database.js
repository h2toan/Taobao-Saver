const TEST_PAYLOAD = JSON.parse('{"imageList":["https://img.alicdn.com/imgextra/i1/6000000003677/O1CN01sGMuXv1d26vqMXjMQ_!!6000000003677-0-tbvideo.jpg","https://gd1.alicdn.com/imgextra/i4/0/O1CN01yl54sm1Fbn0RHkhXb_!!0-item_pic.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN017RwrJ01Fbn0SUygIN_!!0-item_pic.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01Bmkmf51Fbn0RA4naD_!!672500506-0-lubanu-s.jpg","https://gd4.alicdn.com/imgextra/i4/672500506/O1CN01pRjk9W1Fbn0RA4b66_!!672500506-0-lubanu-s.jpg","https://gd2.alicdn.com/imgextra/i2/672500506/O1CN01YeJGgi1Fbn0Q3bHCw_!!672500506-0-lubanu-s.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01b2pjN81Fbn4KfgoEy_!!0-item_pic.jpg"],"variation":[{"sku":";20509:28316;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd2.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"L","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28315;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd4.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"M","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:6145171;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd4.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"2XL","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28316;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd4.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"L","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28315;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd2.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"M","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:6145171;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd2.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"2XL","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28317;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd4.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"XL","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28317;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd2.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"XL","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:6145171;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd1.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"2XL","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28317;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd1.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"XL","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28315;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd1.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"M","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"},{"sku":";20509:28316;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd1.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"L","variable2ImageSrc":"","originalPrice":"138.00","promotionPrice":"69.00"}],"itemSku":"616568805459"}');

const CONFIG = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CONFIG').getRange('A:B').getValues();
const DELIVERY_SERVICE_OPTION = CONFIG.filter((e, i) => i > 0 && i < 9).map(e => e[1]);
const PRE_ORDER_DTS = [CONFIG[9][1]];


function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
    const DATABASE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Database');
    const LAST_ROW = DATABASE.getLastRow();
    const MAX_ROW = DATABASE.getMaxRows();
    const NUMBER_OF_ITEM = PAYLOAD.variation.length;
    if (LAST_ROW == MAX_ROW) {
        DATABASE.insertRowsAfter(LAST_ROW, NUMBER_OF_ITEM);
    }

    const IMAGE_SRC_LIST = new Array(NUMBER_OF_ITEM).fill(PAYLOAD.imageList.concat(Array(8 - PAYLOAD.imageList.length).fill('')));
    const IMAGE_SRC_COVER = new Array(NUMBER_OF_ITEM).fill([PAYLOAD.imageList[0]]);
    const ITEM_SKU = new Array(NUMBER_OF_ITEM).fill([PAYLOAD.itemSku]);

    const ITEM_VARIATION = PAYLOAD.variation;
    updateDictionary(ITEM_VARIATION);

    const VARIATION_SKU = ITEM_VARIATION.map(e => [PAYLOAD.itemSku + e.sku.replace(/;$/g, "").replace(/;/g, "_")]);
    const VARIABLE1 = ITEM_VARIATION.map(e => [lookUp(e.variable1Name), lookUp(e.variable1Value),e.variable1ImageSrc]);
    const VARIABLE2 = ITEM_VARIATION.map(e => [lookUp(e.variable2Name), lookUp(e.variable2Value)]);
    const PROMOTION_PRICE = ITEM_VARIATION.map(e => [e.promotionPrice]);

    DATABASE.getRange(`D${LAST_ROW+1}:D${LAST_ROW+NUMBER_OF_ITEM}`).setValues(ITEM_SKU);
    DATABASE.getRange(`E${LAST_ROW+1}:E${LAST_ROW+NUMBER_OF_ITEM}`).setValues(VARIATION_SKU);
    DATABASE.getRange(`F${LAST_ROW+1}:H${LAST_ROW+NUMBER_OF_ITEM}`).setValues(VARIABLE1);
    DATABASE.getRange(`I${LAST_ROW+1}:J${LAST_ROW+NUMBER_OF_ITEM}`).setValues(VARIABLE2);
    DATABASE.getRange(`K${LAST_ROW+1}:K${LAST_ROW+NUMBER_OF_ITEM}`).setValues(PROMOTION_PRICE);
    DATABASE.getRange(`M${LAST_ROW+1}:M${LAST_ROW+NUMBER_OF_ITEM}`).setValues(VARIATION_SKU);
    DATABASE.getRange(`N${LAST_ROW+1}:N${LAST_ROW+NUMBER_OF_ITEM}`).setValues(IMAGE_SRC_COVER);
    DATABASE.getRange(`O${LAST_ROW+1}:V${LAST_ROW+NUMBER_OF_ITEM}`).setValues(IMAGE_SRC_LIST);
    DATABASE.getRange(`AA${LAST_ROW+1}:AH${LAST_ROW+NUMBER_OF_ITEM}`).setValues(new Array(NUMBER_OF_ITEM).fill(DELIVERY_SERVICE_OPTION));
    DATABASE.getRange(`AI${LAST_ROW+1}:AI${LAST_ROW+NUMBER_OF_ITEM}`).setValues(new Array(NUMBER_OF_ITEM).fill(PRE_ORDER_DTS));
}

function lookUp(string) {
    return isChingChong(string) ? `=VLOOKUP("${string}",DICTIONARY!A:B,2,FALSE)` : string;
}

function isChingChong(string) {
    return string.search(/[\u4E00-\u9FFF]/) == -1 ? false : true;
}