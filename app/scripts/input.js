document.addEventListener('input', (event) => {
    const target = event.target;

    browser.runtime.sendMessage({
        action: 'SMI_debug',
        value:
            [target.tagName, target.type],
    });

    if (target.tagName === 'INPUT' && target.type === 'text') {
        browser.runtime.sendMessage({
            action: 'SMI_inputChanged',
            value:
                [target.id, target.value],
        });
    }
});