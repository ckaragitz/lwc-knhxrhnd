import { LightningElement, api} from "lwc";

export default class App extends LightningElement {
  
  name;
  description;
  todoId = 0;
  todos = [];

  handleNameChange(event){

    this.name = event.target.value;

  }

  handleDescriptionChange(event){

    this.description = event.target.value;

  }

  handleSave(){

    this.todoId = this.todoId + 1;

    this.todos = [
            ...this.todos,
            {
                id : this.todoId,
                name : this.name,
                description: this.description
            }
        ];
  }
  
}
