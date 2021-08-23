import Home from './home';
import AlarmApp from './alarmApp';
import MemoApp from './memoApp';
import PhotoApp from './photoApp';

class App {
  constructor() {
    this.rootNode = document.querySelector('#root');
    this.mode = 'HOME';
    //history.pushState({}, '', '/home');

    this.home = new Home(this.rootNode, this.onClick);
    this.alarmApp = new AlarmApp(this.rootNode);
    this.memoApp = new MemoApp(this.rootNode);
    this.photoApp = new PhotoApp(this.rootNode);

    this.render(this.mode);
  }

  onClick = (e) => {
    this.mode = e.target.dataset.key;
    if (!this.mode) return;
    this.render(this.mode);
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
        throw new Error('error!');
    }
  };
}

export default App;
