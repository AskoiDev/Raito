import { Tokens, AST, Parsed, Node } from '../mod.ts';

export function parser(input: Tokens[]) {
    let count = 0;

    function walk(): Node | Parsed | void {
        let token = input[count];

        switch (token[0]) {
            case 'Grave': {
                count += 1;
                return {
                    type: 'Grave',
                    value: '`'
                };
            }

            case 'Tilde': {
                count += 1;
                return {
                    type: 'Tilde',
                    value: '~'
                };
            }

            case 'Not': {
                count += 1;
                if (input[count][0] === 'Equal') {
                    count += 1;
                    return {
                        type: 'NotEqualTo',
                        value: '!='
                    };
                }

                else return {
                    type: 'Not',
                    value: '!'
                }
            }

            case 'At': {
                count += 1;
                return {
                    type: 'At',
                    value: '@'
                };
            }

            case 'Hash': {
                count += 1;
                return {
                    type: 'Macro',
                    value: '#'
                };
            }

            case 'Dollar': {
                count += 1;
                return {
                    type: 'Dollar',
                    value: '$'
                };
            }

            case 'Percent': {
                count += 1;
                if (input[count][0] === 'Equal') {
                    count += 1;
                    return {
                        type: 'ModulusAssign',
                        value: '%='
                    };
                }

                else return {
                    type: 'Modulus',
                    value: '%'
                }
            }

            case 'Star': {
                count += 1;
                if (input[count][0] === 'Equal') {
                    count += 1;
                    return {
                        type: 'MultiplyAssign',
                        value: '*='
                    };
                }

                else return {
                    type: 'Pointer',
                    value: '*'
                };
            }

            case 'And': {
                count += 1;
                if (input[count][0] === 'And') {
                    count += 1;
                    return {
                        type: 'AndAnd',
                        value: '&&'
                    };
                }

                else return {
                    type: 'And',
                    value: '&'
                }
            }

            case 'Caret': {
                count += 1;
                if (input[count][0] === 'Equal') {
                    count += 1;
                    return {
                        type: 'XorAssign',
                        value: '^='
                    };
                }

                else return {
                    type: 'Xor',
                    value: '^'
                };
            }

            case 'ParenL': {
                // ...
            }
        }
    }

    const ast: AST = {
        type: 'Program',
        body: []
    };

    while (count < input.length) {
        try {
            ast.body.push(walk() as Node | Parsed);
        } catch (error) {
            if (error) throw error;
        }
    }
}