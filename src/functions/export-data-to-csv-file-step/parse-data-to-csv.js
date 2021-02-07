/* eslint-disable no-restricted-syntax */
<<<<<<< HEAD
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function parseDataToCSV(array) {
=======
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

function parseDataToCSV(array) {
>>>>>>> 7df176f0ce0c3f9349ba1f5c32f1cae4885165ec
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
<<<<<<< HEAD
  const csv = createCsvWriter({
    path: '/tmp/data.csv',
    header: [
      { id: 'category', title: 'category' },
      { id: 'link', title: 'link' },
      { id: 'uf', title: 'uf' },
      { id: 'title', title: 'title' },
      { id: 'eventDate', title: 'eventDate' }
    ]
  });
  await csv.writeRecords(flatData);
  return '/tmp/data.csv';
=======
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
>>>>>>> 7df176f0ce0c3f9349ba1f5c32f1cae4885165ec
}

module.exports = parseDataToCSV;
