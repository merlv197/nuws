var allSource2 = [];
var sum = 0;

document.getElementsByClassName('article-title')[0].addEventListener('click', function() {
  allSource2.push(2);
  sum = allSource2.reduce((tempSum, val) => tempSum + val);
  console.log(sum);
});



document.body.style.backgroundImage = "linear-gradient(45deg, #4A6ECF 0%, #B46E86 80%, #D76D6D 100%)";



document.getElementsByClassName('article-rating')[i].addEventListener('click', function() {
									sum = allSource2.reduce((tempSum, val) => tempSum + val);
									console.log(sum);
									
									switch (sum){
       									case 1:
											document.body.style.backgroundImage = "linear-gradient(20deg, #4A6ECF 0%, #B46E86 80%, #D76D6D 20%)";

										case 3:
											document.body.style.backgroundImage = "linear-gradient(45deg, #4A6ECF 0%, #B46E86 20%, #D76D6D 90%)";
									}	
								});
