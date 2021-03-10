(function waitForDataReady() {
    if (g_config.sibRequest) {
        document.getElementById("J_tbExtra").innerHTML += '<div id="sendDataTrigger" onclick="sendDataToSheet()" style="width:200px;text-align:center;padding:10px;background:#f44408;color:white;cursor:pointer;">Send This Item To Sheet</div>';
    } else setTimeout(waitForDataReady, 5E3);
})();

async function sendDataToSheet() {
    document.getElementById('sendDataTrigger').innerHTML = '<img src="chrome-extension://cooallhhldemmfihmjgeicfbncelhfog/img/loading.svg">';
    try {
        const PAY_LOAD = prepareProductItem();
        await fetch('https://script.google.com/macros/s/AKfycbyMgBYIEkjqgWCTS_v35feyNBC0JtBROS8dQsEuDrptg4yE1Lqmuykrjw/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(PAY_LOAD)
        });
        document.getElementById('sendDataTrigger').innerHTML = "Data Sent!";
        document.getElementById('sendDataTrigger').removeAttribute('onclick');
    } catch (error) {
        console.log(error);
        document.getElementById('sendDataTrigger').innerHTML = "Some Error Occurred";
    }
}

function prepareProductItem() {
    let productItem = {};
    productItem.imageList = getImageSrcList();
    productItem.variation = getVaration(g_config.sibRequest);

    return productItem
}

function getVaration(productObject) {
    const DATA = productObject.data;
    const SKU = DATA.dynStock.sku;
    const SKU_KEY_NAMES = Object.keys(SKU);

    let variation = [];

    for (let index = 0; index < SKU_KEY_NAMES.length; index++) {
        let productVariationUnit = {};
        const skuUnit = SKU_KEY_NAMES[index];
        const key1 = skuUnit.split(';')[1];
        const key2 = skuUnit.split(';')[2];

        productVariationUnit.sku = skuUnit;
        productVariationUnit.variable1Name = getPropertyList()[0].type;
        productVariationUnit.variable1Value = getPropertyList()[0].dataList.filter(e => e.value == key1)[0].text;
        productVariationUnit.variable2Name = getPropertyList()[1].type;
        productVariationUnit.variable2Value = getPropertyList()[1].dataList.filter(e => e.value == key2)[0].text;
        productVariationUnit.originalPrice = DATA.originalPrice[skuUnit].price;
        productVariationUnit.promotionPrice = DATA.promotion.promoData[skuUnit][0].price;

        variation.push(productVariationUnit);
    }
    return variation
}

function getPropertyList() {
    let propertyList = [];
    const PROPERTY_UL_LIST = document.querySelectorAll("#J_isku>div>dl>dd>ul");

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
            }

            property.dataList.push(dataValueMap);
        }
        propertyList.push(property);
    }
    return propertyList
}

function getImageSrcList() {
    const IMAGE_NODE_LIST = document.querySelectorAll('.tb-pic.tb-s50>a>img');
    const SRC_LIST = [];

    for (let index = 0; index < IMAGE_NODE_LIST.length; index++) {
        const SRC = IMAGE_NODE_LIST[index].src.replace(/_\d+x\d+\.jpg.*/, '');
        SRC_LIST.push(SRC);
    }
    return SRC_LIST;
}