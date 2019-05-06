// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement,Right,Wrong) {
    this.containerElement = containerElement;
    this.R = Right ;
    this.W = Wrong ;
    this.percent = 0 ;

    if(this.R === 0)
    {
      this.precent = 0 ;
    }
    else
    {
        this.percent = Math.round((100/(this.R + this.W)) * this.R) ;

    }

  }

  show(numberCorrect, numberWrong) {
    this.containerElement.classList.remove('inactive');

    this.containerElement.querySelector('#results .percent').innerHTML = this.percent;
    this.containerElement.querySelector('#results .correct').innerHTML = this.R;
    this.containerElement.querySelector('#results .incorrect').innerHTML = this.W;

    if(this.percent === 100)
    {
        this.containerElement.querySelector('.continue').innerHTML = "Start over?";
    }
    else
    {
        this.containerElement.querySelector('.continue').innerHTML = "Continue";
    }
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
