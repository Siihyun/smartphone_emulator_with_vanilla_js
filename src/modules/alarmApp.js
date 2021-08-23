import '../styles/alarmApp.css';

// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class AlarmApp {
  constructor(rootNode) {
    this.target = rootNode;
  }

  render = () => {
    this.target.innerHTML = `<span>I'm Alarm App</span>`;
  };
}

export default AlarmApp;
