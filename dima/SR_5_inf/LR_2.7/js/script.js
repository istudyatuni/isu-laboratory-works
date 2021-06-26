//Task three
let btn_print = document.querySelector("#btn_print")
btn_print.onclick = () => {
    let addItem = (function() {
        let markedCheckbox = document.getElementsByName('inlineCheckbox');
        let ul = document.createElement('ul');
        ul.className = ('container my-4');
        document.body.after(ul);
        return function(){
            for (let checkbox of markedCheckbox) {
                if (checkbox.checked){
                  let li = document.createElement('li');
                  li.innerHTML = `<u>${checkbox.value}</u>`;
                  ul.append(li);
                }
              }        
        }
    }());
    addItem();
    let div = document.createElement('div');
    div.className = ('container my-4');
    div.innerHTML = 
    `
    </br>
    <u>${document.forms["data"].textarea.value}</u>
    </br>
    Student <u>${document.forms["data"].surname.value}</u> specialty <u>${document.forms["data"].specialty.value}</u> course <u>${document.forms["data"].inlineRadioOptions.value}</u> must take the following subjects:
    `;
    
    document.body.append(div);
    btn_print.disabled = 'true';
}