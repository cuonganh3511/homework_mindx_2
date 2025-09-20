// BT 1:
function productInfo(name,price) {
	return `Sản phẩm: ${name}, giá ${price.toLocaleString()} VND `
}

console.log(productInfo("sach", 20000));

// BT 2:
const greet = function(name) {
	return `xin chao: ${name}`
}

console.log(greet("cuong"));

// BT 3:
const sumUpTo = function(num) {
	if(num) {
		let sum = 0;
		for(let i=0; i <= num; i++) {
			sum= sum +=i
		}
		return sum;
	}
}

console.log(sumUpTo(5));

// BT 4:
function square(num) {
	return num ** 2
}

console.log(square(6));

// BT 5:
function isEven(num) {
	return num % 2 === 0 ? true : false
}

console.log(isEven(7));

// BT 6:
const firstElement = function(num) {
	return num[0]
}
console.log(firstElement([2,3,4]));

// BT 7:
function sum(...rest) {
	let sum = rest.reduce((num1, num2) => num1 + num2,0);
	return sum
}

console.log(sum(1, 2, 3, 4));

// BT 8:
const user = { name: "Nam", age: 30 };
console.log(`name: ${user.name}`);
console.log(`age: ${user.age}`);

// BT 9:
const people = [{ name: "And" }, { name: "Bình" }];
console.log(people.map(item => item.name).join(","));

// BT 10:
function stringLength(value) {
	return value.length
}

console.log(stringLength("Hello World"));

// BT 11:
function toUpperCase(value) {
	return value.toUpperCase()
}
console.log(toUpperCase("javascript"));

// BT 12:
function formatCurrency(value) {
	return value.toLocaleString()
}
console.log(formatCurrency(1000000));

// BT 13:
function max(value) {  
	return Math.max(...value) 
}
console.log(max([10, 5, 20, 8]));

// BT 14:
function isPrime(num) {
  if (num < 2) return false; // Số < 2 không phải số nguyên tố

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // tìm được ước số khác 1 và chính nó
    }
  }
  return true; // nếu không chia hết cho số nào => số nguyên tố
}
console.log(isPrime(7));

// BT 15:
function repeatString(value, time) {
	return value.repeat(time)
}
console.log(repeatString("helo ", 3));

// BT 16:
function sumOdd(value) {
	return value.reduce((a , b) => {
		return a + (b % 2 !== 0 ? b : 0)
	}, 0)
}	

console.log(sumOdd([1, 2, 3, 4]));

// BT 17:
function sumGreaterThan (value, n) {
	return value.reduce((a, b) => {
		return a + (b > n ? b : 0)
	}, 0)
}
console.log(sumGreaterThan([1, 2, 3, 4], 2));