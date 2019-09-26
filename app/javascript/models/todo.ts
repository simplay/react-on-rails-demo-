import {observable, computed} from 'mobx';

export interface TransitionProps {
  id: number;
  title: string;
}

class Todo {
  @observable id: number;
  @observable title: string;

  constructor(params) {
    this.id = params.id;
    this.title = params.title;
  }

  @computed get description() {
    return `Hello todo: ${this.title}`;
  }
}

export default Todo;
