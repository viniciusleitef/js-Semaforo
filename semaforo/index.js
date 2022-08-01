let luzVermelha = document.getElementById("vermelho");
let luzAmarela = document.getElementById("amarelo");
let luzVerde = document.getElementById("verde");
let luzLigada = false;

function ligarVermelha(){
    if(luzLigada == false){
        luzVermelha.style.background = "red";
        luzLigada = true;
        console.log(luzLigada);
    }else{
        luzAmarela.style.background = "rgba(255, 255, 0, 0.300)";
        luzVerde.style.background = "rgba(172, 255, 47, 0.300)";
        luzVermelha.style.background = "red";
        luzLigada = true;
    }
}

function ligarAmarela(){

    if(luzLigada == false){
        luzAmarela.style.background = "yellow";
        luzLigada = true;
    }else{
        luzVermelha.style.background = "rgba(255, 0, 0, 0.300)";
        luzVerde.style.background = "rgba(172, 255, 47, 0.300)";
        luzAmarela.style.background = "yellow";
        luzLigada = true;
    }
}

function ligarVerde(){
    if(luzLigada == false){
        luzVerde.style.background = "greenyellow";
        luzLigada = true;
    }else{
        luzAmarela.style.background = "rgba(255, 255, 0, 0.300)";
        luzVermelha.style.background = "rgba(255, 0, 0, 0.300)";
        luzVerde.style.background = "greenyellow";
        luzLigada = true;
    }
}

function desligarTodasLuzes(){
    luzVermelha.style.background = "rgba(255, 0, 0, 0.300)";
    luzAmarela.style.background = "rgba(255, 255, 0, 0.300)";
    luzVerde.style.background = "rgba(172, 255, 47, 0.300)";
}

async function ligarAutomatico(){
    desligarTodasLuzes();
    let i = 0;
    while(i == 0){
        luzVermelha.style.background = "red";
        await sleep(1000);
        luzVermelha.style.background = "rgba(255, 0, 0, 0.300)";
        luzAmarela.style.background = "yellow";
        await sleep(1000);
        luzAmarela.style.background = "rgba(255, 255, 0, 0.300)";
        luzVerde.style.background = "greenyellow";
        await sleep(1000);
        luzVerde.style.background = "rgba(172, 255, 47, 0.300)";
    }

}

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}