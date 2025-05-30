//!1.part
const items = document.querySelectorAll(".item"); // Listeyi al
console.log("Number of categories:", items.length);     // Kategori sayısını yaz

// Döngüyü burada yapıyoruz
for (let i = 0; i < items.length; i++) {
    const heading = items[i].querySelector("h2");
    const elements = items[i].querySelectorAll("ul li");

    console.log("Category:", heading.innerHTML);
    console.log("Elements:", elements.length);
}
//!2.part
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

images.forEach(({ url, alt }) => {   //images bir dizi url ve alt da nesneleri forEach metoduda her nesne için bir kes çalışmaya yarar. Yani her nesnenin url ve alt değerleri doğrudan değişkenlere atanır.
    const li = document.createElement('li'); // <li> </li> ögesi oluşturdum henüz DOM a eklemedim.
    const img = document.createElement('img'); // yeni bir img ögesi oluşturdum.
    img.src = url;
    img.alt = alt;
    img.width = 300;
    li.append(img); //img yi li nin içine yerleştirdik.
    gallery.append(li); //li yi gallery ögesine ekledik. her resim li ögesi içinde DOM a eklenmiş oldu.

});
/* oluşan HTML kodu bu şekilde olur üstteki kodu yazdıktan sonra
<ul class="gallery">
  <li><img src="..." alt="..." width="300"></li>
  <li><img src="..." alt="..." width="300"></li>
  <li><img src="..." alt="..." width="300"></li>
</ul>*/

//!3.part
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

//!4.part
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

//!5.part
const button = document.querySelector('button.change-color');
const colorNewNameSpan = document.querySelector('span.color');

button.addEventListener('click', () => {
    
    const newBackgroundColor = getRandomHexColor();

    document.body.style.backgroundColor = newBackgroundColor;//arka plan rengini değiştirir.
    colorNewNameSpan.textContent = newBackgroundColor;//renk kodunu span içine yazar
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}



//!6.part
const inputs = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
    boxes.innerHTML = '';//önceki kutuları siler
    let size = 30;

    for (let i = 0; i < amount; i++){
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        size += 10;
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box);
    }
}
createButton.addEventListener('click', () => {
  const amount = parseInt(inputs.value, 10);//gelen girdiyi integer sayısal bir değere çevirir
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
});

destroyButton.addEventListener('click', () => {
  boxes.innerHTML = '';
});













// const items = document.querySelectorAll(".item");
// console.log("Number of categories:", items.length);




/*for (i = 0; i < document.length; i++){
    const y = document.querySelectorAll("h2");
    const g = document.querySelectorAll("li");
    console.log("gategory:", y[i].innerHTML);
    console.log("element:", g[i].length);
}*/


// const y = items.querySelector("h2");
// const g = items.querySelectorAll("ul  li");
// const p = document.querySelectorAll("h2 >li");

// console.log(y);



// for (i = 0; i < items.length; i++){
//     console.log("gategory:", y[i].innerHTML);
//     console.log("element:", g[i].length);
   
    
// }



//console.log(g.length);

//const itemEl = document.querySelectorAll("h2"); 

//console.log(itemEl.values);

/*const itemEL = document.getElementsByClassName("item");

itemEL.forEach(itemEL => 
console.log("Category:", itemEL));





//items.forEach(itemNumber);



















/*const icerikElement = document.querySelector("#icerik");

const handleYazıBasKeydown = e => {
    icerikElement.append(e.key);
    console.log("key:", e.key)
    console.log("code:",e.code)
}

document.addEventListener("keydown",handleYazıBasKeydown)*/