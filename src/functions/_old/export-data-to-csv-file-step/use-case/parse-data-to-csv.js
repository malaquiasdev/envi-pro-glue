/* eslint-disable no-restricted-syntax */
const ObjectsToCsv = require('objects-to-csv');
const getDateMonthYearStringFromDate = require('./get-date-month-year');

async function parseDataToCSV(array) {
  const flatData = [];
  for (const data of array) {
    for (const subItem of data.result) {
      const newItem = {
        ...subItem,
        category: data.category,
        eventDate: getDateMonthYearStringFromDate(subItem.eventDate)
      };
      flatData.push(newItem);
    }
  }
  const csv = new ObjectsToCsv(flatData);
  return csv.toString();
}

module.exports = parseDataToCSV;
