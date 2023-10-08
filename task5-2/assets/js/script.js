 /*section SEE-WHY-CUSTOMERS-LOVE-THE-OUR-MOBILES*/ 
 var previousIconId = null;
  function toggleIconText(iconId) {
    var textElementId = 'text' + iconId.slice(-1);
    var textElement = document.getElementById(textElementId);

    var iconElement = document.getElementById(iconId);
    if (previousIconId !== null && previousIconId !== iconId) {
      var previousTextElementId = 'text' + previousIconId.slice(-1);
      var previousTextElement = document.getElementById(previousTextElementId);
      var previousIconElement = document.getElementById(previousIconId);

      if (previousIconElement.classList.contains('fa-minus')) {
        previousIconElement.classList.remove('fa-minus');
        previousIconElement.classList.add('fa-plus');
        previousTextElement.textContent = '';
      }
    }

    if (iconElement.classList.contains('fa-plus')) {
      iconElement.classList.remove('fa-plus');
      iconElement.classList.add('fa-minus');
      textElement.textContent = 'Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.';
    } else {
      iconElement.classList.remove('fa-minus');
      iconElement.classList.add('fa-plus');
      textElement.textContent = '';
    }

    previousIconId = iconId;
  }
  /*end section SEE-WHY-CUSTOMERS-LOVE-THE-OUR-MOBILES */
function showHiddenText(){
  var hiddenText=document.getElementById('hiddenText');
  var card=document.querySelector (".card");
  hiddenText.style.display='block';
  card.style.bordercolor='red';
}
function hiddenText(){
  var hiddenText=document.getElementById('hiddenText');
  hiddenText.style.display='none';
}

let scroolContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("BackBtn");
let nextBtn=document.getElementById("NextBtn");

nextBtn.addEventListener("click", ()=> {
  scroolContainer.style.scrollBehavior ="smooth";
  scroolContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
  scroolContainer.style.scrollBehavior ="smooth";
  scroolContainer.scrollLeft -=900;
  });