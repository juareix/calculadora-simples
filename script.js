function calcular(tipo, valor){
    if(tipo === 'acao') {
      if(valor === 'c'){
        //limpar o visor
        document.getElementById('resultado').value = ''
      }
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
      }
      if(valor === '=') {
        let valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
      }
    } else if (tipo === 'valor') {

      document.getElementById('resultado').value += valor
    }
  }
function soltou(event){
  //retorna o valor em si do portão apertado
  let acao = ['*','/','+','=','-','.','Backspace']
  let numero = event.key;

  if(isNaN(numero) == false){
    calcular('valor', numero)
  }

  else if(isNaN(numero) == true){
    acao.forEach((value)=>{
      if(value === numero){
        if(value === 'Backspace'){
          calcular('acao', numero = 'c')
        }
        else{
          calcular('acao', numero)
        }
        
      }  
    })
  }
}

const input = document.querySelector('html');

input.addEventListener('keyup' , soltou)