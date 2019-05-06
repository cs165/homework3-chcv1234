// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

class FlashcardScreen {
  constructor(containerElement,deck) {
    this.containerElement = containerElement;
    this.deck = deck ;

    /*
      this.originX = null;
      this.originY = null;
      this.offsetX = 0;
      this.offsetY = 0;
      this.dragStarted = false;
      this.translateX = 0;
      this.translateY = 0;
    */
    this.card = null ;
    this.R = 0 ;
    this.W = 0 ;
    this.RF = false ;
    this.WF = false ;
    this.right = document.querySelector(".correct") ;
    this.wrong = document.querySelector(".incorrect");

    this.words ;
    this.length ;
    this.cnt = 0 ;

    this.REdeck = [] ;
  }

  show() {
    this.containerElement.classList.remove('inactive');
    this.flashcardContainer = document.querySelector('#flashcard-container');
    //const card = new Flashcard(flashcardContainer, 'word', 'definition');

      this.words = Object.entries(FLASHCARD_DECKS[this.deck].words);
      this.length = Object.keys(FLASHCARD_DECKS[this.deck].words).length;
      //let words1 = Object.entries(FLASHCARD_DECKS[1].words);
      //let words2 = Object.entries(FLASHCARD_DECKS[2].words);
      let tests = Object.entries(FLASHCARD_DECKS);
      console.log(this.words[0][0]);
      console.log(this.length);
      console.log(tests);

    this.card = new Flashcard(this.flashcardContainer, this.words[0][0], this.words[0][1]);

    this.right.innerHTML = this.R ;
    this.wrong.innerHTML = this.W ;

      this.getDistance = this.getDistance.bind(this);
      this.next = this.next.bind(this);
    this.card.flashcardElement.addEventListener('pointermove', this.getDistance);
    this.card.flashcardElement.addEventListener('pointerup', this.next);


  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  getDistance(event)
  {
    console.log(this.card.translateX);

      const back = document.querySelector('body');

    if(this.card.translateX >= 150)
    {
      back.style.backgroundColor = "#97b7b7";
      //this.R += 1;
      this.RF = true ;
        this.right.innerHTML = this.R+1 ;
    }
    else if(this.card.translateX <= -150)
    {
        back.style.backgroundColor = "#97b7b7";
        //this.W += 1 ;
        this.WF = true ;
        this.wrong.innerHTML = this.W+1 ;
    }
    else
    {
      if(this.RF === true)
      {
        //this.R -= 1;
        this.RF = false ;
          this.right.innerHTML = this.R ;
      }
      else if(this.WF === true)
      {
        //this.W -= 1;
        this.WF = false ;
        this.wrong.innerHTML = this.W ;
      }

      back.style.backgroundColor = "#d0e6df" ;

    }
  }

  next(event)
  {
      if(this.card.translateX >= 150 || this.card.translateX <= -150)
      {
          if(this.RF === true)
          {
              this.R += 1;
              this.RF = false;
              this.REdeck[this.cnt] = true ;
          }
          else if(this.WF === true)
          {
              this.W += 1;
              this.WF = false;
              this.REdeck[this.cnt] = false ;
          }

          if(this.cnt < this.length)
          {
              console.log(this.REdeck);

              while(this.flashcardContainer.firstChild)
              {
                  this.flashcardContainer.removeChild(this.flashcardContainer.firstChild);
              }

              if(this.cnt === this.length-1)
              {
                  const back = document.querySelector('body');
                  back.style.backgroundColor = "#d0e6df" ;
                  let cardend = new CustomEvent("cardend",{detail:{Right : this.R , Wrong : this.W}});
                  document.dispatchEvent(cardend);
              }
              else
              {
                  this.card = new Flashcard(this.flashcardContainer, this.words[this.cnt+1][0], this.words[this.cnt+1][1]);
                  this.card.flashcardElement.addEventListener('pointermove', this.getDistance);
                  this.card.flashcardElement.addEventListener('pointerup', this.next);

                  this.cnt ++ ;

                  const back = document.querySelector('body');
                  back.style.backgroundColor = "#d0e6df" ;
              }


          }
      }


  }

}
