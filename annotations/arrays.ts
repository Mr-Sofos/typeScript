const colors = ['red', 'green', 'yellow'];

const dates = [new Date(), new Date()];

const fruitsByColor = [['tomato'], ['apple'], ['lemon']];

const fruitsByColor1: string[][] = [];

// help with inferrence when extra values
const color = colors[0];
const color1 = colors.pop();

// prevent incompatible values
// colors.push(true);

// help with 'map'
colors.map((color: string): string => {
  return color.toUpperCase();
});

// fixables types

const imortanDates: (Date | string)[] = [new Date()];

imortanDates.push(new Date());
imortanDates.push('Hello');
// imortanDates.push(10);
