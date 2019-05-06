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
    let j=0 ;


      for(let choice of FLASHCARD_DECKS)
      {
          let node=document.createElement("div");
          let text=document.createTextNode(choice.title);
          node.id = j ;
          node.appendChild(text);
          menu.appendChild(node);
          j++ ;
      }
      menu = document.querySelectorAll('#choices div');

      for(let i=0;i<FLASHCARD_DECKS.length;i++)
      {
          menu[i].addEventListener('click',this.choose);
      }

  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  choose()
  {
      console.log(this.valueOf().id);
      let menuClick = new CustomEvent("menuClick",{detail:{deck : this.valueOf().id}});
      console.log('menu click '+this.textContent);
      document.dispatchEvent(menuClick);
  }
}
