# wasm-algeo-demos

A collection of math demos.

## Technology

Written in rust and javascript.

Under the hood, the computations are done by the rust crate [algeo](https://github.com/HColeman127/algeo) via web assembly. Then, javascript picks up the crunched numbers and creates a visualization using Three JS.

## Build

Make sure you have wasm-pack installed. In the root directory, run

```bash
wasm-pack build
```

to compile the rust crate to web assembly and do all the good wasm-bindgen stuff. Then, go to `www/` and run `npm install`. To host the server locally, run
```bash
npm run start
```

## Plans

- Cones
  - Dual cones
  - Gordan's lemma/generators of affine monoid
- Toric Varieties
  - Resolution of singularities for 2D toric surfaces on the level of cones
  - Embed affine toric variety in 3D space when possible by computing presentation of affine monoid
- Rendering
  - Implicit surfaces via marching cubes