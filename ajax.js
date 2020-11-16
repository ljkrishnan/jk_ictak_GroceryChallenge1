function ajax(){
//Creating an XHR object
var xhttp = new XMLHttpRequest();
//Event listner
xhttp.onreadystatechange = function(){
    //Condition
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText); //Parse function will convert JSON format to normal text
        console.log(response);
        var Jlist=response.list;
        console.log(Jlist);
        var output=""
        for(var i=0;i<Jlist.length;i++){
            output += "<tr>"
            output += "<td>" + Jlist[i].slno +"</td>";
            output += "<td>" + Jlist[i].item +"</td>";
            output += "<td>" + Jlist[i].qty +"</td>";
            output += "<td>" + Jlist[i].unit +"</td>";
            output += "<td>" + Jlist[i].catagory +"</td>";
            output += "<td>" + Jlist[i].description +"</td>";
            output += "</tr>"
            
        }
        document.getElementById("demo").innerHTML=output;
    }
}
//Initiation
xhttp.open("GET","list.json",true);
xhttp.send();

}