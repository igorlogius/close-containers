/* global browser */

async function closeAllContainerTabs(tab) {
    const cookieStoreIds = (await browser.contextualIdentities.query({})).map( t => t.cookieStoreId );
	const tabIds = (await browser.tabs.query({ cookieStoreId: cookieStoreIds })).map( t => t.id) ;
    browser.tabs.remove(tabIds);
}

browser.browserAction.onClicked.addListener(closeAllContainerTabs);

