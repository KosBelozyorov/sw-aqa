const { getColumns } = require('./getColumns');

function getArrayOfElements(page, selector) {
  const tempArr = getColumns(page).sortingColumns(selector);

  return tempArr;
}

module.exports = {
  getArrayOfElements,
};
