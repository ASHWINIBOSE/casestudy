$(document).ready(function(){
    var c=0;
    $.ajax({
    type:"GET",
    url:"https://jsonplaceholder.typicode.com/todos",
        success:function(data){
           var output="<table class='table'><thead><tr><th>id</th><th>title</th></tr></thead>"
           for(var j in data){
               output+="<tr><td>"+data[j].id+"</td>"
               output+="<td>"+data[j].title+"</td>"
                
               var s=data[j].completed;
                if(s==true){
                 output+="<td><input type='checkbox' checked disabled></td></tr>"
                 }
                 else{
               output+="<td><input type='checkbox'></td></tr>"
                 }

                }
        
           output+="</table>";
            $("#result").html(output);

            $('input[type="checkbox"]').click(function(){
                if($(this).prop("checked")===true){
                    c++;
                }
                else{
                    c--;
                }
                var m=new Promise((resolve,reject)=>{
                    if(c>=5){
                        resolve();
                    }
                    else{
                        reject(); 
                    }
                });
                m.then(()=>{
                    alert("Congrats. 5 Tasks have been Successfully Completed ");
                }).catch(()=>{
                });
            
    
            });


        }
    });
      
    });