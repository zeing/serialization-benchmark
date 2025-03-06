import { pack, unpack } from 'msgpackr';
import notepack from 'notepack.io';
import { serialize, deserialize } from 'binarytf';

const data = { name: "ZEING", age: 3, features: ["Hi", "I'm", "Fastest"], active: true, score: 99.9 };
const iterations = 100000;

function benchmark(name: string, packFunc: any, unpackFunc: any) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        const packed = packFunc(data);
        unpackFunc(packed);
    }
    const duration = performance.now() - start;
    console.log(`${name}: ${duration.toFixed(2)} ms`);
}

console.log(`Running benchmark with ${iterations} iterations...`);
benchmark("msgpackr", pack, unpack);
benchmark("notepack.io", notepack.encode, notepack.decode);
benchmark("binarytf", serialize, deserialize);