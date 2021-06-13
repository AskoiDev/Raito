import { lexer } from '../src/mod.ts';

Deno.test('Lexer', () => console.log('\n', lexer(
    `/* multiline
    comment */
    !@#$%^&*()-+={}
    // comment
    []|:;<>,.?/~\``
)));
