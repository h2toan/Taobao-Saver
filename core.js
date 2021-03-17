export default class SurfAndSave {
    constructor(SKU_MAP, ORIGINAL_PRICE, PROMOTION_PRICE) {
        this.SKU_MAP = SKU_MAP;
        this.ORIGINAL_PRICE = ORIGINAL_PRICE;
        this.PROMOTION_PRICE = PROMOTION_PRICE;
    }

    init() {
        const UI_BOX = `<div id="UI_BOX"><input id="itemCategoryId" class="autocomplete" placeholder="Category ID" name="itemCategoryId"><input id="itemName" placeholder="Item Name" name="itemname"><span id="itemNameWordCount">0</span><span>/120</span><textarea id="itemDescription" placeholder="Description" name="itemdescription"></textarea><span id="itemDescriptionWordCount" class="bottom-100px">0</span><span class="bottom-100px">/3000</span><div id="sendTrigger">Send This Item To Sheet</div></div>`;
        document.getElementById("detail").innerHTML += UI_BOX;
        document.getElementById("sendTrigger").onclick = () => {
            this.sendDataToSheet();
        };
        document.getElementById("itemName").onkeyup = () => {
            this.wordCount("itemName");
        };
        document.getElementById("itemDescription").onkeyup = () => {
            this.wordCount("itemDescription");
        };
    }

    async sendDataToSheet() {
        document.getElementById("sendTrigger").innerHTML = `<img src="chrome-extension://hibcabekedaenkbmoofanlnilfmlpkpc/img/loading.svg">`;
        try {
            const PAY_LOAD = this.prepareProductItem();
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

    prepareProductItem() {
        let productItem = {
            itemCategoryId: document.getElementById('itemCategoryId').value,
            itemName: document.getElementById('itemName').value,
            itemDescription: document.getElementById('itemDescription').value,
            itemSku: this.getItemId(),
            imageList: this.getImageSrcList(),
            variation: this.getVaration()
        };
        return productItem;
    }

    getVaration() {
        const SKU_KEY_NAMES = Object.keys(this.SKU_MAP);
        let variation = [];

        for (let index = 0; index < SKU_KEY_NAMES.length; index++) {
            let productVariationUnit = {};
            const skuUnit = SKU_KEY_NAMES[index];
            const key1 = skuUnit.split(';')[2];
            const key2 = skuUnit.split(';')[1];

            productVariationUnit.sku = skuUnit;
            productVariationUnit.variable1Name = this.getPropertyList()[0] ? this.getPropertyList()[0].type : "";
            productVariationUnit.variable1Value = this.getPropertyList()[0] ? this.getPropertyList()[0].dataList.filter(e => e.value == key1)[0].text : "";
            productVariationUnit.variable1ImageSrc = this.getPropertyList()[0].dataList[0].hasOwnProperty('imgSrc') ? this.getPropertyList()[0].dataList.filter(e => e.value == key1)[0].imgSrc : "";
            productVariationUnit.variable2Name = this.getPropertyList()[1] ? this.getPropertyList()[1].type : "";
            productVariationUnit.variable2Value = this.getPropertyList()[1] ? this.getPropertyList()[1].dataList.filter(e => e.value == key2)[0].text : "";
            productVariationUnit.stock = this.SKU_MAP[skuUnit].stock;
            productVariationUnit.price = (this.PROMOTION_PRICE[skuUnit] !== undefined) ? this.PROMOTION_PRICE[skuUnit][0].price : this.ORIGINAL_PRICE[skuUnit].price;

            variation.push(productVariationUnit);
        };
        return variation;
    }

    getPropertyList() {
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

    getImageSrcList() {
        const IMAGE_NODE_LIST = document.querySelectorAll('#J_UlThumb img');
        const SRC_LIST = [];

        for (let index = 0; index < IMAGE_NODE_LIST.length; index++) {
            const SRC = IMAGE_NODE_LIST[index].src.replace(/_\d+x\d+\.jpg.*/, '');
            SRC_LIST.push(SRC);
        };
        return SRC_LIST;
    }

    getItemId() {
        return location.search.match(/(?:id=)(\d+)/)[1];
    }

    wordCount(id) {
        return document.getElementById(`${id}WordCount`).innerText = document.getElementById(`${id}`).value.length;
    }
}