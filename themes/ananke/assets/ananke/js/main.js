function changeFontSize(action) {
    const content = document.querySelector('.content');
    let currentFontSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
  
    if (action === 'increase') {
      currentFontSize += 2;
    } else if (action === 'decrease') {
      currentFontSize -= 2;
    }
  
    content.style.fontSize = currentFontSize + 'px';
  }