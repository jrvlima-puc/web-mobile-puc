/*
contabancaria
  saldo, depositar, sacar
construtor
correntista
  private []contas bancarias
public adicionar contas
public getcontasbancarias;
*/
var contaBancaria{
  saldo,
  depositar:function(valor){
    saldo +=valor;
  }
  sacar:function(valor){
    saldo -=valor;
  }
  contaBancaria: function(valor){
    this.saldo = valor;
  }
}
/*
ContaBancaria.prototype.Depositar = function(valor){
  this.saldo +=valor;
}
ContaBancaria.prototype.Sacar = function(valor){
  this.saldo -=valor;
}

var conta = new ContaBancaria(4000);
conta instanceof ContaBancaria
*/
var correntista{
  var []contas,
  adicionarConta: function(saldo) {
    this.contas[] = new contaBancaria(saldo);
  }
  getContasBancarias: function () {
    return this.contas[];
  }


}
