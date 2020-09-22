//  declare variables here
let currentDay = moment().format('MMMM Do YYYY');

//  the current day is displayed at the top of the calendar
$("#currentDay").text(currentDay);



//create label, input, and save layout 
let timeblock = document.createElement("div")


var myvar = '<div id="9AM" class="row">'+
'        <label for="label-input" class="col-md-2 hour">9AM</label>'+
'        <input type="text" placeholder="What do you need to schedule today?" id="hour-9" class="col-md-8 time-block" name="label-input">'+
'        <button id="btn-9" class="saveBtn col-md-2"><img src="./assets/save1.jpg"></button>'+
'      </div>';
	
function init() {

    myvar = document.createElement('<div class="container">');
        
};

console.log(init)

init();