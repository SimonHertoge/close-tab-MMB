window.addEventListener('mousedown', function(e) {
    if (e.which == 2) {
        e.preventDefault();
        e.stopPropagation();
    }
}, true);

window.addEventListener('mouseup', function(e) {
    if (e.which == 2 && e.target.tagName.toLowerCase() != "a") {
        var el = e.target;
        while (el) {
            if (el.nodeType == 1 && el.tagName.toLowerCase() == "a")
                return;
            el = el.parentNode;
        }
        e.preventDefault();
        chrome.runtime.sendMessage({action: 'closeTab'});
    }
});