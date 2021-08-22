class App {
  constructor() {
    this.target = document.querySelector('#root');
    this.mode = 'HOME';

    //this.home = new Home();
    //this.alarmApp = new AlarmApp();
    //this.memoApp = new MemoApp();
    //this.photoApp = new PhotoApp();

    this.render(this.mode);
  }

  render(mode) {
    switch (mode) {
      //case home: home.render()
      case 'HOME':
        this.target.innerHTML = 'test done';
    }
  }
}

export default App;
