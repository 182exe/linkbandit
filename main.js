const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnop';
const number = '0123456789';

let settingLength = 3;
let content = '';

function generateString(length, link, extension) {
  let result = '';
  const uppercaseLength = uppercase.length;
  const lowercaseLength = lowercase.length;
  const numberLength = number.length;
  for ( let i = 0; i < length; i++ ) {
    result += link;
    for ( let i = 0; i < extension; i++ ) {
      let randInt = Math.floor(Math.random() * 3);
      if (randInt === 0) {
        result += uppercase.charAt(Math.floor(Math.random() * uppercaseLength));
      } else {
        if (randInt === 1) {
          result += lowercase.charAt(Math.floor(Math.random() * lowercaseLength));
        } else {
          if (randInt === 2) {
            result += number.charAt(Math.floor(Math.random() * numberLength));
          }
        }
      }
    }
    result += ' \n';
  }
  return result;
}

function start(lengthsetting, linksetting, extensionsetting) {
  const raw = (generateString(lengthsetting, linksetting, extensionsetting));
  const str = raw;
  const text = document.querySelector(".text");
  const input = document.querySelector(".input");
  content = str;
  function populateText(str) {
      let span = document.createElement("span");
      span.setAttribute("id", "result");
      span.innerText = str;
      text.appendChild(span);
  }
  populateText(str);
}

function updateSettings() {
  if (document.getElementById("lengthInput").value.length === 0) {
    window.alert('You didn\'t provide any valid length input in the box, so I\'ve defaulted to generating you 3 links.');
    start(3);
  } else {
    let settingLength = document.getElementById("lengthInput").value;
    let settingLink = document.getElementById("urlInput").value;
    let settingExtension = document.getElementById("extensionInput").value;
    start(settingLength, settingLink, settingExtension);
  }
}

function viewRaw() {
  content = document.getElementById("result").innerText;
  let rawWindow = window.open("","");
  rawWindow.document.write(content);
}

function copyResult() {
  const copyText = document.getElementById("result").innerText;
  navigator.clipboard.writeText(copyText);
}

function loadPremade() {
  selectElement = document.querySelector('#premadeModes');
  output = selectElement.value;
  if (output == "none") {
    document.getElementById("lengthInput").value = none[0];
    document.getElementById("urlInput").value = none[1];
    document.getElementById("extensionInput").value = none[2];
  }
  if (output == "hypixelDaily") {
    document.getElementById("lengthInput").value = hypixelDaily[0];
    document.getElementById("urlInput").value = hypixelDaily[1];
    document.getElementById("extensionInput").value = hypixelDaily[2];
  }
  if (output == "discordNitro") {
    document.getElementById("lengthInput").value = discordNitro[0];
    document.getElementById("urlInput").value = discordNitro[1];
    document.getElementById("extensionInput").value = discordNitro[2];
  }
}

document.getElementById('premadeModes').addEventListener('change', function() {
  loadPremade();
});

//-----PREMADE SETTINGS DEFAULTS-----//

const none = ["", "", ""];
const hypixelDaily = ["10", "https://rewards.hypixel.net/claim-reward/", "8"];
const discordNitro = ["10", "https://discord.gift/", "16"];
const pasteBin = ["10", "https://pastebin.com/", "8"];
const ghostBin = ["10", "https://ghostbin.com/", "5"];

//-----PREMADE SETTINGS DEFAULTS-----//

let dark = 1;
function updateTheme() {
  var r = document.querySelector(':root');
  if (dark == 1) {
    r.style.setProperty('--quietmidnight', '#DFDFFF');
    r.style.setProperty('--raspberry', '#000');
    dark = 0;
  } else {
    r.style.setProperty('--quietmidnight', '#12121F');
    r.style.setProperty('--raspberry', '#E53B5E');
    dark = 1;
  }
}

function notify(text) {
  
}
