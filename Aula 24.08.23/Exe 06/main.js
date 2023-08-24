var input = parseInt(prompt("Informe o ano").toLowerCase());

var bissexto = input%4;

if(bissexto == 0){
  document.write(`Pode ser bissexto <br>`);
}else{
  document.write(`Não é bissexto<br>`);
}

