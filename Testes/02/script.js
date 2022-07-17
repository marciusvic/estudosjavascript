//var a = window.document.getElementById('area');

function somar(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    //a.innerText = 'A soma entre ${n1} e ${n2} é igual ${s}';
    area.innerHTML =  `A soma entre ${n1} e ${n2} é igual ${s}`;
}