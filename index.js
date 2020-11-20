AOS.init();
//Created a fitness and meal tracking mobile app with React Native in tangent with an existing RESTful API. Users are able to set nutrition and activity goals, log meals, log activity sessions, and track daily progress to goals. Integrated accessibility features to support screen reader use.
var cardData = [
  { image: "images/CCTall.png", class: 'mobile', alt: "Calorie Crusher Image", title: 'Calorie Crusher Mobile App', descr: 'Created a fitness and meal tracking mobile app with React Native in tangent with an existing RESTful API. Users are able to set nutrition and activity goals, log meals, log activity sessions, and track daily progress to goals. Integrated accessibility features to support screen reader use.', date: 'Nov 2020', link: '#', button: 'Coming Soon'},

    { image: "images/CourseSearch.jpg", class: 'web', alt: "Course Scheduler Image", title: 'University Course Search Web App', descr: 'University course web application developed with ReactJS. Implemented the UI with a multi-level, pan & zoom navigation model and conducted usability inspection with heuristic evaluation. Features include search filtering, ratings and recommendations, prerequisite checks, and more.', date: 'Oct 2020', link: '#', button: 'Coming Soon'},
{ image: "images/chat.png", class: 'web', alt: "Chat Image", title: 'Socket.IO Chat Web App', descr: 'Chat application written with Node.js, Express, and MongoDB. Features include persistent message storage, private and general chat rooms, and online/offline statuses.', date: 'July 2020', link: 'https://github.com/tituscsmith/socket-chat', button: 'Project Code'},
{ image: "images/library.png", class: 'web', alt: "Book Image", title: 'Library Management Web App', descr: 'Implemented a library web application with MySQL and PHP. Features include search filtering, check-out/check-in system, user-control access, and additional admin privileges.', date: 'June 2020', link: 'https://github.com/tituscsmith/library', button: 'Project Code'},
{ image: "images/weather.png", class: 'mobile', alt: "Weather Icon", title: 'Weather App (iOS)', descr: 'Weather app developed with SwiftUI and OpenWeatherMap API. Current, Daily, and Hourly Forecasts as well as options to change location and temperature scale.', date: 'June 2020', link: 'https://imgur.com/a/Tmk8SRa', button: 'Project Walkthrough'},
{ image: "images/MapReduceImageTalend.jpg", class: 'OS', alt: "MapReduce Image", title: 'MapReduce', descr: 'Partner Project for CS 537. Implemented the MapReduce programming model in C to calculate the word counts of 10mb of data in less than a second. Incorporated a Combiner function. Revised project individually to account for unused partitions.', date: 'May 2020', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p4a.html', button: 'Project Description'},
{ image: "images/covid.jpg", class: 'web', alt: "COVID-19 Image", title: 'COVID-19 Data Visualizer', descr: 'Pulled and visually represented COVID-19 Data with Google Charts and the COVID Tracking Project API. Able to view state and national data.', date: 'May 2020', link: 'https://tituscsmith.github.io/covid-19/visualizer.html', button: 'See Visualizer'},
{ image: "images/IndirectNodes.png", class: 'OS', alt: "Inodes Image", title: 'FSCK', descr: 'CS537 File System Checker for the xv6 file system image. Written in C.', date: 'April 2020', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p5.html', button: 'Project Description'},
{ image: "images/RectangleTerminal3.png", class: 'OS', alt: "Terminal Application Image", title: 'Unix Shell', descr: 'CS537 Simplified Unix Shell with select build in commands like cd and path. Written in C.', date: 'February 2020', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p2a.html', button: 'Project Description'},
{ image: "images/NBCEmotion.jpg", class: 'ai', alt: "NBCEmotion Image", title: 'Naïve Bayes Classifier for Sentiment Analysis', descr: 'CS540 Java program. Makes use of Bayes Rule and Laplace smoothing (or add-δ smoothing) to classify a subset of reviews from the Stanford Large Movie Review Dataset. Additionally, implemented K Fold Cross-Validation for assessing classification accuracy.', date: 'December 2019', link: 'http://pages.cs.wisc.edu/~dyer/cs540/hw/hw5/HW5.pdf', button: 'Project Description'},
{ image: "images/Digit-Classification.png", class: 'ai', alt: "Digit Classification Image", title: 'Digit Classifier', descr: 'CS540 Two-Layer, feed-forward neural network, classifying the digits 6, 8, and 9 from the UCI machine learning repository. Makes use of ReLU, Softmax, and Cross-entropy functions. Written in Java.', date: 'November 2019', link: 'http://pages.cs.wisc.edu/~dyer/cs540/hw/hw4/HW4.pdf', button: 'Project Description'},
{ image: "images/decision-tree-learning.png", class: 'ai', alt: "Decision Tree Image", title: 'Breast Cancer Decision Tree', descr: 'CS540 Binary Decision Tree that classifies breast cancer as benign or malignant. Makes use of Wisconsin Breast Cancer data from the UCI machine learning repository. Written in Java.', date: 'October 2019', link: 'http://pages.cs.wisc.edu/~dyer/cs540/hw/hw3/HW3.pdf', button: 'Project Description'},
{ image: "images/memlayout2.png", class: 'other', alt: "Memory Layout Image", title: 'Dynamic Memory Allocator', descr: 'CS354 Dynamic Memory Allocator. Emulated the C malloc() and free() library functions with an implicit free list and the Next-Fit Placement Policy.', date: 'Fall 2019'},
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
        var templateString = '<div style = "margin-right: 0px" class= "mb-4 card proj ' + cardData[i].class + ' " data-aos=' + animation + '><img src=' + cardData[i].image + ' class="card-img-top" alt=' + cardData[i].alt + '><div class="card-body"><h5 class="card-title">' + cardData[i].title + '</h5>'+
       // '<p class="card-text" data-aos="fade-up">' + cardData[i].descr + '</p>' + '<div class="align-items-center d-flex justify-content-between data-aos="fade-up">' +
       '<p class="card-text">' + cardData[i].descr + '</p>' + '<div class="align-items-center d-flex justify-content-between">' +

       '<small class="text-muted">' + cardData[i].date + '</small>';
        if(cardData[i].button){
        templateString += '<a href=' + cardData[i].link + ' target="_blank"><button class="button">' + cardData[i].button + '</button></a>'
        }

        templateString += '</div></div></div>';                 
        // console.log(templateString);
        $('#projdata').append(templateString);});

        
$("#projdata").on("click", function () {});
// });

//Partiall inspired by:
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_portfolio_gallery_filter
filterSelection("all") // Execute the function and show all columns

function filterSelection(c) {
    // alert("feafa");
  var x, i;
  x = document.getElementsByClassName('card');

  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {

    hideElement(x[i]);
    console.log(x[i].className);
    console.log(c);
    if (x[i].className.indexOf(c) > -1) showElement(x[i]);
  }
}

// Show filtered elements
function showElement(element) {
    $(element).show();
}

// Hide elements that are not selected
function hideElement(element) {
// element.display("none");    
$(element).hide();

}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById('TabContainer');
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    console.log("blah")

    var current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
