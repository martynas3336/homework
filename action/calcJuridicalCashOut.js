const calcJuridicalCashOut = function calculateJuridicalUserCashOutBasedOnGivenConfig({amount, totalWeek, feeConfig}) {
  let fee = amount * feeConfig.percents / 100;
  fee = Math.ceil(fee * 100) / 100;
  if(fee < feeConfig.min.amount)
  {
    fee = feeConfig.min.amount;
  }
  return fee;
}

module.exports = calcJuridicalCashOut;
