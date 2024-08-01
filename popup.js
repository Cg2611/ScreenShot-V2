document.getElementById('screenshotBtn').addEventListener('click', () => {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
      fetch(dataUrl)
        .then(res => res.blob())
        .then(blob => {
          const item = new ClipboardItem({ 'image/png': blob });
          navigator.clipboard.write([item]).then(() => {
            alert('');
          }).catch(err => {
            console.error('Could not copy image to clipboard', err);
          });
        });
    });
  });
  