/*alert('Антон!');*/

 
 /*Переменная которая определяет на каком устройстве открыт сайт (Планшет, Мобильное устройство) 
 ести эта переменная  true то это touch screen если false то нет */
var isMobile = {
    Android: function() {
		return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


    	let body = document.querySelector('body');
    	if(isMobile.any()) {
    		body.classList.add('touch');
    		let arrow=document.querySelector('.arrow');
    	  for (i=0; i<arrow.length; i++) {
    	  	let thisLink=arrow[i].previousElementSibling;
    	  	let subMenu=arrow[i].nextElementSibling;
    	  	let thisArrow=arrow[i];


    	  	thisLink.classList.add('parent');		
    	  		arrow[i].addEventListener('click', function(){

    	  		});
    	  }
    	} else {
    		body.classList.add('mouse');
    	}
















/*var num = 0; 
while (num < 5) {
	console.log(`Число: ${num}`);
	num++;
}*/

/*// function showName() {
// 	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');*/

/*function showMessage() {
	console.log('Сообщение'); 
}
showMessage()*/

/*let showMessage = function() {
	console.log('Сообщение');
}
showMessage()*/




	/*function showMessage() {
		if (2 > 1) { 
		console.log('Сообщение')
		}
	}
 showMessage()
*/


/*et userInfo = {
	name: "Ivan",
	age: 22,
}
let user = userInfo;
user.age = 45;
console.log(userInfo.name, userInfo.age);*/		


/*let arr = ['Ваня', 'Даша', 'Юля',];
console.log(arr);

let arrNew = arr;
arrNew.length = 2;
console.log(arrNew);*/

 

/*let arr = ['Ваня', 'Петя', 'Юля',];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}*/



/*let arr = ['Ваня', 'Петя', 'Юля',];
arr.forEach(function(item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});




let userInfo = {
	name: "Ivan",
	age: 22,
}
userInfo.name = "Lena";
console.log(userInfo);
delete (userInfo.name);
console.log(userInfo);*/


/*let userInfo = {
	name: "Ivan",
	age: 22,
	address: {
		city: "Kazan"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}*/




/*function validateForm () {
	var element = document.forms ["My form"] ["fname"].value;
	var tel = document.forms ["My form"] ["ftel"].value;
	if (element == "") {
		alert ("Введите имя !");
		return false;
	} else if (tel == "") {
		alert ("Введите номер телефона !");
		return false;
	}
}



function changeColor (newColor) {
	var element = document.getElementById("text");
	element.style.color = newColor;
}*/



/*function Fruit (color, shape) {
	this.color = color;
	this.shape = shape;
}

var melon = new Fruit ('yellow', 'round');
var apple = new Fruit ('Red', 'round');*/

/*var apple = new Object ();
apple.color = 'green';
apple.shape = 'round';*/

/*melon.describe = function () {
    return 'An melon is ' + this.color;
}

console.log (melon.describe());*/



/*Создание объектов*/

/*var person = {
	firstName: 'Ivan',
	age: 45,
	children: ['Liza', 'Perya'],
	adress: {
		street:'555 Some st',
		city: 'Boston',
		state: 'MA'
	},
	NameAge: function () {
		return this.firstName + ", age is-" + this.age;
	}
}

console.log (person.NameAge ());*/


/*Функции*/

/*function summ (a, b) {
	return a + b;
}

document.write (summ (100, 100));*/
/*write ("Hello");  
write ("<br>");
write ("world");
*/




/*Операторы условий*/

/*var num_1 = 100;
var num_2 = 100;
if (num_1 > num_2) {
   console.log (num_1 + ">" + num_2);
} else if (num_1 == num_2) {
	console.log ( num_1 + "=" + num_2);
} else {
	console.log (num_1 + "<" + num_2);
}

var bool = true;
if (bool) {
	console.log (bool + " is true" );
}

var res = 2;
switch (res) {
 case 1:
	alert ("Res is 1");
 	  break;
 case 2:
	alert ("Res is 2");
	  break;
 case 3:
	alert ("Res is 3");
	  break;
	  default:
	alert ("Res is unknown");  
}*/



/*Циклы*/
/*var i = 20;
do {
  console.log (i);
} while (i < 10);
 

var colors = new Array ("Red", "Blue", "Green");
for (var i = 0; i < colors.length; i++) {
  console.log(colors [i]);    
}*/

/*var i = 200;
while (i >=10) {
	console.log(i);
	i /= 2;
}*/

/*for (var i = 100; i >= 10; i-= 10) {
	console.log (i);
}*/

/*Массивы*/
/*var colors = ["Red", "Blue", "Green"];
colors.push ("Grey");*/
/*document.write (colors[0] + colors [2]);*/

/*Математические операции*/
/*var firstNum = 12;
var secondNum = 24;*/
/*firstNum = 12 + firstNum;*/
/*document.write (Math.round (2.6) + "<br>");
document.write ("Результат:", firstNum + secondNum);*/

/*Работа с переменными*/
/*var num = 1;
var Num = "String";
var bool = true;*/
/*console.log (bool);*/

/*var name = prompt ("Как вас зовут ?");
console.log ("Ваше имя:" + name);*/





/*let name = 'ItsMyLife';
console.log(name);*/

// 1) Ключевые слова (var и т.д)
// 2) Именование переменных 
// 3) Название с цивфры 
// 4) Пробелы и дефисы 
// 5) Регистр 

/*let rating = 0.5;
rating = 10;
console.log(rating);
*/

//---------Приметивные типы данных------------

/*let name = 'Ivan'; // String
let age = 28; // Namber
let isMarried = true ; // Boolean 
let isMarried = undefined; // undefined
let userColor = null; // null*/

//---------Ссылочные типы данных--------------

/*let name ='Ivan';
let age = 28;

let person = {
	name: 'Ivan',
	age: 28,
}*/

/*console.log(person);

person.age = 49;*/

//Через точку 
/*console.log(person.age)*/

// Через скобки 

/*person['name'] = 'Vanika';
console.log(person['name'])
*/