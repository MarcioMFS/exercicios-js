let btn = document.getElementById("button");
let exercises = document.querySelector(".exercises");
let container = document.querySelector(".container");

let containerfunc = () => {

    if (exercises.style.display === 'block') {
        exercises.style.display = 'none';
    } else {
        exercises.style.display = 'block';
        container.style.display = 'none';
    }
};


let soma = () => {
    let ex1 = document.getElementById("ex1")
    let n1, n2, n3, n4

    alert("Digite 4 numeros para efetuar uma soma:")

    n1 = parseFloat(prompt("Digite o primeiro numero:"))
    n2 = parseFloat(prompt("Digite o segundo numero:"))
    n3 = parseFloat(prompt("Digite o terceiro numero:"))
    n4 = parseFloat(prompt("Digite o quarto numero:"))
    let soma = n1 + n2 + n3 + n4;
    ex1.innerHTML = 
    `
        <h3>Resultados<h3>
    <p>Numeros digitados: ${n1}, ${n2}, ${n3}, ${n4}</p>
    <p>Resultado: ${soma} </p>
    `

}

let media = () =>{
    let ex2 = document.getElementById("ex2")
    let n1, n2, n3
    alert("Digite suas 3 notas para o calculo da media:")
    n1 = parseFloat(prompt("Digite o primeira nota:"))
    n2 = parseFloat(prompt("Digite o segunda nota:"))
    n3 = parseFloat(prompt("Digite o terceira nota:"))
    let media = (n1+n2+n3)/3

    ex2.innerHTML = 
    `
        <h3>Resultados<h3>
    <p>Notas digitadas: ${n1}, ${n2}, ${n3}</p>
    <p>Resultado: ${media.toFixed(1)} </p>
    `
}

let salario = () => {
    let ex3 = document.getElementById("ex3")
    let nome, salario
    nome = prompt("Digite o seu nome:")
    salario = parseFloat(prompt(`Olá ${nome}, Digite o seu salario:`))
    let novoSal = salario*1.15;
    ex3.innerHTML = 
    `
        <h3>Calculo de aumento de salário<h3>
    <p>Olá ${nome}</p>
    <p>${nome}, Seu salario antigo é de: ${salario}</p>
    <p>${nome}, Seu novo salario é de: ${novoSal.toFixed(2)} </p>
    `
}

let  salGratif = () => {
    let ex4 = document.getElementById("ex4")
    let nome,salario 
    let imp = 0.07 
    let grat = 1.05
    nome = prompt("Digite o seu nome:")
    salario = parseFloat(prompt(`Olá ${nome}, Digite o seu salario:`))
    let novoSal = salario*grat;
    novoSal = novoSal - (novoSal*imp);
    ex4.innerHTML = 
    `
        <h3>Calculo de gratificação e imposto<h3>
    <p>Olá ${nome}</p>
    <p>${nome}, Seu salario base é de: ${salario}</p>
    <p>${nome}, Seu novo salario com gratificação e impostos é de: ${novoSal.toFixed(2)} </p>
    `

}


let racao = () => {
    let ex5 = document.getElementById("ex5")
    let racao, quantGato,total
    racao = parseFloat(prompt("Digite a quantia comprada de ração em kilos:"))
    quantGato = parseFloat(prompt("Digite a quantidade de ração para cada gato em gramas:"))
    total = ((racao*1000) - (quantGato * 5))/1000 
    ex5.innerHTML = 
    `
        <h3>Calculo de quantia de ração<h3>
    <p>Quantia de ração comprada:  ${racao}Kg</p>
    <p> quanto sobrará se os dois gatos comerem por 5 dias: ${total}Kg </p>
    `
}

let maiorde2 = () =>{
    let ex6 = document.getElementById("ex6")
    let n1,n2
    n1 = parseInt(prompt("Digite o primeiro numero"))
    n2 = parseInt(prompt("Digite o segundo numero"))
    if(n1 < n2){
        ex6.innerHTML = 
    `
        <h3>Numero maior<h3>
    <p>Numeros digitados: ${n1}, ${n2}</p>
    <p>O ${n2} é o maior</p>
    `
    }else{
        ex6.innerHTML = 
        `
        <h3>Numero maior<h3>
    <p>Numeros digitados: ${n1}, ${n2}</p>
    <p>O ${n1} é o maior</p>
    `
    }
}   

let aumento = () => {
    let ex7 = document.getElementById("ex7")
    let salario,nome,aumento= 1.30
    nome = prompt("Digite o seu Nome:")
    salario = parseFloat(prompt("Digite o valor do seu salário:"))
    if(salario < 600){
        let novoSal = salario * aumento
        ex7.innerHTML = 
        `
            <h3>Aumento de salário<h3>
        <p>Olá ${nome}, você tem direito a aumento</p>
        <p>O seu novo salário é de: ${novoSal}</p>
        `
    }else{
        ex7.innerHTML = 
        `
            <h3>Aumento de salário<h3>
        <p>Olá ${nome}, não tem direito a aumento </p>
        <p>O seu salário é de: ${salario}</p>
        `
    }
}

let maiorq50 = () => {
    let ex8 = document.getElementById("ex8")
    let n1 = parseFloat(prompt("Digite um numero:"))

    if(n1/2 > 50){
        ex8.innerHTML = 
        `
            <h3>Numeros<h3>
        <p>Numero digitado ${n1}</p>
        <p>A metade do numero digitado é de ${n1/2}</p>
        `
    }else{
        ex8.innerHTML = 
        `
            <h3>Numeros<h3>
        <p>Numero digitado ${n1}</p>
        `
    }
}

let mediaEsc1 = () =>{
    let ex9 = document.getElementById("ex9")
    let n1, n2
    alert("Digite suas 2 notas para o calculo da media:")
    n1 = parseFloat(prompt("Digite o primeira nota:"))
    n2 = parseFloat(prompt("Digite o segunda nota:"))
    let media = (n1+n2)/2



    if(media >=6){
        ex9.innerHTML = 
        `
        <table>
        <tr>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Media</th>
        </tr>
        <tr>
        <td>${n1}</td>
        <td>${n2}</td>
        <td>${media.toFixed(1)}</td>
        </tr>
        </table>    
        <p>Você foi aprovado, sua media: ${media.toFixed(1)}</p>
        `
    }else{
        ex9.innerHTML = 
        `
        <table>
        <tr>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Media</th>
        </tr>
        <tr>
        <td>${n1}</td>
        <td>${n2}</td>
        <td>${media.toFixed(1)}</td>
        </tr>
        </table>    
        <p>Você foi reprovado, sua media: ${media.toFixed(1)}</p>
        `
    }
}

let mediaEsc2 = () =>{
    let ex10 = document.getElementById("ex10")
    let n1, n2,n3
    alert("Digite suas 3 notas para o calculo da media:")
    n1 = parseFloat(prompt("Digite o primeira nota:"))
    n2 = parseFloat(prompt("Digite o segunda nota:"))
    n3 = parseFloat(prompt("Digite o terceira nota:"))
    let media = (n1+n2+n3)/3



    if(media >=6){
        ex10.innerHTML = 
        `
        <table>
        <tr>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Nota 3</th>
        <th>Media</th>
        </tr>
        <tr>
        <td>${n1}</td>
        <td>${n2}</td>
        <td>${n3}</td>
        <td>${media.toFixed(1)}</td>
        </tr>
        </table>    
        <p>Você foi aprovado, sua media: ${media.toFixed(1)}</p>
        `
    }else if(media >=4){
        ex10.innerHTML = 
        `
        <table>
        <tr>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Nota 3</th>
        <th>Media</th>
        </tr>
        <tr>
        <td>${n1}</td>
        <td>${n2}</td>
        <td>${n3}</td>
        <td>${media.toFixed(1)}</td>
        </tr>
        </table>    
        <p>Você está de recuperação, sua media: ${media.toFixed(1)}</p>
        `
    }else{
        ex10.innerHTML =
        `
        <table>
        <tr>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Nota 3</th>
        <th>Media</th>
        </tr>
        <tr>
        <td>${n1}</td>
        <td>${n2}</td>
        <td>${n3}</td>
        <td>${media.toFixed(1)}</td>
        </tr>
        </table>    
        <p>Você está retido, sua media: ${media.toFixed(1)}</p>
        `

    }
}

let maioridade = () => {
    let ex11 = document.getElementById("ex11")
    let idade
    idade = parseFloat(prompt("Digite sua idade:"))
    if (idade >= 18) {
        ex11.innerHTML = `
        <h3>Maioridade<h3>
    <p>Você é maior de idade, sua idade é de ${idade} </p>
    `
    }else{
        ex11.innerHTML=
        `
        <h3>Maioridade<h3>
    <p>Você não é maior de idade! sua idade é de ${idade} </p>
    `
    }
}

let ordem = () => {
    let ex12 = document.getElementById("ex12")
    let n1,n2,n3,num

    n1 = parseFloat(prompt("Digite o primeiro numero:"))
    n2 = parseFloat(prompt("Digite o segundo numero:"))
    n3 = parseFloat(prompt("Digite o terceiro numero:"))

    num = n1
    if(n2 > n1){
        num=n2;
        n2=n1;
        n1=num;
       }
  
       if(n3 > n1){
        num=n3;
        n3=n1;
        n1=num;
       }
  
       if(n3 > n2){
        num=n3;
        n3=n2;
        n2=num;
       }

       ex12.innerHTML =  `
       <h3>Ordem de numeros<h3>
   <p>A ordem dos numeros é: ${n1}, ${n2}, ${n3} </p>
   `
    
}


let encaixa = () =>{
    let ex13 = document.getElementById("ex13")
    let n1 = parseFloat(prompt("Digite um numero:"))
    if(n1 >= 0 && n1 <= 25 ){
        ex13.innerHTML = `
        <h3>Em qual se encaixa</h3>
        <p>O numero digitado foi ${n1} e se encaixa entre 0-25</p>`
    }else if(n1 >= 26 && n1 <= 50){
        ex13.innerHTML = `
        <h3>Em qual se encaixa</h3>
        <p>O numero digitado foi ${n1} e se encaixa entre 26-50</p>`
    }else if(n1 >= 51 && n1 <= 75){
        ex13.innerHTML = `
        <h3>Em qual se encaixa</h3>
        <p>O numero digitado foi ${n1} e se encaixa entre 51-75</p>`
    }else if(n1 >= 76 && n1 <= 100){
        ex13.innerHTML = `
        <h3>Em qual se encaixa</h3>
        <p>O numero digitado foi ${n1} e se encaixa entre 76-100</p>`
    }else{
        ex13.innerHTML = `
        <h3>Em qual se encaixa</h3>
        <p>O numero digitado foi ${n1} e não se encaixa entre nenhum dos numeros especificados.</p>`
    }
}

let positivos = () => {
    let ex14 = document.getElementById("ex14")
    let n1 = parseInt(prompt("Digite um numero:"))
    
    if(n1 > 0){
        if (n1 % 2 == 0) {
            ex14.innerHTML = `
            <h3>Numeros pares e impares</h3>
            <p>O numero digitado foi ${n1} e ele é par.</p>`
        }else{
            ex14.innerHTML = `
            <h3>Numeros pares e impares</h3>
            <p>O numero digitado foi ${n1} e ele é impar.</p>`
        }
    }else{
        ex14.innerHTML = `
            <h3>Numeros pares e impares</h3>
            <p>O numero digitado foi ${n1} e ele não é positivo.</p>`
    }
}