const items = document.querySelectorAll(".item"); // Listeyi al
console.log("Number of categories:", items.length);     // Kategori sayısını yaz

// Döngüyü burada yapıyoruz
for (let i = 0; i < items.length; i++) {
    const heading = items[i].querySelector("h2");
    const elements = items[i].querySelectorAll("ul li");

    console.log("Category:", heading.innerHTML);
    console.log("Elements:", elements.length);
}