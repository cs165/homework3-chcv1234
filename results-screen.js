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

    this.backtest = this.backtest.bind(this);
    this.backmenu = this.backmenu.bind(this);

    if(this.R === 0)
    {
      this.precent = 0 ;
    }
    else
    {
        this.percent = Math.round((100/(this.R + this.W)) * this.R) ;

    }

  }

  show() {
    this.containerElement.classList.remove('inactive');

    this.containerElement.querySelector('#results .percent').innerHTML = this.percent;
    this.containerElement.querySelector('#results .correct').innerHTML = this.R;
    this.containerElement.querySelector('#results .incorrect').innerHTML = this.W;

    if(this.percent === 100)
    {
        this.containerElement.querySelector('.continue').innerHTML = "Start over?";
        //let retest = new CustomEvent("retest",{detail:{RE: true}});
        //document.dispatchEvent(retest);
    }
    else
    {
        this.containerElement.querySelector('.continue').innerHTML = "Continue";
        //let retest = new CustomEvent("retest",{detail:{RE: false}});
        //document.dispatchEvent(retest);
    }

      this.containerElement.querySelector('.continue').addEventListener('click',this.backtest);
      this.containerElement.querySelector('.to-menu').addEventListener('click',this.backmenu);
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  backtest()
  {
      this.containerElement.querySelector('.continue').removeEventListener('click',this.backtest);
      this.containerElement.querySelector('.to-menu').removeEventListener('click',this.backmenu);

    if(this.percent === 100)
    {
        let retest = new CustomEvent("retest",{detail:{RE: true}});
        document.dispatchEvent(retest);
    }
    else
    {
        let retest = new CustomEvent("retest",{detail:{RE: false}});
        document.dispatchEvent(retest);
    }

  }

  backmenu()
  {
      this.containerElement.querySelector('.continue').removeEventListener('click',this.backtest);
      this.containerElement.querySelector('.to-menu').removeEventListener('click',this.backmenu);
      let remenu = new CustomEvent("remenu",{detail:{menu: true}});
      document.dispatchEvent(remenu);
  }
}
