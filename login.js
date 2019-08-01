function getm(){
    var a;
    var b;
function getname(a,b,callback){
   
    if(a=='admin'&&b=='12345'){
        c="success" 
    }
    else{
        c="failure"   
    }
    callback(c);
    }
    var a=document.getElementById("name1").value;
    var b=document.getElementById("name2").value;
    getname(a,b,(d)=>{
        if(d=="success"){
           
            window.location.href='todo.html';
        }
        if(d=="failure"){
            alert("login is failed");
        }    
        });
}