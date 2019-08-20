const calcNaturalCashOut = function calculateNaturalUserCashOutBasedOnGivenConfig({amount, totalWeek, feeConfig}) {
  let fee = 0;
  if(amount + totalWeek > feeConfig.week_limit.amount)
  {
    let exceededAmount = 0;
    if(totalWeek > feeConfig.week_limit.amount)
    {
      exceededAmount = amount;
    } else {
      exceededAmount = amount + totalWeek -  feeConfig.week_limit.amount;
    }
    fee = exceededAmount * feeConfig.percents / 100;
    fee = Math.ceil(fee * 100) / 100;
  }
  return fee;
}

module.exports = calcNaturalCashOut;
