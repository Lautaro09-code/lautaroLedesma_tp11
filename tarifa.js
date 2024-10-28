//tarifa
let pagoMes = 20000;
let consumoKWH = 450;

pagoMes = consumoKWH > 300 ? pagoMes * 1.2 : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de", consumoKWH, "kwh",);
console.log("en base al ajuste tarifario (hogares con consumo mayor a");
console.log("300 kwh por mes tendrán un aumento del 20%) cumplimos con informarle que");
console.log("se ha ajustado el total a pagar, que será de:$", pagoMes);