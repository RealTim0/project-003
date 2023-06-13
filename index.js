let questionCon = document.getElementsByClassName('question-container')
for(let i = 0; i < questionCon.length; i++){
  questionCon[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })  
}

