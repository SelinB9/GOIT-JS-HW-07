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
