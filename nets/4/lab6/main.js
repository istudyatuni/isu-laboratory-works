function sensitive_table() {
	let data = [
		['property', 'value'],
		['browser version', navigator.appVersion],
		['browser name', navigator.appName],
		['browser code name', navigator.appCodeName],
		['OS', navigator.platform],
		['is Java enabled', navigator.javaEnabled()],
		['width', screen.width],
		['height', screen.height],
		['color depth', screen.colorDepth],
		['history urls', history],
		['current url', location.href],
		['path to load document', location.pathname],
		['domain name', location.host],
	]

	let html_table = '<table border="1">' + data.map((element) =>
		'<tr>' + element.map((inner) =>
			'<td>' + inner + '</td>'
		) + '</tr>'
	) + '</table>'
	html_table = html_table.split(',').join('')

	document.getElementById('table').innerHTML = html_table
}
