(function getScript(src) {
    let script = document.createElement("script");
    script.src = src;
    return document.getElementsByTagName("head")[0].appendChild(script);
})(`//mdskip.taobao.com/core/initItemDetail.htm?isUseInventoryCenter=false&cartEnable=true&service3C=false&isApparel=true&isSecKill=false&tmallBuySupport=true&isAreaSell=false&tryBeforeBuy=false&offlineShop=false&itemId=${getItemId()}&showShopProm=false&isPurchaseMallPage=false&itemGmtModified=1615886157000&isRegionLevel=false&household=false&sellerPreview=false&queryMemberRight=true&addressLevel=2&isForbidBuyItem=false&callback=getJSONP`);

let ITEM_PRICE_INFO;

function getJSONP(e) {
    ITEM_PRICE_INFO = e.defaultModel.itemPriceResultDO.priceInfo;
    const UI_BOX = `<div id="UI_BOX"><input id="itemCategoryId" class="autocomplete" placeholder="Category ID" name="itemCategoryId"><input id="itemName" placeholder="Item Name" name="itemname" onkeyup="wordCount('itemName')"><span id="itemNameWordCount">0</span><span>/120</span><textarea id="itemDescription" placeholder="Description" name="itemdescription" onkeyup="wordCount('itemDescription')"></textarea><span id="itemDescriptionWordCount" class="bottom-100px">0</span><span class="bottom-100px">/3000</span><div id="sendTrigger" onclick="sendDataToSheet()">Send This Item To Sheet</div></div>`;
    return document.getElementById("detail").innerHTML += UI_BOX;
}

async function sendDataToSheet() {
    document.getElementById("sendTrigger").innerHTML = `<img src="chrome-extension://hibcabekedaenkbmoofanlnilfmlpkpc/img/loading.svg">`;
    try {
        const PAY_LOAD = prepareProductItem();
        await fetch('https://script.google.com/macros/s/AKfycbyMgBYIEkjqgWCTS_v35feyNBC0JtBROS8dQsEuDrptg4yE1Lqmuykrjw/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(PAY_LOAD)
        });
        document.getElementById("sendTrigger").innerHTML = "Data Sent!";
        document.getElementById("sendTrigger").removeAttribute('onclick');
    } catch (error) {
        console.log(error);
        document.getElementById("sendTrigger").innerHTML = "Some Error Occurred";
    };
}

function prepareProductItem() {
    let productItem = {
        itemCategoryId: document.getElementById('itemCategoryId').value,
        itemName: document.getElementById('itemName').value,
        itemDescription: document.getElementById('itemDescription').value,
        itemSku: getItemId(),
        imageList: getImageSrcList(),
        variation: getVaration()
    };
    return productItem;
}

function getVaration() {
    const SKU_MAP = getSkuMap();
    const SKU_KEY_NAMES = Object.keys(SKU_MAP);

    let variation = [];

    for (let index = 0; index < SKU_KEY_NAMES.length; index++) {
        let productVariationUnit = {};
        const skuUnit = SKU_KEY_NAMES[index];
        const key1 = skuUnit.split(';')[2];
        const key2 = skuUnit.split(';')[1];

        productVariationUnit.sku = skuUnit;
        productVariationUnit.variable1Name = getPropertyList()[0] ? getPropertyList()[0].type : "";
        productVariationUnit.variable1Value = getPropertyList()[0] ? getPropertyList()[0].dataList.filter(e => e.value == key1)[0].text : "";
        productVariationUnit.variable1ImageSrc = getPropertyList()[0].dataList[0].hasOwnProperty('imgSrc') ? getPropertyList()[0].dataList.filter(e => e.value == key1)[0].imgSrc : "";
        productVariationUnit.variable2Name = getPropertyList()[1] ? getPropertyList()[1].type : "";
        productVariationUnit.variable2Value = getPropertyList()[1] ? getPropertyList()[1].dataList.filter(e => e.value == key2)[0].text : "";
        productVariationUnit.stock = SKU_MAP[skuUnit].stock;
        productVariationUnit.price = ITEM_PRICE_INFO[SKU_MAP[skuUnit].skuId].promotionList ? ITEM_PRICE_INFO[SKU_MAP[skuUnit].skuId].promotionList[0].price : SKU_MAP[skuUnit].price;

        variation.push(productVariationUnit);
    };
    return variation;
}

function getPropertyList() {
    let propertyList = [];
    const PROPERTY_UL_LIST = document.querySelectorAll("ul.tm-clear.J_TSaleProp");

    for (let index = 0; index < PROPERTY_UL_LIST.length; index++) {
        const PROPERTY_NODE_UL = PROPERTY_UL_LIST[index];
        let property = {};
        property.type = PROPERTY_NODE_UL.dataset.property;
        property.dataList = [];

        for (let i = 0; i < PROPERTY_NODE_UL.childElementCount; i++) {
            const PROPERTY_NODE_LI = PROPERTY_NODE_UL.children[i];
            let dataValueMap = {
                value: PROPERTY_NODE_LI.dataset.value,
                text: PROPERTY_NODE_LI.childNodes[1].childNodes[1].textContent,
            };

            if (PROPERTY_NODE_LI.childNodes[1].style.backgroundImage !== "") {
                dataValueMap.imgSrc = location.protocol + PROPERTY_NODE_LI.childNodes[1].style.backgroundImage.match(/\/\/.+\.jpg(?=_)/)[0];
            };

            property.dataList.push(dataValueMap);
        };
        propertyList.push(property);
    };
    return propertyList.reverse();
}

function getImageSrcList() {
    const IMAGE_NODE_LIST = document.querySelectorAll('#J_UlThumb img');
    const SRC_LIST = [];

    for (let index = 0; index < IMAGE_NODE_LIST.length; index++) {
        const SRC = IMAGE_NODE_LIST[index].src.replace(/_\d+x\d+.*\.jpg.*/, '');
        SRC_LIST.push(SRC);
    };
    return SRC_LIST;
}

function getItemId() {
    return location.search.match(/(?:id=)(\d+)/)[1];
}

function wordCount(id) {
    return document.getElementById(`${id}WordCount`).innerText = document.getElementById(`${id}`).value.length;
}

function getSkuMap() {
    const SCRIPT_LIST = document.querySelectorAll('#J_DetailMeta>div.tm-clear>script');
    for (let index = 0; index < SCRIPT_LIST.length; index++) {
        const SCRIPT = SCRIPT_LIST[index];
        const RAW_SCRIPT = SCRIPT.innerHTML;
        if (RAW_SCRIPT.length > 1000) {
            return JSON.parse(RAW_SCRIPT.substring(RAW_SCRIPT.indexOf('TShop.Setup(') + 'TShop.Setup('.length, RAW_SCRIPT.lastIndexOf('"') + 2)).valItemInfo.skuMap;
        };
    };
}