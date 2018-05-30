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

var monthSum = prompt('Ваш бюджет на месяц?'),
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

for (var i = 0, j = shopGoods.length; i < j; i++) {
	shopGoods [i] = (prompt('Какой тип товаров будем продавать?'));
}

document.write(daySum);

