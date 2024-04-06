const XLSX = require('xlsx');

// 读取Excel文件
const workbook = XLSX.readFile('/Users/johnny/Desktop/destiny_app/rules.xlsx');

function getDataFromSheet(sheetName){
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const headers = jsonData[0];
    const data = jsonData.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });
    // console.log(data);
    return data;
}

module.exports = {
    years:getDataFromSheet("year"),
    months:getDataFromSheet("month"),
    days:getDataFromSheet("day"),
    hours:getDataFromSheet("hour"),
    states:getDataFromSheet("state"),
  };