chrome.runtime.onInstalled.addListener(() => {
    console.log("✅ Smartstore Crawler is installed");
});

// 크롬 액션 클릭 시 새창 열기
// chrome.action.onClicked.addListener(() => {
//     chrome.windows.create({
//         url: chrome.runtime.getURL('index.html'),
//         type: 'popup',
//         width: 1200,
//         height: 800,
//     });
// });