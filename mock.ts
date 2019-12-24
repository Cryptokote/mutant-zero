const current_dev_level = {
  warfare: 2,
  technology: 6,
  food_supply: 12,
  culture: 8
};

const mock_proj = [
    {
        name: 'PPROJECT',
        dev_req: null,
        skills: ['comprehend', 'endure'],
        dev_bonus: {food_supply: 1, culture: 1},
        other_req: '',
    },
    {
        name: 'OLOLO',
        dev_req: {food_supply: 5, warfare: 6},
        skills: ['comprehend', 'endure'],
        dev_bonus: {warfare: 1, culture: 1},
        other_req: '',
    },
    {
        name: 'AZAZA',
        dev_req: null,
        skills: ['comprehend', 'endure'],
        dev_bonus: {food_supply: 1, culture: 2},
        other_req: '',
    },
    {
        name: 'TEST',
        dev_req: {technology: 5},
        skills: ['comprehend', 'endure'],
        dev_bonus: {warfare: 1, culture: 1},
        other_req: '',
    },
    {
        name: 'UKACHAKA',
        dev_req: {food_supply: 5},
        skills: ['comprehend', 'endure'],
        dev_bonus: {warfare: 2, technology: 2},
        other_req: '',
    },
];

