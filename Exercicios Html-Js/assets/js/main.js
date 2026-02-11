const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido', false)
        return;
    }

    if (!altura){
        setResultado('Altura invalida', false)
    }

    const imc = getImc(peso, altura);
    const levelImc = getLevelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${levelImc})`;
    setResultado(msg, true);
})

function getLevelImc(imc){
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'
    ]

    if (imc >= 39.9) return level[5]
    if (imc >= 34.9) return level[4]
    if (imc >= 29.9) return level[3]
    if (imc >= 24.9) return level[2]
    if (imc >= 18.5) return level[1]
    if (imc < 18.5) return level[0]
}

function getImc(peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2);
}

function createParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = createParagrafo();
    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('incorrect')
    }


    p.innerHTML = msg;
    resultado.appendChild(p);
}













/*function CalcularIMC() {
    const peso = parseFloat(document.getElementById('input-peso').value)
    const altura = parseFloat(document.getElementById('input-altura').value)
    
    if (!peso || !altura){
        alert('Preencha os campos corretamente!')
        return
    }



    const imc = peso / (altura * altura)
    if (imc < 18.5){
        alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`)
    }else if(imc < 40){
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com o peso ideal`)
    } else
    alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade mórbida.`)
}*/
