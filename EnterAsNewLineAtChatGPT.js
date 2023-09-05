// ==UserScript==
// @name         EnterAsNewLineAtChatGPT
// @version      0.1
// @description  ChatGPTのWeb画面でEnterを押したときに改行にならないようにするスクリプト
// @author       aicro-nishihata
// @match        https://chat.openai.com/*
// ==/UserScript==

document.addEventListener("keydown", EnterHandler, { capture: true });

function EnterHandler(event) {
  if (event.target.id === "prompt-textarea" &&
      event.code == "Enter" &&
      !(event.ctrlKey || event.metaKey)
    ) {
    event.stopPropagation();
  }
}
