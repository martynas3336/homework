const calcCashIn = function calculateCashInBasedOnGivenConfig({amount, totalWeek, feeConfig}) {
  let fee = amount * feeConfig.percents / 100;
  fee = Math.ceil(fee * 100) / 100;
  if(fee > feeConfig.max.amount)
  {
    fee = feeConfig.max.amount;
  }
  return fee;
}

module.exports = calcCashIn;
