//bagimli olmayan bir kutuphane buradan gerektikce import edecegiz
const sSortAsc = (arr) => { 
    return arr.sort((a,b)=> a.localeCompare(b));//string sirslsr
}

const sSortDesc = (arr) => { 
    return arr.sort((a,b)=> b.localeCompare(a));//tersten string siralar arrow func
}

const nSortAsc = (arr) => { 
    return arr.sort( (a,b) => a-b);//numeric siralama kucukten buyuge
}

const nSortDesc = (arr) => { 
    return arr.sort( (a,b) => b-a);
}

export {sSortAsc, sSortDesc, nSortAsc, nSortDesc}