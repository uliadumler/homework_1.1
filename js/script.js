let monthSum,
		shopName,
		time,
		price;
		
function start() {
	monthSum = prompt('Ваш бюджет на месяц?');

	while (isNaN(monthSum) || monthSum == '' || monthSum == null) {
		monthSum = prompt('Ваш бюджет на месяц?');
	}

	shopName = prompt('Название вашего магазина?').toUpperCase();
	time = 29;
}		

start();

let mainList = {
	sum: monthSum,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods () {
		for (let i = 0; i < 3; i++) {

			let a = prompt('Какой тип товаров будем продавать?', '');
			
			if (typeof(a) === 'string'  && typeof(a) != null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods [i] = a;
			} else {
				alert('Введите снова');
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		}	else if (time < 24) {
			console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа');
		}
	},
	dayBudget: function dayBudget() {
		alert('Ежедневный бюджет ' + mainList.monthSum / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
				price = (price / 100) * 80;
		}
	},
	hierEmployers: function hierEmployers () {
		for (let i = 1; i < 5; i++) {

			let name = prompt('Введите имя сотрудника', '');
			
			if (typeof(name) === 'string'  && typeof(name) !== null && name != '' && name.length < 50) {
				mainList.employers[i] = name;
			} else {
				alert('Введите снова');
				i--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {

	let items = prompt('Перечислите через запятую товары', '' );
		
		while (!isNaN(items) || items == null || items == '') {
			items = prompt('Неверно! Перечислите через запятую товары снова', '' );
		}

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите еще', ''));
		mainList.shopItems.sort();

	}
};

mainList.chooseShopItems();

document.write('У нас вы можете купить: ' + '</br>');

mainList.shopItems.forEach(function(item, i, arr) {
	document.write((i + 1) + ': ' + item + '</br>');
});

for (let key in mainList) {
	console.log('Свойство ' + key + ' имеет значение ' + mainList[key]);
}

console.log(mainList);