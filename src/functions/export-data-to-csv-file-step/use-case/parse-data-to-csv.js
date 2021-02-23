/* eslint-disable no-restricted-syntax */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function parseDataToCSV(array) {
  const flatData = [];
  for (const data of array) {
    for (const subItem of data.result) {
      const newItem = {
        ...subItem,
        category: data.category,
        eventDate: `${subItem.eventDate.getDate()}-${subItem.eventDate.getMonth()}-${subItem.eventDate.getFullYear()}`
      };
      flatData.push(newItem);
    }
  }
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
}

module.exports = parseDataToCSV;
