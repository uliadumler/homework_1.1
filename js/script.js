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

let monthSum = prompt('Ваш бюджет на месяц?'),
		shopName = prompt('Название вашего магазина?'),
		mainList = {
			sum: monthSum,
			name: shopName,
			shopGoods: [],
			employers: {},
			open: true
		},
		daySum = monthSum/30,
		time = 4;

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

if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
}	else if (time < 24) {
	console.log('Уже слишком поздно!');
} else {
	console.log('В сутках только 24 часа');
}

console.log(mainList);

alert(mainList.sum / 30);

