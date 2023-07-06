let mesaj = 
`
Migros'a hoşgeldiniz
money kartınız varmı ?
1 evet
2 hayır
`;



let urunler = [
    {
        urunAdi:"süt",
        fiyat : 15
    },
    {
        urunAdi:"ekmek",
        fiyat:5
    },
    {
        urunAdi:"tavuk",
        fiyat: 160
        
    }
]

let sonuc = confirm(mesaj)
let odenecekTutar;
if(sonuc){

    let isim = prompt("Adınızı Giriniz");
    let soyisim = prompt("Soyisminizi giriniz");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar = musteri.hesapla();

    alert(`
    Müsteri Bİlgileri: ${isim} ${soyisim}
    Ödenecek Tutar: ${odenecekTutar}
    `);


}else{
const musteri = new Musteri(null,null,false,urunler)
odenecekTutar = musteri.hesapla();
alert(`Odenecek tutar: ${odenecekTutar}`)
}