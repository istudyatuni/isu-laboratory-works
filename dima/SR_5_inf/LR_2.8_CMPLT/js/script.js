//Task one
let myParagraph_1 = document.querySelector("#HoverChange");
myParagraph_1.onmouseover = function(){
    this.style.color = "green";
}
myParagraph_1.onmouseout = function(){
    this.style.color = "red";
}

//Task two
let counter_1 = 0;
let myParagraph_2 = document.querySelector("#ClickChange");
myParagraph_2.onclick = function(){
    if(counter_1 == 0)
        this.style.fontSize = '32px';
    if(counter_1 == 1)
        this.style.fontSize = '16px';
    counter_1 = (counter_1 + 1) % 2;
}

//Task tree
let counter_2 = 0;
let myImg_1 = document.getElementById("imgClickCha  nge");
let sources = new Array('img/Cat.jpg','img/Dog.jpg');
myImg_1.onclick = function imgChange(){
    counter_2 = (counter_2 + 1) % 2;
    myImg_1.src = sources[counter_2];
}

//Task four
let myParagraph_3 = document.getElementById("ClickReplace");
myParagraph_3.onclick = function(){
    myParagraph_3.innerHTML = `<img src="img/ReplaceImg.jpg"></img>`;
};

//Task five
let myImg_2 = document.getElementById("SizeChangeImg");
myImg_2.onmouseover = function() { myImg_2.style.width = "300px"};
myImg_2.onmouseout = function() { myImg_2.style.width = "190px"};

//Task six
let myParagraph_4 = document.getElementById("DoublelClick");
myParagraph_4.ondblclick = function() { 
    myParagraph_4.style.padding = "6px";
    myParagraph_4.style.border = "solid 3px #cde";
    myParagraph_4.style.borderRadius = "4px";
};