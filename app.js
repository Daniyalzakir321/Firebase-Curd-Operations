var a=document.getElementById("a")
var b=document.getElementById("b")
var c=document.getElementById("c")
var d=document.getElementById("d")

function adding(){
firebase.database().ref("Database/"+a.value).set({
    Id: a.value,
    Name: b.value,
    Mail: c.value,
    Remarks: d.value
})
a.value=""
b.value=""
c.value=""
d.value=""
}


function search(){
firebase.database().ref("Database/"+a.value).on("value",function(data){
    b.value= data.val().Name,
    c.value= data.val().Mail,
    d.value= data.val().Remarks
})
}


function update(){
firebase.database().ref("Database/"+a.value).set({
    Id: a.value,
    Name: b.value,
    Mail: c.value,
    Remarks: d.value
})
a.value=""
b.value=""
c.value=""
d.value=""
}


function del(){
firebase.database().ref("Database/"+a.value).remove()  
}