// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// let requireFunc = (...args) => {
//   return [...args];
// };
//
// let requireArray = requireFunc(, requiredRange2, requiredRange3);

//сверху я сначало думал загнать в 1 масив все
// варианты цен а потом понял что нужно сравнивать кадждый отдельно

const Compare = (range, priceList = courses) => {
  priceList.map((index) => {
    index.prices[0] === null ? (index.prices[0] = 0) : index.prices;
    index.prices[1] === null ? (index.prices[1] = 9999999) : index.prices;
  });

  range[0] === null ? (range[0] = 0) : range;
  range[1] === null ? (range[1] = 99999) : range;

  return priceList.filter(
    (index, i) =>
      index.prices[1] >= range[0] &&
      (range[0] >= index.prices[0] || range[1] < index.prices[1]) &&
      range[1] >= index.prices[0]
  );
};

// Чтобы проверить функцию нужно в атрибут
// range присвоить варианты, а priceList
// масив обьктов с ценами
