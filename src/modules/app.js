import Home from './home';
import AlarmApp from './alarmApp';
import MemoApp from './memoApp';
import PhotoApp from './photoApp';

class App {
  constructor() {
    this.rootNode = document.querySelector('#root');
    this.state = {
      mode: 'HOME',
    };
    //history.pushState({}, '', '/home');

    this.home = new Home(this.rootNode, this.setState);
    this.alarmApp = new AlarmApp(this.rootNode, this.setState);
    this.memoApp = new MemoApp(this.rootNode, this.setState);
    this.photoApp = new PhotoApp(this.rootNode, this.setState);

    this.setState(this.state.mode);
  }

  setState = (mode) => {
    this.state.mode = mode;
    this.render(this.state.mode);
  };

  render = (mode) => {
    switch (mode) {
      case 'HOME':
        this.home.render();
        break;
      case 'MEMO_APP':
        this.memoApp.render();
        break;
      case 'ALARM_APP':
        this.alarmApp.render();
        break;
      case 'PHOTO_APP':
        this.photoApp.render();
        break;
      default:
        return;
    }
  };
}

export default App;
