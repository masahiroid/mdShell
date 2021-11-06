/***********************************************************************
 * CUSTOM GLOBAL FUNCTIONS
 ***********************************************************************/
function local_save() { 
var fm_text = document.getElementById("foo").value;
//save_web_data("foo_a1",fm_text);
window.localStorage.setItem("foo_a1",fm_text);
}

function local_load() { 
var referer = window.localStorage.getItem("foo_a1"); 
document.getElementById("foo").value = referer;
}

/***********************************************************************
 * CUSTOM GLOBAL FUNCTIONS
 ***********************************************************************/
function local_save_a() { 
var fm_texta = document.getElementById("fooo").value;
//save_web_data("fooo_a1",fm_texta);
window.localStorage.setItem("fooo_a1",fm_texta);
}

function local_load_a() { 
var referera = window.localStorage.getItem("fooo_a1"); 
document.getElementById("fooo").value = referera;
}

/***********************************************************************
 * CUSTOM GLOBAL FUNCTIONS
 ***********************************************************************/
function local_save_b() { 
var fm_textb = document.getElementById("foooo").value;
window.localStorage.setItem("foooo_a1",fm_textb);
}

function local_load_b() { 
var refererb = window.localStorage.getItem("foooo_a1"); 
document.getElementById("foooo").value = refererb;
}

/***********************************************************************
 * CUSTOM GLOBAL FUNCTIONS
 ***********************************************************************/
function local_save_c() { 
var fm_textc = document.getElementById("fooooo").value;
//save_web_data("fooooo_a1",fm_textc);
window.localStorage.setItem("fooooo_a1",fm_textc);
}

function local_load_c() { 
var refererc = window.localStorage.getItem("fooooo_a1"); 
document.getElementById("fooooo").value = refererc;
}
