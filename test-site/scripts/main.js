var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/maisie_bed.jpg') {
		myImage.setAttribute('src', 'images/maisie_bed_hi.jpg');
	} else {
		myImage.setAttribute('src', 'images/maisie_bed.jpg');
	}
}


var myButton = document.querySelector('button');
var myPhrase = document.querySelector('#user');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myPhrase.textContent = 'Cuddling with ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myPhrase.textContent = 'cuddling with ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}