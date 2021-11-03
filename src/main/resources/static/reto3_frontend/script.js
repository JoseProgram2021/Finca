//START FARM------------------------------------------------------------------------------------------------------------
function getFarm(){
$.ajax({
url:"http://150.230.68.74:8080/api/Farm/all",
type:"GET",
datatype:"JSON",
success:function(response){
showFarm(response);
}
});
}
function showFarm(response){
let myTable="<table>";
	for(i=0;i<response.length;i++){
	myTable+="<tr>";
		myTable+="<td>"+response[i].id+"</td>";
		myTable+="<td>"+response[i].name+"</td>";
		myTable+="<td>"+response[i].address+"</td>";
		myTable+="<td>"+response[i].extension+"</td>";
		myTable+="<td>"+response[i].description+"</td>";
	myTable+="</tr>";
	}
myTable+="</table>";
$("#resultFarm").html(myTable);
}
function saveFarm(){
let var1 = {
name:$("#fname").val(),
address:$("#faddress").val(),
extension:$("#fextension").val(),
description:$("#fdescription").val()
};

$.ajax({
type:'POST',
contentType: "application/json; charset=utf-8",
dataType: 'JSON',
data: JSON.stringify(var1),

url:"http://150.230.68.74:8080/api/Farm/save",


success:function(response) {
console.log(response);
window.location.reload()

},

error: function(jqXHR, textStatus, errorThrown) {
window.location.reload()

}
});
}
//FINAL FARM----------------------------------------------------------------------------------------------------
//START CATEGORY------------------------------------------------------------------------------------------------------------
function getCategory(){
$.ajax({
url:"http://150.230.68.74:8080/api/Category/all",
type:"GET",
datatype:"JSON",
success:function(response){
showCategory(response);
}
});
}
function showCategory(response){
let myTable="<table>";
	for(i=0;i<response.length;i++){
	myTable+="<tr>";
		myTable+="<td>"+response[i].id+"</td>";
		myTable+="<td>"+response[i].name+"</td>";
		myTable+="<td>"+response[i].description+"</td>";
	myTable+="</tr>";
	}
myTable+="</table>";
$("#resultCategory").html(myTable);
}
function saveCategory(){
let var1 = {
name:$("#cname").val(),
description:$("#cdescription").val()
};

$.ajax({
type:'POST',
contentType: "application/json; charset=utf-8",
dataType: 'JSON',
data: JSON.stringify(var1),

url:"http://150.230.68.74:8080/api/Category/save",


success:function(response) {
console.log(response);
window.location.reload()

},

error: function(jqXHR, textStatus, errorThrown) {
window.location.reload()

}
});
}
//FINAL CATEGORY--------------------------------------------------------------------------------------------------------
//$("#items").append(response.items[2].id,response.items[2].address,response.items[2].exension,response.items[2].category_id,response.items[2].name,)
//START CLIENT------------------------------------------------------------------------------------------------------
function getClient(){
$.ajax({
url:"http://150.230.68.74:8080/api/Client/all",
type:"GET",
datatype:"JSON",
success:function(response){
showClient(response);
}
});
}
function showClient(response){
let myTable="<table>";
	for(i=0;i<response.length;i++){
	myTable+="<tr>";
		myTable+="<td>"+response[i].idClient+"</td>";
		myTable+="<td>"+response[i].email+"</td>";
		myTable+="<td>"+response[i].password+"</td>";
		myTable+="<td>"+response[i].name+"</td>";
		myTable+="<td>"+response[i].age+"</td>";
	myTable+="</tr>";
	}
myTable+="</table>";
$("#resultClient").html(myTable);
}
function saveClient(){
let var1 = {
email:$("#clemail").val(),
password:$("#clpassword").val(),
name:$("#clname").val(),
age:$("#clage").val()
};

$.ajax({
type:'POST',
contentType: "application/json; charset=utf-8",
dataType: 'JSON',
data: JSON.stringify(var1),

url:"http://150.230.68.74:8080/api/Client/save",


success:function(response) {
console.log(response);
window.location.reload()

},

error: function(jqXHR, textStatus, errorThrown) {
window.location.reload()

}
});
}
//FINAL CLIENT-------------------------------------------------------------------------------------------------------
//START MESSAGE----------------------------------------------------------------------------------------------------
function getMessage(){
$.ajax({
url:"http://150.230.68.74:8080/api/Message/all",
type:"GET",
datatype:"JSON",
success:function(response){
showMessage(response);
}
});
}
function showMessage(response){
let myTable="<table>";
	for(i=0;i<response.length;i++){
	myTable+="<tr>";
		myTable+="<td>"+response[i].idMessage+"</td>";
		myTable+="<td>"+response[i].messageText+"</td>";
	myTable+="</tr>";
	}
myTable+="</table>";
$("#resultMessage").html(myTable);
}
function saveMessage(){
let var1 = {
messageText:$("#mmessageText").val()
};

$.ajax({
type:'POST',
contentType: "application/json; charset=utf-8",
dataType: 'JSON',
data: JSON.stringify(var1),

url:"http://150.230.68.74:8080/api/Message/save",


success:function(response) {
console.log(response);
window.location.reload()

},

error: function(jqXHR, textStatus, errorThrown) {
window.location.reload()

}
});
}
//FINAL MESSAGE----------------------------------------------------------------------------------------------------
//START RESERVATION------------------------------------------------------------------------------------------------
function getReservation(){
$.ajax({
url:"http://150.230.68.74:8080/api/Reservation/all",
type:"GET",
datatype:"JSON",
success:function(response){
showReservation(response);
}
});
}
function showReservation(response){
let myTable="<table>";
	for(i=0;i<response.length;i++){
	myTable+="<tr>";
		myTable+="<td>"+response[i].idReservation+"</td>";
		myTable+="<td>"+response[i].startDate+"</td>";
		myTable+="<td>"+response[i].devolutionDate+"</td>";
		myTable+="<td>"+response[i].status+"</td>";
	myTable+="</tr>";
	}
myTable+="</table>";
$("#resultReservation").html(myTable);
}
function saveReservation(){
let var1 = {
startDate:$("#rstartDate").val(),
devolutionDate:$("#rdevolutionDate").val(),
status:$("#rstatus").val()
};

$.ajax({
type:'POST',
contentType: "application/json; charset=utf-8",
dataType: 'JSON',
data: JSON.stringify(var1),

url:"http://150.230.68.74:8080/api/Reservation/save",


success:function(response) {
console.log(response);
window.location.reload()

},

error: function(jqXHR, textStatus, errorThrown) {
window.location.reload()

}
});
}
//FINAL RESERVATION----------------------------------------------------------------------------------------------