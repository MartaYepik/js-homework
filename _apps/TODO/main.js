import './css/setting.scss'

class Todo{
  constructor(text) {
    this.text = text;
    this.isCompleted = false;
  }
}

class ToDoList{
  constructor(selectedHTMLElement) {
    this.todos = [];
    this.complited = [];
    this.selectedHTMLElement = selectedHTMLElement || document.querySelector('#app');
    this.render(this.todos);

  }
  render(todoArray) {
    this.selectedHTMLElement.innerHTML = "";
    this.layout();
    this.addListWithTodo(todoArray);
  }
  addToDoToList(text) {
    console.log('text', text);
    if (text === "" || text === null) {
      alert("The field can't be empty");
    } else {
      this.todos.push(new Todo(text));
    }
    this.render(this.todos);
  }
  addListWithTodo() {
    console.log("add list with to do", todoArray);
  }


  layout() {
    //header
    const header = document.createElement('header');
    header.className = "header";
    //logo
    const logo = document.createElement('img');
    logo.src = './img/logo.svg';
    logo.alt = 'logo';
    header.appendChild(logo);
    //input_wrapper
    const input_wrapper = document.createElement('div');
    input_wrapper.className = "input_wrapper";
    header.appendChild(input_wrapper);
    //input
    const input = document.createElement('input');
    input.className = 'input';
    input.type = 'text';
    input.placeholder = 'Add new task';
    //button
    const button = document.createElement('button');
    button.className = 'button'
    button.innerText = 'Create';
    const plus_img = document.createElement('img');
    plus_img.src = './img/plus.svg';
    plus_img.alt = 'plus';
    button.appendChild(plus_img);
    input_wrapper.appendChild(input);
    input_wrapper.appendChild(button);
    button.addEventListener('click', () => {
      this.addToDoToList(input.value);
      input.value = '';
    })
    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.addToDoToList(input.value);
        input.value = '';
      }
    })

    //main
    const main = document.createElement('main');
    main.className = 'main';


    this.selectedHTMLElement.appendChild(header);
    this.selectedHTMLElement.appendChild(main);
  }


}

const todo = new ToDoList();



///forEach li в addListWithTodo()