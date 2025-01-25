function coin(){
    let flip=Math.floor(Math.random()*2);
    if(flip===0){
        document.getElementById("empty").innerHTML="RESULT:HEAD";
        document.getElementById("para").style.display="none";

    }else{
        document.getElementById("empty").innerHTML="RESULT:TAIL";
        document.getElementById("para").style.display="none";
    }
}
