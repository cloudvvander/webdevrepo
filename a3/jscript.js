function createRhombus(size, colorEven, colorOdd, symbol) {
    let rhombus = '';
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size - i; j++) {
        rhombus += `<span style="color: ${i % 2 === 0 ? colorEven : colorOdd};">${symbol}</span>`;
      }
      rhombus += '<br>';
    }
    for (let i = size - 2; i >= 0; i--) {
      for (let j = 0; j < size - i; j++) {
        rhombus += `<span style="color: ${i % 2 === 0 ? colorEven : colorOdd};">${symbol}</span>`;
      }
      rhombus += '<br>';
    }
    document.getElementById('rhombus').innerHTML = rhombus;
  }
