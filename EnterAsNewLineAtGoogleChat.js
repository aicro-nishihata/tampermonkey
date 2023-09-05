// ==UserScript==
// @name         EnterAsNewLineAtGoogleChat
// @version      0.1
// @description  Google ChatのWeb画面でEnterを押したときに改行にならないようにするスクリプト
// @author       aicro-nishihata
// @match        chat.google.com/*
// ==/UserScript==

document.addEventListener("keydown", EnterHandler, { capture: true });

function EnterHandler(event) {
  if (event.target.tagName === "DIV" && event.code === "Enter") {
    // 入力エリアを限定したかったがidがランダムなので諦めた
    event.stopPropagation();
  }
}