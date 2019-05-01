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

    const card = new Flashcard(flashcardContainer, words0[0][0], words0[0][1]);
    
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
