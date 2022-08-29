function getFilenameFromUrl(url) {
	return decodeURIComponent(url.split('/').slice(-1)[0].split('?')[0]);
}

exports.getFilenameFromUrl = getFilenameFromUrl;
