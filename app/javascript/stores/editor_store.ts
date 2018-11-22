import {
  observable, action, reaction, computed
} from 'mobx';

import { getTodos } from '../api/todos';
import Todo from '../models/todo';

import { RootStore } from './root_store';

class EditorStore {
  protected readonly root: RootStore;
  todos = observable<Todo>([]);

  constructor(root: RootStore) {
    this.root = root;
    // do something else here
    this.loadData();
  }

  @action loadData() {
    getTodos().then(({data}) => {
      const todos = data.map(params => {
        return new Todo(params)
      })
      this.todos.replace(todos)
    });

  }

  @computed get greetings() {
    return this.todos.map(todo => (
      todo.description
    ));
  }
}

export default EditorStore;
