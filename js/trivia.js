window.onload = function () {
  var myScore = 0;
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
      
      allQuestions = {
        '1. What is the day before Mardi Gras called?' : ['Lundi Gras', 'Fat Tuesday', 'Shrove Tuesday', 0],
        
        '2. What day comes after Mardi Gras?' : ['Lundi Friday', 'Ash Wednesday' , 'Shrove Tuesday', 0],

        '3. What time does New Orleans law require masks to be removed on Mardi Gras?' : ['12 p.m.', '6 p.m.' , '6 a.m.', 1],

        '4. Germany traditionally marks which day before post-carnival fasting as “Greasy?”' : ['Friday', 'Wednesday' , 'Thursday', 2],

        '5. Ivrea, Italy, marks Mardi Gras celebrations with a battle of which famous fruit?' : ['Bananas', 'Apples' , 'Oranges', 2],

        '6. In which year did Mardi Gras move its New Orleans celebration dates to not interfere with the Super Bowl?' : ['2010', '2013' , '2016', 1],

        '7. When did Louisiana declare Fat Tuesday a state holiday?' : ['1875', '1890' , '1980', 0],

        '8. What is Mardi Gras called in the United Kingdom, Australia, New Zealand and Canada?' : ['Fat Tuesday', 'Mardi Gras' , 'Shrove Tuesday', 2],

        '9. Mardi Gras beads used to be made of what material?' : ['Wood', 'Plastic' , 'Glass', 2],
        
        '10. When was the earliest known carnival celebration? ' : ['1889', '1294', '2016', 1]
      };
      
  function loadQuestion(curr) {
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);
        myScore += 10;             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = `Done<br> ${myScore} %`;
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {

    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
        // txt       = document.createTextNode(myScore);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }

  loadQuestion(current);
  loadAnswers(current);
  
};