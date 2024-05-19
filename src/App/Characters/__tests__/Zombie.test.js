import Zombie from "../Zombie";

describe('Нельзя создать персонаж Daemon без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Zombie()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Swordsman с правильными параметрами', () => {
    it('attack/defence: 10/40', () => {
        const zombie = new Zombie('Шон');
        expect(zombie).toEqual({
            name: 'Шон',
            type: 'Zombie',
            level: 1,
            _health: 100,
            attack: 40,
            defence: 10,
        });
    });
});

describe('Тестируем функции урона и повышения уровня', () => {
    it('урон здоровью зависит от защиты', () => {
        const zombie = new Zombie('Шон');
        zombie.levelUp();
        zombie.levelUp();
        zombie.damage(100);
        expect(zombie.health).toBeCloseTo(14.4);
    });

    it('при повышении уровня атака и защита увеличивается на 20%, а здоровье восстанавливается', () => {
        const zombie = new Zombie('Шон');
        zombie.levelUp();
        zombie.damage(80);
        zombie.levelUp();
        zombie.damage(15);
        zombie.damage(38);
        zombie.levelUp();
        expect(zombie.level).toBe(4);
        expect(zombie.health).toBe(100);
        expect(zombie.attack).toBeCloseTo(69.12);
        expect(zombie.defence).toBeCloseTo(17.28);
    });
});