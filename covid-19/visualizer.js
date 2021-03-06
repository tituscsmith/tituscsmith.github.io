    
var totalCases = 0;var blackCases = 0;var latinCases = 0;var unknownCases = 0;
var totalDeaths = 0;var blackDeaths = 0;var latinDeaths = 0;var unknownDeaths = 0;
var whiteDeaths = 0; var asianDeaths = 0; var aianDeaths = 0; var nhpiDeaths = 0; var multiDeaths = 0;
var otherDeaths = 0;
var raceError = "false";
//retrieve race data from csv file
// function getRaceData(){
// 		//Get Racial Data
        
// 		var raceData = $.ajax({
// 		//type: "GET",
// 		url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_xmYt4ACPDZCDJcY12kCiMiH0ODyx3E1ZvgOHB8ae1tRcjXbs_yWBOA4j4uoCEADVfC1PS2jYO68B/pub?gid=43720681&single=true&output=csv",
// 		async: true,
//         timeout: 100000,
// 		}).done(function (raceData) {
            
//     		// Splitting the file into rows
//     		var rows = raceData.split(/\n/);
//    			for (var rowIndex in rows){
//     			if(rowIndex<=2){//Don't count labels
//         				continue;
//         			}
//     			if(rowIndex==59){//Don't count states twice
//         				break;
//         			}
//         		// For every row - split it into columns
//         			var columns = rows[rowIndex].split(/,/);
//         			for (var colIndex in columns){                
//             			var colValue = columns[colIndex].trim();
// 				if(colValue===""){continue;}
//                 //Only iterate through desired columns
// 				if(colIndex<8 || colIndex>32){continue;}
// 				//total cases
// 				if(colIndex==8){//Index 8 = total
// 				    totalCases+=parseInt(colValue);
// 				}
// 				//black cases
// 				else if(colIndex==10){//Index 10 = black
// 				    blackCases+=parseInt(colValue);
// 				}
// 				//latinX/hispanic cases
// 				else if(colIndex==11){
// 				    latinCases+=parseInt(colValue);
// 				}
// 				// unknown race
// 				else if(colIndex==17){
// 				    unknownCases+=parseInt(colValue);
// 				}
// 				//total deaths
// 				else if(colIndex==23){//
// 				    totalDeaths+=parseInt(colValue);
// 				}
//                 			//white deaths
// 				else if(colIndex==24){//
// 				    whiteDeaths+=parseInt(colValue);
// 				}
// 				//black deaths
// 				else if(colIndex==25){//
// 				    blackDeaths+=parseInt(colValue);
// 				}
// 				//latin deaths
// 				else if(colIndex==26){//
// 				    latinDeaths+=parseInt(colValue);
// 				}
//                			 //asian deaths
// 				else if(colIndex==27){//
// 				    asianDeaths+=parseInt(colValue);
// 				}
//                 			//AIAN deaths
// 				else if(colIndex==28){//
// 				    aianDeaths+=parseInt(colValue);
// 				}
//                 			//NHPI deaths
// 				else if(colIndex==29){//
// 				    nhpiDeaths+=parseInt(colValue);
// 				}
//                 			//MultiRacial deaths
// 				else if(colIndex==30){//
// 				    multiDeaths+=parseInt(colValue);
// 				}
//                 			//Other deaths
// 				else if(colIndex==31){//
// 				    otherDeaths+=parseInt(colValue);
// 				}
// 				 //latin deaths
// 				else if(colIndex==32){//
// 				    unknownDeaths+=parseInt(colValue);
// 				}
// 		       }           
//     		 }
// 			//other section for deaths
// 	}).fail(function (jqXHR, textStatus, error) {
//         console.log(error);
//         if(raceError === 'true'){
//         	document.getElementById('general-error').style.display = "block";
//         }
//         else{
//         	raceError = "true";
//         }
// 	});
// }

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
var stateOrNational = "";
function hideGrade(){
    document.getElementById('gradeText').style.visibility = "hidden";
}
//Changes mode to state and then calls the draw function
//Changes data from Cumulative to Increasing for State Data

//If state data input is invalid, and data was in national mode,
//stay in national mode
function changeModeState(){
    document.getElementById('states-increasing').style.display = "none";
    document.getElementById('states-decreasing').style.display = "none";
    var change = document.getElementById("State Button");
   
   //If invalid switch, stay in national mode
    if (stateOrNational === "National" && (drawStateChart()==="fail" || document.getElementById("state").value === "")){
        if(drawStateChart()==="fail"){
            document.getElementById('state-warning').style.display = "block";
        }
        else if(document.getElementById("state").value === ""){
            document.getElementById('state-prompt').style.display = "block"; 
        }
        changeModeNational();//Switch buttons back to national mode
        hideGrade();
        change.value = "State Data";
        return;
    }
    else if(drawStateChart()==="fail"){
        document.getElementById('state-warning').style.display = "block"; 
        hideGrade();
        return;
    }
    //If nothing, then don't do anything
    else if(document.getElementById("state").value === ""){
       document.getElementById('state-prompt').style.display = "block";
       document.getElementById('chartDiv').style.visibility = "hidden";
       document.getElementById("graph").style.display = "none";
       hideGrade();
       change.value = "State Data";
        return;
    }
    else if (stateOrNational === "" && drawStateChart()==="fail"){
        change.value = "State Data";
        return;
    }
    else{
        document.getElementById('state-warning').style.display = "none";
    }
    
    
    //Change text of button
    if (change.value === "State Data"){
        change.value = "Increases";
    }
    else if(change.value === "Cumulative"){
        change.value = "Increases";
    }
    else if(change.value === "Increases"){
        change.value = "Cumulative";
    }
    
    stateOrNational = "State";
    document.getElementById("graph").value = "Change Graph Type";
    document.getElementById('Race Button').style.display = "none";
    drawChart();
}

//Changes mode to National to run correct drawChart function
function changeModeNational(){
    stateOrNational = "National";
    var change = document.getElementById("State Button");
    change.value = "State Data";
    dataRate = "Cumulative"
    
    //Change button visibilities and texts
    document.getElementById("graph").value = "Change Graph Type";
    document.getElementById("graph").style.display = "inline";
    document.getElementById('time').style.display = "none";
    document.getElementById('scale').style.display = "none";
    hideGrade();
    // document.getElementById('Race Button').style.display = "inline";
    document.getElementById('Trends Button').style.display = "inline";
    document.getElementById('states-decreasing').style.display = "none";
    document.getElementById('states-increasing').style.display = "none";
    
}

function changeGraphType(){
    var change = document.getElementById("graph");
    if(stateOrNational==="State"){
        //Change text of button
        if (change.value === "Change Graph Type"){
            change.value = "Stepped Area";
        }
        else if(change.value === "Line"){
            change.value = "Column";
        }
        else if(change.value === "Column"){
            change.value = "Stepped Area";
        }
        else{
            change.value = "Line";        
        }
    }
    if(stateOrNational==="National"){
        if (change.value === "Change Graph Type"){
            change.value = "Map";
        }
        else if (change.value === "Pie"){
            change.value = "Map";
        }
        else{
            change.value = "Pie";
        }
    }
}

function changeScale(){
    var change = document.getElementById("scale");
    
    //Change text of button
    if (change.value === "Log"){
        change.value = "Linear";
    }
    else if(change.value === "Linear"){
        change.value = "Log";
    }
}
function changeTime(){
    var change = document.getElementById("time");
    
    //Change text of button
    if (change.value === "Month"){
        change.value = "Two Weeks";
    }
    else if(change.value === "Two Weeks"){
         change.value = "All of Time";
    }
    else if(change.value === "All of Time"){
         change.value = "Month";
    }
}
//Chooses which chart to draw
function drawChart(){
    
    if(stateOrNational==="State"){
        drawStateChart();
        
    }
    else if(stateOrNational==="National"){
        drawNationalChart();
        document.getElementById('state-warning').style.display = "none";
        document.getElementById('state-prompt').style.display = "none";
    }
}
 //Toggle Hidden on Button
function showChartAndGrade(){
    
    //Don't display graph if a state isn't selected
    /*if(document.getElementById('state').value.length===0 || dataRate === 'null'){
        return;
    }*/
    if(stateOrNational!=="State" && stateOrNational!=="National"){
        return;
    }
   // alert(stateOrNational);
    //Other buttons appear
    if(stateOrNational === "State"){
        document.getElementById('graph').style.display = "inline"
        document.getElementById('time').style.display = "inline"
        document.getElementById('scale').style.display = "inline"
        var grade = document.getElementById('gradeText');
        if (grade.style.visibility === "hidden") {
            grade.style.visibility = "visible";
        }
 }
    else{
         document.getElementById('graph').style.display = "inline"
    }
    var chartVis = document.getElementById('chartDiv');
    
    if (chartVis.style.visibility === "hidden") {
        chartVis.style.visibility = "visible";
    } 
    var footerVis = document.getElementById('footer');
    if (footerVis.style.visibility === "hidden") {
        footerVis.style.visibility = "visible";
    }
}

//Function to draw racial data
// function drawRaceData(){
// 	if(raceError==="true"){
//     	//If error getting data before, try one more time
//     	getRaceData();
//         if(raceError==="true"){
//         	return;
//         }
//     }
    
// 	var dataRaceNational = new google.visualization.DataTable();
// 	//Labels
//     dataRaceNational.addColumn('string', 'Race');
//     dataRaceNational.addColumn('number', 'Number of Deaths');
//     dataRaceNational.addColumn({type: 'string', role: 'tooltip'});
    
//     let whiteMessage = whiteDeaths + " Deaths\n" +  "Compared to 60.4% of U.S. Population";
//     let blackMessage = blackDeaths + " Deaths\n" +  "Compared to 13.4% of U.S. Population";
//     let latinMessage = latinDeaths + " Deaths\n" +  "Compared to 18.3% of U.S. Population";
//     let asianMessage = asianDeaths + " Deaths\n" +  "Compared to 5.9% of U.S. Population";
//     let aianMessage = aianDeaths + " Deaths\n" +  "Compared to 1.3% of U.S. Population";
//     let nhpiMessage = nhpiDeaths + " Deaths\n" +  "Compared to 0.2% of U.S. Population";
//     let multiMessage = multiDeaths + " Deaths\n" +  "Compared to 2.7% of U.S. Population";
//     let otherMessage = otherDeaths + " Deaths\n" +  "No definitive category from 2010 Census";
//     //Data
//     dataRaceNational.addRow(["White Deaths" , whiteDeaths, whiteMessage]);//Data from 2010 Census
//     dataRaceNational.addRow(["Black Deaths", blackDeaths, blackMessage]);
//     dataRaceNational.addRow(["LatinX/Hispanic Deaths", latinDeaths, latinMessage]);
//     dataRaceNational.addRow(["Asian Deaths", asianDeaths, asianMessage]);
//     dataRaceNational.addRow(["AIAN Deaths", aianDeaths, aianMessage]);
//     dataRaceNational.addRow(["NHPI Deaths", nhpiDeaths, nhpiMessage]);
//     dataRaceNational.addRow(["Multiracial Deaths", multiDeaths, multiMessage]);
//     dataRaceNational.addRow(["Other Deaths", otherDeaths, otherMessage]);

        
//     var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
//     var options = {
//                 is3D: true,
//                slices: [{}, {}, {}, {}, {}, {color: 'yellow'}, {}, {color: 'brown'}],
//       			title: 'COVID-19 Deaths in America by Race [Excluding Unknown Race Deaths]',
//                 pieResidueSliceLabel: "Other Deaths",
//                 sliceVisibilityThreshold: 0,//Include all races, no matter how small
//                 'width':1000,
//                  'height':500
                 
//     		};
//     chart.draw(dataRaceNational, options);
//     document.getElementById('chartDiv').style.visibility = "visible";
// document.getElementById('graph').style.display = "none";
//     document.getElementById('Race Button').style.display = "none";
// }
//Gets state input, gets grade, iterates through and creates data then draws chart
function drawStateChart() {
  if(document.getElementById("State Button").value===''){
          return;
  }
  
  var state = document.getElementById('state').value;
   var failed = "false";
  var jsonStateData = $.ajax({
      url: "https://api.covidtracking.com/v1/states/" + state.toLowerCase() + "/daily.json",
      dataType: "json",
      async: true
      }).done(function (jsonStateData) {
               var text = "Data Quality Grade: ";
            //Get grade
            text += jsonStateData[0].dataQualityGrade;
             $(".mypanel").html(text);//
               var dataState = new google.visualization.DataTable();
          dataState.addColumn('string', 'date');
             
             if(document.getElementById("State Button").value === "Cumulative"){//Label is reverse of what is showing
                    dataState.addColumn('number', 'Positive Case Increases');
          dataState.addColumn('number', 'Hospitalized Increases');
                 dataState.addColumn('number', 'Dead Increases');
             }
             if(document.getElementById("State Button").value === "Increases"){//Label is reverse of what is showing
                    dataState.addColumn('number', 'Cumulative Positive Cases');
          dataState.addColumn('number', 'Cumulative Hospitalized');
                 dataState.addColumn('number', 'Total Dead');
             }
                
    var dateLong = "";
            var dateShort = "";
            var upperBound = jsonStateData.length;
            if(document.getElementById("time").value==='Month'){
                upperBound = jsonStateData.length;
            }
            if(document.getElementById("time").value==='All of Time'){
                                    upperBound = 14;
            }
            if(document.getElementById("time").value==='Two Weeks'){
                                    upperBound = 31;
            }
            
            let scale;
            if(document.getElementById("scale").value === "Linear"){
                scale = "log";
            }
            else if(document.getElementById("scale").value === "Log"){
                scale = "linear";
            }
            for (var i = 0; i < upperBound; i++) {

                 //Only use valid data
                if(typeof jsonStateData[i].lastUpdateEt==='undefined' || jsonStateData[i].dateChecked ===null){break;}
                    
                //Format the dates
                // dateLong = jsonStateData[i].dateChecked;
                // dateShort = jsonStateData[i].dateChecked;
                dateShort = jsonStateData[i].dateChecked.slice(5,10);

                //  dateShort = dateLong.slice(6, 10);
              
               // var dateFormatted = new Date(jsonStateData[i].dateChecked).toString().slice(4,15);
                //Data = increases
                if(document.getElementById("State Button").value === "Cumulative"){//Label is inverse of what is showing
                    dataState.addRow([dateShort,jsonStateData[i].positiveIncrease,jsonStateData[i].hospitalizedIncrease, jsonStateData[i].deathIncrease]);
                }
                
                //Data = Cumulative
                if(document.getElementById("State Button").value === "Increases"){//Label is inverse of what is showing
                    dataState.addRow([dateShort,jsonStateData[i].positive,jsonStateData[i].hospitalized, jsonStateData[i].death]);
                }		
            }
              // Instantiate and draw our chart, passing in some options.
              var options = {title: state + ' COVID-19',
             titleTextStyle: {fontSize: 30,},
            vAxis: {/*title: 'Number',*/
                viewWindow: {
                    min: 0//range to include 0
                },
                scaleType: scale,
            },
                  'backgroundColor': 'white', 'width':1000,'height':500
             };
                 
            var graph = document.getElementById('graph').value;
            if(graph=== 'Column' || graph=== 'Change Graph Type'){
                var chart = new google.visualization.LineChart(document.getElementById('chartDiv'));
                }
            else if(graph === 'Stepped Area'){
                var chart = new google.visualization.ColumnChart(document.getElementById('chartDiv'));
            }
            else{
                var chart = new google.visualization.SteppedAreaChart(document.getElementById('chartDiv'));
            }
              
            dataState.sort([{column: 0}]);
                if(state){
                    chart.draw(dataState, options);
                }
         showChartAndGrade();
      }).fail(function (jqXHR, textStatus, error) {
             failed = "true";
      });
      
      if(failed==="true"){
          return "fail";
      }

}//End of drawStateChart
    
function stateTrendsButton(){
    document.getElementById('states-decreasing').style.display = "block";
    document.getElementById('states-increasing').style.display = "block";
    document.getElementById('Trends Button').style.display = "none";
}

//Prints out the  decreasing and increasing states
function calculateStateTrends() {
    var x = document.getElementById("states");

    var increasingStates = "";
    var decreasingStates = "";
 var startTime = Date.now();
 var timeLimit  = 50000; // This is the time limit in ms

    for (var i = 0; i < x.options.length; i++) {//x.options[i].value
       

        //Set a timeout if data takes too long
        if ((Date.now()-startTime) >= timeLimit){
               $("#states-increasing").text("Error retrieving trend data from server");
               $("#states-decreasing").text("Error retrieving trend data from server");
                return;
        }

        var lastTwoWeeks = 0; var earlierTwoWeeks = 0;
        // console.log("https://api.covidtracking.com/v1/states/" + x.options[i].value.toLowerCase() + "/daily.json")
        var increasingData = $.ajax({
          url: "https://api.covidtracking.com/v1/states/" + x.options[i].value.toLowerCase() + "/daily.json",    	
            dataType: "json",
          async: false

          }).done(function (increasingData) {

              if(x.options[i]!==undefined){
                for (var j = 0; j < 28; j++) {
                            if(j<14){
                                lastTwoWeeks+=increasingData[j].positiveIncrease;
                            }
                            else{
                                earlierTwoWeeks+=increasingData[j].positiveIncrease;
                            }
                    }
                if(lastTwoWeeks>earlierTwoWeeks*1.25){//1.25 is a constant to weed out middle group
                    increasingStates+= x.options[i].value + " ";
                }
                else if(lastTwoWeeks*1.25<earlierTwoWeeks){
                    decreasingStates+= x.options[i].value + " ";
                }
              }
          }).fail(function (jqXHR, textStatus, error) {
                console.log(error);
            console.log(textStatus);
          });
        
         }
   //Replace banners with trending states
      $("#states-increasing").text("States/Territories with increasing cases: " + increasingStates);
      $("#states-decreasing").text("States/Territories with decreasing cases: " + decreasingStates);
}

//Gets national input, gets grade, iterates through and creates data then draws chart
function drawNationalChart() {
    
  if(dataRate==='null'){
          return;
  }
  
  var jsonData = $.ajax({
      url: "https://api.covidtracking.com/v1/states/current.json",
      dataType: "json",
      async: false
      }).done(function (jsonData) {
               var data = new google.visualization.DataTable();
                     data.addColumn('string', 'State Number');
                    data.addColumn('number', 'Cumulative Positive Cases');
                     data.addColumn('number', 'Total Dead');

            //Ignore time for National Chart
            for (var i = 0; i <jsonData.length; i++) {
                 
                 //Only use valid data
                if(typeof jsonData[i].lastUpdateEt==='undefined'){break;}
                if(dataRate === "Cumulative"){
                    data.addRow([jsonData[i].state,jsonData[i].positive,jsonData[i].death]);
                }
            }

            var graph = document.getElementById('graph').value;

            if(graph=== 'Map'){
                var options = {
                is3D: true,
                 pieResidueSliceLabel: "Other States",
                sliceVisibilityThreshold: .0125,//Minimum viability = 1.25%
                titleTextStyle: {
                      fontSize: 30,
                },
                'backgroundColor': 'white', 'width':1000,'height':500
            };
                var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));
            }
            else if(graph == "Change Graph Type" || graph === 'Pie'){
                 // Instantiate and draw our chart, passing in some options.
                  var options = {region: 'US', displayMode: 'regions', resolution: 'provinces',
                  colorAxis: {
                    maxValue: 1000000,
                      colors: ['#ffe6e6', '#990000']}, // orange to bluez},
                titleTextStyle: {
                      fontSize: 30,
                },
                hAxis: {/*title: 'Date'*/},
                sizeAxis: { minValue: 0, maxValue: 750000 },
                'backgroundColor': 'white',
                'width':1000,
                'height':500
            };
                var chart = new google.visualization.GeoChart(document.getElementById('chartDiv'));
            }
          //Sort Data
            data.sort([{column: 0}]);
        chart.draw(data, options);
            showChartAndGrade();

      }).fail(function (jqXHR, textStatus, error) {
            document.getElementById('general-error').style.display = "block";
      });
}//End of drawNationalChart

google.charts.setOnLoadCallback(drawChart);

