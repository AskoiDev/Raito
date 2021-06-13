import { TokenType, Tokens } from '../mod.ts';

export function lexer(input: string): Tokens[] | void{
    const tokens: Tokens[] = [];

    const NEWLINE = /\n/;
    const WHITESPACE = /\s/;
    const NUMBERS = /[0-9]/;
    const LETTERS = /[a-zA-Z]/;

    let count = 0;
    let now = '';

    while (count < input.length) {
        now = input[count];

        switch (now) {
            case '`': {
                tokens.push([TokenType.Grave, '`']);
                count += 1;
                break;
            }

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

            case '@': {
                tokens.push([TokenType.At, '@']);
                count += 1;
                break;
            }

            case '#': {
                tokens.push([TokenType.Hash, '#']);
                count += 1;
                break;
            }

            case '$': {
                tokens.push([TokenType.Dollar, '$']);
                count += 1;
                break;
            }

            case '%': {
                tokens.push([TokenType.Percent, '%']);
                count += 1;
                break;
            }

            case '^': {
                tokens.push([TokenType.Caret, '^']);
                count += 1;
                break;
            }

            case '&': {
                tokens.push([TokenType.And, '&']);
                count += 1;
                break;
            }

            case '*': {
                tokens.push([TokenType.Star, '*']);
                count += 1;
                break;
            }

            case '(': {
                tokens.push([TokenType.ParenL, '(']);
                count += 1;
                break;
            }

            case ')': {
                tokens.push([TokenType.ParenR, ')']);
                count += 1;
                break;
            }

            case '-': {
                tokens.push([TokenType.Minus, '-']);
                count += 1;
                break;
            }

            case '+': {
                tokens.push([TokenType.Plus, '+']);
                count += 1;
                break;
            }

            case '=': {
                tokens.push([TokenType.Equal, '=']);
                count += 1;
                break;
            }

            case '{': {
                tokens.push([TokenType.CurlyL, '{']);
                count += 1;
                break;
            }

            case '}': {
                tokens.push([TokenType.CurlyR, '}']);
                count += 1;
                break;
            }

            case '[': {
                tokens.push([TokenType.BracketL, '[']);
                count += 1;
                break;
            }

            case ']': {
                tokens.push([TokenType.BracketR, ']']);
                count += 1;
                break;
            }

            case '|': {
                tokens.push([TokenType.Pipe, '|']);
                count += 1;
                break;
            }

            case ':': {
                tokens.push([TokenType.Colon, ':']);
                count += 1;
                break;
            }

            case ';': {
                tokens.push([TokenType.Semi, ';']);
                count += 1;
                break;
            }

            case '<': {
                tokens.push([TokenType.Less, '<']);
                count += 1;
                break;
            }

            case '>': {
                tokens.push([TokenType.More, '>']);
                count += 1;
                break;
            }

            case '.': {
                tokens.push([TokenType.Dot, '.']);
                count += 1;
                break;
            }

            case ',': {
                tokens.push([TokenType.Comma, ',']);
                count += 1;
                break;
            }

            case '/': {
                count += 1;
                if (input[count] === '/') {
                    while (count < input.length && !NEWLINE.test(input[count])) {
                        count += 1
                    }
                }

                else if (input[count] === '*') {
                    count += 2;

                    while ((count - 1) < input.length) {
                        if (input[count - 1] === '*' && input[count] === '/') {
                            count += 1;
                            break;
                        }

                        count += 1;
                    }
                }

                else tokens.push([TokenType.FowardSlash, '/'])
                break;
            }

            case '?': {
                tokens.push([TokenType.Question, '?'])
                count += 1;
                break;
            }

            default: {
                if (WHITESPACE.test(now) || NEWLINE.test(now)) {
                    count += 1;
                }

                else if (NUMBERS.test(now)) {
                    let value = '';

                    while (NUMBERS.test(now)) {
                        value += now
                        count += 1;
                        now = input[count];
                    }

                    tokens.push(['Number', value]);
                }

                else if (LETTERS.test(now) || now === '_') {
                    let value = now;
                    count += 1;

                    if (count < input.length) {
                        now = input[count];

                        while ((LETTERS.test(now) || NUMBERS.test(now) || now === '_') && ((count + 1) <= input.length)) {
                            value += now;
                            count += 1;
                            now = input[count];
                        }
                    }

                    tokens.push(['Word', value]);
                }

                else if (now === '\'' || now === '"') {
                    const quote = now;
                    let value = '';
                    count += 1;
                    now = input[count];

                    while (now !== quote) {
                        value += now;
                        count += 1;
                        now = input[count];
                    }

                    count += 1;
                    now = input[count];
                    tokens.push(['String', value]);
                }

                else return console.error('[Raito(Lexer)]: Unknown token: ' + now)
            }
        }
    }

    return tokens;
}