import {action, observable} from 'mobx';
import EditorStore from './editor_store';

export class RootStore {
  stores = observable<any>([]);

  editor: EditorStore;

  constructor() {
    this.editor = new EditorStore(this);
    this.stores.push(this.editor);
  }
}

const instance = new RootStore();
(<any>window).store = instance;

export default instance;
