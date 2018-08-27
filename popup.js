'use strict';

function searchAndOpen() {
	const theText = document.getElementById('theTextArea').value;
	const foundIDs = theText.match(/[0-9]{4,}/g);
	if(foundIDs && foundIDs.length > 0) {
		let max = document.getElementById('max').value;
		max = Math.max(1, max);
		max = Math.min(20, max);
		let count = 0;
		
		let uniqueArray = [];
		foundIDs.forEach(function(element) {
			if(!uniqueArray.includes(element)) {
				uniqueArray.push(element);
			}
		});

		uniqueArray.forEach(function(element) {
			count++;
			if(count <= max) {
				chrome.tabs.create({
					url: 'https://pixta.jp/photo/'+element
				});
			}
		});
		window.close();
	}
	else {
		document.getElementById('error').style.display = 'block';
	}
}
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('exec').addEventListener('click', function(e) {
		document.getElementById('error').style.display = 'none';
		setTimeout(function() {
			searchAndOpen();
		}, 100);
	});
	document.getElementById('theTextArea').focus();
});
