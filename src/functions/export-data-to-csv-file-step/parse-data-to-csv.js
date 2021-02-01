/* eslint-disable no-restricted-syntax */
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

function parseDataToCSV(array) {
  const flatData = [];
  for (const data of array) {
    for (const subItem of data.result) {
      const newItem = {
        category: data.category,
        ...subItem
      };
      flatData.push(newItem);
    }
  }
  const csvStringifier = createCsvStringifier({
    header: [
      { id: 'category', title: 'CATEGORY' },
      { id: 'link', title: 'LINK' },
      { id: 'uf', title: 'UF' },
      { id: 'title', title: 'TITLE' },
      { id: 'eventDate', title: 'EVENT_DATE' }
    ]
  });

  return csvStringifier.stringifyRecords(flatData);
}

module.exports = parseDataToCSV;
