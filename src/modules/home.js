import '../styles/home.css';

// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class Home {
  constructor(rootNode, setState) {
    this.setState = setState;
    this.target = rootNode;
  }

  handleClick = (e) => {
    const mode = e.target.dataset.key;
    this.setState(mode);
  };

  render = () => {
    this.target.innerHTML = `<ul class="app-list">
        <li class="app-item" data-key="MEMO_APP">Memo</li>
        <li class="app-item" data-key="PHOTO_APP">Photo</li>
        <li class="app-item" data-key="ALARM_APP">Alarm</li>
      </ul>`;
    const ul = document.querySelector('.app-list');
    ul.addEventListener('click', this.handleClick);
  };
}

export default Home;
