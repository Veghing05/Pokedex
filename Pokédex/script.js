// criando uma variável para armazenar o elemento pikachu
const pikachu = document.getElementById("pikachu");

// criando uma variável para armazenar o elemento charmander
const charmander = document.getElementById("charmander");

// criando uma variável para armazenar os elementos card
const cards = document.getElementsByClassName("card");

// criando uma função para mover o pikachu para a direita
function movePikachuRight() {
    // obtendo a posição atual do pikachu
    let position = pikachu.offsetLeft;
    // incrementando a posição em 10 pixels
    position += 10;
    // atualizando a posição do pikachu
    pikachu.style.left = position + "px";
    // verificando se o pikachu chegou no final da cena
    if (position >= window.innerWidth - pikachu.width) {
        // invertendo a direção do pikachu
        pikachu.style.transform = "scaleX(1)";
        // chamando a função para mover o pikachu para a esquerda
        movePikachuLeft();
    } else {
        // chamando a função novamente após 50 milissegundos
        setTimeout(movePikachuRight, 50);
    }
}

// criando uma função para mover o pikachu para a esquerda
function movePikachuLeft() {
    // obtendo a posição atual do pikachu
    let position = pikachu.offsetLeft;
    // decrementando a posição em 10 pixels
    position -= 10;
    // atualizando a posição do pikachu
    pikachu.style.left = position + "px";
    // verificando se o pikachu chegou no início da cena
    if (position <= 0) {
        // invertendo a direção do pikachu
        pikachu.style.transform = "scaleX(-1)";
        // chamando a função para mover o pikachu para a direita
        movePikachuRight();
    } else {
        // chamando a função novamente após 50 milissegundos
        setTimeout(movePikachuLeft, 50);
    }
}

// criando uma função para mover o charmander para a esquerda
function moveCharmanderLeft() {
    // obtendo a posição atual do charmander
    let position = charmander.offsetLeft;
    // decrementando a posição em 10 pixels
    position -= 10;
    // atualizando a posição do charmander
    charmander.style.left = position + "px";
    // verificando se o charmander chegou no final da cena
    if (position <= 0) {
        // invertendo a direção do charmander
        charmander.style.transform = "scaleX(-1)";
        // chamando a função para mover o charmander para a direita
        moveCharmanderRight();
    } else {
        // chamando a função novamente após 50 milissegundos
        setTimeout(moveCharmanderLeft, 50);
    }
}

// criando uma função para mover o charmander para a direita
function moveCharmanderRight() {
    // obtendo a posição atual do charmander
    let position = charmander.offsetLeft;
    // incrementando a posição em 10 pixels
    position += 10;
    // atualizando a posição do charmander
    charmander.style.left = position + "px";
    // verificando se o charmander chegou no início da cena
    if (position >= window.innerWidth - charmander.width) {
        // invertendo a direção do charmander.