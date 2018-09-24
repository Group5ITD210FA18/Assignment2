/*CONSTRUCTOR OBJECT TO MAKE VEHICLES FOR USER SPECIFICATION FINDER*/
function Vehicle (make, format, model, price, color, pic, info){
  this.make = make,
  this.format = format,
  this.model = model,
  this.price = price,
  this.color = color,
  this.pic = pic,
  this.info = info,
  this.display = function(){
    return(this.make + ' ' + this.format + ' ' + this.model + ' ' + this.price + this.pic + '<a href= "' + this.info + '" data-ajax="false">For More Information </a>');
  }
};

/*the vehicle objects from the inventory table - working only for color*/

	var vehicle1 = new Vehicle('Lexus','Sedan','ES 350','$38,950','grey','<img src="images/ESSEDAN3.jpg" class="activeDisplay">','luxuryclass.html#luxSedan');
	var vehicle2 = new Vehicle('Lexus','SUV','RX350L','$47,670','color','<img src="images/RXSUVfront.jpg" class="activeDisplay">','luxuryclass.html#luxSuv');
	var vehicle3 = new Vehicle('Lexus','Coupe','LC 500','$92,000','color','<img src="images/LCCoupe.jpg" class="activeDisplay">','luxuryclass.html#luxCoupe');
	var vehicle4 = new Vehicle('Lexus','Coupe','LC 500','$92,000','color','<img src="images/RXSUVfront.jpg" class="activeDisplay">','luxuryclass.html#luxCoupe');
	var vehicle5 = new Vehicle('Lexus','Sedan','IS 300','$38,210','color','<img src="images/RXSUVfront.jpg" class="activeDisplay">','luxuryclass.html#luxCoupe');
	var vehicle6 = new Vehicle('Lexus','SUV','NXh Sport',	'$38,210','color','<img src="RXSUVfront.jpg" class="activeDisplay">','luxuryclass.html#luxCoupe');
	var vehicle7 = new Vehicle('Toyota','Sedan','Corolla XLE',	'$22,135','grey','<img src="images/toyotaCorollaXLE.jpg" class="activeDisplay">','murphyAutoSedan.html');
	var vehicle8 = new Vehicle('Toyota','Sedan','Corolla SE','$21,865','grey','<img src="images/toyotaCorollaSE.jpg" class="activeDisplay">','murphyAutoSedan.html');
	var vehicle9 = new Vehicle('Toyota','Sedan','Corolla XSE','$22,880','grey','<img src="images/toyotaCorollaXSE.jpg" class="activeDisplay">','murphyAutoSedan.html');
	var vehicle10 = new Vehicle('Toyota','SUV','Land Cruiser','$84,765','white','<img src="images/toyotaLandCruiser.jpeg" class="activeDisplay">','murphyAutoSUV.html');
	var vehicle11 = new Vehicle('Toyota','SUV',	'RAV4 XLE','$25,750','grey','<img src="images/toyotaRAV4XLE.jpg" class="activeDisplay">','murphyAutoSUV.html');
	var vehicle12 = new Vehicle('Toyota','SUV',	'Highlander SE','$40,290','red','<img src="images/toyotaHighlanderSE.jpg" class="activeDisplay">','Murphy Truck Page.html');
	var vehicle13 = new Vehicle('Toyota','Truck','2019 4-Runner','$34,910','blue','<img src="images/2019totota4runner.png" class="activeDisplay">','Murphy Truck Page.html');
	var vehicle14 = new Vehicle('Toyota','Truck','2018 Tacoma','$25,400','grey','<img src="images/ToyTacoma.jpg" class="activeDisplay">','Murphy Truck Page.html');
	var vehicle15 = new Vehicle('Toyota','Truck','2019 Tundra','$31,420','red','<img src="images/2019toyotaTundra.jpg" class="activeDisplay">','Murphy Truck Page.html');

	
	var tryCars =[vehicle1, vehicle2, vehicle3,vehicle4,vehicle5,vehicle5,vehicle7,vehicle8,vehicle9,vehicle10,vehicle11,vehicle12,vehicle13,vehicle14,vehicle15]

/*trying with differnt format
var tryCars = [
{'make': 'Lexus', 'format':'Sedan', 'model':'ES 350','price':'$38,950','color':'grey','pic':'<img src="images/ESSEDAN3.jpg" class="activeDisplay">','info':'luxuryclass.html#luxSedan'},
{'make': 'Lexus', 'format':'SUV', 'model':'ES 350','price':'$38,950','color':'grey','pic':'<img src="images/ESSEDAN3.jpg" class="activeDisplay">','info':'luxuryclass.html#luxSedan'},
{'make': 'Toyota', 'format':'Truck', 'model':'ES 350','price':'$38,950','color':'red','pic':'<img src="images/ESSEDAN3.jpg" class="activeDisplay">','info':'luxuryclass.html#luxSedan'},
{'make': 'Toyota', 'format':'Sedan', 'model':'ES 350','price':'$38,950','color':'grey','pic':'<img src="images/ESSEDAN3.jpg" class="activeDisplay">','info':'luxuryclass.html#luxSedan'},
]
*/

/*function to display user specified vehicles on submit*/	

function userVehicle(){
/*clears if submit button is hit more than once w/o new input*/
		document.getElementById("displayCar").innerHTML = "<p></p>";

/*get values from user input*/
		var userMake = document.querySelector("#select-native-5").value;
		var userFormat = document.querySelector("#select-native-6").value;
		var userColor = document.querySelector("#select-native-7").value;
		
		console.log(userMake + userFormat + userColor);
				
/*loop through inventory vehicle objects to match user specs*/

		
/* 9/22 THIS IS WHERE I LEFT OFF, from stackoverflow:
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

var array = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

var resultObject = search("string 1", array);
*/


/* Stack overflow this works to display all but only for color
function search(nameKey, myArray){
	for (var i=0; i < myArray.length; i++) {
        if (myArray[i].color === userColor) {
            console.log(myArray[i]);		
        }
    }
}
		var userDisplay = search(userColor, tryCars);
		console.log(userDisplay);
*/

function search(nameKey, myArray){
	for (var i=0; i < myArray.length; i++) {
        if (myArray[i].color === userColor) {
            console.log(myArray[i]);		
        }
    }
}
		var userDisplay = search(userColor, tryCars);
//		console.log(userDisplay);
		
/*	works only for color, not make or format	
var foo1 = tryCars.filter(car => car.make == userMake);
const result1 = {foo1};
console.log(result1);
*/

/*produce user vehicles list array*/
			var cars =[];

/*code to display vehicles from user spec inputs*/			
			cars = [vehicle1,vehicle2,vehicle3];
		
			for (var i = 0; i < 3; i++){
				document.getElementById("displayCar").innerHTML += cars[i].display() +"<br /><br /><br />";
}}


/*code for reset button logic*/