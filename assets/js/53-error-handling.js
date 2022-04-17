//butonun type submit old icin//submit reset ve normal buton diye 3 cesidi var/submit ve resetin default degeri var/yani girilen verileri alip backend e gondermeye calisir

document.querySelector("#frmLogin").addEventListener("submit", (e)=>{
    e.preventDefault();//bunu engellemeye calismak,backende gondermesini

    try {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if(!isEmail(email)) throw("Geçerli bir eposta giriniz"); 
        if(!password) throw("Şifre boş geçilemez"); 



        document.querySelector("#frmLogin").submit();



    } catch (error) {
       alert(error);
    }
});



function isEmail(email){//email kontrolu regexr sablonlari
    let reg = /\S+@\S+\.\S{2,5}$/;//iki / arasina konur iflerle uzun uzun kontrol etmektense
    return reg.test(email);

}