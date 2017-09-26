function multiplication_table(number){
    for (i=1; i <=10; i++){
        console.log(i*number);
    }
}

multiplication_table(4);

/*-------------Max Function----*/

function max(a,b){
    if (a>b){
        console.log(a);
    } else{
        console.log(b);
    }
}

max (4,5);

/*----------New Max Function----*/

function new_max(a,b,c){
    if(a>b && a>c){
        console.log(a);
        
    } 
    
    else if (b>a && b>c){
        console.log(b);
    }
    
    else{
        console.log(c);
    }
}

new_max(1,4,1);

/*---------------------Is a Vowel?----*/

function isaVowel(letter){
    vowels=['a','e','i','o','u'];
    if (vowels.indexOf(letter)=== -1){
        console.log(letter + "is not a vowel");
        
    } else{
        console.log(letter + "is a vowel");
    }
}


isaVowel(a);
isaVowel(b);

/*------------------------GetObject-----(picks one property out of an object----------*/
function getProperty(obj, key) {
  return obj[key];
}

var myObject = {
  name: 'Ste',
  location:'Dublin',
  country:'Ireland'
};
var output = getProperty(myObject, 'name');
console.log(output); 

/*------------------------AddObject-----(how to add a property to an existing variable)-----*/
function addProperty(obj, key) {
  obj[key]=true;
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);
console.log(myObj);

/*---------------------(Checks Age)---------------------------------------------------*/
function checkAge(name, age) {
  if(age>=21) return ("Welcome " + name)
 else return ("Go home, " + name)
}
var output = checkAge('Adrian', 18);
console.log(output); 