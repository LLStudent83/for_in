import printObj from '../printObj';

test('check created arr', () => {
  const obj1 = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(printObj(obj1, ['level', 'name'])).toEqual([
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
