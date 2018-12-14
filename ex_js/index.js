/*
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente caricato e analizzato");
});

 const mioArray = [
    {
        id: 1,
        name: 'Paolo'
    },
    {
        id: 2,
        name: 'Luigi'
    },
    {
        id: 3,
        name: 'Marco'
    }
]; */

/*for (attribute in mioArray) {
    console.log(`${attribute}`.toUpperCase() + `: ${mioArray[attribute]}`);
}*/

var cont = [
    {
        id: 0,
        nome: "Paolo"
    },
    {
        id: 1,
        nome: "Luigi"
    },
    {
        id: 2,
        nome: "Marco"
    }]

for (let i = 0; i < cont.lenght; i++) {
    let p = document.createElement("p");
    let nome = document.createTextNode(cont[i].nome);
    p.appendChild(nome);
    let identifier = document.createElement("span");
    let id = document.createTextNode(cont[i].id);
    identifier.appendChild(id)
    document.body.appenChild(identifier)
    document.body.appendChild(p)
}
console.log(cont)





