export declare const enumChars: {
    (word: string, min?: number, pattern?: string): string;
    (word: string, pattern?: string, min?: number): string;
    numbers: (word: string, min?: number) => string;
    letters: (word: string, min?: number) => string;
    lowers: (word: string, min?: number) => string;
    uppers: (word: string, min?: number) => string;
};
export default enumChars;
