import '../styles/memoApp.css';

// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class MemoApp {
  constructor(rootNode, setState) {
    this.target = rootNode;
    this.setState = setState;
    this.memoList = [];
  }

  render = () => {
    this.target.innerHTML = `<section class="memo-wrapper">
    <nav class="nav-bar">
      <button class="back-button">back</button>
      <button class="new-button">new</button>
    </nav>
    <input class="memo-input invisible" type="text" placeholder="메모를 입력하세요..">
    <ul class="memo-list">
    </ul>
  </section>`;

    const memoWrapper = document.querySelector('.memo-wrapper');
    const navbar = document.querySelector('.nav-bar');
    const input = document.querySelector('.memo-input');
    memoWrapper.addEventListener('click', (e) => {
      const targetClassList = e.target.classList;
      if (targetClassList.contains('back-button')) {
        this.setState('HOME');
      } else if (targetClassList.contains('new-button')) {
        input.classList.remove('invisible');
        input.focus();
      } else if (targetClassList.contains('memo-item')) {
        const memoList = document.querySelectorAll('.memo-item');
        memoList.forEach((item) => item.classList.remove('full-load'));
        targetClassList.add('full-load');
      }
    });

    memoWrapper.addEventListener('keydown', (e) => {
      if (!e.target.classList.contains('memo-input')) return;
      if (e.keyCode === 13) {
        this.memoList.push(input.value);
        this.update();
        input.classList.add('invisible');
        input.value = '';
      }
    });
  };

  update = () => {
    const target = document.querySelector('.memo-list');
    target.innerHTML = this.memoList
      .map((memoContent) => `<li class="memo-item">${memoContent}</li><hr>`)
      .join('');
  };
}

export default MemoApp;
