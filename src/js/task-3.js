const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => { //her tuşa bastığında çalışır.
    const trimValue = input.value.trim(); // boşlukları sler trim()
    
    if (trimValue === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = trimValue;
    }
    // output.textContent = trimValue === '' ? 'Anonymous' : trimValue;
});

//JS de KOŞULLU ÖPEROTÖR(ternary ?)     koşul ? değer1 : değer2