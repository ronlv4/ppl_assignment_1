import * as R from "ramda";
import {identity, match, reduce, Reduced} from "ramda";
import {returnSquaredIfFoundEven_v2} from "../part3/find";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => {} = R.pipe(
    R.toLower,
    R.match(/[a-z]/g),
    R.countBy(R.identity)
)

/* Question 2 */
export const isPaired: (s: string) => boolean = function (s: string) {
    const parenthesesCount: { [kind: string]: number } = {
        "(": 0,
        "[": 0,
        "{": 0
    }
    for (const c of stringToArray(s)) { // change for loop to map
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
// export const countLetters: (s: string) => {} = R.pipe(

export const treeToSentence = (t: WordTree): string => {
    const result = t.children.map((child: WordTree) =>{
        return treeToSentence(child)
    })
    return result.join(" ")
}
// console.log(isPaired("([{}])")) // true
// console.log(isPaired("This is ([some]) {text}.")) // true
// console.log(isPaired("No parens, no problems.")) // true
// console.log(isPaired("")) // true
// console.log(isPaired("(]")) // false
// console.log(isPaired("This is ]some[ }text{")) // false
// console.log(isPaired("(")) // false
// console.log(isPaired(")(")) // false
const children: string[] = ["y", "h", "n", "a"]

const t1: WordTree = {
    root: "Hello",
    children: [
        {
            root: "students",
            children: [
                {
                    root: "how",
                    children: []
                }
            ]
        },
        {
            root: "are",
            children: []
        },
        {
            root: "you?",
            children: []
        },
    ]
}
export const runLengthEncoding: (s: string) => string = R.pipe(
    stringToArray,
    (chars: string[]) => R.groupWith(R.equals, chars),
    R.map(x => [x[0], R.length(x)]),
    R.map(([c, n]) => n > 1 ? `${c}${n}` : c),
    R.join("")
);

console.log(treeToSentence(t1))
