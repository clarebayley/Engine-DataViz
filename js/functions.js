var APIkey = "AIzaSyDHC7RCqCmH--nuvGYz9JU2uMkDBjQMHl4";

var countyLines = "0IMZAFCwR-t7jZnVzaW9udGFibGVzOjIxMDIxNw";
var stateLines  = "17aT9Ud-YnGiXdXEJUyycH2ocUqreOeKGbzCkUw";
var stateLinesMap;

var countyLayers = {};
var countyMaps = {
	"2002": "1i9RCtf6irqJRw8mzDxKWq2lUeFjT8JqMObfu5uA",
	"2003": "1-uxBHA6RUb8gu69UY9bWTgFybP1vLmvszgbLDH0",
	"2004": "1imU3aS3Rfd3JSfRzmwfDlG92rw61B6WVQWIcD0k",
	"2005": "10ut_hsQjAN_eobcSzt-_to16DNMtRV4q_uBbqfY",
	"2006": "1HKnRjNRpjr0I3i63hha23YibWVgCTbPhp1cyRjE",
	"2007": "1gzNF_EsGRrY1VkkoTyZH-m2Jldv5dw62osL3X3M",
	"2008": "1p967dDJB_YNMGdyk3vrNMtogzn4KPTnAWBQxkew",
	"2009": "15iNEZOJQapxIlMCXe4TpGyMrGI1MS1KhNUubGOI",
	"2010": "1IuwM6Mu2sdJWC5Mmo6gFAI1mWRwfxIc71kdqpis",
	"2011": "1zIwNKwoFPH_IRIH3tSSUI03XPT-VsKN_-1RsDWo"
};

var stateLayers = {};
var stateMaps = {
	"2002": "1Hho4EcTvg91-QXIVxnmVt53U6Gn3iJJRR6FaXaY",
	"2003": "1c4tjNeJE0RIAG1YgW4wbhw67p1LAuWsMgROVgWw",
	"2004": "121BLYiUk_KCd-nV0zkHuytMjAHw6HCyCG_RBWMs",
	"2005": "1L7_-3XzvnOkPy0PcS7n1dLScwghY2UcYKhPZEaY",
	"2006": "1m6J4OSTmYukY1PegLUzAN0DMk9C5Qv4P5W4uq9I",
	"2007": "1NUcVRZc_pUUHkBtV2J7cDhlt-DqHlSLN6cK8QTs",
	"2008": "1dBQBJ2qg8f_CPveESoJNAcb_PuWGK3-T6WOehfk",
	"2009": "1RQys_ACUA6KHFFc_bqvHOxcaAY4zm2RAmN05c_I",
	"2010": "1e4limiat7F8bwUzYoB8LQjSbo-3OcO224M23gmU",
	"2011": "1aulYPwQ5hCrXYYeNYLAukUzS6TGYvlkyQaSP9Do"
};

var state_abbr = {
  'AL' : 'Alabama',
  'AK' : 'Alaska',
  'AS' : 'America Samoa',
  'AZ' : 'Arizona',
  'AR' : 'Arkansas',
  'CA' : 'California',
  'CO' : 'Colorado',
  'CT' : 'Connecticut',
  'DE' : 'Delaware',
  'DC' : 'District of Columbia',
  'FM' : 'Micronesia1',
  'FL' : 'Florida',
  'GA' : 'Georgia',
  'GU' : 'Guam',
  'HI' : 'Hawaii',
  'ID' : 'Idaho',
  'IL' : 'Illinois',
  'IN' : 'Indiana',
  'IA' : 'Iowa',
  'KS' : 'Kansas',
  'KY' : 'Kentucky',
  'LA' : 'Louisiana',
  'ME' : 'Maine',
  'MH' : 'Islands1',
  'MD' : 'Maryland',
  'MA' : 'Massachusetts',
  'MI' : 'Michigan',
  'MN' : 'Minnesota',
  'MS' : 'Mississippi',
  'MO' : 'Missouri',
  'MT' : 'Montana',
  'NE' : 'Nebraska',
  'NV' : 'Nevada',
  'NH' : 'New Hampshire',
  'NJ' : 'New Jersey',
  'NM' : 'New Mexico',
  'NY' : 'New York',
  'NC' : 'North Carolina',
  'ND' : 'North Dakota',
  'OH' : 'Ohio',
  'OK' : 'Oklahoma',
  'OR' : 'Oregon',
  'PW' : 'Palau',
  'PA' : 'Pennsylvania',
  'PR' : 'Puerto Rico',
  'RI' : 'Rhode Island',
  'SC' : 'South Carolina',
  'SD' : 'South Dakota',
  'TN' : 'Tennessee',
  'TX' : 'Texas',
  'UT' : 'Utah',
  'VT' : 'Vermont',
  'VI' : 'Virgin Island',
  'VA' : 'Virginia',
  'WA' : 'Washington',
  'WV' : 'West Virginia',
  'WI' : 'Wisconsin',
  'WY' : 'Wyoming',
  'US' : 'United States of America'
};

var usa = "US";

var dataDefaults = {
	"2002": {
		'ht_share': {'value': 5.3},
		'tech_growth': {'value': -6.3},
		'total_growth': {'value': -0.5}, 
		'state': {'value': usa},
		'starts': {'value': '72,486'} 
	},
	"2003": {
		'ht_share': {'value': 5.1},
		'tech_growth': {'value': -3.2},
		'total_growth': {'value': -0.1}, 
		'state': {'value': usa},
		'starts': {'value': '49,835'} 
	},
	"2004": {
		'ht_share': {'value': 5.2},
		'tech_growth': {'value': 2.0},
		'total_growth': {'value': 1.8}, 
		'state': {'value': usa},
		'starts': {'value': '61,825'} 
	},
	"2005": {
		'ht_share': {'value': 5.2},
		'tech_growth': {'value': 3.1},
		'total_growth': {'value': 1.9}, 
		'state': {'value': usa},
		'starts': {'value': '74,766'} 
	},
	"2006": {
		'ht_share': {'value': 5.3},
		'tech_growth': {'value': 3.5},
		'total_growth': {'value': 1.7}, 
		'state': {'value': usa},
		'starts': {'value': '51,026'} 
	},
	"2007": {
		'ht_share': {'value': 5.4},
		'tech_growth': {'value': 3.4},
		'total_growth': {'value': 0.9}, 
		'state': {'value': usa},
		'starts': {'value': '70,802'} 
	},
	"2008": {
		'ht_share': {'value': 5.6},
		'tech_growth': {'value': -0.01},
		'total_growth': {'value': -2.3}, 
		'state': {'value': usa},
		'starts': {'value': '69,721'} 
	},
	"2009": {
		'ht_share': {'value': 5.5},
		'tech_growth': {'value': -6.0},
		'total_growth': {'value': -5.3}, 
		'state': {'value': usa},
		'starts': {'value': '57,794'} 
	},
	"2010": {
		'ht_share': {'value': 5.6},
		'tech_growth': {'value': 1.7},
		'total_growth': {'value': 1.1}, 
		'state': {'value': usa},
		'starts': {'value': ''} 
	},
	"2011": {
		'ht_share': {'value': 5.6},
		'tech_growth': {'value': 2.6},
		'total_growth': {'value': 1.9}, 
		'state': {'value': usa},
		'starts': {'value': ''} 
	}
};

var map;
var removeMapLabels;

var firstGuess = true;
var guessListener;
//var infoWindow;

var pinImage = "/Engine-DataViz/images/pin.png";
var pinImageGrey = "/Engine-DataViz/images/pin_grey.png";
var pinImageTrans = "/Engine-DataViz/images/pin_grey_trans.png";
var pinShadow = new google.maps.MarkerImage("/Engine-DataViz/images/shadow.png",
					new google.maps.Size(27, 37),
					new google.maps.Point(0,0),
					new google.maps.Point(3, 37));

//var pinImageOrange = new google.maps.MarkerImage("/techjobs/images/pin_circle_orange.png",
//					new google.maps.Size(46, 55),
//					new google.maps.Point(0,0),
//					new google.maps.Point(23, 33));
//
//var pinImageGrey = new google.maps.MarkerImage("/techjobs/images/pin_circle_grey.png",
//					new google.maps.Size(46, 55),
//					new google.maps.Point(0,0),
//					new google.maps.Point(23, 33));

var guesses = [];
var answers = [
//	new google.maps.LatLng(37.339386,-121.894955), //san jose, ca
//	new google.maps.LatLng(38.266792,-76.453841), //lexington park, md
	{ position: new google.maps.LatLng(40.014986,-105.270546), name:  "Boulder, CO"}, //boulder, co
	{ position: new google.maps.LatLng(34.730369,-86.586104), name:  "Huntsville, AL"}, //huntsville, al
	{ position: new google.maps.LatLng(42.373616,-71.109733), name:  "Cambridge, MA"}, //cambridge, ma
	{ position: new google.maps.LatLng(47.60621,-122.332071), name:  "Seattle, WA"}, //seattle, wa
	{ position: new google.maps.LatLng(37.688889,-97.336111), name:  "Wichita, KS"}, //wichita, ks
	{ position: new google.maps.LatLng(38.895112,-77.036366), name:  "Washington, DC"}, //washington, dc

	{ position: new google.maps.LatLng(28.034462,-80.588665), name:  "Palm Bay, FL"}, //palm bay, fl
//	new google.maps.LatLng(38.984652,-77.094709), //bethesda, md
	{ position: new google.maps.LatLng(37.77493,-122.419415), name:  "San Francisco, CA"}, //san francisco, ca
	{ position: new google.maps.LatLng(35.994033,-78.898619), name:  "Durham, NC"}, //durham, nc
	{ position: new google.maps.LatLng(42.99564,-71.454789), name:  "Manchester, NH"}, //manchester, nh
	{ position: new google.maps.LatLng(32.715329,-117.157255), name:  "San Diego, CA"}, //san diego, ca
	{ position: new google.maps.LatLng(30.267153,-97.743061), name:  "Austin, TX"}, //austin, tx
//	new google.maps.LatLng(42.527873,-70.928661), //peabody, ma

	{ position: new google.maps.LatLng(30.420071,-86.617031), name:  "Fort Walton Beach, FL"}, //fort walton beach, fl
	{ position: new google.maps.LatLng(40.233844,-111.658534), name:  "Provo, UT"}, //provo, ut
	{ position: new google.maps.LatLng(38.833882,-104.821363), name:  "Colorado Springs, CO"}, //colorado springs, co
	{ position: new google.maps.LatLng(30.756389,-81.571389), name:  "St. Mary's, GA"}, //st. mary's, ga
	{ position: new google.maps.LatLng(42.280826,-83.743038), name:  "Ann Arbor, MI"}, //ann arbor, mi
//	new google.maps.LatLng(37.804364,-122.271114), //oakland, ca
//	new google.maps.LatLng(35.772096,-78.638614), //raleigh, nc
	{ position: new google.maps.LatLng(34.420831,-119.69819), name:  "Santa Barbara, CA"}, //santa barbara, ca

	{ position: new google.maps.LatLng(40.217053,-74.742938), name:  "Trenton, NJ"}, //trenton, nj
	{ position: new google.maps.LatLng(32.608611,-83.638056), name:  "Warner Robins, GA"}, //warner robins, ga
//	new google.maps.LatLng(40.58526,-105.084423), //fort collins, co
	{ position: new google.maps.LatLng(43.073052,-89.40123), name:  "Madison, WI"}, //madison, wi
	{ position: new google.maps.LatLng(35.084491,-106.651137), name:  "Albuquerque, NM"}, //albuquerque, nm
	{ position: new google.maps.LatLng(31.5455,-110.277286), name:  "Sierra Vista, AZ"}   //sierra vista, az
	];

var answerMarkers = [];

//set defaults for initial load
var activeArea = countyLayers;
var activeYear = "2011";
var activeLayer;

function initialize() {

	var usa = new google.maps.LatLng(38, -97);
	
	map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: usa,
	  zoom: 5,
	  scrollwheel: false,
	  streetViewControl: false,
	  mapTypeControl: false,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	
	var styles = [
	  {
	    stylers: [
	      { saturation: -100 }
	    ]
	  },{
	    featureType: "road",
	    stylers: [
	      { visibility: "off" }
	    ]
	  },{
	    featureType: "poi",
	    stylers: [
	      { visibility: "off" }
	    ]
	  },{
	  	featureType: "water",
	  	elementType: "labels",
	  	stylers: [
	  	  { visibility: "off" }
	  	]
	  }
	];
	
	map.setOptions({styles: styles});
	
	var styles2 = [
	{
	  stylers: [
	    { saturation: -100 }
	  ]
	},{
	  featureType: "road",
	  stylers: [
	    { visibility: "off" }
	  ]
	},{
	  featureType: "poi",
	  stylers: [
	    { visibility: "off" }
	  ]
	},{
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  }
	];
	
	removeMapLabels = new google.maps.StyledMapType(styles2, {name: "No Labels"});
	map.mapTypes.set('no_labels', removeMapLabels);
	
	
	stateLinesMap = new google.maps.FusionTablesLayer({
	  query: {
	    select: 'geometry',
	    from: stateLines
	  },
  	  suppressInfoWindows: true,
  	  clickable: false,
	  styles: [{
	    polygonOptions: {
	      fillColor: "#ffffff",
	      fillOpacity: "0",
	      strokeColor: "#666666",
	      strokeWeight: "1"
	    }
	    }]
	});
	
	//stateLinesMap.setMap(map);
	
	for (county in countyMaps){
		countyLayers[county] = createLayer(countyMaps[county]);
		
		google.maps.event.addListener(countyLayers[county], 'click', function(e) {
			//console.log(e);
			$("#areaDisplay").text(e['row']['County Name']['value']);
			//$("#shareDisplay").text(e['row']['ht_share']['value']);
			updateData(e['row']);
		});
	}

	for (state in stateMaps){
		stateLayers[state] = createLayer(stateMaps[state]);
		google.maps.event.addListener(stateLayers[state], 'click', function(e) {
			//console.log(e);
			$("#areaDisplay").text(e['row']['state']['value']);
			//$("#shareDisplay").text(e['row']['ht_share']['value']);
			updateData(e['row']);
		});
	}
	
	activeLayer = activeArea[activeYear];


	loadQuiz();
	//loadMap();
}

function loadQuiz(){

	$('#quizHeader').show();
	
	$('#instructions').click(function(){
		$(this).fadeOut();
	});

	guessListener = google.maps.event.addListener(map, 'click', function (e){
		var marker = new google.maps.Marker({
			position: e.latLng,
			animation: google.maps.Animation.DROP,
			map: map,
			icon: pinImage,
			shadow: pinShadow			
		});
		guesses.push(marker);
		if(firstGuess){
			$('#answerQuiz').removeClass('inactive');
			$('#instructions').fadeOut();
			firstGuess = false;
		}
	});
	
	$('#answerQuiz').click(function(){
		if( !$(this).hasClass('inactive')){
			loadAnswers();
		}
	});

}

function loadAnswers(){

	google.maps.event.removeListener(guessListener);

	$('#quizHeader').fadeOut();
	$('#answerHeader').fadeIn();
	$('#asterisk').fadeIn();

	$('#showMap').click(function(){
		loadMap();
	});

	var correct = 0;
	for (i in guesses){
		guess = guesses[i];
		var right = false;
		for (j in answers){
			answer = answers[j];
			//console.log(answer);
			if (compareCoords(guess['position'], answer['position'])){
				answers.splice(j, 1);
				correct++;
				right = true;
				//guess.setAnimation(google.maps.Animation.BOUNCE);
				guess.setIcon(pinImageGrey);
				break;
			}
		}
		if (!right){
			guess.setIcon(pinImageTrans);
			guess.setShadow(null);
		}
	}

	if(correct == 1){
		$('#locationS').hide();
	}
	$('#answerNumber').text(correct);
	
	for (coord in answers){
		var marker = new google.maps.Marker({
			position: answers[coord]['position'],
			map: map,
			icon: pinImage,
			title: answers[coord]['name'],
			shadow: pinShadow,
			animation: google.maps.Animation.DROP
		});
		answerMarkers.push(marker);
		
//		google.maps.event.addListener(marker, 'click', function(){
			//console.log("onclick: marker");
//			
//			if (!infoWindow){
//				infoWindow = new google.maps.InfoWindow({
//					content: infoWindowContent(this.getTitle()),
//					maxWidth: 200
//				});
//			}else{
//				infoWindow.close();
//				infoWindow.setContent(infoWindowContent(this.getTitle()));
//			}
//			
//			infoWindow.open(map, this);
//
//		});
		
	}
	
}

function infoWindowContent(name){
	var display = "<div>";
	display += name;
	display += "</div>";
	
	return display;
}

function loadMap(){

	map.setMapTypeId('no_labels');
	
	update();
	//updateData(dataDefaults[activeYear])

	$('#answerHeader').fadeOut();
	$('#mapHeader').fadeIn();
	$('#asterisk').fadeOut();
	$('#asterisk2').fadeIn();
	$('#legend').fadeIn();
	$('#infobox').slideDown();
//	$('#header').removeClass('withShadow');
	
	
	for (i in guesses){
		guesses[i].setMap(null);
	}

	for (i in answerMarkers){
		answerMarkers[i].setMap(null);
	}	

	$('#slider').slider({
		value:2011,
		min: 2002,
		max: 2011,
		step: 1,
		change: function(event, ui) {
			activeYear = $('#slider').slider("value");
			$('#sliderLabels li.active').removeClass('active');
			$('#sliderLabels li#'+$('#slider').slider("value")).addClass('active');
			update();
		}
	});
	
	$("#stateBtn").click(function(){
		activeArea = stateLayers;
		$("#countyBtn").removeClass("active");
		$("#stateBtn").addClass("active");
		update();
	});
	
	$("#countyBtn").click(function(){
		activeArea = countyLayers;
		$("#stateBtn").removeClass("active");
		$("#countyBtn").addClass("active");
		update();
	});
}


function createLayer(tableID) {
	var layer = new google.maps.FusionTablesLayer({
	  query: {
	    select: 'geometry',
	    from: tableID
	  },
	  suppressInfoWindows: true
	});
	
	return layer;
}

function compareCoords(c1, c2){
	//console.log(c1 + c2);
	var tolerance = 1;
	var match = false;
	if( (Math.abs(c1['Xa'] - c2['Xa']) < tolerance ) & (Math.abs(c1['Ya'] - c2['Ya']) < tolerance) ){
		match = true;
	}

	return match;
}

function update(){
	activeLayer.setMap(null);
	activeLayer = activeArea[activeYear];
	activeLayer.setMap(map);
	stateLinesMap.setMap(map);
	updateData(dataDefaults[activeYear])
}

function updateData(data){
	//console.log(data);
	var techjobs = data['ht_share']['value'];
	if (techjobs == -1){
		techjobs = "0.0";
	}
	$("#tech-jobs .data").text(formatPercent(techjobs));
	$("#tech-growth .data").text(formatPercent(data['tech_growth']['value']));
	$("#total-growth .data").text(formatPercent(data['total_growth']['value']));
	if(data['state']){
		$("#area .data").text(state_abbr[data['state']['value']]);
	}else{
		$("#area .data").text(data['County Name']['value']+" County, "+data['State Abbr.']['value']);
	}
	var starts = data['starts']['value'];
	if ((starts == "NULL") || (starts == "")){
		starts = "<span class='nslasha'>N/A**</span>";
	}else if (starts >= 1000){
		starts = starts.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	$('#starts .data').html(starts);
}

function formatPercent(num){
	//console.log(num);
	if (num == ""){
		return "0.0%";
	}
	var newNum = parseFloat(num);
	if(Math.abs(newNum) >= 100){
		newNum = Math.round(newNum);
	}else{
		newNum = newNum.toPrecision(2);
	}
	
	
//	.toPrecision(2);
//	if(newNum < 1 & newNum > -1 & newNum != 0.00){
//		newNum = newNum.toFixed(2);
//	}
	return newNum + '%';
}

function resizeMap(){

	var docHeight = $('#map-canvas').outerHeight() + $('#header').outerHeight() + $('#footer').outerHeight() + $('#copy').outerHeight();
	
	if ($(window).height() > docHeight){
		//var newHeight = $(window).height() - ($('#header').outerHeight() + $('#footer').outerHeight() + $('#copy').outerHeight());
		var newHeight = $(window).height() - docHeight + $('#map-canvas').outerHeight();
		$('#map-canvas').css('height', newHeight);
	}

}


$(document).ready(function() {

	resizeMap();

});

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeMap(), 100);
});