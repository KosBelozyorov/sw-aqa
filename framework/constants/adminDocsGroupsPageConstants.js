// Page urls
const DEV_ADMIN_DOCS_GROUPS_PAGE_URL =
  'https://b2b-dev2.sanwell.biz/admin/docs-groups';

// Test data
const NEW_DOCS_GROUP_NAME_UA = 'test AQA UA';
const NEW_DOCS_GROUP_NAME_RU = 'test AQA RU';

// Selectors
const ADD_NEW_GROUP_BUTTON = 'button.btn.btn-success';
const SAVE_GROUP_BUTTON = 'form#form>div:nth-of-type(3)>button';
const SAVE_EDITED_GROUP_BUTTON = 'form#form-update>div:nth-of-type(3)>button';
const GROUP_NAME_INPUT_FIELD_UA = 'input#docsgroups-name_ua';
const GROUP_NAME_INPUT_FIELD_RU = 'input#docsgroups-name_ru';
const EDITED_GROUP_NAME_INPUT_FIELD_UA =
  '#form-update input#docsgroups-name_ua';
const EDITED_GROUP_NAME_INPUT_FIELD_RU =
  '#form-update input#docsgroups-name_ru';
const EDITED_GROUP_TITLE = '#form1 h3.box-title.m-b-0';
const EDITED_GROUP_NAME_INPUT_FIELD_UA_COUNTER =
  '#form-update .field-docsgroups-name_ua .input-counter__val';
const EDITED_GROUP_NAME_INPUT_FIELD_RU_COUNTER =
  '#form-update .field-docsgroups-name_ru .input-counter__val';
const GROUPS_LIST = 'div#nestable>ol';

module.exports = {
  DEV_ADMIN_DOCS_GROUPS_PAGE_URL,
  ADD_NEW_GROUP_BUTTON,
  NEW_DOCS_GROUP_NAME_UA,
  NEW_DOCS_GROUP_NAME_RU,
  GROUP_NAME_INPUT_FIELD_UA,
  GROUP_NAME_INPUT_FIELD_RU,
  EDITED_GROUP_NAME_INPUT_FIELD_UA,
  EDITED_GROUP_NAME_INPUT_FIELD_RU,
  EDITED_GROUP_TITLE,
  EDITED_GROUP_NAME_INPUT_FIELD_UA_COUNTER,
  EDITED_GROUP_NAME_INPUT_FIELD_RU_COUNTER,
  SAVE_GROUP_BUTTON,
  GROUPS_LIST,
  SAVE_EDITED_GROUP_BUTTON,
};
