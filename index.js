AOS.init({
	mirror: true, // whether elements should animate out while scrolling past the
	once: false, // whether animation should happen only once - while scrolling down
	duration: 750, // values from 0 to 3000, with step 50ms
	offset: 100,
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
});

$('body').css({ 'padding-top': $('nav.navbar').innerHeight() });
$('a[href="#educationmessage"]').on('click', function (e) {
	// prevent normal scrolling action
	e.preventDefault();
	// grab the target url from the anchor's ``href``
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		$('html,body').animate(
			{
				scrollTop: target.offset().top - $('nav.navbar').innerHeight() - 100,
			},
			1000
		);
		return false;
	}
});
$('a[href="#contact-section"]').on('click', function (e) {
	// prevent normal scrolling action
	e.preventDefault();
	// grab the target url from the anchor's ``href``
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		$('html,body').animate(
			{
				scrollTop: target.offset().top - $('nav.navbar').innerHeight() - 100,
			},
			1000
		);
		return false;
	}
});
$('a[href="#projmessage"]').on('click', function (e) {
	// prevent normal scrolling action
	e.preventDefault();
	// grab the target url from the anchor's ``href``
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		$('html,body').animate(
			{
				scrollTop: target.offset().top - $('nav.navbar').innerHeight() - 100,
			},
			1000
		);
		return false;
	}
});

var cardData = [
	{
		image: 'images/Mumbler.png',
		class: 'web',
		alt: 'Mumbler Brand Logo',
		title: 'Mumbler Social Media App',
		descr:
			'Developed with React, Redux, and Firebase. Users are able to post, view, comment on, and react to posts. Additionally, app supports comment notifications, profile pictures, profanity filtering, character/post limits, user following, and various admin privileges. Makes use of Firestore, Auth, Functions, and Storage. Personal Project.',
		date: 'Jan 2021',
		link: 'https://mumbler-fa910.web.app/',
		button: 'Web App!',
	},
	{
		image: 'images/Chat_App_Unsplash.jpeg',
		class: 'web',
		alt: 'Chat Image App',
		title: 'Socket.io Real Time Chat App',
		descr:
			'Web app developed with Node.js, Express, Socket.io, and MongoDB. Features include group and private messaging, persistent message storage, profanity filtering, online/offline statuses, and more. Individual Personal Project.',
		date: 'June 2020',
		link: 'https://socket-chat-titus.herokuapp.com',
		button: 'Web App!',
	},
	{
		image: 'images/CCTall.png',
		class: 'mobile',
		alt: 'Calorie Crusher Image',
		title: 'Calorie Crusher Mobile App',
		descr:
			'A fitness and meal tracking mobile app created with React Native in tangent with an existing RESTful API. Users are able to set nutrition and activity goals, log meals and activity sessions, and track daily progress to goals. Integrated accessibility features to support screen reader use on iOS.',
		date: 'Nov 2020',
		link: 'https://github.com/tituscsmith/calorie_crusher',
		button: 'Project Repo',
	},
	{
		image: 'images/moviedatabase.png',
		class: 'web',
		alt: 'Movie Image',
		title: 'Movie Database Web App',
		descr:
			'An IMDB-like web application developered with MySQL and PHP. Collaborative implemented in a 3 Person Academic Project. Refined the schema to 3NF. Features include user-control access, search filtering, a rating system, and additional admin privileges. Implementation includes queries and stored procedures.',
		date: 'July 2020',
		link: 'https://github.com/tituscsmith/moviesDB',
		button: 'Project Repo',
	},
	{
		image: 'images/classroom.png',
		class: 'web',
		alt: 'Course Scheduler Image',
		title: 'Course Search Web App',
		descr:
			'University course web application developed with ReactJS. Implemented the UI with a multi-level, pan & zoom navigation model. Features include search filtering, ratings and recommendations, prerequisite checks, and more. ',
		date: 'Oct 2020',
		link: 'https://tituscsmith.github.io/course_scheduler/',
		button: 'Web App!',
	},

	{
		image: 'images/shoppingassistant.jpeg',
		class: 'other',
		alt: 'Dialogflow Agent Image',
		title: 'Dialogflow Shopping Assistant',
		descr:
			'A dialogue-based interface that assists users of an online fictional store. App works with an existing web app and API. Agent includes support for users with cart and inventory queries, item filtering, web app navigation, and purchasing items. Implemented the Dialogflow webhook with  Javascript.',
		date: 'Dec 2020',
		link: 'https://github.com/tituscsmith/WiscShopDialogflow',
		button: 'Project Repo',
	},
	// { image: "images/MapReduceImageTalend.jpg", class: 'OS', alt: "MapReduce Image", title: 'MapReduce Word Counter', descr: 'Partner Project for CS537. Implemented the MapReduce programming model in C to calculate the word counts of 10mb of data in less than a second. Incorporated a Combiner function. Revised project individually to account for unused partitions.', date: 'May 2020<br>Repo Available upon Request*', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p4a.html', button: 'Project Description'},
	// { image: "images/Terminal.png", class: 'OS', alt: "Terminal Application Image", title: 'Unix Shell', descr: 'CS537 Simplified Unix Shell with select build in commands, like cd and path. Written in C.', date: 'February 2020<br>Repo Available upon Request*', link: 'http://pages.cs.wisc.edu/~shivaram/cs537-sp20/p2a.html', button: 'Project Description'},
];
// https://socket-chat-titus.herokuapp.com/
$.each(cardData, function (i) {
	var button =
		'<a href=' +
		cardData[i].link +
		' target="_blank"><button class="button" style = "background-color: lightgrey">' +
		cardData[i].button +
		'</button></a>';
	var spacing = '';
	//Pad spacing
	if ((i + 1) % 2 == 0) {
		spacing += '<div class="w-100 d-none d-sm-block d-md-none"></div>';
		// spacing += '<div class="w-100 d-none d-md-block d-lg-none"></div>';
	}
	if ((i + 1) % 3 == 0) {
		spacing += '<div class="w-100 d-none d-md-block d-lg-none"></div>';
		spacing += '        <div class="w-100 d-none d-lg-block d-xl-none"></div>		';

		spacing += '        <div class="w-100 d-none d-xl-block"></div>		';
	}
	//style = "max-width: 500px"
	var templateString =
		'<div class="card mb-4 ml-sm-0 mr-sm-1 ml-md-0 mr-md-1 ml-lg-0  mr-lg-2 mx-xs-0" >' +
		'<img class = "card-img-top" height = "250px" width = "300px" src="' +
		cardData[i].image +
		'" alt="' +
		cardData[i].alt +
		'">' +
		'<div class="card-body">' +
		'<h5 class="card-title" style = "font-weight: 500 !important">' +
		cardData[i].title +
		' </h5>' +
		'<p class="card-text">' +
		cardData[i].descr +
		'</p></div>' +
		'<div class="card-footer align-items-center d-flex justify-content-between" style = "background-color: white"><small class="text-muted">' +
		cardData[i].date +
		'</small>' +
		button +
		' </div></div>';
	templateString += spacing;
	// console.log(templateString);
	// console.log(templateString);
	$('#projdata').append(templateString);
});
const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};
$('#date').append(
	'console.log("' + new Date().toLocaleDateString(undefined, options) + '")'
);

$('#projdata').on('click', function () {});
$('#date').on('click', function () {});

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
