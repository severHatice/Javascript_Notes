const data = [
    {id:1, name:"Ayşe", puan:80},
    {id:2, name:"Ali", puan:50},
    {id:3, name:"Veli", puan:30},
    {id:4, name:"Fatma", puan:20},
    {id:5, name:"Aslı", puan:55}
];

const selectedPeople = [];


// Data nın tabloya satır olarak eklenmesi
let strRow = "";
for(let item of data){
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

document.querySelectorAll('#tblPoint tbody tr').forEach(item=> {//satirlarla alakali eventler tanimlanmis
    item.addEventListener('click', (e)=> {
        const tr = e.target.closest("tr");
        tr.classList.toggle("table-success");

        let id = tr.getAttribute("data-id");
        
        if(selectedPeople.includes(id)){
            let index = selectedPeople.indexOf(id);
            selectedPeople.splice(index, 1);
        }
        else{
            selectedPeople.push(id);
        }


        console.log(selectedPeople);

    });
});

document.querySelectorAll('#tblPoint tbody .btn-delete').forEach(item=>{//butun butonlari tanimladiim icin qsAll oluyor
    item.addEventListener('click', (e)=>{
        alert("jk")
        e.stopPropagation();//devam etmesin burda bitdin metodu...butona tiklandiktan sonra bulundugu satiri secmesi durur
        
        if(!confirm("Emin misin")) return;//eger confirm false ise return yapsin asagi inip silmesin true ise asagi insin silsin

        e.target.closest("tr").remove();
        
        
    });
});