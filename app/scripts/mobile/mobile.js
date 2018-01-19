(() => {
  let i = null;
  setInterval(() => {
    i++;
    if(Number(i) === 61){
      i=1;
    }
    document.getElementById('setTime').innerHTML = i;
  },1000)
})();
