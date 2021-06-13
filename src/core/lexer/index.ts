import { TokenType, Tokens } from '../mod.ts';

export function lexer(input: string): Tokens[] {
    const tokens: Tokens[] = [];

    let count = 0;
    let now = '';

    while (count < input.length) {
        now = input[count];

        switch (now) {
            case '~': {
                tokens.push([TokenType.Tilde, '~']);
                count += 1;
                break;
            }

            case '!': {
                tokens.push([TokenType.Not, '!']);
                count += 1;
                break;
            }
        }
    }

    return tokens;
}