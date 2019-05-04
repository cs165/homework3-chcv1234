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
    var menu = containerElement.querySelector('#choices');

      for(let choice of FLASHCARD_DECKS)
      {
          let node=document.createElement("div");
          let text=document.createTextNode(choice.title);
          node.appendChild(text);
          menu.appendChild(node);
      }

  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
