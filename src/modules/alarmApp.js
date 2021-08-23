import '../styles/alarmApp.css';
import { getFormatedTime } from '../utils/getCurrentTime';

// To-do

class AlarmApp {
  constructor(rootNode, setState) {
    this.target = rootNode;
    this.setState = setState;
    this.alarmList = [];
    this.alarmIntervalList = [];
  }

  addZero = (time) => {
    return time < 10 ? '0' + time : time;
  };

  getAlarmTime = () => {
    const hr = document.querySelector('.alarm-hours');
    const min = document.querySelector('.alarm-mins');
    const ap = document.querySelector('.am-pm');

    let selectedHour = hr.options[hr.selectedIndex].value;
    const selectedMin = min.options[min.selectedIndex].value;
    const selectedAP = ap.options[ap.selectedIndex].value;

    if (selectedAP === 'PM') selectedHour = parseInt(selectedHour) + 12;

    const alarmTime =
      this.addZero(selectedHour) + ':' + this.addZero(selectedMin);
    console.log('alarmTime:' + alarmTime);
    return alarmTime;
  };

  setAlarm = (alarmTime) => {
    const alarm = setInterval(() => {
      console.log(alarmTime, getFormatedTime());
      if (alarmTime === getFormatedTime()) {
        console.log(alarmTime, getFormatedTime());
        alert(getFormatedTime());
        this.deleteAlarm(alarmTime);
      }
    }, 1000);
    this.alarmIntervalList.push({ time: alarmTime, interval: alarm });
    console.log(this.alarmIntervalList);
  };

  deleteAlarm = (alarmTime) => {
    this.alarmList = this.alarmList.filter((alarm) => alarm !== alarmTime);
    const shouldDelete = this.alarmIntervalList.find(
      (intervalItem) => intervalItem.time === alarmTime
    ).interval;
    clearTimeout(shouldDelete);
    this.alarmIntervalList = this.alarmIntervalList.filter(
      (intervalItem) => intervalItem.time !== alarmTime
    );
    this.update();
  };

  update = () => {
    const target = document.querySelector('.alarm-list');
    target.innerHTML = this.alarmList
      .map(
        (alarmTime) => `<li class="alarm-item">
      <span class="alarm-item-time">${alarmTime}</span>
      <button class="alarm-delete" data-time=${alarmTime}>삭제</button>
    </li><hr>`
      )
      .join('');
  };

  render = () => {
    this.target.innerHTML = `<section class="alarm-wrapper">
    <nav class="alarm-nav-bar">
      <button class="alarm-back-button">back</button>
      <button class="alarm-new-button">new</button>
    </nav>
    <div class="alarm-set-wrapper invisible">
      <div class="alarm-time">
        <select class="am-pm">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <select class="alarm-hours">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <select class="alarm-mins">
          <option value="0">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <button class="alarm-save">저장</button>
    </div>
    <ul class="alarm-list">
    </ul>
  </section>
    `;

    const alarmWrapper = document.querySelector('.alarm-wrapper');
    const alarmSetWrapper = document.querySelector('.alarm-set-wrapper');

    alarmWrapper.addEventListener('click', (e) => {
      const targetClassList = e.target.classList;
      if (targetClassList.contains('alarm-save')) {
        const alarmTime = this.getAlarmTime();
        this.alarmList.push(alarmTime);
        this.setAlarm(alarmTime);
        this.update();
        alarmSetWrapper.classList.add('invisible');
      } else if (targetClassList.contains('alarm-new-button')) {
        alarmSetWrapper.classList.remove('invisible');
      } else if (targetClassList.contains('alarm-delete')) {
        const alarmTime = e.target.dataset.time;
        this.deleteAlarm(alarmTime);
      } else if (targetClassList.contains('alarm-back-button')) {
        this.setState('HOME');
      }
    });
  };
}

export default AlarmApp;
