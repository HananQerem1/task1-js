var languages = ['C++','Java','JavaScript']; 
var language = "";
for(var index = 0; index < languages.length; index++){
    language += `<li>${languages[index]}</li>`;
} 
document.querySelector(".favourite-languages ul").innerHTML = language;
