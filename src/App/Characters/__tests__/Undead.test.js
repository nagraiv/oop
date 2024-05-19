import Undead from "../Undead";

describe('Нельзя создать персонаж Undead без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Undead()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Undead с правильными параметрами', () => {
    it('attack/defence: 25/25', () => {
        const undead = new Undead('Дракула');
        expect(undead).toEqual({
            name: 'Дракула',
            type: 'Undead',
            level: 1,
            _health: 100,
            attack: 25,
            defence: 25,
        });
    });
});

describe('Тестируем функции урона и повышения уровня', () => {
    it('урон здоровью зависит от защиты', () => {
        const undead = new Undead('Дракула');
        undead.damage(80);
        expect(undead.health).toBe(40);
    });

    it('при повышении уровня атака и защита увеличивается на 20%, а здоровье восстанавливается', () => {
        const undead = new Undead('Дракула');
        undead.damage(99);
        undead.levelUp();
        expect(undead).toEqual({
            name: 'Дракула',
            type: 'Undead',
            level: 2,
            _health: 100,
            attack: 30,
            defence: 30,
        });
    });
});