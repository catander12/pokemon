
$( document ).ready(function() {


$("#generate").on("click", function(){
	$("#generate").remove();
	for(i=0;i<36;i++){
		var tile = $(`<div class='tiles A${i}'>`);
		$("#board").append(tile);

	}

	var grass = $("<img class='grass' src='img/Grass.png'>")
		$(".tiles").append(grass);

	var tile = $(`<img class="player" src="img/player_up.png">`);	
	$(".A34").append(tile);
	generate();
})


//variables 
var loca = 34;

var left = [0,6,12,18,24,30];
var right = [5,11,17,23,29,35];

//your party
var party = [
{	name:"Septile",
	HP:214,
	attack:78,
	defense:34,
	spAttack:23,
	spDefense:34,
	speed:189,
	Moves:[{	
		name:"Razor Leaf",
		pp:15,
	},
	{
		name:"Leach Seed",
		pp:20,
	},
	{
		name:"Leaf Blade",
		pp:5,
	},
	{
		name:"Slash",
		pp:10,
	}],

},
{	name:"Magikarp",
	HP:130,
	attack:14,
	defense:25,
	spAttack:23,
	spDefense:34,
	speed:58,
	Moves:[{	
		name:"Splash",
		pp:30,
	},
	{
		name:"Bounce",
		pp:15,
	},
	{
		name:"----",
	
	},
	{
		name:"----",
		
	}],

}
]
// console.log(party[1].Moves[1].name)

// party[1].Moves[1].name = "Bubble Beam"
// party[1].Moves[1].pp --

// console.log(party[1].Moves[1].name)
// console.log(party[1].Moves[1].pp)


	
	
		
//movement

$(document).keydown(function(e){
    e.preventDefault();
    //left
    if (e.keyCode == 37) { 

    	//checks to see if its at a wall
    	if(check(left)){

    		//subtracts one from the coordinate, moving it left
	       loca --;
	       //removes the previous player icon
			$(".player").remove();
			//creates a new one
			var tile = $("<img class='player' src='img/player_left.png'>");

			//cerates the coordinate that jquery can read
			var coordinate = ".A" + loca;

			console.log(coordinate);
			//places the new player icon one left
			$(coordinate).append(tile);

		}	
    }
    //up
   if(e.keyCode == 38){
	   	if(loca > 6 ){
	    	loca = loca - 6;
			$(".player").remove();
			var tile = $("<img class='player' src='img/player_up.png'>");
			var coordinate = ".A" + loca;

			console.log(coordinate);
			$(coordinate).append(tile);
		}
    }
    //right
    if(e.keyCode == 39){
    	if(check(right)){

	    	loca ++;
			$(".player").remove();
			var tile = $("<img class='player' src='img/player_right.png'>");
			var coordinate = ".A" + loca;

			console.log(coordinate);
			$(coordinate).append(tile);
		}
    }
    //down
    if(e.keyCode == 40){
    	if(loca < 30){

	    	loca = loca + 6;

			$(".player").remove();

			var tile = $("<img class='player' src='img/player_down.png'>");
			var coordinate = ".A" + loca;

			console.log(coordinate);
			$(coordinate).append(tile);
		}
    }
   var color = $(".player").parent().css("background-color");
   console.log(color);
   encounter(color);

});



//functions

//generates 3 random encounter squares
function generate(){
	for(i=0;i<15;i++){
		var coord = '.A' + Math.floor(Math.random() * (35 + 1));;
		$(coord).css("background-color","lightgreen");
		var tallGrass = $("<img class='tallGrass' src='img/tallgrass.png'>");
		$(coord).append(tallGrass);

	}
}

//decides if theres an encounter when walked on a green space
function encounter(space){
	if(space == "rgb(144, 238, 144)"){
		console.log("encounter!")
		if(Math.floor(Math.random() * (4))+1 == 4){
			$(".encounter").modal('toggle');
		};

	};
}

//checks for wall
function check(arr){
	for(i=0;i<arr.length;i++){
		if(arr[i] == loca){
			return false;
		}
	}
	return true;
}


    
});
