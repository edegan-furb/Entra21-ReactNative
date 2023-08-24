var preçoKg = parseFloat(prompt("Digite o preço por Kg"));
var pesoRegistrado = parseFloat(
  prompt("Digite o preço registrado (em gramas)")
);

var valorPagar = (preçoKg * (pesoRegistrado / 1000));

document.write(`Preço por Kg: R$ ${preçoKg.toFixed(2)} <br>`);
document.write(`Valor a pagar: R$ ${valorPagar.toFixed(2)} <br>`);

document.write(`${valorPagar.toFixed(2).replace(".", ",")} <br>`);

document.write(`${valorPagar.toLocaleString("BRL",{style: "currency", currency: "BRL"})} <br>`);
document.write(`${valorPagar.toLocaleString("EUR",{style: "currency", currency: "EUR"})} <br>`);
document.write(`${valorPagar.toLocaleString("USD",{style: "currency", currency: "USD"})} <br>`);
