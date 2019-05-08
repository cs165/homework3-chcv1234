// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

class App {
  constructor() {
    this.menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(this.menuElement);
    this.tocard = this.tocard.bind(this);
        document.addEventListener('menuClick',this.tocard);

    this.mainElement = document.querySelector('#main');
    this.flashcards ;
      this.toresult = this.toresult.bind(this);
    //this.flashcards = new FlashcardScreen(mainElement);

    this.resultElement = document.querySelector('#results');
    this.results ;
        this.again = this.again.bind(this);
        this.allagain = this.allagain.bind(this);
    //this.results = new ResultsScreen(resultElement);

    // Uncomment this pair of lines to see the "flashcard" screen:
    // this.menu.hide();
    // this.flashcards.show();


    // Uncomment this pair of lines to see the "results" screen:
     //this.menu.hide();
     //this.results.show();

  }

    tocard(event)
    {
        // Uncomment this pair of lines to see the "flashcard" screen:
        //this.title=event.detail.title;
        this.flashcards = new FlashcardScreen(this.mainElement,event.detail.deck);
        this.menu.hide();
        this.flashcards.show();
        document.addEventListener('cardend',this.toresult);
    }

    toresult(event)
    {
        this.results = new ResultsScreen(this.resultElement,event.detail.Right,event.detail.Wrong);
        this.flashcards.hide();
        this.results.show();
        document.addEventListener('retest',this.again);
        document.addEventListener('remenu',this.allagain);
    }

    again(event)
    {
        document.removeEventListener('retest',this.again);
        document.removeEventListener('remenu',this.allagain);

        if(event.detail.RE === true)
        {
            this.flashcards.card = null ;
            this.flashcards.R = 0 ;
            this.flashcards.W = 0 ;
            this.flashcards.RF = false ;
            this.flashcards.WF = false ;
            this.flashcards.cnt = 0 ;
            this.flashcards.RE = false ;
            this.REdeck = [] ;
            this.flashcards.show();
            this.results.hide();
        }
        else if(event.detail.RE === false)
        {
            this.flashcards.card = null ;
            this.flashcards.W = 0 ;
            this.flashcards.RF = false ;
            this.flashcards.WF = false ;
            this.flashcards.cnt = 0 ;
            this.flashcards.RE = true ;
            this.flashcards.show();
            this.results.hide();
        }
    }

    allagain(event)
    {
        document.removeEventListener('retest',this.again);
        document.removeEventListener('remenu',this.allagain);
        this.menu.show();
        this.results.hide();
    }
}
