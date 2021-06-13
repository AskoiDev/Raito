import { lexer } from '../src/mod.ts';

Deno.test('Lexer', () => {
    console.log(
        '\n',
        lexer(
            `/* multiline
            comment */
            !@#$%^&*()-+={}
            // comment
            []|:;<>,.?/~\`
            'hello world'
            __dirname = 'hello world'
            123
            `
        )
    );
});