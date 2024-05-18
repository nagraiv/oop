import * as Characters from "./Characters";

const bowman = new Characters.Bowman('Легалас');

const daemon = new Characters.Daemon('Люцифер');

const magician = new Characters.Magician('Гендальф');

const swordsman = new Characters.Swordsman('Арагорн');

const undead = new Characters.Undead('Дракула');

const zombie = new Characters.Zombie('Sean');

console.log('Characters are created!\n', bowman, daemon, magician, swordsman, undead, zombie);

export {
    bowman,
    daemon,
    magician,
    swordsman,
    undead,
    zombie,
}