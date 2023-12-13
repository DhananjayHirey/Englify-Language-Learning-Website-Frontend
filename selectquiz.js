var subopt1
var subopt2
var subopt3
var subopt4
var subopt1value
var subopt2value
var subopt3value
var subopt4value
subopt1 = document.getElementById('subopt1')
subopt2 = document.getElementById('subopt2')
subopt3 = document.getElementById('subopt3')
subopt4 = document.getElementById('subopt4')
var liter
var word
var gram
liter = document.getElementById('literature')
word = document.getElementById('wordquiz')
gram = document.getElementById('grammar')

    
liter.addEventListener('click',function(){    
    subopt1.innerHTML='Figures of Speech'
    subopt2.innerHTML='Poetic Analysis'
    subopt3.innerHTML='Wordplay'
    subopt4.innerHTML='Novel Synopsis'
    subopt1value = 'FOS'
    subopt2value = 'PA'
    subopt3value = 'WP'
    subopt4value = 'NS'
});
    
gram.addEventListener('click',function(){
    subopt1.innerHTML='Tenses'
    subopt2.innerHTML='Active and Passive Voice'
    subopt3.innerHTML='Direct and Indirect Speech'
    subopt4.innerHTML='Kinds of Sentences'
    subopt1value = 'T'
    subopt2value = 'A&P'
    subopt3value = 'DI'
    subopt4value = 'KOS'
});

word.addEventListener('click',function(){
    subopt1.innerHTML='Vocabuary Test 1'
    subopt2.innerHTML='Vocabulary Test 2'
    subopt3.innerHTML='Vocabulary Test 3'
    subopt4.innerHTML='Vocabulary Test 4'
    subopt1value = 'VT1'
    subopt2value = 'VT2'
    subopt3value = 'VT3'
    subopt4value = 'VT4'
});

subopt1.addEventListener('click',function(){
    
})