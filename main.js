window.onload = initAll;

function initAll() {
document.getElementById("reload").onclick = outraCartela;
    novaCartela();

}

function novaCartela() {
    for (let i = 0; i < 24; i++) {
        coloqueNum(i)
    }
}

var velhaCartela = new Array(0, 0, 0, 0, 0,             //b
                             1, 1, 1, 1, 1,             //i
                             2, 2, 2, 2,                //n
                             3, 3, 3, 3, 3,             //
                             4, 4, 4, 4, 4);           

var uNumeros = new Array(76);

function coloqueNum(thisNum) {
    let vNum = "num" + thisNum;
    let colunas = velhaCartela[thisNum] * 15;

    let newNum;
    do {
        newNum = colunas + getNewNum() + 1;
    } while (uNumeros[newNum]);
    
     uNumeros[newNum] = true
    document.getElementById(vNum).innerHTML = newNum
    document.getElementById(vNum).className = ""
    document.getElementById(vNum).onmousedown = trocaCor;
}

function getNewNum() {
    return Math.floor(Math.random() * 15);
}

function outraCartela() {
    for (let i = 1; i < uNumeros.length; i++) {
        uNumeros[i] = false;
    }
    novaCartela();
    return false;
}

function trocaCor(evt) {
    let thisNum; // Declare a variável aqui para torná-la acessível em todo o escopo da função

    if (evt) {
        thisNum = evt.target;
    }

    if (thisNum.className == "") {
        thisNum.className = "trocaBG"; // Use = para atribuição, não ==
    } else {
        thisNum.className = "";
    }
}
