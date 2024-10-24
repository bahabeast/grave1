function showPrice() {
    let edx = parseFloat(document.getElementById("education").value);
    let moneyx = parseFloat(document.getElementById("wallet").value);
    let statusx = parseFloat(document.getElementById("caste").value);
    let bonus = statusx;
    let repminus =1;
    let agex = 1;
    if (document.getElementById("music").checked){
        bonus += 10;
    } 
    if (document.getElementById("cook").checked){
        bonus += 20;
    }
    if (document.getElementById("character").checked){
        bonus += 15;
    } 
    if (document.getElementById("sing").checked){
        bonus += 10;
    }
    let ageElems = document.getElementsByName('age');

    if (document.getElementById("parent").checked) {
        repminus *= 0.85;
    }  
    if (document.getElementById("character").checked){
        repminus *= 0.9;
    } 
    if (document.getElementById("general").checked){
        bonus -= 20;
    }
    for (let i = 0; i < ageElems.length; i++) {
        if (ageElems[i].checked) {
            agex = parseFloat(ageElems[i].value);
            break;
        }
    }
    let cost = (edx * moneyx  * agex*repminus*1)*100 + (bonus);
    document.getElementById("result").textContent = cost.toFixed(1);
}
