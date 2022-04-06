import * as R from "ramda";
import {concat, identity, is, match, reduce, Reduced} from "ramda";
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

export const treeToSentence: (t: WordTree) => string =
    t => t === undefined ? ""
        : t.root + t.children.reduce((acc,cur)=>acc+" "+treeToSentence(cur),"");
