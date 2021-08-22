import './styles.css';
import { getFormatedTime } from './src/utils/getCurrentTime';
import App from './src/modules/app';

const setTimeBar = () => {
  const timeBar = document.querySelector('.time-bar');
  setInterval(() => {
    timeBar.textContent = getFormatedTime();
  }, 1000);
};

setTimeBar();

const app = new App();
