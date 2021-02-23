async function executeCreateVacantTable(
  { tableName },
  { createVacantModel, createTable }
) {
  const VacantModel = createVacantModel(tableName);
  const params = await VacantModel.table.create.request();
  await createTable(params);
  return true;
}

module.exports = executeCreateVacantTable;
