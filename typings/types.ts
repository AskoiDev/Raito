export enum Token {
    '~' = 'Tilde',
    '!' = 'Not'
}

export enum TokenType {
    Tilde = Token['~'],
    Not = Token['!'],
}

export type Tokens = [TokenType, string];