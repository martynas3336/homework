// + 3 * 24 * 60 * 60 * 1000 part is required, because 1970.01.01 was Thursday
const calcWeek = function calculateWeekByDate(date) {
  let t1 = new Date(0).getTime();
  let t2 = new Date(date).getTime();
  let weekNo = parseInt((t2 - t1 + 3 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000 * 7), 10);
  return weekNo;
}

module.exports = calcWeek;
