import * as R from "../../src/lib/result";
import * as F from "../../src/part3/find";

describe("Find", () => {
    describe("findResult", () => {
        it("returns a Failure when no element was found", () => {
            const result = F.findResult(x => x.length > 3, ["dog", "cat", "rat"]);
            expect(result).toSatisfy(R.isFailure);
        });

        it("returns an Ok when an element was found", () => {
            const result = F.findResult(x => x.length > 3, ["raccoon", "ostrich", "slug"]);
            expect(result).toSatisfy(R.isOk);
        });
    });

    describe("Find - ohad", () => {
        describe("findResult", () => {
            it("returns a Failure when no element was found numbers - ohad", () => {
                const result = F.findResult(x => x > 3, [0,1,2]);
                expect(result).toSatisfy(R.isFailure);
            });

            it("returns an Ok when an element was found numbers - ohad", () => {
                const result = F.findResult(x => x > 3, [1,2,3,4]);
                expect(result).toSatisfy(R.isOk);
            });
        });
    });
    describe("returnSquaredIfFoundEven", () => {
        it("returns an Ok of the first even number squared in v2", () => {
            const result = F.returnSquaredIfFoundEven_v2([1, 2, 3]);
            expect(result).toEqual(R.makeOk(4));
        });


        it("return a Failure if no even numbers are in the array in v2", () => {
            const result = F.returnSquaredIfFoundEven_v2([1, 3, 5]);
            expect(result).toSatisfy(R.isFailure);
        });

        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 2, 3])).toEqual(4);
        });

        it("returns -1 if no even numbers are in the array in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 3, 5])).toEqual(-1);
        });
    });

    describe("returnSquaredIfFoundEven - ohad", () => {
        it("returns an Ok of the first even number squared in v2 Fractures", () => {
            const result = F.returnSquaredIfFoundEven_v2([1.0, 2.0, 3.0]);
            expect(result).toEqual(R.makeOk(4));
        });

        it("returns an Ok of the first even number squared in v2 diffrent numbers", () => {
            const result = F.returnSquaredIfFoundEven_v2([55,22,13]);
            expect(result).toEqual(R.makeOk(484));
        });

        it("returns an Ok of the first even number squared in v2 with 0", () => {
            const result = F.returnSquaredIfFoundEven_v2([0]);
            expect(result).toEqual(R.makeOk(0));
        });


        it("return a Failure if no even numbers are in the array in v2 diffrent numbers", () => {
            const result = F.returnSquaredIfFoundEven_v2([11, 35, 57]);
            expect(result).toSatisfy(R.isFailure);
        });

        it("return a Failure if no even numbers are in the array in v2 Fractures", () => {
            const result = F.returnSquaredIfFoundEven_v2([0.5 , 2.5 , 4.5]);
            expect(result).toSatisfy(R.isFailure);
        });

        it("returns the first even number squared in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 2, 3])).toEqual(4);
        });

        it("returns -1 if no even numbers are in the array in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 3, 5])).toEqual(-1);
        });
    });
});
