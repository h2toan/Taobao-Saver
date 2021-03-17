import SurfAndSave from './core.js';
(function waitForDataReady() {
    if (g_config.sibRequest) {
        const TAOBAO = new SurfAndSave(g_config.sibRequest.data.dynStock.sku, g_config.sibRequest.data.originalPrice, g_config.sibRequest.data.promotion.promoData);
        return TAOBAO.init();
    } else setTimeout(waitForDataReady, 5E3);
})();