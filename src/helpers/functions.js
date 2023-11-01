export function scrollToId(id) {
	window.scrollTo({
		top: document.getElementById(id).offsetTop,
		behavior: 'smooth',
	});
}
