var listaFilme = ["filmes/homem_de_ferro.jpg", "filmes/ultimato.jpg", "filmes/homem_aranha_svpc.jpg"];

function addFilme(){
    var  linkPoster =  document.getElementById("link").value;
    listaFilme.push(linkPoster);
    for(var i = 0; i < listaFilme.length; i++){
        document.write("<img src=" + listaFilme[i] + ">" );
    }
}

for(var i = 0; i < listaFilme.length; i++){
    document.write("<img src=" + listaFilme[i] + ">" );
}








/*var listaFilme = ["Homem de Ferro", "Vingadores: Ultimato", "Homem-Aranha: Sem volta para casa"];
listaFilme.push("Dr. Estranho")
listaFilme.push("Dr. Estranho: Multiverso da Loucura")

https://portalfamosos.com.br/wp-content/uploads/2022/02/1-43-e1644809957290.png

for (var i = 0; i < listaFilme.length; i++){
    document.write("<p>" + listaFilme[i] + "</p>");
}
*/