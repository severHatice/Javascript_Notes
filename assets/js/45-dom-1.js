/*dom =document object model= dokumanlarin stillerin yapisiinin iceriginijn erilsilmesini ve guncellenmesini saglayan bir nesne modelidir */

/*objects=html elemanlari
properties=html elemanlarinin ozellikleri=attribute
methods=html elemanlarina erismeyi saglayan metodlar
events=html elemanlari uzerinde gerceklesen olaylar

tarayici kullanici sayfaya girdiginde islemlerin gerceklestirme sirasina gore agac yapisi olusturur buna dom yapisi deriz*/

const data = [
    {id:1, name:"Ayşe", puan:80},
    {id:2, name:"Ali", puan:50},
    {id:3, name:"Veli", puan:30},
    {id:4, name:"Fatma", puan:20},
    {id:5, name:"Aslı", puan:55}
];


// Data nın tabloya satır olarak eklenmesi********
let strRow = "";
for(let item of data){//***************************
    strRow += `
        <tr>
            <td>${item.name}</td>
            <td>${item.puan}</td>
            <td><button class="btn btn-primary btn-delete">Sil</button></td>
        </tr>
    `;//butonu burada ekledik tbody de tek tek buton yazmamak icin-burada btn class verdik id vermedik.id degeri tek olmasi gerektigi icin for dongusunde hepsine ayni id verirdi
}// <td>${item.name >50? `table-warning` : ``}"</td>   //35.satirdaki islemleri istesek boylede hallederdik ternar ile
document.querySelector('#tblPoint tbody').innerHTML = strRow;//olusturulan satirlar dongude body e atildi



// Puanı 50 den küçük olanlar için satır rengini değiştiriyoruz. 
const rows = document.querySelectorAll("#tblPoint tbody tr");//qsAll bir cok element getirecek
for(let row of rows){
    const puan = row.querySelector("td:nth-child(2)").innerText;
    if(puan<50){
        row.classList.add("table-warning");
    }
}


// butonlara click eventi eklendi
document.querySelectorAll(".btn-delete").forEach(btn=>{
    btn.addEventListener("click", (e)=>{//tiklanan elemanin icindeki ayse 50 vs tum element gibi
        
        const isim = e.target.closest("tr").querySelector/*e.target 26.satiri veriyor butona ulasiyouz ve en yakin tr ye gidiyoruz uste dogru*/("td:first-child").innerText;
        confirm(`${isim} isimli kaydı silmek istediğinizden emin misiniz?`);
    });
})