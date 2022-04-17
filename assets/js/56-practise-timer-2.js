document.querySelector("#panel").addEventListener('mouseenter', (e)=>{//mouseover fare uzerindeyken surekli calisir mouseenter daha mantikli
    e.target.classList.add("opened");//panel
});

document.querySelector("#panel").addEventListener('mouseleave', (e)=>{

    setTimeout(()=>{
        e.target.classList.remove("opened");
    }, 1000);//panel kapanirken biraz beklesin
});