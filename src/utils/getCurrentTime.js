const getFormatedTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hour = ('0' + date.getHours()).slice(-2);
  const min = ('0' + date.getMinutes()).slice(-2);

  return year + '/' + month + '/' + day + ' ' + hour + ':' + min;
};

export { getFormatedTime };
