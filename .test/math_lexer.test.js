import { lexer } from '../src/mod.ts';

Deno.test('Lexer - Math', async () => {
    const cppTest = await Deno.readTextFile('.test/cpp/math.cpp');
    const cTest = await Deno.readTextFile('.test/c/math.c');

    console.log(
        '\nC++:\n',
        lexer(cppTest),
        '\n\nC:\n',
        lexer(cTest)
    );
});