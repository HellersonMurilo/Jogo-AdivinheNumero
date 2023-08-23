//Criando o numero aleatório
let numeroAleatorio = Math.trunc(Math.random() * 20) + 1;

const validarNumero1 = document.getElementById('validarNumero1');
let numeroInformado = document.getElementById('campoNumero')
const highscore = document.getElementById('highscore')
const body = document.getElementById('body')
const score = document.getElementById('score')
const reiniciarBttn = document.getElementById('reiniciarBttn')
const valor = document.getElementById('valor')

function validarNumero() {

    let campoNumero = parseInt(numeroInformado.value);

    if (campoNumero === numeroAleatorio) {
        body.style.backgroundColor = "green"

        indicador.innerHTML = `🎉 Parabéns, você acertou!`
        highscore.innerHTML = `${score.textContent}`
        valor.innerHTML = `${numeroAleatorio}`

    } else if (campoNumero > numeroAleatorio) { // caso seja alto demais
        let indicador = document.getElementById('indicador')
        indicador.innerHTML = `<p>📈 Muito alto</p>`
        let contador = score.textContent - 1
        score.innerHTML = `<span>${contador}</span>`
        if (contador === 0) {
            score.innerHTML = `❌ Você perdeu`
            highscore.innerHTML = '0'
        }


    } else if (campoNumero < numeroAleatorio) { // caso seja baixo 
        let indicador = document.getElementById('indicador')
        indicador.innerHTML = `<p>📉 Muito baixo</p>`
        let contador = score.textContent - 1
        score.innerHTML = `<span>${contador}</span>`
        if (contador === 0) {
            score.innerHTML = `❌ Você perdeu`
        }
    }

}

// tratando do Again
reiniciarBttn.addEventListener('click', () => {

    numeroInformado.value = '';
    score.innerHTML = `<span>20</span>`
    body.style.backgroundColor = '#222'
    let indicador = document.getElementById('indicador')
    indicador.innerHTML = `<p>Start guessing...</p>`
    valor.innerHTML = '?'

})