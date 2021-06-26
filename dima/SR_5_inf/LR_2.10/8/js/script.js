//Task one
$('#HoverChange').mouseover(function(){
    $(this).css('color','red')
})
$('#HoverChange').mouseout(function(){
    $(this).css('color','green')
})

//Task two
$('#ClickChange').click(function(){
    $(this).css('fontSize','32px')
})

//Task three
$('#imgClickChange').click(function(){
	$(this).attr('src', 'img/Cat.jpg')
})

//Task four
$('#ClickReplace').click(function(){
    $(this).html('<img src="img/Replaceimg.jpg">')
})

//Task five

$('#SizeChangeImg').mouseover(function(){
	$(this).attr('width', 300)
})
$('#SizeChangeImg').mouseout(function(){
	$(this).attr('width', 190)
})

//Task six
$('#DoublelClick').dblclick(function () {
	$(this).css('border', 'solid 3px #cde')
})
