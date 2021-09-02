const {
  ADD_NEW_GROUP_BUTTON,
  GROUP_NAME_INPUT_FIELD_UA,
  GROUP_NAME_INPUT_FIELD_RU,
  EDITED_GROUP_NAME_INPUT_FIELD_UA,
  EDITED_GROUP_NAME_INPUT_FIELD_RU,
  SAVE_GROUP_BUTTON,
  SAVE_EDITED_GROUP_BUTTON,
} = require('../../constants');
const {
  getArrayOfElements,
} = require('../../asserts/common/getArrayOfelements');

class AdminDocsGroupsPage {
  constructor(page) {
    this.page = page;
  }

  async clickOnAddNewGroupButton() {
    await this.page.click(ADD_NEW_GROUP_BUTTON);
    await this.page.waitForLoadState('networkidle');

    const pageUrl = await this.page.url();

    return pageUrl;
  }

  // TODO: need refactoring
  async isCounterMinValue(value) {
    await this.page.waitForSelector('#form .input-counter__val');
    const tempArr = await this.page.$$('#form .input-counter__val');

    const arr = await Promise.all(
      tempArr.map(async el => {
        return el.innerText();
      }),
    );

    // eslint-disable-next-line no-console
    console.log('min arr: ', arr);

    const isEqual = currentValue => +currentValue === value;

    return arr.every(isEqual);
  }

  // TODO: need refactoring
  async isCounterMaxValue(value) {
    const tempArr = await getArrayOfElements(
      this.page,
      '.input-counter__max-val',
    );

    let arr = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const el of tempArr) {
      arr.push(await el.innerText());
    }

    arr = arr.map(el => el.slice(1, el.length));

    // eslint-disable-next-line no-console
    console.log('max arr: ', arr);

    const isEqual = currentValue => +currentValue === value;

    return arr.every(isEqual);
  }

  async textInputUA(text) {
    await Promise.all([
      await this.page.$(GROUP_NAME_INPUT_FIELD_UA),
      await this.page.click(GROUP_NAME_INPUT_FIELD_UA),
      await this.page.type(GROUP_NAME_INPUT_FIELD_UA, text),
    ]);
  }

  async textInputRU(text) {
    await Promise.all([
      await this.page.$(GROUP_NAME_INPUT_FIELD_RU),
      await this.page.click(GROUP_NAME_INPUT_FIELD_RU),
      await this.page.type(GROUP_NAME_INPUT_FIELD_RU, text),
    ]);
  }

  async clickSaveButton() {
    await Promise.all([
      await this.page.$(SAVE_GROUP_BUTTON),
      await this.page.click(SAVE_GROUP_BUTTON),
      await this.page.waitForNavigation('networkidle'),
    ]);
  }

  async clickSaveButtonAfterEdit() {
    await Promise.all([
      await this.page.$(SAVE_EDITED_GROUP_BUTTON),
      await this.page.click(SAVE_EDITED_GROUP_BUTTON),
    ]);
  }

  // TODO: need refactoring
  async findGroupInGroupList(textUa, textRu) {
    await this.page.waitForSelector(
      'button.btn.dropdown-toggle.form-lang > span:nth-of-type(1)',
    );
    const langValue = await this.page.$(
      'button.btn.dropdown-toggle.form-lang > span:nth-of-type(1)',
    );

    const lang = await langValue.innerText();

    // console.log('lang: ', lang);

    await this.page.waitForSelector('.dd-handle');
    const tempArr = await this.page.$$('.dd-handle');

    const arr = await Promise.all(
      tempArr.map(async el => {
        return el.innerText();
      }),
    );

    let result = false;

    if (lang === 'UA') {
      result = arr.find(el => el === textUa);
      // console.log('search result UA: ', result);
    } else if (lang === 'RU') {
      result = arr.find(el => el === textRu);
      // console.log('search result RU: ', result);
    }

    return result;
  }

  async clickEditGroupButton() {
    await this.page.waitForSelector(
      '.btn.btn-sm.btn-icon.btn-info.btn-outline.btn-input-count',
    );

    await this.page.click(
      '.btn.btn-sm.btn-icon.btn-info.btn-outline.btn-input-count',
    );
  }

  async isEditedGroup() {
    await Promise.all([
      await this.page.waitForSelector('#form1 h3.box-title.m-b-0'),
      await this.page.waitForSelector('.dd-item .dd-handle'),
    ]);

    const clickedItemName = await this.page.$('.dd-item .dd-handle');
    const itemName = await clickedItemName.innerText();
    const groupTitleElement = await this.page.$('#form1 h3.box-title.m-b-0');
    const title = await groupTitleElement.innerText();
    const result = title.toLowerCase().includes(itemName.toLowerCase());
    console.log('itemName: ', itemName);
    console.log('title: ', title);
    console.log(
      'result: ',
      title.toLowerCase().includes(itemName.toLowerCase()),
    );

    return result;
  }

  async checkEditedGroupNameLength() {
    await Promise.all([
      await this.page.waitForSelector(EDITED_GROUP_NAME_INPUT_FIELD_UA),
      await this.page.waitForSelector(EDITED_GROUP_NAME_INPUT_FIELD_RU),
      await this.page.waitForSelector(
        '#form-update .field-docsgroups-name_ua .input-counter__val',
      ),
      await this.page.waitForSelector(
        '#form-update .field-docsgroups-name_ru .input-counter__val',
      ),
    ]);

    const inputUa = await this.page.$(EDITED_GROUP_NAME_INPUT_FIELD_UA);
    const inputRu = await this.page.$(EDITED_GROUP_NAME_INPUT_FIELD_RU);
    const counterUa = await this.page.$(
      '#form-update .field-docsgroups-name_ua .input-counter__val',
    );
    const counterRu = await this.page.$(
      '#form-update .field-docsgroups-name_ru .input-counter__val',
    );
    const inputUaValue = await inputUa.inputValue();
    const inputRuValue = await inputRu.inputValue();
    const counterUaValue = await counterUa.innerText();
    const counterRuValue = await counterRu.innerText();

    console.log('inputUaValue: ', inputUaValue.length);
    console.log('inputRuValue: ', inputRuValue.length);

    console.log('counterUaValue: ', counterUaValue);
    console.log('counterRuValue: ', counterRuValue);

    if (
      +counterUaValue === inputUaValue.length &&
      +counterRuValue === inputRuValue.length
    ) {
      return true;
    }

    return false;
  }

  async isGroupNameLengthBiggerMaxLength() {
    await Promise.all([
      await this.page.waitForSelector(EDITED_GROUP_NAME_INPUT_FIELD_UA),
      await this.page.waitForSelector(EDITED_GROUP_NAME_INPUT_FIELD_RU),
      await this.page.waitForSelector(
        '#form-update .field-docsgroups-name_ua .input-counter__max-val',
      ),
      await this.page.waitForSelector(
        '#form-update .field-docsgroups-name_ru .input-counter__max-val',
      ),
    ]);

    const inputUa = await this.page.$(EDITED_GROUP_NAME_INPUT_FIELD_UA);
    const inputRu = await this.page.$(EDITED_GROUP_NAME_INPUT_FIELD_RU);
    const maxCounterUa = await this.page.$(
      '#form-update .field-docsgroups-name_ua .input-counter__val',
    );
    const maxCounterRu = await this.page.$(
      '#form-update .field-docsgroups-name_ru .input-counter__val',
    );
    const inputUaValue = await inputUa.inputValue();
    const inputRuValue = await inputRu.inputValue();
    const counterUaValue = await maxCounterUa.innerText();
    const counterRuValue = await maxCounterRu.innerText();

    if (
      inputUaValue.length > +counterUaValue ||
      inputRuValue.length > +counterRuValue
    ) {
      return true;
    }

    return false;
  }
}

module.exports = {
  AdminDocsGroupsPage,
};
