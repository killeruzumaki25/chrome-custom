# chrome-custom
This bookmark customs in chrome

javascript: (function() { var mainScript = document.createElement('script'); var mainScriptF; fetch(`https://raw.githubusercontent.com/killeruzumaki25/chrome-custom/main/mainScript.js`).then(d => d.text()).then(function(result) { mainScriptF = result; mainScript.innerHTML = result; document.body.appendChild(mainScript); }); var styleScript = document.createElement('style'); var styleScriptF; fetch(`https://raw.githubusercontent.com/killeruzumaki25/chrome-custom/main/styleScript.js`).then(d => d.text()).then(function(result) { styleScriptF = result; styleScript.innerHTML = result; document.head.appendChild(styleScript); });})();
