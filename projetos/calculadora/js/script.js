class Calculator {
  //Método construtor
  constructor() {
    this.upperValue = document.querySelector('#upper-number');
    this.resultValue = document.querySelector('#result-number');
    this.reset = 0;
  }
  //Limpar valores do display (AC)
  clearValues() {
    this.upperValue.textContent = '0';
    this.resultValue.textContent = '0';
  }
  //Checar o último dígito
  checkLastDigit(input, upperValue, reg) {
    if((
      !reg.test(input) &&
      !reg.test(upperValue.substr(upperValue.length - 1))
    )) {
      return true;
    } else {
      return false;
    }
  }
  //Método soma
  sum(n1, n2) {
    return parseFloat(n1) + parseFloat(n2)
  }
  //Método subtração
  subtraction(n1, n2) {
    return parseFloat(n1) - parseFloat(n2)
  }
  //Método multiplicação
  multiplication(n1, n2) {
    return parseFloat(n1) * parseFloat(n2)
  }
  //Método divisão
  division(n1, n2) {
    return parseFloat(n1) / parseFloat(n2)
  }
  //Atualizar valores do display
  refreshValues(total) {
    this.upperValue.textContent = total;
    this.resultValue.textContent = total;
  }
  //Resolver a operação
  resolution() {
    //Explodir a string em um array
    let upperValueArray = (this.upperValue.textContent).split(" ");
    //Resultado da operação
    let result = 0;
    //Análise dos valores do array
    for(let i = 0; i <= upperValueArray.length; i++) {
      let operation = 0;
      let actualItem = upperValueArray[i];
      if(actualItem == "x") {
        //Multiplicar
        result = calc.multiplication(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
      } else if(actualItem == "/") {
        //Dividir
        result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
      //Analisar se o array ainda possui multiplicações ou divisões a serem realizadas
      } else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
        //Somar ou subtrair
        if(actualItem == "+") {
          //Somar
          result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
          operation = 1;
        } else if(actualItem == "-") {
          //Subtrair
          result = calc.subtraction(upperValueArray[i - 1], upperValueArray[i + 1]);
          operation = 1;
        }
      }
      //Atualizar valores do array
      if(operation) {
        //Transformar o índice anterior no resultado da operação
        upperValueArray[i - 1] = result;
        //Remover os itens já utilizados na operação
        upperValueArray.splice(i, 2);
        //Atualizar o valor do índice
        i = 0;
      }
    }
    if(result) {
      calc.reset = 1;
    }
    //Atualizar valores do display
    calc.refreshValues(result);
  }
  //Atribuir ações aos botões pressionados
  btnPress() {
    //Capturar qual botão foi pressionado
    let input = this.textContent;
    //Capturar conteúdo do valor digitado
    let upperValue = calc.upperValue.textContent;
    //Verificar se tem só números
    var reg = new RegExp('^\\d+$');
    //Verificar se o valor do diplay é zero e se o valor é número
    if(calc.reset && reg.test(input)) {
      upperValue = '0';
    }
    //Limpa o display
    calc.reset = 0;
    //Método para limpar o display
    if(input == 'AC') {
      //Chamar o método limpar "AC"
      calc.clearValues();
    } else if(input == "=") {
      //Chamar o método de resolução "="
      calc.resolution();
    } else {
      //Verificar se precisa adicionar ou não o último dígito
      if(calc.checkLastDigit(input, upperValue, reg)) {
        return false;
      }
      //Adiciona espaços antes e depois dos operadores
      if(!reg.test(input)) {
        input = ` ${input} `;
      }
      //Verificar se o número inicial é zero
      if(upperValue == "0") {
        if(reg.test(input)) {
          calc.upperValue.textContent = input;
        }
      } else {
        calc.upperValue.textContent += input;
      }
    }
  }
}
//Iniciar o objeto
let calc = new Calculator()
//Variável dos botões
let buttons = document.querySelectorAll('.btn')
//Mapear os botões quando pressionados
for(let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener('click', calc.btnPress)
}