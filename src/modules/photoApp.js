import '../styles/photoApp.css';
import file1 from '../images/file1.png';
import file2 from '../images/file2.png';
import file3 from '../images/file3.png';
import file4 from '../images/file4.png';
import file5 from '../images/file5.png';
import file6 from '../images/file6.png';
import file7 from '../images/file7.png';
import file8 from '../images/file8.png';
import file9 from '../images/file9.png';
import file10 from '../images/file10.png';
// To-do
// drag-and-drop 적용하기
// sequence localstorage에 저장해놓기

class PhotoApp {
  constructor(rootNode, setState) {
    this.target = rootNode;
    this.setState = setState;
    this.photoList = [
      'file1',
      'file2',
      'file3',
      'file4',
      'file5',
      'file6',
      'file7',
      'file8',
      'file9',
      'file10',
    ];
  }

  update = () => {
    const target = document.querySelector('.photo-list');
    target.innerHTML = this.photoList
      .map(
        (photoFileName) =>
          `<li class="photo-item"><img class="photo-image" src="dist/${photoFileName}.png" alt="user photo"></li>`
      )
      .join('');
  };

  render = () => {
    this.target.innerHTML = `<section class="photo-wrapper">
    <nav class="photo-nav-bar">
      <button class="photo-back-button">back</button>
    </nav>
    <ul class="photo-list">
    </ul>
    <div class="photo-image-viewer">
        
    </div>
  </section>`;

    const photoWrapper = document.querySelector('.photo-wrapper');
    photoWrapper.addEventListener('click', (e) => {
      const targetClassList = e.target.classList;
      if (targetClassList.contains('photo-back-button')) {
        this.setState('HOME');
      }
    });

    this.update();
  };
}

export default PhotoApp;
