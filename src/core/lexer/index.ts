import { TokenType, Tokens } from '../mod.ts';

export function lexer(input: string): Tokens[] {
    const tokens: Tokens[] = [];

    const NEWLINE = /\n/;
    const WHITESPACE = /\s/;

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
            }
        }
    }

    return tokens;
}