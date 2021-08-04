const testFunc = require('../index.js');


test('Test 1.1: Just lowercase', () => {
    expect(testFunc('aAsdad',{
        lowerCase: true
    })).toBe(false);
});

test('Test 1.2: Just lowercase', () => {
    expect(testFunc('aAsdad',{
        lowerCase: true,
        upperCase: false
    })).toBe(false);
});

test('Test 2.1: Just lowercase', () => {
    expect(testFunc('asdad',{
        lowerCase: true
    })).toBe(true);
});

test('Test 2.2: Just lowercase', () => {
    expect(testFunc('aasdad',{
        lowerCase: true,
        upperCase: false
    })).toBe(true);
});

test('Test 3.1: Just uppercase', () => {
    expect(testFunc('aAsdad',{
        upperCase: true,
    })).toBe(false);
});


test('Test 3.2: Just uppercase', () => {
    expect(testFunc('AASDWQE',{
        upperCase: true,
    })).toBe(true);
});


test('Test 4.1: Just numbers', () => {
    expect(testFunc('aAsdad',{
        upperCase: false,
        lowerCase: false,
        numbers: true
    })).toBe(false);
});


test('Test 4.2: Just numbers', () => {
    expect(testFunc('1231413244',{
        upperCase: false,
        lowerCase: false,
        numbers: true
    })).toBe(true);
})


test('Test 5.1: String Length', () => {
    expect(testFunc('1231413244',{
        length: null,
        numbers: true
    })).toBe(true);
})

test('Test 5.2: String Length', () => {
    expect(testFunc('12314',{
        length: 5,
        numbers: true
    })).toBe(true);
})

test('Test 5.3: String Length', () => {
    expect(testFunc('1231asd132asd44',{
        length: null,
        numbers: true,
        lowerCase: true
    })).toBe(true);
})



test('Test 5.4: String Length', () => {
    expect(testFunc('1231asd132asd44',{
        length: null,
        numbers: true,
        lowerCase: true,
        upperCase: true,
    })).toBe(false);
})


test('Test 6.1: Content', () => {
    expect(testFunc('cat',{
        content: 'cat'
    })).toBe(true);
})


test('Test 6.2: Content', () => {
    expect(testFunc('1312',{
        content: 'cat'
    })).toBe(false);
})


test('Test 7.1: Pattern', () => {
    expect(testFunc('qwertyasd',{
        pattern: 'rty',
        lowerCase: true
    })).toBe(true);
})

test('Test 7.2: Pattern', () => {
    expect(testFunc('qwertyasd',{
        pattern: 'rt3y',
        lowerCase: true
    })).toBe(false);
})

test('Test 8.1: Start of string', () => {
    expect(testFunc('qwertyasd',{
        start: 'rty',
        lowerCase: true
    })).toBe(false);
})


test('Test 8.2: Start of string', () => {
    expect(testFunc('qwertyasd',{
        start: 'qwe',
        lowerCase: true
    })).toBe(true);
})


test('Test 9.1: End of string', () => {
    expect(testFunc('qwertyasd',{
        end: 'ewq',
        lowerCase: true
    })).toBe(false);
})


test('Test 9.2: End of string', () => {
    expect(testFunc('qwertyasd',{
        end: 'asd',
        lowerCase: true
    })).toBe(true);
})



test('Test 10.1: Start of string', () => {
    expect(testFunc('qwerTyasd',{
        start: 'qwe',
        end: 'asd',
        lowerCase: true,
        upperCase: true,
        length: 9
    })).toBe(true);
})


test('Test 10.2: Start of string', () => {
    expect(testFunc('qwertyasd',{
        start: 'qwe',
        lowerCase: true,
        upperCase: true
    })).toBe(false);
})

