//Task one
let drag_flag = false
let img_id = ""
function drag_img() {
    drag_flag = true
    img_id = '#' +  event.srcElement.id
}
$('html').mousemove(()=>{
    if(drag_flag){
        $(img_id).css('top', event.clentY)
        $(img_id).css('left', event.clentX)
        //resizetext()
    }
})
// let tracked = document.querySelector('html')
// tracked.onmousemove = () => {
//     if (drag_flag){
//         document.all[img_id].style.top = event.clientY + 'px'
//         document.all[img_id].style.left = event.clientX + 'px'
//     }
// }
$('html').mouseup(()=>{
    flag = false
})
// tracked.onmouseup = () =>  {
//     drag_flag = false
// }
// function drag_text() {
//     drag_flag = true
//     img_id = event.srcElement.id
// }