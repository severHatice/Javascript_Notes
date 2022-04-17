
function hesapla(){
    let sayi = document.querySelector("#txtSayi").value;

// if(!sayi){//undefined 0 null nan gibi degerlere false ise sahipse bu sayi degil alttaki calismaz
//     alert("lutfen poz sa giriniz")
// }

    if(!sayi || isNaN(sayi) || sayi<=1){//isNaN()js hazir kodlarindan eger girilen deger number degilse anlaminda//genelden baslayarak siralama yaptik// bos biraksan yada string deger versen null desen true dur ve "lutfen 1'den ...."
        alert("Lütfen 1'den büyük bir sayı giriniz");
        return;
    }


    let bolunenler = 0;

    for(let i=2; i<sayi; i++){
        if(sayi % i == 0){
            bolunenler++;
        }
    }

    let mesaj = "Bu sayı asal";
    if(bolunenler>0){
        mesaj = `Bu sayı asal değil. Çünkü ${bolunenler+2} adet pozitif böleni var.`;
    }

    document.querySelector("#sonuc").innerHTML = mesaj;


}