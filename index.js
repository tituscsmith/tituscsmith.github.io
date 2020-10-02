AOS.init();
//*Dynamically create cards with Jquery*/
$(document).ready(function(){

    //  TODO: Possibly incorporate more sections
    // 
var cardData = [
{ image: "images/chat.png", alt: "Chat Image", title: 'Socket.IO Chat Application', descr: 'Chat application written with Node.js, Express, and MongoDB. Features include persistent message storage, private and general chat rooms, and online/offline statuses.', date: 'July 2020', link: 'https://github.com/tituscsmith/socket-chat', button: 'Project Code'},
{ image: "images/library.png", alt: "Book Image", title: 'Library (MySQL Database)', descr: 'Implemented a library web application with MySQL. Designed a front-end login system with user-control access, checkout, search, and additional admin privileges.', date: 'June 2020', link: 'https://github.com/tituscsmith/library', button: 'Project Code'},
{ image: "images/weather.png", alt: "Weather Icon", title: 'Weather App (iOS)', descr: 'Developed a weather app with SwiftUI and OpenWeatherMap API. Current, Daily, and Hourly Forecasts as well as options to change location and temperature scale.', date: 'June 2020', link: 'https://imgur.com/a/Tmk8SRa', button: 'Project Walkthrough'},
{ image: "images/MapReduceImageTalend.jpg", alt: "MapReduce Image", title: 'MapReduce', descr: 'Partner Project for CS 537. Incorporated a Combiner function. Skills used: Locks, Semaphores, CV\'s, Threads. Revised project individually to account for unused partitions. Written in C.', date: 'May 2020', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p4a.html', button: 'Project Description'},
{ image: "images/covid.jpg", alt: "COVID-19 Image", title: 'COVID-19 Data Visualizer', descr: 'Pulled and visually represented COVID-19 Data with JQuery API Calls, Javascript, Google Charts, HTML, and Bootstrap. Able to view state, national, and racial data.', date: 'May 2020', link: 'https://tituscsmith.github.io/covid-19/visualizer.html', button: 'Project'},
{ image: "images/IndirectNodes.png", alt: "Inodes Image", title: 'FSCK', descr: 'CS537 File System Checker for the xv6 file system image. Written in C.', date: 'April 2020', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p5.html', button: 'Project Description'},
{ image: "images/RectangleTerminal3.png", alt: "Terminal Application Image", title: 'Unix Shell', descr: 'CS537 Simplified Unix Shell with select build in commands like cd and path. Written in C.', date: 'February 2020', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p2a.html', button: 'Project Description'},
{ image: "images/NBCEmotion.jpg", alt: "NBCEmotion Image", title: 'Naïve Bayes Classifier for Sentiment Analysis', descr: 'CS540 Java program. Makes use of Bayes Rule and Laplace smoothing (or add-δ smoothing) to classify a subset of reviews from the Stanford Large Movie Review Dataset. Additionally, implemented K Fold Cross-Validation for assessing classification accuracy.', date: 'December 2019', link: 'http://pages.cs.wisc.edu/~dyer/cs540/hw/hw5/HW5.pdf', button: 'Project Description'},
{ image: "images/Digit-Classification.png", alt: "Digit Classification Image", title: 'Digit Classifier', descr: 'CS540 Two-Layer, feed-forward neural network, classifying the digits 6, 8, and 9 from the UCI machine learning repository. Makes use of ReLU, Softmax, and Cross-entropy functions. Written in Java.', date: 'November 2019', link: 'http://pages.cs.wisc.edu/~dyer/cs540/hw/hw4/HW4.pdf', button: 'Project Description'},
{ image: "images/decision-tree-learning.png", alt: "Decision Tree Image", title: 'Breast Cancer Decision Tree', descr: 'CS540 Binary Decision Tree that classifies breast cancer as benign or malignant. Makes use of Wisconsin Breast Cancer data from the UCI machine learning repository. Written in Java.', date: 'October 2019', link: 'http://pages.cs.wisc.edu/~dyer/cs540/hw/hw3/HW3.pdf', button: 'Project Description'},
{ image: "images/memlayout2.png", alt: "Memory Layout Image", title: 'Dynamic Memory Allocator', descr: 'CS354 Dynamic Memory Allocator. Emulated the C malloc() and free() library functions with an implicit free list and the Next-Fit Placement Policy.', date: 'Fall 2019'},
{ image: "images/Quiz-Generator.png", alt: "Quiz Generator Image", title: 'Quiz Generator', descr: 'CS400 Team Project. Written in Java with JavaFX with JSON parsing.', date: 'Spring 2019'}
];

$.each(cardData, function (i) {
//Animation depends on which side it is
if(i%3==0){
var animation = "flip-left";
}else if(i%3==1){
var animation = "flip-up";
}else{
var animation = "flip-right";
}

var templateString = '<div class="mb-4 card proj" data-aos=' + animation + '><img src=' + cardData[i].image + ' class="card-img-top" alt=' + cardData[i].alt + '><div class="card-body"><h5 class="card-title">' + cardData[i].title + '</h5>'+
'<p class="card-text" data-aos="fade-up">' + cardData[i].descr + '</p>' + '<div class="align-items-center d-flex justify-content-between data-aos="fade-up">' +
'<small class="text-muted">' + cardData[i].date + '</small>';
if(cardData[i].button){
templateString += '<a href=' + cardData[i].link + ' target="_blank"><button class="button">' + cardData[i].button + '</button></a>'
}

templateString += '</div></div></div>';                 

$('#projdata').append(templateString);});


$("#projdata").on("click", function () {});
});
