// ==UserScript==
// @name         EnterAsNewLineAtGoogleSpreadsheet
// @version      0.1
// @description  Google SpreadsheetのWeb画面でEnterを押したときにCmd+Enterにキーを変更するスクリプト
// @author       aicro-nishihata
// @match        docs.google.com/spreadsheets/*
// ==/UserScript==


document.addEventListener("keydown", EnterHandler, { capture: true });

function EnterHandler(event) {
    if (event.code === "Enter" && !event.metaKey) {
        // 入力エリアを限定したかったがidがランダムなので諦めた
        event.preventDefault(); // デフォルトの動作をキャンセル
        event.stopPropagation(); // 他のリスナーへの伝播を停止

        var enterCmdEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true,
            cancelable: true,
            metaKey: true // Cmdキーが押された状態
        });

        document.activeElement.dispatchEvent(enterCmdEvent);
    }
}
