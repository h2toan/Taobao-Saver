function doPost(e) {
    return handleRequest(e);
}

function handleRequest(e) {

    let lock = LockService.getScriptLock();
    lock.waitLock(30000);

    try {

        const PAYLOAD = e.postData.contents

        writeToDatabase(PAYLOAD)

        return HtmlService.createHtmlOutput(`<strong>Success</strong>`);

    } catch (e) {
        return HtmlService.createHtmlOutput(e);

    } finally {
        lock.releaseLock();
    }
}

function writeToDatabase(PAYLOAD) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Database');
    const lastRow = sheet.getLastRow();
    const maxRow = sheet.getMaxRows();

    if (lastRow == maxRow) {
        sheet.insertRowAfter(lastRow)
    }

    sheet.getRange(`O${lastRow+1}`).setValue(PAYLOAD)
}