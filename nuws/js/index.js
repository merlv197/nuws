var input = document.getElementById('input');
var container = document.getElementById('container');

var allTitles = [];
var allDescription = [];
var allNumbers = [];
var allSource = [];
// let allSource2 = [];
var allSource3 = [];
var allPublications = [];

window.onload = function() {
 console.log("let's go!");

 switch (true){

       							case 0:
       							break;


       							//R Level 1
       							//Color Switch

       							case (sum) >= 2 && (sum) <=3:
       								console.log("Republicans Level 1");
       								document.getElementById('container0').style.display = "none";
									
								break;

								
								
								//R Level 2
       							//Color Switch

								case (sum) >= 4 && (sum) <=5:
									console.log("Republicans Level 2");
									document.getElementById('container0').style.display = "none";
									document.getElementById('container95').style.display = "none";
									// document.getElementById('container90').style.opacity = "0";
									
								break;


								//R Level 3
       							//Color Switch
								case (sum) >= 6 && (sum) < 7:
									console.log("Republicans Level 3");
									document.getElementById('container0').style.display = "none";
									document.getElementById('container95').style.display = "none";
									document.getElementById('container90').style.display = "none";
								break;
									

								//L Level 1
								//Color Switch

								case (sum) <= 10 && (sum) >=20:
									console.log("Liberals Level 1");
									document.getElementById('container0').style.display = "none";
									document.getElementById('container95').style.display = "none";
									document.getElementById('container90').style.display = "none";
									document.getElementById('container105').style.display = "none";
								break;

								//L Level 2
								//Color Switch

								case (sum) <= -6 && (sum) >=-8:
									console.log("Liberals Level 2");
									document.getElementById('container0').style.display = "none";
									document.getElementById('container95').style.display = "none";
									document.getElementById('container90').style.display = "none";
									document.getElementById('container105').style.display = "none";
									document.getElementById('container110').style.display = "none";
								break;

								//L Level 3
								//Color Switch

								case (sum) <= -9:
									console.log("Liberals Level 3");	
									document.getElementById('container0').style.display = "none";
									document.getElementById('container95').style.display = "none";
									document.getElementById('container90').style.display = "none";
									document.getElementById('container105').style.display = "none";
									document.getElementById('container110').style.display = "none";
									document.getElementById('container115').style.display = "none";
								break;


								// Ultra neutral
								// Color switch

								case (sum) >= 60:
									document.getElementById('container0').style.display = "none";
									document.getElementById('container95').style.display = "none";
									document.getElementById('container90').style.display = "none";
									document.getElementById('container105').style.display = "none";
									document.getElementById('container110').style.display = "none";
									document.getElementById('container115').style.display = "none";
									document.getElementById('input').style.border = '1.5px solid black';
									document.getElementById('input').style.color = 'black';
								
	
									
									const titleClass = document.getElementsByClassName('articleTitle');
									for (i = 0; i < titleClass.length; i++) {
  										titleClass[i].style.color = 'black';
  										titleClass[i].style.border = '1.5px solid black';
  										
											}


									const descriptionClass = document.getElementsByClassName('article-description');
									for (i = 0; i < descriptionClass.length; i++) {
  										descriptionClass[i].style.color = 'black';
  										
											}

									const ratingClass = document.getElementsByClassName('article-rating');
									for (i = 0; i < ratingClass.length; i++) {
  										ratingClass[i].style.color = 'black';
  										
											}

									break;	
								}






}


switch (true){

	case (localStorage.getItem("allSourceArray") === null):

			var allSource2 = [];
			break;

	case (localStorage.getItem("allSourceArray") != null):
			var allSource2 = JSON.parse(localStorage.getItem("allSourceArray"));
			break;

}


switch (true){

	case (localStorage.getItem("allPublicationsArray") === null):

			var allSource3 = [];
			break;

	case (localStorage.getItem("allPublicationsArray") != null):
			var allSource3 = JSON.parse(localStorage.getItem("allPublicationsArray"));
			break;

}

switch (true){

	case (localStorage.getItem("allSum") === null):
		 var sum = 0;
	break;

	case (localStorage.getItem("allSum") != null):
		 var sum = localStorage.getItem('allSum');
	break; 

}


var articleSourceArray = [];
var gradientScore = 0;
var allPublicationsArray = [];
var searchTerm = "Fox";
var u;
let articleSource = document.createElement('p');
;
let allSum=0;


var i =0;


function getNews(event) {

	
	if (event.keyCode == 13) {

		
		let everything = $.get("https://newsapi.org/v2/top-headlines?q=" + input.value + "&language=en&apiKey=27dc729ec63345718a89dd21896bd0f4");
		

			everything.done(function(data) {

			
				for (let i = 0; i < 8; i++) {	


						
						//DEFINE ALL THE VARIABLES
						let articleSource = document.createElement('p');
						let articleSourceContainer = document.createElement('DIV');
						let articleContainer = document.createElement('DIV');
						let titleContainer = document.createElement('DIV');
						let articleTitle = document.createElement('a');
						let articleDescription = document.createElement('p');
						let articleRating = document.createElement('DIV');
					
						//ADDING CLASS TAGS
						articleSource.classList.add("article-source");
						articleRating.classList.add("article-rating");
						titleContainer.classList.add("title-container");
						articleTitle.classList.add('articleTitle');
						articleContainer.classList.add('article-container');
						articleDescription.classList.add('article-description');
						articleSource.setAttribute('value',"0");
						//APPENDING
						
						articleContainer.appendChild(articleSource);
						container.appendChild(articleContainer);
						articleContainer.appendChild(titleContainer);
						titleContainer.appendChild(articleTitle);
						titleContainer.appendChild(articleDescription);
						titleContainer.appendChild(articleRating);


						// PULLING ENDPOINTS FROM API 
						articleSource.innerHTML = data.articles[i].source.name;
						articleTitle.innerHTML = data.articles[i].title;
						articleDescription.innerHTML = data.articles[i].description;
						articleRating.innerHTML = "Like";

						//PUSH DATA INTO ARRAYS
						allTitles.push(data.articles[i].title);
						allDescription.push(data.articles[i].description);
						allSource.push(data.articles[i].source.name);

       					document.getElementsByClassName('articleTitle')[i]
       					.addEventListener('click', function (event) {


       							if (screen.width > 500) {

       							articleDescription.style.display = "block";
       							articleRating.style.display = "block";
       							articleTitle.style.backgroundColor = "white";
       							articleTitle.style.border = "1.5px solid black";
       							articleTitle.style.color = "black";
								//load file for screen width 1000 and up here
								} else {
								articleDescription.style.display = "block";
       							articleRating.style.display = "block";
       							articleTitle.style.display = "inline-block";
       							articleTitle.style.border="none";
       							articleTitle.style.backgroundColor="white";
       							articleTitle.style.color = "black";
       							articleTitle.style.border = "1.5px solid black";
       							articleTitle.style.width="80%";
       							articleTitle.style.position="relative";


								}

       							

       							


						})

       					
       					document.getElementsByClassName('article-rating')[i]
       					.addEventListener('click', function (event) {
 								 							
       							 articleRating.style.color = "black";
       							 articleRating.style.borderColor = "black";
       							 articleRating.style.backgroundColor = "white";
       							 articleRating.style.border = "1.5px solid black";
       							 articleRating.style.font = "gt_walsheim regular 8px";
       							 articleRating.style.WebkitAnimation = "mynewmove 4s 2";
       							 articleRating.innerHTML = "Liked";
       							 articleRating.style.textAlign = "center";

       							 console.log("this was from" + " " + articleSource.innerHTML);


       						switch (articleSource.innerHTML){
       							
       							case "Reuters":
       							
       							case "USA Today":
       							case "ABC News":
       							case "Associated Press":

       								allSource2.push(2);
       								allPublications.push(articleSource.innerHTML);
       								
       								break;

       							//R
       							//Level 1

       							case "Bloomberg":
       							case "Business Insider":
       							case "Financial Post":
       							case "Financial Times":
       							case "Jerusalem Post":
       							
       								allSource2.push(2);
       								allPublications.push(articleSource.innerHTML);
       								break;

       							//R
       							//Level 2

       							case "Fox News":
       							case "RT":
       							case "Fortune":
       							case "Axios":
       								allSource2.push(2);
       								allPublications.push(articleSource.innerHTML);
       								break;

       							//R
       							//Level 3

       							case "Breitbart News":
       								allSource2.push(2);
       								allPublications.push(articleSource.innerHTML);
       								break;

       							//L
       							//Level 1

       							case "The New York Times":
       							case "Newsweek":
       							case "MSNBC":
       							case "CBS News":
       							case "CNN":
       							case "NBC News":
       							case 'The Washington Post':
       							case 'The Hill':
       							case 'Al Jazeera English':
       								allSource2.push(2);
       								allPublications.push(articleSource.innerHTML);
       								break;


       							//L
       							//Level 2

       							case "The Huffington Post":
       							case "Vice News":
       							case "Vox":

       							
       								allSource2.push(2);
       								allPublications.push(articleSource.innerHTML);
       								break;
       					

       							

       							}



       							


       								

       								
       								
								// localStorage.setItem("allSum", sum = allSource2.reduce((tempSum, val) => tempSum + val));
									

								sum = allSource2.reduce((tempSum, val) => tempSum + val);
								console.log("article score is now" + " " + sum);
								
								localStorage.setItem("allSourceArray", JSON.stringify(allSource2));
								localStorage.setItem("allPublicationsArray", JSON.stringify(allPublications));
								localStorage.setItem("allSum", sum);
								
								switch (true){

       							case 0:
       							break;


       							//R Level 1
       							//Color Switch

       							case (sum) >= 2 && (sum) <=3:
       								console.log("Republicans Level 1");
       								document.getElementById('container0').style.opacity = "0";
									
								break;

								
								
								//R Level 2
       							//Color Switch

								case (sum) >= 4 && (sum) <=5:
									console.log("Republicans Level 2");
									document.getElementById('container0').style.opacity = "0";
									document.getElementById('container95').style.opacity = "0";
									// document.getElementById('container90').style.opacity = "0";
									
								break;


								//R Level 3
       							//Color Switch
								case (sum) >= 6 && (sum) < 7:
									console.log("Republicans Level 3");
									document.getElementById('container0').style.opacity = "0";
									document.getElementById('container95').style.opacity = "0";
									document.getElementById('container90').style.opacity = "0";
								break;
									

								//L Level 1
								//Color Switch

								case (sum) <= 8 && (sum) >=10:
									console.log("Liberals Level 1");
									document.getElementById('container0').style.opacity = "0";
									document.getElementById('container95').style.opacity = "0";
									document.getElementById('container90').style.opacity = "0";
									document.getElementById('container105').style.opacity = "0";
								break;

								//L Level 2
								//Color Switch

								case (sum) <= 12 && (sum) >=14:
									console.log("Liberals Level 2");
									document.getElementById('container0').style.opacity = "0";
									document.getElementById('container95').style.opacity = "0";
									document.getElementById('container90').style.opacity = "0";
									document.getElementById('container105').style.opacity = "0";
									document.getElementById('container110').style.opacity = "0";
								break;

								//L Level 3
								//Color Switch

								case (sum) <= -9:
									console.log("Liberals Level 3");	
									document.getElementById('container0').style.opacity = "0";
									document.getElementById('container95').style.opacity = "0";
									document.getElementById('container90').style.opacity = "0";
									document.getElementById('container105').style.opacity = "0";
									document.getElementById('container110').style.opacity = "0";
									document.getElementById('container115').style.opacity = "0";
								break;


								// Ultra neutral
								// Color switch

								case (sum) >= 600:
									document.getElementById('container0').style.opacity = "0";
									document.getElementById('container95').style.opacity = "0";
									document.getElementById('container90').style.opacity = "0";
									document.getElementById('container105').style.opacity = "0";
									document.getElementById('container110').style.opacity = "0";
									document.getElementById('container115').style.opacity = "0";
									document.getElementById('input').style.border = '1.5px solid black';
									document.getElementById('input').style.color = 'black';
								
	
									
									const titleClass = document.getElementsByClassName('articleTitle');
									for (i = 0; i < titleClass.length; i++) {
  										titleClass[i].style.color = 'black';
  										titleClass[i].style.border = '1.5px solid black';
  										
											}


									const descriptionClass = document.getElementsByClassName('article-description');
									for (i = 0; i < descriptionClass.length; i++) {
  										descriptionClass[i].style.color = 'black';
  										
											}

									const ratingClass = document.getElementsByClassName('article-rating');
									for (i = 0; i < ratingClass.length; i++) {
  										ratingClass[i].style.color = 'black';
  										
											}

									break;	
								}


									



								


						});

				}


			
			});

				

				

				// 				};

			


				

		//CLEAN ARRAYS ON NEW REQUEST OR REFRESH

		input.value = "";

		while (container.firstChild) {
			container.removeChild(container.firstChild);
			// (container2.firstChild)
			// container2.removeChild(container2.firstChild);
			allTitles.length = 0;
			allDescription.length = 0;
			allSource.length = 0;

			//REFRESH

			

			
			

		}	
	}
}




								 
input.addEventListener('keyup', getNews);











