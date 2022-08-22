function calculator(string) {

  const arr1 = string.split(' ');
	const arr2 = [];
	let a = Number(arr1[0]);
	let sign = arr1[1];
	let b = Number(arr1[2]);
	let num1Roman = arr1[0].toUpperCase();
	let num2Roman = arr1[2].toUpperCase();
	let num1Arabic, num2Arabic;
  let resultRoman;

  const signEl = ['+', '-', '/', '*'];
	const obj = {0: 0, I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15, XVI: 16, XVII: 17, XVIII: 18, XIX: 19};
	const romanFrom1To19 = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX'];
	const romanTens = [0, 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];

	function romanCalc() {

		for (const key in obj) {
			if(key == num1Roman){
				num1Arabic = String(obj[key]);
			}
			if(key == num2Roman){
				num2Arabic = String(obj[key]);
			}
		}
			arr2.push(num1Arabic);
			arr2.push(sign);
			arr2.push(num2Arabic);
			resultRoman = Math.floor(eval(arr2.join('')));

      if(num1Arabic > 10 || num2Arabic > 10 ){
				throw Error("Ошибка, операнд должны быть не больше 10");
			}
			if (resultRoman <= 0){
				return '';
			}
			if (resultRoman < 20) {
				return romanFrom1To19[resultRoman];
			}
			if (resultRoman >= 20 && resultRoman < 100) {
				let num1Arabic = Number(String(resultRoman).split('').slice(0,1));
				let num2Arabic = Number(String(resultRoman).split('').slice(1,2));
					return num2Arabic === 0 ? romanTens[num1Arabic] : romanTens[num1Arabic] + romanFrom1To19[num2Arabic];
			}
			if (resultRoman == 100) {
				return 'C';
			}
	}


if(signEl.indexOf(sign) == -1){
	throw Error("Ошибка, неверный знак арифметического действия");
}
if(!a && b || a && !b){
	throw Error("Ошибка, оба операнда должны быть либо арабскими, либо римскими");
}
if(a < 1 || a > 10 || b < 1 || b > 10){
	throw Error("Ошибка, операнд должны быть не меньше 1 и не больше 10");
}
if(arr1.length > 3){
	throw Error("Ошибка, должно быть два операнда и один оператор");
}

	if (!a && !b) {
		return romanCalc();
	} else {
		return String(Math.floor(eval(string)));
	}

}
calculator('II + VI');
