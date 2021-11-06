/***********************************************************************
 * CUSTOM GLOBAL FUNCTIONS
 ***********************************************************************/
function local_save() { 
var komorebi_text = document.getElementById("komorebi").value;
window.localStorage.setItem("komorebi_a1",komorebi_text);
}

function local_load() { 
var refererl = window.localStorage.getItem("komorebi_a1"); 
document.getElementById("komorebi").value = refererl;
}

function local_save_1() { 
var kirakira_text = document.getElementById("kirakira").value;
window.localStorage.setItem("kirakira_a1",kirakira_text);
}

function local_load_1() { 
var refererl = window.localStorage.getItem("kirakira_a1"); 
document.getElementById("kirakira").value = refererl;
}

function local_save_2() { 
var harawata_text = document.getElementById("harawata").value;
window.localStorage.setItem("harawata_a1",harawata_text);
}

function local_load_2() { 
var refererl = window.localStorage.getItem("harawata_a1"); 
document.getElementById("harawata").value = refererl;
}