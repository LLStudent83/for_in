const obj1 = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function printObj(obj, sortingOrder) {
  const arrProp = [];
  // eslint-disable-next-line guard-for-in
  for (const elem in obj) { // формируем массив объектов
    const item = { key: elem, value: obj[elem] };
    arrProp.push(item); // добавляем элементы в конец массива
  }
  arrProp.sort((a, b) => {
    const keyA = a.key.toLowerCase();
    const keyB = b.key.toLowerCase();
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
  });

  for (let i = sortingOrder.length - 1; i >= 0; i -= 1) {
    const index = arrProp.findIndex((element) => {
      const SO = sortingOrder[i];
      return element.key === SO;
    });
    const element = arrProp[index];
    arrProp.splice(index, 1);
    arrProp.splice(0, 0, element);
  }
  return arrProp;
}


printObj(obj1, ['level', 'name']);
