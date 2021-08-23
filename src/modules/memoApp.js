import '../styles/memoApp.css';

// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class MemoApp {
  constructor(rootNode) {
    this.target = rootNode;
  }

  render = () => {
    this.target.innerHTML = `<span>I'm memo App</span>`;
  };
}

export default MemoApp;
