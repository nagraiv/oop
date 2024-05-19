import Character from "../Character";

describe('Нельзя создать персонаж без передачи обязательных параметров', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Character('Clark', 'Superman')).toThrow('Invalid type of character!');
    });

    it('передаём только один из двух параметров', () => {
        expect(() => new Character('Name')).toThrow('Invalid type of character!');
    });
});

describe('Нельзя создать персонаж произвольного типа', () => {
    it('конструктор должен выбрасывать ошибку, если тип не соответствует перечню', () => {
        expect(() => new Character()).toThrow('Invalid type of character!');
    });
});

describe('Имя персонажа должно быть от 2 до 10 символов', () => {
    it('конструктор должен выбрасывать ошибку при слишком коротком имени', () => {
        expect.assertions(1);
        try {
            new Character('Z', 'Zombie');
        } catch (e) {
            expect(e.message).toBe('Invalid name length!');
        }
    });

    it('конструктор должен выбрасывать ошибку при слишком длинном имени', () => {
        try {
            new Character('aVeryLongName', 'Magician');
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('Invalid name length!');
        }
    });
});

describe('Должен создаваться персонаж с правильными начальными параметрами', () => {
    it('level: 1, health: 100', () => {
        const character = new Character('Мерлин', 'Magician');
        expect(character).toEqual({
            name: 'Мерлин',
            type: 'Magician',
            level: 1,
            _health: 100,
            attack: 0,
            defence: 0,
        });
    });
});

describe('Тестирует сеттер здоровья', () => {
    it('нельзя увеличить уровень здоровья погибшему герою', () => {
        const character = new Character('Люцифер', 'Daemon');
        character.health = 0;
        try {
            character.health = 30;
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('Impossible to raise the health level of the deceased character!');
        }
    });

    it('нельзя присвоить отрицательный уровень здоровья', () => {
        const character = new Character('Люцифер', 'Daemon');
        character.health = -30;
        expect(character.health).toBe(0);
    });
});

describe('Тестируем функцию увеличения уровня', () => {
    it('уровень увеличивается и здоровье восстанавливается', () => {
        const character = new Character('Артур', 'Swordsman');
        character.health = 80;
        expect(character.health).toBe(80);
        character.levelUp();
        expect(character).toEqual({
            name: 'Артур',
            type: 'Swordsman',
            level: 2,
            _health: 100,
            attack: 0,
            defence: 0,
        });
    });

    it('нельзя увеличить уровень погибшему герою', () => {
        const character = new Character('Артур', 'Swordsman');
        character.health = 0;
        expect.assertions(1);
        try {
            character.levelUp();
        } catch (e) {
            expect(e.message).toBe('Impossible to raise the level of the deceased character!');
        }
    });
});

describe('Тестируем функцию ущерба здоровью', () => {
    it('верно считается уменьшение здоровья №1', () => {
        const character = new Character('Брида', 'Undead');
        expect(character.health).toBe(100);
        character.damage(30);
        expect(character.health).toBe(70);
    });

    it('при отрицательных значениях урона выбрасывается ошибка', () => {
        const character = new Character('Брида', 'Undead');
        expect.assertions(1);
        try {
            character.damage(-20);
        } catch (e) {
            expect(e.message).toBe('Damage points must be a positive number!');
        }
    });
});