// import {Message} from 'message.js';
// import {RollCallForm} from 'roll_call_form.js';

class App extends React.Component {
  render() {
    return (
        <div>
            <RollCallForm />
            <Message />
        </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));