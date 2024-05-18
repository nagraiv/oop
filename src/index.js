import * as characters from './App/app'
import {bowman, daemon, magician, swordsman, undead, zombie} from "./App/app";

console.log('The battle started!');

characters.daemon.damage(characters.magician.attack);
characters.swordsman.damage(characters.zombie.attack);
characters.bowman.damage(characters.magician.attack);
characters.daemon.damage(characters.bowman.attack);
characters.magician.levelUp();
characters.bowman.levelUp();

console.log('The battle has finished!\n', bowman, daemon, magician, swordsman, undead, zombie);