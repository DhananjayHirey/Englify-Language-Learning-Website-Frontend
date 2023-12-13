let q1opt1 = document.getElementById('q1o1')
let q1opt2 = document.getElementById('q1o2')
let q1opt3 = document.getElementById('q1o3')
let q2opt1 = document.getElementById('q2o1')
let q2opt2 = document.getElementById('q2o2')
let q2opt3 = document.getElementById('q2o3')
let q3opt1 = document.getElementById('q3o1')
let q3opt2 = document.getElementById('q3o2')
let q3opt3 = document.getElementById('q3o3')
let q4opt1 = document.getElementById('q4o1')
let q4opt2 = document.getElementById('q4o2')
let q4opt3 = document.getElementById('q4o3')
let spr = 0
let prc = 0
let prpf = 0
let spa = 0
let pac = 0
let papf = 0
let sfu = 0
let fuc = 0
let fupf = 0
q1opt1.addEventListener('click',function(){
    q1opt1.style.backgroundColor='grey'
    q1opt2.style.backgroundColor='white'
    q1opt3.style.backgroundColor='white'
})
q1opt2.addEventListener('click',function(){
    q1opt1.style.backgroundColor='white'
    q1opt2.style.backgroundColor='grey'
    q1opt3.style.backgroundColor='white'
})
q1opt3.addEventListener('click',function(){
    q1opt1.style.backgroundColor='white'
    q1opt2.style.backgroundColor='white'
    q1opt3.style.backgroundColor='grey'
})
q2opt1.addEventListener('click',function(){
    q2opt1.style.backgroundColor='grey'
    q2opt2.style.backgroundColor='white'
    q2opt3.style.backgroundColor='white'
})
q2opt2.addEventListener('click',function(){
    q2opt1.style.backgroundColor='white'
    q2opt2.style.backgroundColor='grey'
    q2opt3.style.backgroundColor='white'
})
q2opt3.addEventListener('click',function(){
    q2opt1.style.backgroundColor='white'
    q2opt2.style.backgroundColor='white'
    q2opt3.style.backgroundColor='grey'
})
q3opt1.addEventListener('click',function(){
    q3opt1.style.backgroundColor='grey'
    q3opt2.style.backgroundColor='white'
    q3opt3.style.backgroundColor='white'
})
q3opt2.addEventListener('click',function(){
    q3opt1.style.backgroundColor='white'
    q3opt2.style.backgroundColor='grey'
    q3opt3.style.backgroundColor='white'
})
q3opt3.addEventListener('click',function(){
    q3opt1.style.backgroundColor='white'
    q3opt2.style.backgroundColor='white'
    q3opt3.style.backgroundColor='grey'
})
q4opt1.addEventListener('click',function(){
    q4opt1.style.backgroundColor='grey'
    q4opt2.style.backgroundColor='white'
    q4opt3.style.backgroundColor='white'
})
q4opt2.addEventListener('click',function(){
    q4opt1.style.backgroundColor='white'
    q4opt2.style.backgroundColor='grey'
    q4opt3.style.backgroundColor='white'
})
q4opt3.addEventListener('click',function(){
    q4opt1.style.backgroundColor='white'
    q4opt2.style.backgroundColor='white'
    q4opt3.style.backgroundColor='grey'
})
function submit(){
    let correct = 0;
    let wrong = 0;
    if(q1opt2.style.backgroundColor=='grey'){
        correct = correct+1
    }
    else if(q1opt1.style.backgroundColor=='grey'){
        wrong=wrong+1
        q1opt1.style.backgroundColor='red'
    }
    else{
        wrong=wrong+1
        q1opt3.style.backgroundColor='red'
    }
    if(q2opt1.style.backgroundColor=='grey'){
        correct=correct+1
    }
    else if(q2opt2.style.backgroundColor=='grey'){
        wrong=wrong+1
        q2opt2.style.backgroundColor='red'
    }
    else{
        wrong=wrong+1
        q2opt3.style.backgroundColor='red'
    }
    if(q3opt3.style.backgroundColor=='grey'){
        correct=correct+1

    }
    else if(q3opt2.style.backgroundColor=='grey'){
        wrong=wrong+1
        q3opt2.style.backgroundColor='red'
    }
    else{
        wrong=wrong+1
        q3opt1.style.backgroundColor='red'
    }
    if(q4opt3.style.backgroundColor=='grey'){
        correct=correct+1

    }
    else if(q4opt2.style.backgroundColor=='grey'){
        wrong=wrong+1
        q4opt2.style.backgroundColor='red'
    }
    else{
        wrong=wrong+1
        q4opt1.style.backgroundColor='red'
    }
    q1opt2.style.backgroundColor='#2fac3e'
    q2opt1.style.backgroundColor='#2fac3e'
    q3opt3.style.backgroundColor='#2fac3e'
    q4opt3.style.backgroundColor='#2fac3e'
    var resultbutton = document.createElement('button');
    var row6 = document.getElementById('row6')
    resultbutton.id = 'result';
    resultbutton.innerHTML = '<a href="www.google.com">Check Score</a>';
    row6.appendChild(resultbutton);
    resultbutton.addEventListener('click',function(){
        resultbutton.style.backgroundColor='#ff90ff89'
    // document.getElementById('result').innerHTML('<a href="www.google.com">Check Score</a>')

    });
    localStorage.setItem('correct',correct)
    
}