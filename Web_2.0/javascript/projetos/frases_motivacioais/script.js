function gerarFrase(){

    const frases = [
        "Se você quer ser bem-sucedido precisa de dedicação total, buscar seu último limite e dar o melhor de si mesmo",
        "Nenhum obstáculo será grande se a sua vontade de vencer for maior",
        "Só existem dois dias do ano em que você não pode fazer nada: um se chama ontem e outro amanhã",
        "Ouse, arrisque, não desista jamais e saiba valorizar quem te ama, esses sim merecem seu respeito. Quanto ao resto, bom, ninguém nunca precisou de restos para ser feliz",
        "No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim",
        "A paciência é um elemento fundamental do sucesso",
        "O sucesso não tem a ver com o lugar de onde você veio, e sim com a confiança que você tem e o esforço que você está disposto a investir",
        "Você pode encarar um erro como uma besteira a ser esquecida, ou como um resultado que aponta uma nova direção",
        "Eu posso aceitar a falha, todos falham em alguma coisa. Mas eu não posso aceitar não tentar",
        "É preciso ser protagonista. Não dá para ficar só ouvindo a banda passar, temos de ser parte da banda"

    ];

    const aleatorio = Math.floor(Math.random()*10);

    const frase = frases[aleatorio];

    document.getElementById("frase").innerHTML = frase  




}

