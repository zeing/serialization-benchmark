# serialization-benchmark

### Description

A performance benchmark comparing different serialization libraries in Node.js:

- **msgpackr** – Fast MessagePack implementation
- **notepack.io** – Optimized MessagePack for Node.js
- **binarytf** – Compact binary serialization

This benchmark tests the speed and efficiency of **packing (serialization)** and **unpacking (deserialization)** to evaluate which library performs best under various conditions.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

### Result:

`Running benchmark with 100,000 iterations...`
| | msgpackr | notepack.io | binarytf |
| ------- | --------- | ----------- | ----------- |
| 1 | 102.16 ms | 102.16 ms |263.07 ms|
| 2 | 87.77 ms | 150.98 ms |259.90 ms|
| 3 | 103.46 ms | 133.34 ms |313.09 ms|
# serialization-benchmark
