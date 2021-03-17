import SurfAndSave from './core.js';
window.getJSONP = (e) => {
    const SKU_MAP = getSkuMap();
    const PROMOTION_PRICE = {};
    for (const key in SKU_MAP) {
        PROMOTION_PRICE[key] = e.defaultModel.itemPriceResultDO.priceInfo[SKU_MAP[key].skuId].promotionList;
    };
    const TMALL = new SurfAndSave(SKU_MAP, SKU_MAP, PROMOTION_PRICE);
    return TMALL.init();
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

(function getScript() {
    let script = document.createElement("script");
    script.src = `//mdskip.taobao.com/core/initItemDetail.htm?isUseInventoryCenter=false&cartEnable=true&service3C=false&isApparel=true&isSecKill=false&tmallBuySupport=true&isAreaSell=false&tryBeforeBuy=false&offlineShop=false&itemId=${location.search.match(/(?:id=)(\d+)/)[1]}&showShopProm=false&isPurchaseMallPage=false&itemGmtModified=1615886157000&isRegionLevel=false&household=false&sellerPreview=false&queryMemberRight=true&addressLevel=2&isForbidBuyItem=false&callback=getJSONP`;
    return document.getElementsByTagName("head")[0].appendChild(script);
})();