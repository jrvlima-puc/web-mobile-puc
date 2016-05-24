function ContaBancaria(saldo) {
  this.saldo = saldo;
}

ContaBancaria.prototype.Sacar = function(valorSaque) {
  this.saldo = this.saldo-valorSaque;
  return this.saldo;
};

ContaBancaria.prototype.Depositar = function(valorDeposito) {
  this.saldo = this.saldo+valorDeposito;
  return this.saldo;
};

var contaBancaria = new ContaBancaria(0);
console.log(contaBancaria.Depositar(5000));
console.log(contaBancaria.Sacar(1000));

contaBancaria instanceof ContaBancaria
