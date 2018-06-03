/*var monthSum = prompt('Ваш бюджет на месяц?'),
		shopName = prompt('Название вашего магазина?'),
		shopGoods = [],
		mainList = {
			sum: monthSum,
			name: shopName,
			goods: shopGoods,
			employers: {

			},
			open: true
		},
		daySum = monthSum/30;

for (var i = 0; i < 3; i++) {
	shopGoods.push(prompt('Какой тип товаров будем продавать?'));
}

document.write(daySum);*/

/*var monthSum = prompt('Ваш бюджет на месяц?'),
		shopName = prompt('Название вашего магазина?'),
		shopGoods = new Array(3),
		mainList = {
			sum: monthSum,
			name: shopName,
			goods: shopGoods,
			employers: {

			},
			open: true
		},
		daySum = monthSum/30;

for (var i = 0; i < shopGoods.length; i++) {
	shopGoods [i] = (prompt('Какой тип товаров будем продавать?'));
}

console.log(shopGoods);

document.write(daySum);*/

let monthSum,
		shopName,
		time;
		
function start() {
	monthSum = prompt('Ваш бюджет на месяц?');

	while (isNaN(monthSum) || monthSum == '' || monthSum == null) {
		monthSum = prompt('Ваш бюджет на месяц?');
	}

	shopName = prompt('Название вашего магазина?').toUpperCase();
	time = 19;
}		

start();

let mainList = {
	sum: monthSum,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
},
daySum = monthSum/30;

function chooseGoods () {
	for (let i = 0; i < 3; i++) {

		let a = prompt('Какой тип товаров будем продавать?');
		
		if (typeof(a) === 'string'  && typeof(a) !== null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods [i] = a;
		} else {
			alert('Введите снова');
			i--;
		}
	}
}

chooseGoods();


/*let i = 0;

while (i < 3) {

	let a = prompt('Какой тип товаров будем продавать?');
	
	if (typeof(a) === 'string'  && typeof(a) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods [i] = a;
	} else {
		alert('Введите снова');
		i--;
	}

	i++
}*/

/*let i = 0;

do {
	let a = prompt('Какой тип товаров будем продавать?');
	
	if (typeof(a) === 'string'  && typeof(a) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods [i] = a;
	} else {
		alert('Введите снова');
		i--;
	}

	i++;
}

while (i < 3)*/

function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	}	else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24 часа');
	}
}

workTime(100);


function calcDaySum(budget) {
	return budget / 30;
}

alert(calcDaySum(mainList.sum));

let price = 200;

function getDiscount(sum) {
	return sum * 0.8;
}

if (mainList.discount == true) {
	alert ('Цена со скидкой: ' + getDiscount(price));
}	else {
	alert('Скидка не предоставлена. Но вы можете приобрести скидочную карту!');
}

function takeEmployers () {
	for (let i = 1; i < 5; i++) {

		let a = prompt('Введите имя сотрудника');
		
		if (typeof(a) === 'string'  && typeof(a) !== null && a != '' && a.length < 50) {
			mainList.employers[i] = a;
		} else {
			alert('Введите снова');
			i--;
		}
	}
}

takeEmployers();

console.log(mainList)