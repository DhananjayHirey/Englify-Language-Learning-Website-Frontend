var audio = new Audio();

var name1  = localStorage.getItem('name')
var date = new Date()
var hours = date.getHours();
console.log(hours)
var greet;
if(hours<12){
    greet = 'Good Morning'
}
else if(hours>12 && hours<=16){
    greet = 'Good Afternoon'
}
else if(hours>16 && hours<=24){
    greet = 'Good Evening'
}
document.getElementById('greeting').innerHTML = greet +' '+name1
var word = ['exigent','gravitate','bugbear']
var pron = ['EK-suh-junt','GRAV-uh-tayt','BUG-bair']
var pos = ['adjective','verb','bugbear']
var mean = ['a formal word that describes things that need to be dealt with immediately','to move, tend to move, or be attracted to','a source of dread or irritation']
var wordcont = document.getElementById('word')
var proncont = document.getElementById('pron')
var poscont = document.getElementById('pos')
var meancont = document.getElementById('mean')

var interval;
var i = 0
function icount(){
    if(i==2){
        return i = 0
    }
    else{
        return i = i+1
    }
}
function wordchange(){
    var index = icount()
    wordcont.innerHTML = word[index]
    proncont.innerHTML = pron[index]
    poscont.innerHTML = pos[index]
    meancont.innerHTML = mean[index]
}
setInterval(wordchange,5000)