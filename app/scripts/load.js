document.addEventListener("DOMContentLoaded", () => {
    // For Sakai LMS
    p1 = document.querySelector('p.samigo-input-group-text');
    p2 = document.querySelector('p.input-group-addon');
    p = p1 ? p1 : p2;
    p = p ? p.textContent : '';

    browser.runtime.sendMessage({
        action: 'SMI_load',
        value:
            [window.location.href, p],
    });

    // restore input values
    document.querySelectorAll('input').forEach((input) => {
        url = window.location.href;
        if (input.type !== 'text') return;
        // replace for Sakai LMS
        browser.runtime.sendMessage({
            action: 'SMI_read',
            value:
                encodeURI(url.replace('beginTakingAssessment', 'deliverAssessment') + '|' + p + '|' + input.id),

        }, (response) => {
            if (response !== null) {
                input.value = response;
            }
        });
    });
});
