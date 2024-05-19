import Daemon from "../Daemon";

describe('Нельзя создать персонаж Daemon без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Daemon()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Daemon с правильными параметрами', () => {
    it('attack/defence: 10/40', () => {
        const daemon = new Daemon('Люцифер');
        expect(daemon).toEqual({
            name: 'Люцифер',
            type: 'Daemon',
            level: 1,
            _health: 100,
            attack: 10,
            defence: 40,
        });
    });
});

describe('Тестируем функции урона и повышения уровня', () => {
    it('урон здоровью зависит от защиты', () => {
        const daemon = new Daemon('Люцифер');
        daemon.damage(50);
        expect(daemon.health).toBe(70);
    });

    it('при повышении уровня атака и защита увеличивается на 20%, а здоровье восстанавливается', () => {
        const daemon = new Daemon('Люцифер');
        daemon.levelUp();
        daemon.damage(40);
        daemon.levelUp();
        daemon.health = 25;
        daemon.levelUp();
        expect(daemon.level).toBe(4);
        expect(daemon.health).toBe(100);
        expect(daemon.attack).toBeCloseTo(17.28);
        expect(daemon.defence).toBeCloseTo(69.12);
    });
});