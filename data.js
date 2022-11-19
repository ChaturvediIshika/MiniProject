import {getDatabase,ref,get,set,update,remove,child} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

var names, email, subject;
const db=getDatabase();

var nameV=document.getElementById("name");
var emailV=document.getElementById("email");
var subjectV=document.getElementById("subject");

function insertData(event){
    event.preventDefault();
    readFormData();
    set(ref(db,"data/"+names),{
        email: email,
        name:names,
        subject:subject,
    }).then(()=>{
        alert("Done");
    }).catch((error)=>{
        alert("Unsuccessful ",error);
    }); 
    clearform();
}
function readFormData(){
    names=nameV.value;
    email=emailV.value;
    subject=subjectV.value;
}
function clearform(){
    nameV.value="";
    emailV.value="";
    subjectV.value="";
}
document.querySelectorAll(".btn")[0].onclick=insertData;
