var object_to_detect = "";
var su;

function person(params) {
    object_to_detect = "person"; 
    localStorage.setItem('otd',object_to_detect );

}
function shoe(params) {
    object_to_detect = "shoe"; 
    localStorage.setItem('otd',object_to_detect );

}
function tie(params) {
    object_to_detect = "tie"; 
    localStorage.setItem('otd',object_to_detect );

}
function submit(){
    su = document.getElementById("other").value;
    localStorage.setItem('otd',su);
}