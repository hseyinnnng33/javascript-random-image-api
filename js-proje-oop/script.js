// const Car = function(marka, speed){
//     this.marka = marka;
//     this.speed = speed;
// }

// Car.prototype.hiz = function(){
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.hizAzalt = function(){
//     this.speed -= 10;
//     console.log(this.speed);
// }

// const bmw = new Car("BMW", 150);
// const mercedes = new Car("Mercedes", 200);

// bmw.hiz();
// bmw.hizAzalt();
// bmw.hiz();

// class Person{
//     constructor(firstName, dogumyili){
//         this.firstName = firstName;
//         this.dogumyili = dogumyili;
//     }
//     yasHesapla(){
//         console.log(2040 - this.dogumyili);
//     }
// }

// const yeniKisi = new Person("First Name", 1900);
// yeniKisi.yasHesapla()


//CLASS KULLANIMI

// class Car {
//  constructor(marka, speed){
//     this.marka = marka;
//     this.speed = speed;
// }

// // class kullanırken prototype ı içeride tanımlıyoruz fonksiyonda dışarıda

// hiz(){
//     this.speed += 10;
//     console.log(this.speed);
// }

// hizAzalt(){
//     this.speed -= 10;
//     console.log(this.speed);
// }
// }

// const bmw = new Car("BMW", 150);
// const mercedes = new Car("Mercedes", 200);
// bmw.hiz()
// mercedes.hizAzalt()

// class KisiOlustur{
//     constructor(ad, soyad, yas){
//         this.ad = ad;
//         this.soyad = soyad;
//         this.yas = yas;
//         this.suanYas = this.yasHesapla();
//     }
//     yasHesapla(){
//         return 2050 - this.yas;
//     } 
// }

// const birinciKisi = new KisiOlustur("Birinci", "Kişi", 1990);
// const ikinciKisi = new KisiOlustur("İkinci", "Kişi", 1950);
// const ucuncuKisi = new KisiOlustur("Üçüncü", "Kişi", 1980);

// console.log(birinciKisi.yasHesapla())
// console.log(ikinciKisi.yasHesapla())
// console.log(ucuncuKisi.yasHesapla())

// const pText = document.querySelector(".ptext");

// pText.innerHTML = birinciKisi.yasHesapla();

// class Hesapla{
//     constructor(){
//         this.width = 10;
//         this.height = 20;
//         this.color = "Orange";
//     }
// }

// const newPerson = new Hesapla();
// console.log(newPerson)

// class Person{
//    constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//    }
//    personPrototype1(){
//         console.log(`${this.firstname} return ${this.lastname}`);
//    }
// }

// class YeniPerson extends Person{
//     personPrototype1(){
//         super.personPrototype1()
//     }
// }

// const kisi1 = new Person("İlk", "İkinci");
// kisi1.personPrototype1();

// const yeni = new YeniPerson("Yeni Kisi", "Yeni kisi İki");
// yeni.personPrototype1();

// const textP = document.querySelector(".ptext");

// const sozler = [
//     {
//         soz: "Bilgisayarlar çok iyi",
//         soyleyen: "Hüseyin"
//     },
//     {
//         soz: "Bilgisayarlar çok çok iyi",
//         soyleyen: "Hüseyin Aydın"
//     },
//     {
//         soz: "Bilgisayarlar çok çok çok iyi",
//         soyleyen: "Hüseyin Aydın Aydın"
//     }
// ]

// class Kisi{
//     constructor(soz, soyleyen){
//         this.soz = soz;
//         this.soyleyen = soyleyen;
//     }
// }

// let index = 0;

// textP.addEventListener("click" ,function(){
//     sozler.forEach((item)=>{  
//         if(index != sozler.length){
//             index++;
//             const olustur = new Kisi(item.soz, item.soyleyen);
//             console.log(olustur)
//         }
//         else{
//             console.log("Bitti")
//         }
//     })
// })

// class Diziler{
//     constructor(ad, paraBirimi, pin){
//         this.ad = ad;
//         this.paraBirimi = paraBirimi;
//         this.pin = pin;
//         this.arr = [];
//     }
//     parayatir(val){
//         this.arr.push(val);
//     }
//     paracek(val1){
//         this.parayatir(-val1)
//     }
// }

// const yeni = new Diziler("Ford", "TR", 1111);

// yeni.parayatir(100)
// yeni.paracek(100)

// console.log(yeni)

// navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position)
// }
// )

// const genel = document.querySelector(".genel");

// const bir = function(bir){

// const apiCekme = new XMLHttpRequest();
// apiCekme.open('GET',`https://restcountries.com/v3.1/name/${bir}`);
// apiCekme.send()

// apiCekme.addEventListener("load", function(){
//      const [data] = JSON.parse(this.responseText);
//      console.log(data);
//      const html = `
//      <div class="bilgiler">
//         <img src="${data.flags.png}" class="img">
//          <h2 class="ulke-ad">${data.name.common}</h2>
//          <p class="nufus">${data.population}</p>
//          <p class="baskent">${data.capital}</p>
//      </div>`;
//      genel.insertAdjacentHTML("beforeend", html);
// });
// }

// bir("usa");
// bir("turkey");

// const bircok = function(ulke){

// function ilkApi(url){
//     fetch(url)
//     .then((item)=> item.json())
//     .then((item1)=> console.log(item1[0].capital))
// }
// ilkApi(`https://restcountries.com/v3.1/name/${ulke}`);
// }

// bircok("turkey");
// bircok("usa");

const genel = document.querySelector(".genel");

const bir = function(){
    fetch("https://picsum.photos/200/300")
    .then((item)=> item.blob())
    .then((data)=> {
        const imgData = URL.createObjectURL(data);
        genel.insertAdjacentHTML("afterbegin", `<img src="${imgData}" class="img iki">`)
    }
)
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", bir);

// fetch("https://picsum.photos/200/300")
