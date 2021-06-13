import { lexer } from '../src/mod.ts';

Deno.test('Lexer - Hello World', async () => {
    const cppTest = await Deno.readTextFile('.test/cpp/hello_world.cpp');
    const cTest = await Deno.readTextFile('.test/c/hello_world.c');

    console.log(
        '\nC++:\n',
        lexer(cppTest),
        '\n\nC:\n',
        lexer(cTest)
    );
});