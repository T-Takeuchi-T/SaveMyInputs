url = ""
p = ""

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'SMI_inputChanged') {
    console.log('SMI_inputChanged : ', message.value);
    // replace for Sakai LMS
    localStorage.setItem(encodeURI(url.replace('beginTakingAssessment', 'deliverAssessment') + '|' + p + '|' + message.value[0]), message.value[1]);
  }
  if (message.action === 'SMI_read') {
    sendResponse(localStorage.getItem(message.value));
  }
  if (message.action === 'SMI_load') {
    console.log('SMI_load : ', message.value);
    url = message.value[0]
    p = message.value[1]
  }
  if (message.action === 'SMI_debug') {
    console.log('SMI_debug : ', message.value);
  }
  return true;
});