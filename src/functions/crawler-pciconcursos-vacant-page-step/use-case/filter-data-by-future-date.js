function isVacantDateGreaterThanToday(vacant) {
  return vacant.eventDate > new Date();
}

function filterVacantsByFutureDate(vacants) {
  if (!Array.isArray(vacants)) {
    return [];
  }
  return vacants.filter(vacant => isVacantDateGreaterThanToday(vacant));
}

module.exports = filterVacantsByFutureDate;
