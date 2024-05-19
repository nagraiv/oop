import Swordsman from "../Swordsman";

describe('Нельзя создать персонаж Daemon без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Swordsman()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Swordsman с правильными параметрами', () => {
    it('attack/defence: 10/40', () => {
        const swordsman = new Swordsman('Арагорн');
        expect(swordsman).toEqual({
            name: 'Арагорн',
            type: 'Swordsman',
            level: 1,
            _health: 100,
            attack: 40,
            defence: 10,
        });
    });
});

describe('Тестируем функции урона и повышения уровня', () => {
    it('урон здоровью зависит от защиты', () => {
        const swordsman = new Swordsman('Арагорн');
        swordsman.levelUp();
        swordsman.damage(50);
        expect(swordsman.health).toBe(56);
    });

    it('при повышении уровня атака и защита увеличивается на 20%, а здоровье восстанавливается', () => {
        const swordsman = new Swordsman('Арагорн');
        swordsman.levelUp();
        swordsman.damage(70);
        swordsman.levelUp();
        expect(swordsman.level).toBe(3);
        expect(swordsman.health).toBe(100);
        expect(swordsman.attack).toBeCloseTo(57.6);
        expect(swordsman.defence).toBeCloseTo(14.4);
    });
});