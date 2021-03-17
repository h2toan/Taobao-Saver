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

function prepareProductItem(SKU_MAP) {
    let productItem = {
        itemCategoryId: document.getElementById('itemCategoryId').value,
        itemName: document.getElementById('itemName').value,
        itemDescription: document.getElementById('itemDescription').value,
        itemSku: getItemId(),
        imageList: getImageSrcList(),
        variation: getVaration(SKU_MAP)
    };
    return productItem;
}

function getVaration(SKU_MAP, ORIGINAL_PRICE, PROMOTION_PRICE) {
    const DATA = g_config.sibRequest.data;
    const SKU_MAP = DATA.dynStock.sku;
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
        productVariationUnit.price = (PROMOTION_PRICE[skuUnit] !== undefined) ? PROMOTION_PRICE[skuUnit][0].price : ORIGINAL_PRICE[skuUnit].price;

        variation.push(productVariationUnit);
    };
    return variation;
}

function getPropertyList() {
    let propertyList = [];
    const PROPERTY_UL_LIST = document.querySelectorAll("ul.J_TSaleProp");

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

function getItemId() {
    return location.search.match(/(?:id=)(\d+)/)[1];
}

function wordCount(id) {
    return document.getElementById(`${id}WordCount`).innerText = document.getElementById(`${id}`).value.length;
}