function load(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img-imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos}.`;
    if(hora >= 4 && hora <12){
        img.src = 'manha.jpg';
        document.body.style.background = '#FFC729';
    }
    else if(hora >=12 && hora < 18){
        img.src = 'tarde.jpg';
        document.body.style.background = '#DD8941';
    }
    else{
        img.src = 'noite.jpg';
        document.body.style.background = '#371776';
    }
}