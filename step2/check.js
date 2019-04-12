var checkbox = document.getElementsByClassName('checkbox')[0];
var checkall = document.getElementsByClassName("checkall")[0];
var checkboxs = checkbox.getElementsByTagName('span');
var radiobox = document.getElementsByClassName("radio")[0];
var radios = radiobox.getElementsByTagName("span");
//复选
for(let i =0; i < checkboxs.length;i++) {
    checkboxs[i].addEventListener("click", function(){
        // console.log(this)
        if(this.getAttribute("clicked") === '1') {
            this.style.border = '1px solid blue';
            
            this.setAttribute("clicked", 0)
        } else {
            this.style.border = '1px solid red';
            this.setAttribute("clicked", 1)
        }
    })
}

function clearAllradios () {
    for(let i = 0; i < radios.length;i++) {
        radios[i].style.border = '1px solid blue';
    }
}

// 单选
for(let i = 0; i < radios.length;i++) {
    radios[i].addEventListener("click", function(){
        // console.log(this)
        clearAllradios();
        this.style.border = '1px solid red';
    })
}

checkall.onclick = function() { 
    var clickEv = new Event('click');
    if(this.getAttribute("clicked") === '1') {
        for(let i =0; i < checkboxs.length;i++) {
            checkboxs[i].setAttribute("clicked", 1);
            checkboxs[i].dispatchEvent(clickEv);
        }
        this.setAttribute("clicked", 0)
    } else {
        for(let i =0; i < checkboxs.length;i++) {
            checkboxs[i].setAttribute("clicked", 0);
            checkboxs[i].dispatchEvent(clickEv);
        }
        this.setAttribute("clicked", 1)
    }

    
 };

// //全选
// var checkbox = document.getElementsByClassName('checkbox')[0];
// // console.log(checkbox)
// var checkboxs = checkbox.getElementsByTagName('span');
// // console.log(checkboxs)
// var count = 0;
// function checkAll () {
//     count++;
//     for(var i = 0; i < checkboxs.length; i++){
//         if(count % 2 == 1 )
//             checkboxs[i].style.backgroundColor = "red";
//         else 
//             checkboxs[i].style.backgroundColor = "black";
//     }
// }

// //复选
// function check(){
//     this.count++;
//     if(this.count % 2 == 1)
//         this.style.backgroundColor = "red";
//     else 
//         this.style.backgroundColor = "black";
//     if(this.count > 2)
//     this.count -= 2;
// }
// //单选
// var single = document.getElementsByClassName('radio')[0];
// var radios = single.getElementsByTagName('span');
// function select(){
//     for(var i = 0; i < radios.length; i++){
//         radios[i].style.backgroundColor = "black";
//     }
//     this.style.backgroundColor = "red";
// }
// function addOnclick(){
//     //绑定全选事件
//     document.getElementsByClassName("checkall")[0].onclick = checkAll;
//     //绑定单选事件
//     for(var i = 0; i < radios.length; i++){
//         radios[i].onclick = select;
//     }    
//     //绑定复选事件
//     for(var j = 0; j < checkboxs.length; j++){
//         checkboxs[j].onclick = check;
//         checkboxs[j].count = 0;
//     }

// };
// addOnclick();