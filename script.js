

var arr=['user','user search','followers','user repositories'];
var b=[];
  
  for(var i=0;i<arr.length;i++){
  
    var a = document.createElement('button');
 
 a.innerHTML=arr[i];
 
 document.body.appendChild(a);
 b.push(a);
 }

 b[0].onclick= function(){async function search(name){
    let res=await fetch('https://api.github.com/users/'+name);
    let data=await res.json();
    return data;
}

let user=search('aniruthan');
console.log(user);

user.then((data)=>{
    console.log(data);
});}

b[1].onclick=function(){
    async function search(name){
        let res=await fetch("https://api.github.com/users/"+name+"/repos");
        let data=await res.json();
        return data;
    }
    
    let userrepo=search('aniruthan');
    console.log(userrepo);
    
    userrepo.then((data)=>{
        console.log(data);})

}




 







