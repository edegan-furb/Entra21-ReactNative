var a, b;

a = prompt("Digite o valor de a");
b = prompt("Digite o valor de b");

temp = a;
a = b;
b = temp;

document.write(`A: ${a} <br> B: ${b}`)
