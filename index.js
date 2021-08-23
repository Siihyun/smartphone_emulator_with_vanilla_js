import './styles.css';
import { getFormatedTime, getFormatedYear } from './src/utils/getCurrentTime';
import App from './src/modules/app';

const setTimeBar = () => {
  const timeBar = document.querySelector('.time-bar');
  setInterval(() => {
    timeBar.textContent = getFormatedYear() + ' ' + getFormatedTime();
  }, 1000);
};

setTimeBar();

const app = new App();
