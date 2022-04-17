import {countries} from "../data/countries.js";//import ettigimiz yere de export ve ayni ismi vermek lazim



let options = "";
for(let country of countries){

    console.log(country.name.common);

    options += `<option value="${country.cca2}">${country.name.common}</option>`;
}

document.querySelector("#ddlCountries").innerHTML = options;
//burada data daki tum ulkeleri tek tek country e yukluyor daha sonra options a atiyor options a attigi ulkeleri de ddlCountries in icine koyuyor