/**
 *
 *@param {playwright page} page
 *@returns {array<{sortingColumns: () => Promise<void>}>
 */

function getColumns(page) {
  return {
    sortingColumns: columnSelector => page.$$(columnSelector),
  };
}

module.exports = {
  getColumns,
};
