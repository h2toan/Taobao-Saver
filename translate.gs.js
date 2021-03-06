const DICTIONARY = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  "DICTIONARY"
);
const LAST_ROW = DICTIONARY.getLastRow();
const MAX_ROW = DICTIONARY.getMaxRows();

function updateDictionary(ITEM_VARIATION) {
  const DATA = ITEM_VARIATION.flatMap((e) => [
    [e.variable1Name, `=GOOGLETRANSLATE("${e.variable1Name}","zh","vi")`],
    [e.variable1Value, `=GOOGLETRANSLATE("${e.variable1Value}","zh","vi")`],
    [e.variable2Name, `=GOOGLETRANSLATE("${e.variable2Name}","zh","vi")`],
    [e.variable2Value, `=GOOGLETRANSLATE("${e.variable2Value}","zh","vi")`],
  ]).filter((e) => isChingChong(e[0]));

  if (LAST_ROW == MAX_ROW) {
    DICTIONARY.insertRowAfter(LAST_ROW);
  }

  DICTIONARY.getRange(`A${LAST_ROW + 1}:B${LAST_ROW + DATA.length}`).setValues(
    DATA
  );
  DICTIONARY.getRange("A:B").removeDuplicates([1]);
}
