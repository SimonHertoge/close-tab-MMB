chrome.extension.onMessage.addListener(function (request, sender, callback) {
    if (request.action == "closeTab" && sender.tab)
        chrome.tabs.remove(sender.tab.id);
});