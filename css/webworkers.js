function big() {
    var worker = new Worker("bigtask.js");
    worker.onmessage= function(event) { 
    document.writeln("Number of iteration is :"+event.data+" Iterations");
}

// for(var i=0;i<=1000000000;i+=1){
//     var j=i;
// }
// alert("Number of iteration is :"+j+" Iterations");

}

function small(){
    document.writeln("It is just a small function");
}