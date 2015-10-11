function displayAltText (node) {
	var altTextContainer,
		altFuzzText = document.getElementById('fuzz-text');

	altFuzzText.style.display = altFuzzText.style.display === "none" ? 'block' : 'none';

	altTextContainer = document.getElementById('alt-text-container');
	altTextContainer.className = altTextContainer.className === 'show' ? 'hide' : 'show';
}


(function () {
	'use strict';	
	var altElement,
		altText,
		altTextContainer,
		altFuzzText,
		altFuzz,
		comicDiv;

	comicDiv = document.getElementById('comic');

	altElement = document.createElement('div'),

	altFuzzText = document.createElement('div');
	altFuzzText.id = 'fuzz-text';
	altFuzzText.innerHTML = 'Click a panel to display alt text';

	altTextContainer = document.createElement('div');
	altTextContainer.id = 'alt-text-container';
	altTextContainer.className = 'hide';

	altText = document.createElement('div');
	altText.id = 'alt-text'

	altTextContainer.appendChild(altText);

	altElement.appendChild(altTextContainer);
	altElement.appendChild(altFuzzText);


	altElement.id = 'alt-element';

	comicDiv.appendChild(altElement);

	// for each alt-element child, on click display alt text for specific comic (supports multi pane comics)
	for (var i = 0; i < comicDiv.children.length; i++) {
		altText.innerHTML += comicDiv.children[i].title;
		comicDiv.children[i].addEventListener('click', displayAltText.bind(null, comicDiv.children[i]));
	}
}());