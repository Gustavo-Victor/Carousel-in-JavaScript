const containerImg = window.document.getElementById('containerImg');//div container
const vetorImg = window.document.querySelectorAll('#containerImg img');//vetor de imagens
const botoes = window.document.getElementsByClassName('botoes')[0];//pegar botoes
const vetorBotao = window.document.querySelectorAll('.botoes .botao');//todos os botões
vetorBotao[0].classList.add('active');//definir o botão 0 ativo no começo


//variável para passar carrossel (contador de imagens - vai de 0 a 4)
let idx = 0;

//função carrossel
function carrossel(){    
    vetorBotao.forEach(element => {//remover todos os estilos de cada botão
        element.classList.remove('active');
    });    

    idx ++;//contador das imagems recebe mais um
        
    if(idx == vetorImg.length){//se o contador for igual à quantidade máxima de imagens ele volta ao zero
        idx = 0;
    }

    containerImg.style.transform = `translateX(${-idx * 500}px)`;//fazer a transição do carrossel com um estilo  
    vetorBotao[idx].classList.add('active');//definir o botão ativo (mesmo número do contador de imagens)
    console.log(idx);//só printar no console pra ver o valor do contador de imagens a cada vez que a função é chamada
}

//chamar função carrossel definindo intervalo padrão de transição entre imagens 
setInterval(carrossel, 7000);

//função que define a estilização nos botões e transição rápida quando usuário clica
for(let contador = 0; contador < vetorBotao.length; contador++){
    vetorBotao[contador].addEventListener('click', () => {        
        vetorBotao.forEach(element => {//zera tudo - todos sem estilo
            element.classList.remove('active');
        });
        vetorBotao[contador].classList.add('active');//só o botão que clicou fica com estilo
        idx = contador-1;//pra mover no contador de imagens
        carrossel();//chamar carrossel sem intervalo pra trocar rápido quando clicar no botão
    });
}

//função flecha direita
function flechaDireita(){
    if(idx < vetorBotao.length){
        idx+=0;
        carrossel();
    }
}

//função flecha esquerda
function flechaEsquerda(){
    if(idx < vetorBotao.length && idx != 0){
        idx-=2;
        carrossel();
    }else{
        idx = (vetorBotao.length)-2;
        carrossel();
    }
}