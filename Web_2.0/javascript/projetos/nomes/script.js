let nomes = [
    "Rafael",
    "Ricardo",
    "Joao",
    "Carlos",
    "Carla",
    "Marcelo",

]


function carregarNomes(){
    let item = '';

    for(i in nomes){
        let nome = nomes[i];
        item += `<li class="list-group-item">${nome}</li>`
        document.getElementById('lista').innerHTML = item
    }
}


function buscarNome(){

    let busca = document.getElementById('nomeCampo').value

    let item2 = '';
    
   for(let i =0; i <= nomes.length; i++){
       let name = nomes[i]
            if(busca == name){
            
                item2 = `<li class="list-group-item">${name}</li>`
                document.getElementById('lista').innerHTML = item2

            }else{
                alert(`O nome informado não esta na lista`)
                i = nomes.length + 1;
               
            }
   }
}

function adicionarNome(){
    let add = document.getElementById('nomeCampo').value;

    tamanho = nomes.length;

    nomes[tamanho] = add;

    window.alert(`Nome informado com sucesso ${tamanho} `)

   
}