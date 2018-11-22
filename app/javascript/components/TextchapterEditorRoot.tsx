import React from 'react';
import {observer, Provider} from 'mobx-react';
import rootStore from '../stores/root_store';

import HelloWorld from './HelloWorld';

class TextchapterEditorRoot extends React.Component {
  constructor(params:any) {
    super(params);
  }

  render() {
    return (
      <Provider
        rootStore={rootStore}
        editorStore={rootStore.editor}
      >
        <div>
          <HelloWorld />
        </div>
      </Provider>
    );
  }
}

export default TextchapterEditorRoot;
