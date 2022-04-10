import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => {} = R.pipe(
    R.toLower,
    R.match(/[a-z]/g),
    R.countBy(R.identity)
)

/* functional stack functions */
const peek: (s: string[]) => string =
    s => s[0];
const empty: (s?: string[]) => boolean =
    s => s === undefined ? false
        : s.length === 0;
const push: (s: string[], t: string) => string[] =
    (s,t) => [t].concat(s);
const pop: (s: string[]) => string[] =
    s => s.slice(1);


export const isPaired: (s: string) => boolean =
    s => empty(stringToArray(s).reduce((acc: string[] | undefined,cur: string) =>
            acc === undefined ? acc  // we define acc undefined only if answer is false - paras are not even
                : cur === '(' ? push(acc,'(')
                    : cur === '[' ? push(acc,'[')
                        : cur === '{' ? push(acc,'{')
                            : cur === ')'? (peek(acc) === '(' ? pop(acc) : undefined)
                                : cur === ']'? (peek(acc) === '[' ? pop(acc) : undefined)
                                    : cur === '}'? (peek(acc) === '{' ? pop(acc) : undefined)
                                        : acc
        ,[]));

/* Question 2 */
export const isPaired2: (s: string) => boolean = function (s: string) {
    const parenthesesCount: { [kind: string]: number } = {
        "(": 0,
        "[": 0,
        "{": 0
    }
    for (const c of stringToArray(s)) {
        if (c == ')') {
            if (parenthesesCount["("]-- == 0)
                return false
        } else if (c == ']') {
            if (parenthesesCount["["]-- == 0)
                return false
        } else if (c == '}') {
            if (parenthesesCount["{"]-- == 0)
                return false
        } else if (c == '(' || c == '[' || c == '{')
            parenthesesCount[c] += 1
    }
    return ((parenthesesCount["("] == 0) && (parenthesesCount["["] == 0) && (parenthesesCount["{"] == 0))
}

/* Question 3 */
export interface WordTree {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (t: WordTree) => string =
    t => {
        if (t === undefined)
            return "";
        return t.root + t.children.reduce((acc, cur) => acc + " " + treeToSentence(cur), "");
    }

