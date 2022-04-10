import { countLetters, isPaired, treeToSentence, WordTree } from "../../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    describe("countLetters", () => {
        it("counts letters", () => {
            expect(countLetters("aaabbbb")).toEqual({"a": 3, "b":4});
            expect(countLetters("AaaBbbb")).toEqual({"a": 3, "b":4});
            expect(countLetters("ABbbaab")).toEqual({"a": 3, "b":4});
            expect(countLetters("I am robot")).toEqual({"i": 1, "a": 1, "m": 1, "r":1, "o":2, "b":1, "t":1});
        });
    });

    describe("Assignment 1 Part 2 ohad extra tests", () => {
        describe("countLetters", () => {
            it("counts letters", () => {
                expect(countLetters("i i i i i")).toEqual({"i": 5});
                expect(countLetters("#@$^%&%^*)%&")).toEqual({});
                expect(countLetters("                          ....      ")).toEqual({});
                expect(countLetters("O!H@A#d")).toEqual({"o": 1,"a": 1,"h": 1,"d": 1});
            });
        });
    });
    describe("isPaired", () => {
        it("returns true for a string with paired parens", () => {
            expect(isPaired("([{}])")).toBe(true);
            expect(isPaired("This is ([some]) {text}.")).toBe(true);
            expect(isPaired("No parens, no problems.")).toBe(true);
            expect(isPaired("")).toBe(true);
        });

        it("ohad positiv testing", () => {
            expect(isPaired("(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((([{}]))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))")).toBe(true);
            expect(isPaired("()")).toBe(true);
            expect(isPaired("{(dsadsad)()asdasdasd(sadasd)()asdasdas}")).toBe(true);
            expect(isPaired("[()]{}{[()()]()}")).toBe(true);

        });

        it("returns false when the parens are not paired", () => {
            expect(isPaired("(]")).toBe(false);
            expect(isPaired("This is ]some[ }text{")).toBe(false);
            expect(isPaired("(")).toBe(false);
            expect(isPaired(")(")).toBe(false);

        });

        it("ohad negativ tests", () => {
            expect(isPaired("({)}")).toBe(false);
            expect(isPaired("(((()))")).toBe(false);
            expect(isPaired("(()))")).toBe(false);
            expect(isPaired("][")).toBe(false);
            expect(isPaired("}{")).toBe(false);

        });
    });

    describe("treeToSentence", () => {
        const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
        const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
        const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
        it("Represents a tree as a sentence", () => {
            expect(treeToSentence(t1)).toBe("hello world");
            expect(treeToSentence(t2)).toBe("hello there !");
            expect(treeToSentence(t3)).toBe("hello there !");

        });
    });

    describe("treeToSentence- Ohad", () => {
        const t2: WordTree = {root:"hello", children:[{root: "students",
                children:[{root:"how", children:[]}]}, {root:"are", children:[]},{root:"you", children:[]}]}
        const t3: WordTree = {root:"barad", children:[{root: "yarad", children:[{root:"bedrom", children:[]}]},
                {root: "sfarad", children:[{root: "!!!", children:[]}]} ]}
        const t4: WordTree = {root:"1", children:[{root: "2", children:[{root:"3", children:[]}]},
                {root: "4", children:[{root: "5", children:[]}]},{root: "6", children:[{root: "7", children:[]}]} ]}
        it("Represents a tree as a sentence", () => {
            expect(treeToSentence(t2)).toBe("hello students how are you");
            expect(treeToSentence(t3)).toBe("barad yarad bedrom sfarad !!!");
            expect(treeToSentence(t4)).toBe("1 2 3 4 5 6 7");
        });
    });
});

