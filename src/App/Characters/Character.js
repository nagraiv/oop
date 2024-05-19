export default class Character {
    constructor(name, type) {
        if(!(new Set(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']).has(type))) {
            throw new Error('Invalid type of character!');
        }
        if (!name || name.length > 10 || name.length < 2) {
            throw new Error('Invalid name length!');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    set health(newValue) {
        if (this.health <= 0) {
            throw new Error('Impossible to raise the health level of the deceased character!');
        }
        if (newValue < 0) {
            this._health = 0;
        } else {
            this._health = newValue;
        }
    }

    get health() {
        return this._health;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Impossible to raise the level of the deceased character!');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (points < 0) {
            throw new Error('Damage points must be a positive number!');
        }
        this.health -= points * (1 - this.defence / 100);
    }
}