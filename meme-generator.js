const form = document.querySelector('form');
const section = document.querySelector('section');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const container = document.createElement('div');
	const newMeme = document.createElement('img');
	const topTxtDiv = document.createElement('div');
	const bottomTxtDiv = document.createElement('div');
	const url = document.querySelector('#url');
	const topTxtInput = document.querySelector('#top');
	const bottomTxtInput = document.querySelector('#bottom');

	container.classList.add('container');
	newMeme.classList.add('image');
	newMeme.setAttribute('src', url.value);
	newMeme.setAttribute('alt', 'Wrong URL');
	topTxtDiv.classList.add('top');
	topTxtDiv.innerText = topTxtInput.value.toUpperCase();
	bottomTxtDiv.classList.add('bottom');
	bottomTxtDiv.innerText = bottomTxtInput.value.toUpperCase();
	container.append(newMeme);
	container.append(topTxtDiv);
	container.append(bottomTxtDiv);
	section.append(container);
	form.reset();
});

section.addEventListener('click', function (e) {
	if (e.target.tagName === 'IMG') {
		e.target.parentElement.remove();
	}
});
