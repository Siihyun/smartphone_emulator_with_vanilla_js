import '../styles/memoApp.css';

// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class MemoApp {
  constructor(rootNode, setState) {
    this.target = rootNode;
    this.setState = setState;
  }

  render = () => {
    this.target.innerHTML = `hi i'm memo app`;
  };
}

export default MemoApp;
