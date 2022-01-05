interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'Name: ' + this.name;
  },
};

const cola = {
  color: 'brown',
  shugar: 40,
  name: 'Sprite',
  summary(): string {
    return this.name + ': ' + this.color + 'of color';
  },
};

const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(cola);
