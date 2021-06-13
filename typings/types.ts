export enum Token {
    '`' = 'Grave',
    '~' = 'Tilde',
    '!' = 'Not',
    '@' = 'At',
    '#' = 'Hash',
    '$' = 'Dollar',
    '%' = 'Percent',
    '^' = 'Caret',
    '&' = 'And',
    '*' = 'Star',
    '(' = 'ParenL',
    ')' = 'ParenR',
    '-' = 'Minus',
    '+' = 'Plus',
    '=' = 'Equal',
    '{' = 'CurlyL',
    '}' = 'CurlyR',
    '[' = 'BracketL',
    ']' = 'BracketR',
    '|' = 'Pipe',
    ':' = 'Colon',
    ';' = 'Semi',
    '<' = 'Less',
    '>' = 'More',
    '.' = 'Dot',
    ',' = 'Comma',
    '?' = 'Question',
    '/' = 'FowardSlash'
}

export enum TokenType {
    Grave = Token['`'],
    Tilde = Token['~'],
    Not = Token['!'],
    At = Token['@'],
    Hash = Token['#'],
    Dollar = Token['$'],
    Percent = Token['%'],
    Caret = Token['^'],
    And = Token['&'],
    Star = Token['*'],
    ParenL = Token['('],
    ParenR = Token[')'],
    Minus = Token['-'],
    Equal = Token['='],
    Plus = Token['+'],
    CurlyL = Token['{'],
    CurlyR = Token['}'],
    BracketL = Token['['],
    BracketR = Token[']'],
    Pipe = Token['|'],
    Colon = Token[':'],
    Semi = Token[';'],
    Less = Token['<'],
    Dot = Token['.'],
    Comma = Token[','],
    More = Token['>'],
    Question = Token['?'],
    FowardSlash = Token['/'],
}

export type Tokens = [TokenType | string, string];

export interface AST {
    type: 'Program';
    body: (Node | Parsed)[];
}

export interface Node {
    type: string;
    body: (Node | Parsed)[];
}

export interface Parsed {
    type: string;
    value: string;
}