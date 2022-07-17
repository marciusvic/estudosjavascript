var a =  window.document.getElementById('area');

a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
    a.innerText = 'Clicou';
    a.style.background = 'red';
}
function entrar(){
    a.innerText = 'Entrou';
}
function sair(){
    a.innerText = 'Coloque o Mouse aqui';
    a.style.background = 'rgb(40, 168, 40)';
}