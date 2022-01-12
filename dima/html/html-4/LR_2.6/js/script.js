//Task one
let btn_1_open = document.querySelector("#btn_1_open");
let btn_1_output = document.querySelector("#btn_1_output");
let btn_1_close = document.querySelector("#btn_1_close");

btn_1_open.onclick = () => {
	w1 = window.open("", "window_1", "top=100, left=200, width=500, height=400");
}
btn_1_output.onclick = () =>{
	w1.focus();
	w1.document.write(`<p>Window name: ${w1.name}</p>`);
}
btn_1_close.onclick = () => {
	w1.close();
}

//Task two
let insert = (
	function(){
		let table = document.querySelector('table');
		table.rows[1].cells[0].innerText = "navigator.userAgent";
	    table.rows[1].cells[1].innerText = navigator.userAgent;
	    table.rows[2].cells[0].innerText = "navigator.appVersion";
	    table.rows[2].cells[1].innerText = navigator.appVersion;
	    table.rows[3].cells[0].innerText = "navigator.appName";
	    table.rows[3].cells[1].innerText = navigator.appName;
	    table.rows[4].cells[0].innerText = "navigator.appCodeName";
	    table.rows[4].cells[1].innerText = navigator.appCodeName;
	    table.rows[5].cells[0].innerText = "navigator.platform";
	    table.rows[6].cells[0].innerText = "navigator.javaEnabled()";
	    table.rows[6].cells[1].innerText = navigator.javaEnabled();
	    table.rows[7].cells[0].innerText = "screen.width x screen.height";
	    table.rows[7].cells[1].innerText = `${screen.width} x ${screen.height}`;
	    table.rows[8].cells[0].innerText = "screen.colorDepth";
	    table.rows[8].cells[1].innerText = screen.colorDepth;
	    table.rows[9].cells[0].innerText = "history.length";
	    table.rows[9].cells[1].innerText = history.length;
	    table.rows[10].cells[0].innerText = "location.href";
	    table.rows[10].cells[1].innerText = location.href;
	    table.rows[11].cells[0].innerText = "location.pathnam";
	    table.rows[11].cells[1].innerText = location.pathname;
	    table.rows[12].cells[0].innerText = "location.host";
	    table.rows[12].cells[1].innerText = location.host;
	}());
