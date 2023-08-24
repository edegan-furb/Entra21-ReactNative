var input = prompt("Informe a letra");

if (
  input.toLowerCase() === "a" ||
  input.toLowerCase() === "e" ||
  input.toLowerCase() === "i" ||
  input.toLowerCase() === "o" ||
  input.toLowerCase() === "u"
) {
  document.write(`Vogal <br>`);
} else {
  document.write(`Consoante <br>`);
}
