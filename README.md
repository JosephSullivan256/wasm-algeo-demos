# wasm-algeo-demos

A collection of math demos.

## Technology

Written in rust and javascript.

Under the hood, the computations are done by the rust crate [algeo](https://github.com/HColeman127/algeo) via web assembly. Then, javascript picks up the crunched numbers and creates a visualization using Three JS.


## Plans

- Cones
  - Dual cones
  - Gordan's lemma/generators of affine monoid
- Toric Varieties
  - Resolution of singularities for 2D toric surfaces on the level of cones
  - Embed affine toric variety in 3D space when possible by computing presentation of affine monoid
- Rendering
  - Implicit surfaces via marching cubes