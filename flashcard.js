// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class Flashcard {
  constructor(containerElement, frontText, backText) {

      this.originX = null;
      this.originY = null;
      this.offsetX = 0;
      this.offsetY = 0;
      this.dragStarted = false;
      this.translateX = 0;
      this.translateY = 0;

    this.containerElement = containerElement;

    this._flipCard = this._flipCard.bind(this);

    this.flashcardElement = this._createFlashcardDOM(frontText, backText);
    this.containerElement.append(this.flashcardElement);

    this.flashcardElement.addEventListener('pointerup', this._flipCard);


      this.onDragStart = this.onDragStart.bind(this);
      this.onDragMove = this.onDragMove.bind(this);
    this.flashcardElement.addEventListener('pointerdown',this.onDragStart);
    this.flashcardElement.addEventListener('pointermove',this.onDragMove);

  }

  // Creates the DOM object representing a flashcard with the given
  // |frontText| and |backText| strings to display on the front and
  // back of the card. Returns a reference to root of this DOM
  // snippet. Does not attach this to the page.
  //
  // More specifically, this creates the following HTML snippet in JS
  // as a DOM object:
  // <div class="flashcard-box show-word">
  //   <div class="flashcard word">frontText</div>
  //   <div class="flashcard definition">backText</div>
  // </div>
  // and returns a reference to the root of that snippet, i.e. the
  // <div class="flashcard-box">
  _createFlashcardDOM(frontText, backText) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('flashcard-box');
    cardContainer.classList.add('show-word');

    const wordSide = document.createElement('div');
    wordSide.classList.add('flashcard');
    wordSide.classList.add('word');
    wordSide.textContent = frontText;

    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard');
    definitionSide.classList.add('definition');
    definitionSide.textContent= backText;

    cardContainer.appendChild(wordSide);
    cardContainer.appendChild(definitionSide);
    return cardContainer;
  }

  _flipCard(event) {

    if((this.originX - event.clientX) === 0 && (this.originY - event.clientY) === 0)
    {
        this.flashcardElement.classList.toggle('show-word');
    }


  }

/*
    let originX = null;
    let originY = null;
    let offsetX = 0;
    let offsetY = 0;
    let dragStarted = false;
*/
    onDragStart(event) {
        this.originX = event.clientX;
        this.originY = event.clientY;
        this.dragStarted = true;
        event.currentTarget.setPointerCapture(event.pointerId);
    }

    onDragMove(event) {
        if (!this.dragStarted) {
            return;
        }
        event.preventDefault();
        const deltaX = event.clientX - this.originX;
        const deltaY = event.clientY - this.originY;
        this.translateX = this.offsetX + deltaX;
        this.translateY = this.offsetY + deltaY;
        event.currentTarget.style.transform = 'translate(' +
            this.translateX + 'px, ' + this.translateY + 'px)' + ' ' + 'rotate(' + this.translateX * 0.2 + 'deg)';

        //console.log(this.translateX);
    }

    onDragEnd(event) {
        dragStarted = false;
        offsetX += event.clientX - originX;
        offsetY += event.clientY - originY;
    }

}
