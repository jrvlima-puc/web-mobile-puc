function Contabancaria(saldo) {
  this.saldo = saldo;
}

Contabancaria.prototype.Depositar = function (valor) {
    this.saldo = this.saldo + valor;
    return [valor, this.saldo];
};

Contabancaria.prototype.Debitar = function (valor) {
    this.saldo = this.saldo - valor;
    return [valor*-1,this.saldo];
};

var contabancaria = new Contabancaria(0);

console.log(contabancaria.Depositar(1020.54));
console.log(contabancaria.Debitar(20.23));
console.log(contabancaria.Debitar(21.22));
console.log(contabancaria.Debitar(25.45));
console.log(contabancaria.Debitar(41.55));
console.log(contabancaria.Debitar(125.44));
console.log(contabancaria.Debitar(521.57));
console.log(contabancaria.Debitar(425.65));

contabancaria instanceof Contabancaria


