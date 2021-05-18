function calcular(){

    // validar campos

    let precoA = document.getElementById("alcool").value;
    let precoG = document.getElementById("gasolina").value;

    if(precoA!= ""){
        if(precoG != ""){

            let resultado = precoA/precoG

            if(resultado >= 0.7){
                document.getElementById("resultado").innerHTML = "Melhor utilizar a gasolina"
            }else{

                document.getElementById("resultado").innerHTML = "melhor utilizar o alcool"
                
            }

        }else{
            alert("preencha o preço da gasolina")
        }

    }else{
        alert("Preencha o campo do alcool")
    }


  }