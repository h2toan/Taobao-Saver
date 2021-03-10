function translate(text) {
    const DICTIONARY = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DICTIONARY');
    const LAST_ROW = DICTIONARY.getLastRow();
    const KEY_MAP = DICTIONARY.getRange(`A2:B${LAST_ROW}`).getValues();

    return KEY_MAP.filter(e => e[0] == text)[0] ? KEY_MAP.filter(e => e[0] == text)[0][1] : text;
}