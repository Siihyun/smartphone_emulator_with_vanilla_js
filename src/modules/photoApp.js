import '../styles/photoApp.css';

// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class PhotoApp {
  constructor(rootNode, setState) {
    this.target = rootNode;
    this.setState = setState;
  }

  render = () => {
    this.target.innerHTML = `<span>I'm photo App</span>`;
  };
}

export default PhotoApp;
