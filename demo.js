var i = 0;
var interval;
function setinterveral(i){
    interval = setInterval(console.log(i),3000);
    setinterveral(i+1)
}