const calcWeek = require('../tools/calcWeek');
const Operation = require('../Operation');

class User {
  constructor({user_id}) {
    this.user_id = user_id;
    this.lastOperationWeek = 0;
    this.totalWeek = {
      natural: {
        cash_in:0,
        cash_out:0,
      },
      juridical: {
        cash_in:0,
        cash_out:0,
      }
    }
    this.operations = [];
  }

  operation({operationData, feeConfig}) {
    let week = calcWeek(operationData.date);
    if(this.lastOperationWeek !== week)
    {
      this.lastOperationWeek = week;
      this.resetTotal();
    }

    let operation = new Operation({...operationData, totalWeek:this.totalWeek, feeConfig})
    let fee = operation.calculateFee();
    this.operations.push(operation);
    this.totalWeek[operation.getUserType()][operation.getType()] += operation.getAmount();
    return fee;
  }

  resetTotal() {
    this.totalWeek.natural.cash_in = 0;
    this.totalWeek.natural.cash_out = 0;
    this.totalWeek.juridical.cash_in = 0;
    this.totalWeek.juridical.cash_out = 0;
  }
}

module.exports = User;
