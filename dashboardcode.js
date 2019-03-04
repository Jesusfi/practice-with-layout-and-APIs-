
function successListener() {  
  var data = JSON.parse(this.responseText);  
  console.log(data.status); 

  var articleTitles = [];
  var articleDescriptions = [];
  var articleImageLinks = []; 
  var articleLinks = []

  for(var i = 0; i < 3; i ++){
  	console.log("Title" + data.articles[i].title)
  	console.log("des " + data.articles[i].description);
  	articleTitles.push(data.articles[i].title); 
  	articleDescriptions.push(data.articles[i].description);
  	articleImageLinks.push(data.articles[i].urlToImage);
  	articleLinks.push(data.articles[i].url)
  }


  var oneTitle = document.getElementsByClassName("article-one");
  var twoTitle= document.getElementsByClassName("article-two");
  var threeTitle = document.getElementsByClassName("article-three");
  oneTitle[0].innerHTML = articleTitles[0];
  twoTitle[0].innerHTML = articleTitles[1];
  threeTitle[0].innerHTML = articleTitles[2];

  console.log(articleTitles)

  var oneDes = document.getElementsByClassName("article-one-des");
  var twoDes = document.getElementsByClassName("article-two-des");
  var threeDes = document.getElementsByClassName("article-three-des");
  oneDes[0].innerHTML = articleDescriptions[0]; 
  twoDes[0].innerHTML = articleDescriptions[1];
  threeDes[0].innerHTML = articleDescriptions[2];


  var button = document.getElementsByClassName("btn"); 
  button[0].href = articleLinks[0];
  button[1].href = articleLinks[1]; 
  button[2].href = articleLinks[2];

  var img = document.getElementsByClassName("pics"); 
  img[0].src = articleImageLinks[0]
  img[1].src = articleImageLinks[1]
  img[2].src = articleImageLinks[2]

}

function failureListener(err) {  
  console.log('Request failed', err);  
}

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dcbcecc73b7f4eabb4ff7a5c2dc21c0e';

var request = new XMLHttpRequest();  
request.onload = successListener;  
request.onerror = failureListener;  
request.open('get', url ,true);  
request.send();




