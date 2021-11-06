function buttonClick() {
var t1 =document.getElementById("textbox1");
var t2 = document.getElementById("textbox2");
var t3 = document.getElementById("textbox3");
var t4 = document.getElementById("textbox4");
var t5 = document.getElementById("textbox5");
var cstr = t5.value.concat(t4.value,t1.value,t3.value,t2.value);
var t6 = document.getElementById("textbox6");
t6.value = cstr;
}