import Bowman from "../Bowman";

describe('Нельзя создать персонаж Bowman без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Bowman()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Bowman с правильными параметрами', () => {
    it('attack/defence: 25/25', () => {
        const bowman = new Bowman('Легалас');
        expect(bowman).toEqual({
            name: 'Легалас',
            type: 'Bowman',
            level: 1,
            _health: 100,
            attack: 25,
            defence: 25,
        });
    });
});

describe('Тестируем функции урона и повышения уровня', () => {
    it('урон здоровью зависит от защиты', () => {
        const bowman = new Bowman('Легалас');
        bowman.damage(40);
        expect(bowman.health).toBe(70);
    });

    it('при повышении уровня атака и защита увеличивается на 20%, а здоровье восстанавливается', () => {
        const bowman = new Bowman('Легалас');
        bowman.levelUp();
        bowman.damage(40);
        bowman.levelUp();
        expect(bowman).toEqual({
            name: 'Легалас',
            type: 'Bowman',
            level: 3,
            _health: 100,
            attack: 36,
            defence: 36,
        });
    });
});