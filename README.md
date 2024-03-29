# wasm-algeo-demos

A collection of math demos.

## Technology

Written in rust and javascript.

Under the hood, the computations are done by the rust crate [algeo](https://github.com/HColeman127/algeo) via web assembly. Then, javascript picks up the crunched numbers and creates a visualization using Three JS.

## Build/Run Locally

Make sure you have [wasm-pack](https://rustwasm.github.io/wasm-pack/) installed. You'll also need `node >= v12.13.0` to use the `webpack-dev-server` to run locally.

To compile the rust to webassembly (and do all the good wasm-bindgen stuff), in the root directory run
```bash
wasm-pack build
```
If you want to run the project locally, first install the dependencies by going to `www/` and running
```bash
npm install
```
Finally, to host the server locally, run
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

## License

Licensed under either of

 * Apache License, Version 2.0
   ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license
   ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.