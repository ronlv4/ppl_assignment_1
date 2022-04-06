import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => {} =
    s => R.countBy(R.toLower)(R.filter(a => a != " ", stringToArray(s)));

/* Question 2 */

/* functional stack functions */
const peek: (s: string[]) => string =
    s => s[0];
const empty: (s?: string[]) => boolean =
    s => s === undefined ? false
        : s.length === 0;
const push: (s: string[], t: string) => string[] =
    (s, t) => [t].concat(s);
const pop: (s: string[]) => string[] =
    s => s.slice(1);


export const isPaired: (s: string) => boolean =
    s => empty(stringToArray(s).reduce((acc: string[] | undefined, cur: string) =>
            acc === undefined ? acc  // we define acc undefined only if answer is false - paras are not even
                : cur === '(' ? push(acc, '(')
                    : cur === '[' ? push(acc, '[')
                        : cur === '{' ? push(acc, '{')
                            : cur === ')' ? (peek(acc) === '(' ? pop(acc) : undefined)
                                : cur === ']' ? (peek(acc) === '[' ? pop(acc) : undefined)
                                    : cur === '}' ? (peek(acc) === '{' ? pop(acc) : undefined)
                                        : acc
        , []));

/* Question 3 */
export interface WordTree {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (t: WordTree) => string =
    t => t === undefined ? ""
        : t.root + t.children.reduce((acc, cur) => acc + " " + treeToSentence(cur), "");


