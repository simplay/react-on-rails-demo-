import {inject, observer} from 'mobx-react';
import React from 'react';
import EditorStore from '../stores/editor_store';

interface InjectedProps {
  editorStore: EditorStore;
}

interface NameRowProps {
  name: string;
}
class NameRow extends React.Component<NameRowProps> {
  render() {
    return <div className="name-row">{this.props.name}</div>;
  }
}

@inject('editorStore')
@observer
class HelloWorld extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const greetings = this.injected.editorStore.greetings;
    const rows = greetings.map((greet, idx) => (
      <NameRow name={greet} key={idx} />
    ));
    return (
      <div className="hello-world">
        {rows}
        <br />
      </div>
    );
  }
}

export default HelloWorld;
