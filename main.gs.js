const TEST_PAYLOAD = JSON.parse(
  '{"itemCategoryId":"","itemName":"","itemDescription":"","itemSku":"616568805459","imageList":["https://img.alicdn.com/imgextra/i1/6000000003677/O1CN01sGMuXv1d26vqMXjMQ_!!6000000003677-0-tbvideo.jpg","https://gd3.alicdn.com/imgextra/i4/0/O1CN01yl54sm1Fbn0RHkhXb_!!0-item_pic.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN017RwrJ01Fbn0SUygIN_!!0-item_pic.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01Bmkmf51Fbn0RA4naD_!!672500506-0-lubanu-s.jpg","https://gd4.alicdn.com/imgextra/i4/672500506/O1CN01pRjk9W1Fbn0RA4b66_!!672500506-0-lubanu-s.jpg","https://gd2.alicdn.com/imgextra/i2/672500506/O1CN01YeJGgi1Fbn0Q3bHCw_!!672500506-0-lubanu-s.jpg","https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01piaDPI1Fbn56Wdz21_!!0-item_pic.jpg"],"variation":[{"sku":";20509:28316;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"L","stock":283,"price":"69.00"},{"sku":";20509:28315;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"M","stock":188,"price":"69.00"},{"sku":";20509:6145171;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"2XL","stock":386,"price":"69.00"},{"sku":";20509:28316;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"L","stock":188,"price":"69.00"},{"sku":";20509:28315;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"M","stock":313,"price":"69.00"},{"sku":";20509:6145171;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"2XL","stock":382,"price":"69.00"},{"sku":";20509:28317;1627207:28320;","variable1Name":"颜色","variable1Value":"白色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i4/672500506/O1CN017ZWeMV1Fbn0O5nyqY_!!672500506.jpg","variable2Name":"尺码","variable2Value":"XL","stock":233,"price":"69.00"},{"sku":";20509:28317;1627207:28341;","variable1Name":"颜色","variable1Value":"黑色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01wMkanU1Fbn0OSuVSJ_!!672500506.jpg","variable2Name":"尺码","variable2Value":"XL","stock":276,"price":"69.00"},{"sku":";20509:6145171;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"2XL","stock":448,"price":"69.00"},{"sku":";20509:28317;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"XL","stock":375,"price":"69.00"},{"sku":";20509:28315;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"M","stock":304,"price":"69.00"},{"sku":";20509:28316;1627207:28335;","variable1Name":"颜色","variable1Value":"绿色","variable1ImageSrc":"https://gd3.alicdn.com/imgextra/i3/672500506/O1CN01dwiDuK1Fbn0Q5kfvf_!!672500506.jpg","variable2Name":"尺码","variable2Value":"L","stock":345,"price":"69.00"}]}'
);

const CONFIG = SpreadsheetApp.getActiveSpreadsheet()
  .getSheetByName("CONFIG")
  .getRange("A:B")
  .getValues();
const DELIVERY_SERVICE_OPTION = CONFIG.filter((e, i) => i > 0 && i < 6).map(
  (e) => e[1]
);
const PRE_ORDER_DTS = [CONFIG[6][1]];
const EXCHANGE_RATE = [CONFIG[0][1]];
const DESCRIPTION_SUFFIX = [CONFIG[7][1]];

function writeToDatabase(PAYLOAD = TEST_PAYLOAD) {
  const DATABASE = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "Database"
  );
  const LAST_ROW = DATABASE.getLastRow();
  const MAX_ROW = DATABASE.getMaxRows();
  const NUMBER_OF_VARIATION = PAYLOAD.variation.length;
  if (LAST_ROW == MAX_ROW) {
    DATABASE.insertRowAfter(LAST_ROW);
  }

  const ITEM_CATEGORY_ID = PAYLOAD.itemCategoryId;
  const ITEM_NAME = PAYLOAD.itemName;
  const ITEM_DESCRIPTION =
    PAYLOAD.itemDescription + "\n\n" + DESCRIPTION_SUFFIX;
  const IMAGE_SRC_LIST = PAYLOAD.imageList.concat(
    Array(8 - PAYLOAD.imageList.length).fill("")
  );
  const IMAGE_SRC_COVER = PAYLOAD.imageList[0];
  const ITEM_SKU = PAYLOAD.itemSku;

  const ITEM_VARIATION = PAYLOAD.variation;
  updateDictionary(ITEM_VARIATION);

  const DATA_TO_FILL = ITEM_VARIATION.map((e) => {
    const VARIATION_SKU =
      ITEM_SKU + e.sku.replace(/;$/g, "").replace(/;/g, "_");
    const VARIABLE = [
      e.variable1Name,
      e.variable1Value,
      e.variable1ImageSrc,
      e.variable2Name,
      e.variable2Value,
    ];
    const VARIATION_PRICE =
      Math.round((+e.price * +EXCHANGE_RATE) / 1000) * 1000;
    const VARIATION_STOCK = e.stock;
    const VARIATION_WEIGHT = "500";
    const VARIATION_LENGTH = "";
    const VARIATION_WIDTH = "";
    const VARIATION_HEIGHT = "";

    return new Array().concat(
      ITEM_CATEGORY_ID,
      ITEM_NAME,
      ITEM_DESCRIPTION,
      ITEM_SKU,
      ITEM_SKU,
      VARIABLE,
      VARIATION_PRICE,
      VARIATION_STOCK,
      VARIATION_SKU,
      IMAGE_SRC_COVER,
      IMAGE_SRC_LIST,
      VARIATION_WEIGHT,
      VARIATION_LENGTH,
      VARIATION_WIDTH,
      VARIATION_HEIGHT,
      DELIVERY_SERVICE_OPTION,
      PRE_ORDER_DTS
    );
  });

  DATABASE.getRange(
    `A${LAST_ROW + 1}:AF${LAST_ROW + NUMBER_OF_VARIATION}`
  ).setValues(DATA_TO_FILL);
}

function lookUp(string) {
  return isChingChong(string)
    ? `=VLOOKUP("${string}",DICTIONARY!A:B,2,FALSE)`
    : string;
}

function isChingChong(string) {
  return string.search(/[\u4E00-\u9FFF]/) == -1 ? false : true;
}
