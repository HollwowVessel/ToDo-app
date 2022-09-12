export const folderMock = [
  {
    id: 1,
    color: 'all',
    title: 'Все задачи',
    active: true,
    tasks: [],
  },
  {
    id: 2,
    color: 'blue',
    title: 'Покупки',
    tasks: [
      { id: 1, desc: 'Make cof', checked: false },
      { id: 2, desc: 'Make coff', checked: true },
      { id: 3, desc: 'Make coffe', checked: false },
    ],
    active: false,
  },
  {
    id: 3,
    color: 'blue',
    title: 'Покупки',
    tasks: [
      { id: 4, desc: 'Make', checked: false },
      { id: 5, desc: 'Ma coffee', checked: false },
      { id: 6, desc: 'M coffee', checked: false },
    ],
    active: false,
  },
];
