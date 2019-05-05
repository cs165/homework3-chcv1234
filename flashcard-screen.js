// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

class FlashcardScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;

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
  }

  show() {
    this.containerElement.classList.remove('inactive');
    const flashcardContainer = document.querySelector('#flashcard-container');
    //const card = new Flashcard(flashcardContainer, 'word', 'definition');

      let words0 = Object.entries(FLASHCARD_DECKS[0].words);
      let words1 = Object.entries(FLASHCARD_DECKS[1].words);
      let words2 = Object.entries(FLASHCARD_DECKS[2].words);
      let tests = Object.entries(FLASHCARD_DECKS);
      console.log(words0[0][0]);
      console.log(tests);

    this.card = new Flashcard(flashcardContainer, words0[0][0], words0[0][1]);

      this.getDistance = this.getDistance.bind(this);
    this.card.flashcardElement.addEventListener('pointermove', this.getDistance);


  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  getDistance(event)
  {
    console.log(this.card.translateX);

    if(this.card.translateX >= 150 || this.card.translateX <= -150)
    {

    }
    else
    {

    }
  }

}
