
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
        cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
        nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("scroll").style.display = "block";
    } else {
      document.getElementById("scroll").style.display = "none";
    }
  }



function change() {

  document.getElementById('changeimg').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_00_x_o18FILipQx2fj3Qfo0XbveJ3iUxCI6sbkXUvmFMDcxK'
  document.getElementById('changeimg').classList.add('zoomIn')
  document.getElementById('changeimg').classList.add('animated')
  window.setTimeout(() => {

    
    document.getElementById('changeimg').src = 'https://d279m997dpfwgl.cloudfront.net/wp/2014/11/poverty.jpg'
    document.getElementById('changeimg').classList.add('zoomIn')
    document.getElementById('changeimg').classList.add('animated')
    window.setTimeout(() => {


      document.getElementById('changeimg').src = 'https://s3.scoopwhoop.com/aka/starvingcountries/2.jpg'
      document.getElementById('changeimg').classList.add('zoomIn')
      document.getElementById('changeimg').classList.add('animated')
      window.setTimeout(() => {

        
        document.getElementById('changeimg').src = 'https://www.gqmiddleeast.com/public/images/2020/03/18/edu_what_is_earth_0.jpg'
        document.getElementById('changeimg').classList.add('zoomIn')
        document.getElementById('changeimg').classList.add('animated')

      }, 5000);
    }, 5000);

  }, 5000);


}

change()

setInterval(function(){ 
  document.getElementById('changeimg').classList.remove('zoomIn')
  document.getElementById('changeimg').classList.remove('animated')
  change()
}, 20000);