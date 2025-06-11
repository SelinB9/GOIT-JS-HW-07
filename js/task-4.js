const form = document.querySelector('form.login-form');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
   
    const elements = form.elements;//formun içindeki tüm alanları alır
    
    const data = { //boş bir js nesnesi oluşturduk veriler depolansın diye
        email: undefined,
        password: undefined
    };
    data.email = elements.email.value.trim();
    data.password = elements.password.value.trim();

    //const email = elements.email.value.trim();
   //const password = elements.password.value.trim();

    if (data.email === ""|| data.sifre === "") {
        alert('All form fields must be filled in');
        return;
    }
    console.log(data);
    form.reset();   
});
