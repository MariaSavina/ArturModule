/////////////////////////1/////////////////////////////

// const a = {
//   x: 1,
//   y: 2,
//   z: [1, 2, 3],
//   u: undefined,
//   v: null,
//   w: new Date(2014, 1, 1, 12, 0, 0),
// };

// function deepCopy(obj) {
//   let copyObj = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     let isDate = obj[key] instanceof Date;
//     if (isDate) {
//       copyObj[key] = new Date(obj[key]);
//     } else if (
//       "object" === typeof obj[key] &&
//       obj[key] !== null &&
//       isDate === false
//     )
//       copyObj[key] = deepCopy(obj[key]);
//     else {
//       copyObj[key] = obj[key];
//     }
//   }
//   return copyObj;
// }

// const b = deepCopy(a); // b — это отдельный объект
// console.log(a);
// console.log(b);

// b.x = 10;
// console.log(a.x); // 1
// // a.z и b.z указывают на разные массивы:
// b.z.push(4);
// console.log(a.z); // [1, 2, 3]
// // a.w и b.w независимы друг от друга
// b.w.setFullYear(2015);
// console.log(a.w.getFullYear()); // 2014

/////////////////////////////2/////////////////////////////

// function getCount(smth) {
//   let count = 0;
//   for (key in smth) {
//     if (key) {
//       count += 1;
//     }
//   }
//   return count;
// }

// const a = { a: 1, b: 2 };
// console.log(getCount(a)); // 2
// const b = function () {};
// console.log(getCount(b)); // 0
// const c = [1, 2, 3];
// console.log(getCount(c)); // 3
// const d = [];
// d[100] = 1;
// console.log(getCount(d)); // 1

// function getCount(smth, obj) {
//   let count = 0;
//   if (obj) {
//     for (key in smth) {
//       if (
//         (obj.skipNull == true && smth[key] !== null) ||
//         (obj.skipUndefined == true && smth[key] !== undefined)
//       ) {
//         count += 1;
//       }
//       if (
//         obj.skipNull == true &&
//         obj.skipUndefined == true &&
//         (smth[key] == null || smth[key] == undefined)
//       ) {
//         count -= 1;
//       }
//     }
//   } else {
//     for (key in smth) {
//       if (key) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

// const a = { a: 1, b: 2, c: null };
// console.log(getCount(a)); // 3
// console.log(getCount(a, { skipNull: true })); // 2
// const b = { a: 1, b: 2, c: undefined };
// console.log(getCount(b)); // 3
// console.log(getCount(b, { skipUndefined: true })); // 2
// const c = { a: 1, b: 2, c: undefined, d: null };
// console.log(getCount(c)); // 4
// console.log(getCount(c, { skipUndefined: true })); // 3
// console.log(getCount(c, { skipNull: true })); // 3
// console.log(getCount(c, { skipUndefined: true, skipNull: true })); // 2
// const d = [undefined, null];
// console.log(getCount(d)); // 2
// console.log(getCount(d, { skipNull: true })); // 1
// console.log(getCount(d, { skipUndefined: true })); // 1
// console.log(getCount(d, { skipUndefined: true, skipNull: true })); // 0

/////////////////////////////3/////////////////////////////

// const characters = [
//   { name: "barney", age: 36 },
//   { name: "fred", age: 40 },
// ];

// function pluck(arr, value) {
//   let nArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     nArr.push(arr[i][value]);
//   }
//   return nArr;
// }

// console.log(pluck(characters, "name")); // ['barney', 'fred']

/////////////////////////////4/////////////////////////////
let category;
let limit;

let rad = document.getElementsByTagName("input");
for (let i = 0; i < rad.length; i++) {
  rad[i].addEventListener("change", radio);
}

function radio() {
  let radCategory = document.getElementsByName("category");
  for (let i = 0; i < radCategory.length; i++) {
    if (radCategory[i].checked) {
      category = radCategory[i].value;
    }
  }
  let radLimit = document.getElementsByName("limit");
  for (let i = 0; i < radLimit; i++) {
    if (radLimit[i].checked) {
      limit = radLimit[i].value;
    }
  }
  search(
    `https://www.reddit.com/r/${category}.json?limit=${limit}&dist=${limit}`
  );
}

function search(myApi) {
  const API_URL = myApi;
  fetch(API_URL)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

      document.querySelector(".resSearch").innerHTML = "";

      for (let i = 0; i < data.data.children.length; i++) {
        let lishka = document.createElement("li");
        let linka = document.createElement("a");

        linka.setAttribute("href", data.data.children[i].data.url);
        linka.innerHTML = data.data.children[i].data.url;
        lishka.appendChild(linka);

        document.querySelector(".resSearch").appendChild(lishka);
      }
    })
    .catch((err) => console.log(err));
}

let prevBtn = document.querySelector(".prev");
let nexBtn = document.querySelector(".next");

/////////////////////////////5/////////////////////////////

// class Hamburger {
//   constructor(size, stuffing) {
//     this.size = size;
//     this.stuffing = stuffing;
//     this.topping;
//   }
// }

// Hamburger.SIZE_SMALL = [50, 20];
// Hamburger.SIZE_LARGE = [100, 40];
// Hamburger.STUFFING_CHEESE = [10, 20];
// Hamburger.STUFFING_SALAD = [20, 5];
// Hamburger.STUFFING_POTATO = [15, 10];
// Hamburger.TOPPING_MAYO = [20, 5];
// Hamburger.TOPPING_SPICE = [15, 0];

// let resTop = [];

// Hamburger.prototype.addTopping = function (topping) {
//   resTop.push(topping);
//   if (this.topping == undefined) {
//     return (this.topping = topping);
//   } else {
//     return (this.topping = [
//       this.topping[0] + topping[0],
//       this.topping[1] + topping[1],
//     ]);
//   }
// };
// Hamburger.prototype.removeTopping = function (topping) {
//   for (let i = 0; i < resTop.length; i++) {
//     if (resTop[i] == `${topping}`) {
//       resTop.splice(i, 1);
//     }
//   }

//   return (this.topping = [
//     this.topping[0] - topping[0],
//     this.topping[1] - topping[1],
//   ]);
// };
// Hamburger.prototype.getToppings = function () {
//   return resTop;
// };
// Hamburger.prototype.getSize = function () {
//   return this.size;
// };
// Hamburger.prototype.getStuffing = function () {
//   return this.stuffing;
// };
// Hamburger.prototype.calculatePrice = function () {
//   if (this.topping != undefined) {
//     return this.size[0] + this.stuffing[0] + this.topping[0];
//   } else {
//     return this.size[0] + this.stuffing[0];
//   }
// };
// Hamburger.prototype.calculateCalories = function () {
//   if (this.topping != undefined) {
//     return this.size[1] + this.stuffing[1] + this.topping[1];
//   } else {
//     return this.size[1] + this.stuffing[1];
//   }
// };

// // try {
// //   if (this.size != Hamburger.SIZE_SMALL || this.size != Hamburger.SIZE_LARGE) {
// //     throw new Error();
// //   }
// // } catch (e) {
// //   console.log(e);
// // }

// const hamburger = new Hamburger(
//   Hamburger.SIZE_SMALL,
//   Hamburger.STUFFING_CHEESE
// );
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // А сколько теперь стоит?
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// // Проверить, большой ли гамбургер?
// console.log(
//   "Is hamburger large: %s",
//   hamburger.getSize() === Hamburger.SIZE_LARGE
// );
// // -> false

// // ? сторокой размер получить ?????//////
// // console.log(hamburger.getSize());
// // console.log(hamburger.getStuffing());

// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1

// ///////// ? массив названий топпингов ????
// // console.log(hamburger.getToppings());
