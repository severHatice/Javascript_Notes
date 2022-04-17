const data = [
    {id:1, name:"Ayşe", puan:80},
    {id:2, name:"Ali", puan:50},
    {id:3, name:"Veli", puan:30},
    {id:4, name:"Fatma", puan:20},
    {id:5, name:"Aslı", puan:55}
];

const selectedPeople = [];//global dizi.veliye tiklayinca 3. id backend e gondermem lazim buradaki dizinin icine koyabilmeliyim-secilen datalar burada


// Data nın tabloya satır olarak eklenmesi
let strRow = "";
for(let item of data){// data-id kendimize ozel custon attribute olusturuyoruz data-....
    strRow += `
        <tr data-id="${item.id}">
            <td>${item.name}</td>
            <td>${item.puan}</td>
            <td><button class="btn btn-danger btn-delete">Sil</button></td>
        </tr>
    `;
}
document.querySelector('#tblPoint tbody').innerHTML = strRow;


// satırlara tıklandığında seçili hale getirdik

document.querySelectorAll('#tblPoint tbody tr').forEach(item=> {//qsAll a addeventlistener yapamiyoruz qs yapabiliriz bundan dolayi buraya tek tek aldik .querySelectorAll('#tblPoint tbody tr').[0] desekdik sadece 0. element i sectigi icin yine addeventlistener olurdu.foreach te calisir her seferinde elemanlari tek tek aliyor
    item.addEventListener('click', (e)=> {
        const tr = e.target.closest("tr");//nereye tiklanirsa o 20 ise 20 fatma ise fatma ama closest(tr yapinca tum satir)
        tr.classList.toggle("table-success");//yesil bir renk veriyor

        let id = tr.getAttribute("data-id");//tr uzerine tiklananin id sini al
        
        if(selectedPeople.includes(id)){
            let index = selectedPeople.indexOf(id);
            selectedPeople.splice(index, 1);//tiklanandan sonra bir eleman sil
        }
        else{
            selectedPeople.push(id);
        }


        console.log(selectedPeople);

    });
});