// 1
$('#change-color').mouseover(function () {
	$(this).css('color', 'green')
})

// 2
$('#change-font-size').click(function () {
	$(this).css('fontSize', '1.5em')
})

// 3
$('#change-image').click(function () {
	$(this).attr('src', 'doge.jpg')
})

// 4
$('#change-text-to-img').click(function () {
	$(this).html('<img src="cat.jpg">')
})

// 5
$('#change-width').mouseover(function () {
	$(this).attr('width', 220)
})
$('#change-width').mouseout(function () {
	$(this).attr('width', 200)
})

// 6
$('#change-border').dblclick(function () {
	$(this).css('border', 'double')
})
