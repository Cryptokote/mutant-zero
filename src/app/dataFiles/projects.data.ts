import {Devs, Project, StartedProject} from './data.types';

export const PROJECTS: Array<Project> = [
{name: 'DEFENSES',
description: 'Palisades, earthworks or even a moat. Protects the Ark against enemies on the outside, and makes it harder' +
' to slip in or out unnoticed.',
dev_req: null,
skills: ['Force', 'Scout'],
work_points: 8,
dev_bonus: {warfare: 2}},

{name: 'HUNTING PARTY',
description: 'The People organize expeditions into the Zone to track and kill wild beasts for grub.',
dev_req: null,
skills: ['Endure', 'Shoot'],
work_points: 4,
dev_bonus: {food_supply: 2}},

{name: 'CANNIBALISM',
description: 'If the Ark is on the brink of starvation, the People can resort to desperate measures.',
dev_req: null,
skills: ['Fight', 'Manipulate'],
work_points: 4,
dev_bonus: {food_supply: 3, culture: -1},
special: 'Increase the Session Body Count (page 115) by D6'},

{name: 'CROPLAND',
description: 'A plot of land is set aside for the organized cultivation of grain, corn, turnips, ' +
'radishes, or even mushrooms. Simple tools like plows and harrows are made and utilized.',
dev_req: null,
skills: ['Endure', 'Know the Zone'],
work_points: 12,
dev_bonus: {food_supply: 3}},

{name: 'SLAVE MARKET',
description: 'The Bosses of the Ark start trading in slaves, taken from the People or other groups in the Zone. ' +
'They trade with each other or with traveling slavers.',
dev_req: null,
skills: ['Fight', 'Manipulate'],
work_points: 8,
dev_bonus: {food_supply: 1, warfare: 1}},

{name: 'PIGSTY',
description: 'Pigs and other farm animals from the Old Age roam free after the Apocalypse and have turned into wild' +
' and often heavily mutated creatures. Yet, they can be caught and brought into the service of the People.',
dev_req: null,
skills: ['Endure', 'Know the Zone'],
work_points: 8,
dev_bonus: {food_supply: 2}},

{name: 'TEMPLE',
description: 'A shrine where the People can worship the Ancients in the Sky, the Firstborn Mutant or why not even ' +
'the Rot itself.',
dev_req: null,
skills: ['Endure', 'Manipulate'],
work_points: 4,
dev_bonus: {culture: 1}},

{name: 'ZONE WRESTLING',
description: 'A metal cage where the strongest mutants fight each other for bullets and glory. Less physically ' +
'inclined mutants bet on the outcome. No weapons are allowed in the cage, but mutations are considered fair play.',
dev_req: null,
skills: ['Fight', 'Manipulate'],
work_points: 4,
dev_bonus: {warfare: 1}},

{name: 'ZONE EXPEDITION',
description: 'An expedition into the Zone is a special type of project, described in detail in Chapter 8. It ' +
'requires no work_points and can be undertaken several times over. Only one Zone Expedition can be launched per Assembly.' +
' The PCs can decide whether to join the expedition or not.',
dev_req: null,
skills: null,
work_points: null,
dev_bonus: null},

{name: 'MUSEUM',
description: 'An exhibition of objects from the Old Age. The People can come here to learn about the ancient world.',
dev_req: {culture: 5},
skills: ['Comprehend'],
work_points: 8,
dev_bonus: {culture: 1, technology: 1}},

{name: 'STATUE',
description: 'A grand effigy of the Elder or a Boss with an inflated ego.',
dev_req: {culture: 5},
skills: ['Endure', 'Sense Emotion'],
work_points: 4,
dev_bonus: {culture: 1}},

{name: 'SUNDIAL',
description: 'A device consisting of a stick placed on a flat disc of some kind, ' +
'letting the People tell time by watching the shadow of the stick move.',
dev_req: {culture: 5},
skills: ['Comprehend'],
work_points: 4,
dev_bonus: {technology: 1}},

{name: 'WATCHTOWER',
description: 'Up here, you can spot enemies from afar.',
dev_req: {technology: 5},
skills: ['Endure', 'Scout'],
work_points: 4,
dev_bonus: {warfare: 1}},

{name: 'HARBOR',
description: 'A simple quay that makes is easier to load and unload from boats and ships.',
dev_req: {technology: 10},
other_req: 'The Ark must be close to water.',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: null,
special: 'This project is a requirement for a building a Ship (below)'},

{name: 'MILL',
description: 'A simple mechanism that will grind plants into flour for baking bread. Is powered by hand, a Water Wheel or a Windmill.',
dev_req: {technology: 10},
other_req: 'Cropland',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: {food_supply: 2}},

{name: 'SMOKEHOUSE',
description: 'A small house or shed where meat or fish caught in the Zone is cured by smoke, making it last much longer.',
dev_req: {food_supply: 5, technology: 10},
other_req: 'Hunting Party',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: {food_supply: 1}},

{name: 'MARKETPLACE',
description: 'Bartering has always taken place in the Ark, but with a designated marketplace, trade is more organized.',
dev_req: {food_supply: 10, culture: 10},
skills: ['Manipulate'],
work_points: 8,
dev_bonus: {food_supply: 1, culture: 1}},

{name: 'MILITA',
description: 'An armed force given the job to protect the Ark against external enemies and maintain order internally.',
dev_req: {warfare: 10},
skills: ['Fight', 'Manipulate'],
work_points: 8,
dev_bonus: {warfare: 2}},

{name: 'LIBRARY',
description: 'A collection of books, magazines and newspapers from the Old Age.',
dev_req: {culture: 10},
skills: ['Comprehend'],
work_points: 12,
dev_bonus: {culture: 3}},

{name: 'STABLES',
description: 'Bitterbeasts (page 178) and other animals in the Zone can be caught to be used as mounts by ' +
'the People – but they need to be tamed and trained first.',
dev_req: {food_supply: 10},
skills: ['Endure', 'Know the Zone'],
work_points: 8,
dev_bonus: {food_supply: 1, warfare: 1},
special: 'With completed Stables the People can trade and use mounts for riding'},

{name: 'TAVERN',
description: 'A place where the People can gather to eat, drink and swap stories.',
dev_req: {food_supply: 10},
skills: ['Endure', 'Sense Emotion'],
work_points: 4,
dev_bonus: {culture: 1}},

{name: 'THEATER',
description: 'A stage and ensemble, entertaining the People with stage plays about life in the Ark or the fall of the Ancients.',
dev_req: {culture: 10},
skills: ['Manipulate'],
work_points: 8,
dev_bonus: {culture: 2}},

{name: 'TORTURE CHAMBER',
description: 'In this confined area, suspected evildoers and traitors in the Ark can be tormented until t' +
'hey divulge everything they know – and more.',
dev_req: {warfare: 10, culture: 10},
skills: ['Fight', 'Manipulate'],
work_points: 4,
dev_bonus: {warfare: 1}},

{name: 'TRIBUNAL',
description: 'A court given the power to mete out punishment on mutants who steal, ' +
'murder or disrupt the order of things. Corporal punishment is the norm, as the Ark can hardly afford to keep people' +
' locked up for very long. Hard labor or even exile are also possible penalties.',
dev_req: {warfare: 10, culture: 10},
skills: ['Fight', 'Comprehend'],
work_points: 8,
dev_bonus: {culture: 1, warfare: 1}},

{name: 'WATER WHEEL',
description: 'A large wheel built from wood or scrap metal and plastic, fitted with a number of blades or buckets.',
dev_req: {technology: 10},
skills: ['Endure', 'Comprehend'],
work_points: 4,
dev_bonus: {technology: 1},
special: 'Placed in a creek or waterfall, the Water Wheel can power a Mill or a Generator'},

{name: 'WORKSHOP',
description: 'This is the place to go if you need your broken gear fixed – but it will cost you bullets to get anything done.',
dev_req: {technology: 10},
skills: ['Endure', 'Comprehend'],
work_points: 12,
dev_bonus: {technology: 2},
special: 'The Workshop is a requirement for several other projects'},

{name: 'SURVEILLANCE',
description: 'A system of informers, where the People spy on each other and report suspicious activity to one or several Bosses.',
dev_req: {warfare: 10, culture: 10},
skills: ['Sneak', 'Manipulate'],
work_points: 4,
dev_bonus: {warfare: 1}},

{name: 'CALENDAR',
description: 'Using a few simple astronomical observations (when the Zone smog lifts enough to let the ' +
'People see the stars), the People manage to recreate a yearly calendar of 365 days.',
dev_req: {technology: 15, culture: 10},
skills: ['Comprehend'],
work_points: 4,
dev_bonus: {culture: 1}},

{name: 'WINDMILL',
description: 'A large fan-like structure placed on a tower of some sort, ingeniously built to always turn into the wind.',
dev_req: {technology: 15, food_supply: 10},
other_req: 'Workshop',
skills: ['Endure', 'Comprehend'],
work_points: 4,
dev_bonus: {technology: 1},
special: 'The Windmill can power a Mill or a Generator – but only when the wind is blowing'},

{name: 'INK',
description: '& PAPER The People have discovered a method of turning tattered paper from the Old Age, ' +
'or plants growing in the Zone, to paper – and can create simple inks to write with.',
dev_req: {technology: 15, culture: 10},
skills: ['Comprehend'],
work_points: 8,
dev_bonus: {culture: 2},
special: 'Ink & Paper is a requirement for the Printing Press (below)'},

{name: 'DISTILLERY',
description: 'This contraption of tanks, bottles and tubes can be used to extract a great number of ' +
'chemical substances from burning wood or plants. One of its many uses is to brew booze (page 93).',
dev_req: {food_supply: 5, technology: 15},
other_req: 'Workshop',
skills: ['Comprehend'],
work_points: 4,
dev_bonus: null,
special: 'Reduces the price of booze in the Ark by half. Needed for several other more advanced projects'},

{name: 'ARMY',
description: 'An Army is more powerful than a Militia, and can be used for actual military campaigns in the Zone.',
dev_req: {warfare: 20},
skills: ['Fight', 'Manipulate'],
work_points: 8,
dev_bonus: {warfare: 2}},

{name: 'BANK',
description: 'A place where the People can deposit their valuables and be reasonably sure they are kept safe.',
dev_req: {warfare: 10, culture: 20},
skills: ['Comprehend', 'Manipulate'],
work_points: 4,
dev_bonus: {culture: 1}},

{name: 'SHIP',
description: 'A ship built of scrap, bigger than anything a single Gearhead could construct on his own. ' +
'It could be steam-powered if the People have completed the Steam Engine project (page 111). If not, it is fitted with sails or oars.',
dev_req: {technology: 20},
other_req: 'Harbor',
skills: ['Endure', 'Comprehend'],
work_points: 12,
dev_bonus: {food_supply: 1, culture: 1, warfare: 1},
special: 'The Ship can carry about 50 passengers and can used to explore coastal sectors of the Zone. ' +
'The time required is halved compared to exploring on foot (page 122). The ship can also be used to escape from threats at sea,' +
' and gives Gear Bonus 1 in such situations. Armor: 3. Resilience: 20'},

{name: 'GENERATOR',
description: 'A machine built of wires and magnets, capable of generating an electrical current.',
dev_req: {technology: 20},
other_req: 'Workshop. Also requires a Steam Engine, a functional vehicle from the Old Age, or mutants on a treadmill.',
skills: ['Comprehend'],
work_points: 8,
dev_bonus: {technology: 2}},

{name: 'HELIOGRAPH',
description: 'A device capable of quickly sending short messages over long distances, using light signals and mirrors.',
dev_req: {technology: 20},
other_req: 'Workshop – and the People must have made contact with another settlement, or established one of their own (below).',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: {culture: 1}},

{name: 'SCHOOL',
description: 'Here the People can learn about the Old Age, and all about what you have discovered about the dawnworld.',
dev_req: {culture: 20},
skills: ['Comprehend', 'Know the Zone'],
work_points: 8,
dev_bonus: {culture: 1, technology: 1}},

{name: 'SHELTER',
description: 'Hidden tunnels and escape routes dug underneath the Ark. Here, you can seek shelter or make your getaway ' +
'if the Ark is invaded.',
dev_req: {warfare: 20, technology: 10},
skills: ['Move', 'Scout'],
work_points: 8,
dev_bonus: {warfare: 2}},

{name: 'PRINTING PRESS',
description: 'With this heavy piece of machinery the People can print simple pamphlets, papers and books.',
dev_req: {technology: 20, culture: 20},
other_req: 'Workshop, Ink & Paper (above)',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: {culture: 2}},

{name: 'SETTLEMENT',
description: 'The People find a new spot to live and establish a new settlement in a different sector. ' +
'When the settlement is complete, decide how many of the Ark’s inhabitants move there.',
dev_req: {warfare: 20, culture: 20},
other_req: 'The new settlement must be located in a sector explored by the PCs or a ' +
'Zone Expedition (Chapter 8), and at least 2D6 sectors away from the Ark.',
skills: ['Endure'],
work_points: 12,
dev_bonus: null,
special: 'The new settlement will have its own DEV ratings, and will start at zero in all of them.' +
' New projects are undertaken in the new settlement, separately from the Ark. Some projects, such as the Road,' +
' Heliograph and Railroad, connect two settlements. They give their DEV bonus to both settlements when complete'},

{name: 'ROAD',
description: 'Transforms one of the paths in the Zone into a road, which can be used by carriages or motor-driven vehicles. ' +
'This project can be undertaken many times over – every sector to be traversed by a Road counts as a separate project.',
dev_req: {technology: 20},
skills: ['Endure', 'Comprehend'],
work_points: 4,
dev_bonus: {food_supply: 1, culture: 1},
dev_bonus_special: '– but only when the Road reaches another settlement in the Zone. ' +
'The DEV bonuses are for the entire Road, not for every sector',
special: 'Traveling through a sector on a Road (page 122) takes half the time'},

{name: 'FOUNDRY',
description: 'In this steaming furnace the People can melt metal scrap from the Old Age, and mold it into new items.',
dev_req: {technology: 25},
other_req: 'Workshop',
skills: ['Endure', 'Comprehend'],
work_points: 12,
dev_bonus: null,
special: 'The Foundry is a requirement for several advanced projects'},

{name: 'EXPLOSIVES LAB',
description: 'A specialized workshop used to produce gunpowder and other explosive substances.',
dev_req: {technology: 30, warfare: 10},
other_req: 'Distillery',
skills: ['Comprehend'],
work_points: 4,
dev_bonus: {warfare: 1},
special: 'Combined with the Foundry, the Explosives Lab can be used to manufacture bullets. ' +
'Bullets are then bartered in the Ark at half the normal cost'},

{name: 'AUTOCRACY',
description: 'One Boss becomes the sole ruler of the Ark. His word is law.',
dev_req: {warfare: 30},
other_req: 'Cannot be combined with Suffrage.',
skills: ['Comprehend'],
work_points: 8,
dev_bonus: {warfare: 2}},

{name: 'FREE ENTERPRISE',
description: 'The People establish a system where every mutant is free to seek his own fortune. Slavery is outlawed.',
dev_req: {technology: 30},
other_req: 'Cannot be combined with Collectivism, Autocracy or a Slave Market.',
skills: ['Manipulate'],
work_points: 8,
dev_bonus: {technology: 2}},

{name: 'COLLECTIVISM',
description: 'All private ownership is outlawed. All mutants must work for the common good, and all resources are distributed equally.',
dev_req: {food_supply: 30},
other_req: 'Cannot be combined with Free Enterprise.',
skills: ['Manipulate'],
work_points: 8,
dev_bonus: {food_supply: 2}},

{name: 'SUFFRAGE',
description: 'All mutants of the People get the right to vote about issues that are important to the Ark.',
dev_req: {culture: 30},
other_req: 'Cannot be combined with Autocracy.',
skills: ['Manipulate'],
work_points: 8,
dev_bonus: {technology: 2}},

{name: 'STEAM ENGINE',
description: 'A marvelous machine that runs on firewood and water.',
dev_req: {technology: 30},
other_req: 'Foundry, Distillery',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: {technology: 2},
special: 'Can power a Generator, a Train or a Steam Car (below)'},

{name: 'STEAM CAR',
description: 'A steam powered vehicle that can thunder through the Zone at considerable speed and noise.',
dev_req: {technology: 30},
other_req: 'Steam Engine',
skills: ['Comprehend'],
work_points: 12,
dev_bonus: null,
special: 'A Train can carry around ten passengers, increases the speed of movement in combat and cuts the time it takes ' +
'to explore a sector in the Zone by half. How vehicles work is explained in Chapter 6. The Steam Car be used to escape' +
' from threats or to ram enemies. Gear Bonus: 1. Armor: 3. Resilience: 3'},

{name: 'RAILROAD',
description: 'To build a rail link through the Zone is an advanced and very demanding project. ' +
'Every sector to be traversed by railroad counts as its own project.',
dev_req: {technology: 35},
other_req: 'Foundry',
skills: ['Endure', 'Comprehend'],
work_points: 8,
dev_bonus: null,
special: 'Makes it possible to build a Train (below)'},

{name: 'TRAIN',
description: 'When steam trains start to roll across the Zone, a great step toward rebuilding the Ancients’ civilization has been taken.',
dev_req: {technology: 30},
other_req: 'Steam Engine, Railroad',
skills: ['Comprehend'],
work_points: 12,
dev_bonus: {food_supply: 1, culture: 1, technology: 1},
dev_bonus_special: 'but only when the Train runs on a rail track that reaches another settlement in the Zone. ' +
'The DEV bonuses are for the entire railway, not for every sector',
special: 'A Train can carry around 50 passengers and will cross a sector in the Zone in mere minutes – ' +
'as long as nothing blocks the tracks. The Train can also be used to escape from threats or to ram enemies. ' +
'Gear Bonus: 1. Armor: 3. Resilience: 15'},

{name: 'ARSENAL',
description: 'In this specialized workshop, the People can massproduce breech-loaded firearms. ' +
'An Arsenal is often combined with an Explosives Lab (above).',
dev_req: {technology: 35, warfare: 10},
other_req: 'Foundry',
skills: ['Shoot', 'Comprehend'],
work_points: 8,
dev_bonus: {warfare: 2},
special: 'Breech-loaded firearms become available in the Ark'},

{name: 'SURGERY',
description: 'The bonesaws of the Ark have learned the anatomy of the mutant body, as well as the use of ether or other ' +
'forms of anesthesia, and can perform simple surgical operations.',
dev_req: {technology: 35},
other_req: 'Distillery',
skills: ['Comprehend'],
work_points: 8,
dev_bonus: null,
special: 'Any rolls to Heal a critical injury at the surgical clinic get a +two modification. ' +
'The Session Body Count (below) is reduced by one'},

{name: 'ELECTRIC LIGHTS',
description: 'Illuminates the Ark like in the Old Age, and turns it into a beacon seen for miles at night.',
dev_req: {technology: 40},
other_req: 'Workshop, Generator',
skills: ['Comprehend'],
work_points: 8,
dev_bonus: {technology: 2}},

{name: 'RADIO',
description: 'A very basic device capable of radio communication, using a crystal of some sort to rectify the current.',
dev_req: {technology: 50},
other_req: 'Workshop, Generator',
skills: ['Comprehend'],
work_points: 8,
dev_bonus: {technology: 2}}
];
export const CURRENT_DEV_LVL: Devs = {
  culture: 11,
  food_supply: 12,
  warfare: 12,
  technology: 14
};
export const PROJECTS_IN_PROGRESS: StartedProject = {
  CROPLAND: 2,
  WATCHTOWER: 2,
  MUSEUM: 5,
  SUNDIAL: 3,
  TAVERN: 0,
  'ZONE WRESTLING': 2,
  WORKSHOP: 1,
  DEFENSES: 3,
  STABLES: 0,
  MILITA: 0
};
export const FINISHED_PROJECTS: Array<string> = [
  'HUNTING PARTY', 'WATCHTOWER', 'MUSEUM', 'ZONE WRESTLING', 'DEFENSES', 'SUNDIAL',
];
