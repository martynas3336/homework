const calcCashIn = require('../action/calcCashIn');
const calcJuridicalCashOut = require('../action/calcJuridicalCashOut');
const calcNaturalCashOut = require('../action/calcNaturalCashOut');

class Operation {
  constructor({date, user_id, user_type, type, operation, totalWeek, feeConfig}) {
    this.date = date;
    this.user_id = user_id;
    this.user_type = user_type;
    this.type = type;
    this.operation = operation;
    this.amount = this.calculateAmount();
    this.totalWeek = totalWeek;
    this.feeConfig = feeConfig;
    this.fee = 0;
  }

  calculateAmount() {
    if(this.operation.currency === 'EUR')
    {
      return this.operation.amount;
    }
    Object.keys(this.feeConfig.conversionRates).forEach((key) => {
      if(key == this.operation.currency)
      {
        let newAmount = Math.ceil((this.operation.amount / this.operation[key]) * 100) / 100;
        return newAmount;
      }
    })
    return 0;
  }

  calculateFee() {
    if(this.user_type === 'juridical')
    {
      if(this.type === 'cash_in')
      {
        this.fee = calcCashIn({amount:this.amount, totalWeek:this.totalWeek[this.user_type][this.type], feeConfig:this.feeConfig.cashIn});
      }
      if(this.type === 'cash_out')
      {
        this.fee = calcJuridicalCashOut({amount:this.amount, totalWeek:this.totalWeek[this.user_type][this.type], feeConfig:this.feeConfig.juridicalCashOut});
      }
    }
    if(this.user_type === 'natural')
    {
      if(this.type === 'cash_in')
      {
        this.fee = calcCashIn({amount:this.amount, totalWeek:this.totalWeek[this.user_type][this.type], feeConfig:this.feeConfig.cashIn});
      }
      if(this.type === 'cash_out')
      {
        this.fee = calcNaturalCashOut({amount:this.amount, totalWeek:this.totalWeek[this.user_type][this.type], feeConfig:this.feeConfig.naturalCashOut});
      }
    }
    return this.fee;
  }

  getAmount() {
    return this.amount;
  }

  getUserType() {
    return this.user_type;
  }

  getType() {
    return this.type;
  }

}

module.exports = Operation;
