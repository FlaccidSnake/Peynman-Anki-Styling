/*
Reveal clozes by clicking script. Excellent, above many other scripts I've tried. 

Link to the shared deck with this card type ↓
https://ankiweb.net/shared/info/1874787050"

Link to original post on Anki forums ↓
https://forums.ankiweb.net/t/cloze-one-by-one-uncovering/12584/71
*/

var logDiv = null;
function log(s) {
  if (logDiv == null) {
    logDiv = document.createElement("div");
    logDiv.id = 'log_debug';
    logDiv.style = 'position:absolute;left:0;top:0;z-index:-2;color:grey;font-size:small';
    document.body.append(logDiv);
  }
  logDiv.insertAdjacentHTML('beforeend', s + '<br/>');
}
/*
function logSizes() {
  let ovl = document.getElementById('tap_overlay');
  let rect = ovl.getBoundingClientRect();
  let vp = window.visualViewport;
  log(`ovl: ${rect.width.toFixed(2)},${rect.height.toFixed(2)} vp: ${vp.width.toFixed(2)},${vp.height.toFixed(2)}`);
}
*/


function getCardNumber() {
  clz = document.body.className;
  const regex = /card(\d+)/gm;
  let m;

  if ((m = regex.exec(clz)) !== null) {
    return m[1];
  } else {
    console.error("Cannot find cardN class of body element!");
    return "0";
  }
}

function getClozes(str, cardNumber) {
  const regex = new RegExp(`\{\{c${cardNumber}::(.*?)(\}\}|::.*?\}\})`, 'gm')
  //console.log(regex);
	let m;
  const clozes = [];
	while ((m = regex.exec(str)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		m.forEach((match, groupIndex) => {
			//console.log(`Found match, group ${groupIndex}: ${match}`);
     if (groupIndex == 1) {
				clozes.push(match);
			}
		});
	}
  return clozes;
}

function clickHandler(e){
   //console.log(`${e.target.tagName}(${e.target.id})`);
   const tt = e.target
   if ( tt instanceof HTMLElement &&
       ( tt.id === 'qa' || 
         tt.tagName === 'HTML' ||
         tt.tagName === 'LI' ||
         tt.tagName === 'I' )) {
     //log('reveal');
     revealNextCloze();
   }
}


var elements;
var clozes;
var revealed = [];

function revealCloze(i) {
  if (!revealed[i]) {
    elements[i].innerHTML = clozes[i];
    revealed[i] = true;
  }
}

function revealNextCloze() {
  firstUnrevealed = revealed.findIndex ( el => !el );
  //log(firstUnrevealed);
  if (firstUnrevealed != -1) {
    revealCloze(firstUnrevealed);
  } 
}

onUpdateHook.push(function() {
  //console.log(`inside update hook`);

	var text = document.getElementById("rawText").innerHTML ;
	//console.log(text);
	clozes = getClozes(text, getCardNumber());
  //console.log(clozes);
	
	elements = document.querySelectorAll(".cloze");

  if (clozes.length != elements.length) {
    console.error("Inconsistent cound of clozes found in original note text and in the card!");
    return;
  }
  elements.forEach((el, i) => {
    el.addEventListener('click', e => {
      revealCloze(i);
      //log(i);
    })
  });
  revealed.length = elements.length;
  revealed.fill(false);
  
  window.addEventListener('click', clickHandler);

});
