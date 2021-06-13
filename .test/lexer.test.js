import { lexer } from '../src/mod.ts';

Deno.test('Lexer', () => {
    console.log(
        lexer(
            `/* multiline
            comment */
            !@#$%^&*()-+={}
            // comment
            []|:;<>,.?/~\``
        )
    );
});