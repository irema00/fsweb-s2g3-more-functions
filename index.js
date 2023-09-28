// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  if (!path) {
    return "";
  } else return path.split(/[\\/]/).pop();
}

console.log("Görev 1 ", dosyaAdiniBul("C:\\git\\materials\\jsFun.png"));
console.log(
  "Görev 1 ",
  dosyaAdiniBul(
    "C:\\Users\\irem\\Desktop\\Personal\\wedding\\FOTOĞRAFLAR 3\\AY4I4831.JPG"
  )
);

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(sayilar) {
  if (sayilar.length === 0 || sayilar === NaN) {
    return null;
  } else {
    const toplam = sayilar.reduce((top, sayi) => top + sayi, 0);
    const ortalama = toplam / sayilar.length;
    const yuvarlakOrtalamaSayi = Math.floor(Math.round(ortalama));
    return yuvarlakOrtalamaSayi;
  }
}

console.log("Görev 1 ", ortalamaBul([]));
console.log("Görev 2 ", ortalamaBul([4]));
console.log("Görev 2 ", ortalamaBul([50, -26, 153, 7]));
console.log(
  "Görev 2 ",
  ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5])
);

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayilar, ortalamaBul) {
  if (sayilar.length === 0 || sayilar === NaN) {
    return null;
  } else if (sayilar.length === 1) {
    return sayilar;
  } else {
    const ortalama = ortalamaBul(sayilar);
    const ortalamadanBuyukler = sayilar.filter((sayi) => sayi > ortalama);

    return ortalamadanBuyukler;
  }
}

console.log("Görev 3 ", ortalamadanBuyukleriBul([], ortalamaBul));
console.log("Görev 3 ", ortalamadanBuyukleriBul([4], ortalamaBul));
console.log(
  "Görev 3 ",
  ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul)
);
console.log(
  "Görev 3 ",
  ortalamadanBuyukleriBul(
    [109, 216, 288, 143, 71, 185, -278, 194, 5],
    ortalamaBul
  )
);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
