// Page urls
const DEV_MAIN_PAGE_URL = 'https://b2b-dev2.sanwell.biz/main';

// Selectors
const MAIN_PAGE_TITLE = '.page-title';
const SEARCH_FORM_INPUT = '.typeahead.form-control';
const SEARCH_CATEGORY_BUTTON = '.comboTreeInputWrapper';
const MULTIPLES_FILTER = '.multiplesFilter';
const CHECKBOX_SEARCH_IN_PRODUCT_NAME = '#checkbox_search';

// Data for testing
const SEARCH_KEY_WORD = {
  first: 'унитаз',
  second: '00000000',
  third: 'biasi',
  fourth: 'Котел',
  fifth: '12026',
  sixth:
    'Новаторский дизайн и компактные размеры всего модельного ряда делают серию NOVA PARVA',
  seventh: '42396',
};

const SEARCH_CATEGORY = {
  first: 'Котлы',
  second: 'Бойлеры накопительные',
  third: 'Водяные полотенцесушители',
};

module.exports = {
  DEV_MAIN_PAGE_URL,
  MAIN_PAGE_TITLE,
  SEARCH_KEY_WORD,
  SEARCH_FORM_INPUT,
  SEARCH_CATEGORY,
  SEARCH_CATEGORY_BUTTON,
  MULTIPLES_FILTER,
  CHECKBOX_SEARCH_IN_PRODUCT_NAME,
};
