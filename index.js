AOS.init({
  mirror: true, // whether elements should animate out while scrolling past the
  once: false, // whether animation should happen only once - while scrolling down
  duration: 750, // values from 0 to 3000, with step 50ms
  offset: 100
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});

$("body").css({'padding-top': $('nav.navbar').innerHeight()});
$('a[href="#educationmessage"]').on('click',function(e){
  // prevent normal scrolling action
  e.preventDefault();
  // grab the target url from the anchor's ``href``
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html,body').animate({
        scrollTop: target.offset().top - $('nav.navbar').innerHeight()
   }, 1000);
   return false;
  }
});
$('a[href="#contact-section"]').on('click',function(e){
    // prevent normal scrolling action
    e.preventDefault();
    // grab the target url from the anchor's ``href``
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top - $('nav.navbar').innerHeight()
     }, 1000);
     return false;
    }
});
$('a[href="#projmessage"]').on('click',function(e){
  // prevent normal scrolling action
  e.preventDefault();
  // grab the target url from the anchor's ``href``
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html,body').animate({
        scrollTop: target.offset().top - $('nav.navbar').innerHeight()
   }, 1000);
   return false;
  }
});

var cardData = [
  { image: "images/CCTall.png", class: 'mobile', alt: "Calorie Crusher Image", title: 'Calorie Crusher Mobile App', descr: 'A fitness and meal tracking mobile app created with React Native in tangent with an existing RESTful API. Users are able to set nutrition and activity goals, log meals, log activity sessions, and track daily progress to goals. Integrated accessibility features to support screen reader use.', date: 'Nov 2020', link: 'https://github.com/tituscsmith/calorie_crusher', button: 'Project Repo'},
  { image: "images/shoppingassistant.jpeg", class: 'other', alt: "Dialogflow Agent Image", title: 'Dialogflow Shopping Assistant', descr: 'A dialogue-based interface that assists users of an online fictional store that works in tangent with an existing web app and API. Agent includes support for users with cart and inventory queries, item filtering, navigating the pages of the web app, and purchasing items. Implemented the Dialogflow Webook with Javascript.', date: 'Nov 2020', link: 'https://github.com/tituscsmith/WiscShopDialogflow', button: 'Project Repo'}, 
  { image: "images/classroom.webp", class: 'web', alt: "Course Scheduler Image", title: 'University Course Search Web App', descr: 'University course web application developed with ReactJS. Implemented the UI with a multi-level, pan & zoom navigation model and conducted usability inspection with heuristic evaluation. Features include search filtering, ratings and recommendations, prerequisite checks, and more.', date: 'Oct 2020', link: 'https://tituscsmith.github.io/course_scheduler/', button: 'Web App!'},
{ image: "images/moviedatabase.webp", class: 'web', alt: "Movie Image", title: 'Movie Database Web App', descr: 'An IMDB-like web application with MySQL and PHP. Collaborative implemented in a 3 Person Project. Refined the schema to 3NF. Features include user-control access, search filtering across multiple tables, a movie rating system, and additional admin privileges.', date: 'July 2020', link: 'https://github.com/tituscsmith/moviesDB', button: 'Project Repo'},
{ image: "images/MapReduceImageTalend.jpg", class: 'OS', alt: "MapReduce Image", title: 'MapReduce', descr: 'Partner Project for CS537. Implemented the MapReduce programming model in C to calculate the word counts of 10mb of data in less than a second. Incorporated a Combiner function. Revised project individually to account for unused partitions.', date: 'May 2020<br>Repo Available upon Request*', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p4a.html', button: 'Project Description'},
{ image: "images/Terminal.png", class: 'OS', alt: "Terminal Application Image", title: 'Unix Shell', descr: 'CS537 Simplified Unix Shell with select build in commands, like cd and path. Written in C.', date: 'February 2020<br>Repo Available upon Request*', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p2a.html', button: 'Project Description'},
];

$.each(cardData, function (i) {
        //Animation depends on which side it is
        // if(i%3==0){
        // var animation = "flip-left";
        // }else if(i%3==1){
        // var animation = "flip-up";
        // }else{
        // var animation = "flip-right";
        // }

        animation = "none";
        var templateString = '<div class= "mx-4 mb-4 card proj ' + cardData[i].class + ' " data-aos=' + animation + '><img src=' + cardData[i].image + ' height = "250px" width = "300px" class="card-img-top" alt=' + cardData[i].alt + '><div class="card-body shadow"><h4 class="card-title" style = "font-size: 1.75vh">' + cardData[i].title + '</h4>'+
       '<p class="card-text" style = "font-size: 1.6vh">' + cardData[i].descr + '</p>' + '<div class="align-items-center d-flex justify-content-between">' +
       '<small class="text-muted">' + cardData[i].date + '</small>';
        if(cardData[i].button){
        templateString += '<a href=' + cardData[i].link + ' target="_blank"><button class="button">' + cardData[i].button + '</button></a>'
        }

        templateString += '</div></div></div>';                 
        // console.log(templateString);
        $('#projdata').append(templateString);});
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        $('#date').append("console.log(\"" + new Date().toLocaleDateString(undefined, options) + "\")");
        
$("#projdata").on("click", function () {
});
$("#date").on("click", function () {});


// });

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_portfolio_gallery_filter
// filterSelection("all") // Execute the function and show all columns

// function filterSelection(c) {
//     // alert("feafa");
//   var x, i;
//   x = document.getElementsByClassName('card');

//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {

//     hideElement(x[i]);
//     if (x[i].className.indexOf(c) > -1) showElement(x[i]);
//   }
// }

// // Show filtered elements
// function showElement(element) {
//     $(element).show();
// }

// // Hide elements that are not selected
// function hideElement(element) {
// // element.display("none");    
// $(element).hide();

// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById('TabContainer');
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     console.log("blah")

//     var current = document.getElementsByClassName("active");
//     console.log(current);
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

