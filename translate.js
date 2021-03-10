const DICTIONARY = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DICTIONARY');
const LAST_ROW = DICTIONARY.getLastRow();
const KEY_MAP = DICTIONARY.getRange(`A2:B${LAST_ROW}`).getValues();

function updateDictionary(ITEM_VARIATION) {
    const DATA = ITEM_VARIATION.flatMap(e => [
        [e.variable1Name],
        [e.variable1Value],
        [e.variable2Name],
        [e.variable2Value]
    ]);
    DICTIONARY.getRange(`A${LAST_ROW+1}:A${LAST_ROW+DATA.length}`).setValues(DATA)
    DICTIONARY.getRange('A:B').removeDuplicates([1])
}