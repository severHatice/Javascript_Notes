const apiUrl = "https://api.tvmaze.com";

const searchShow = (show, cb) => { 
    fetch(`${apiUrl}/search/shows?q=${show}`)
    .then(resp=> resp.json())
    .then(data=>{//backendden elde edilen veri geri donderiliyro
        cb(data);//callback burada datayi return ile degil callback ile gonderdik
    });
}

const getShow = (id,cb) => { 
    fetch(`${apiUrl}/shows/${id}`)
    .then(resp=>resp.json())
    .then(data=>{
        cb(data);
    })
}

const getEpisodes = (id,cb) => { 
    fetch(`${apiUrl}/shows/${id}/episodes`)
    .then(resp=>resp.json())
    .then(data=>{
        cb(data);
    })
}

export {searchShow, getShow, getEpisodes}

// fetch(url,settings)--settings(put post) ayarlamazsan default degeri get koyuyor//burada baglanti saglar
//.then(resp=resp.json())//baglantidan sonra bize cevap veriyor json sekile ceviriyoruz
//.then(data=>console.log(data))//burada kullanmaya basliyoruz
//.catch(err->console.log(err))