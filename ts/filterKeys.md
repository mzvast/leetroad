```ts
const obj = {
    a: {
        other: null,
        map: {K1: 1, K2: 2},
    },
    b: {
        other: null,
        map: {K3: 3, K4: 4},
    },
    c: {},
};

// define a type that has key from any key from obj's map keys
// expect to output 'K1'|'K2'|'K3'|'K4'
type TObj = typeof obj;

// https://sourcegraph.com/github.com/tldraw/tldraw/-/blob/packages/tldraw/src/types.ts?L543:13
type filteredKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

type keysHasMap = filteredKeys<TObj, {map}>;

type UMaps = TObj[keysHasMap]['map'];

type KeysOfUnion<T> = T extends T ? keyof T : never;
// https://stackoverflow.com/questions/49401866/all-possible-keys-of-an-union-type
// 分配律
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-types
// T = a1|a2
// T -> (a1 extends T ? keyof a1:never) | (a2 extends T?keyof a2:never)
// ('K1'|'K2'|) | ('K3'|'K4'|)
// 'K1'|'K2'|'K3'|'K4'

type myUKeys = KeysOfUnion<UMaps>; // "K1" | "K2" | "K3" | "K4"



// test 
// type TestKey = {
//     K1: number;
//     K2: number;
// };
// type A<T> = T extends allMapKeys ? keyof T : never;
// type myTest = A<TestKey>;

```
