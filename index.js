import './styles.css';
import { getFormatedTime } from './src/utils/getCurrentTime';

const setTimeBar = () => {
  const timeBar = document.querySelector('.time-bar');
  setInterval(() => {
    timeBar.textContent = getFormatedTime();
  }, 1000);
};

setTimeBar();
