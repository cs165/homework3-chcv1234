// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    document.getElementById("deck0").innerHTML=FLASHCARD_DECKS[0].title;
    document.getElementById("deck1").innerHTML=FLASHCARD_DECKS[1].title;
    document.getElementById("deck2").innerHTML=FLASHCARD_DECKS[2].title;
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
