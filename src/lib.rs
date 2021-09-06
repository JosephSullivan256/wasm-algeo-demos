mod utils;

use wasm_bindgen::prelude::*;

use algeo::linalg::mat::Mat;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
// }

// impl IntoWasmAbi for Mat<f32> {
//     type Abi;

//     fn into_abi(self) -> Self::Abi {
//         todo!()
//     }
// }

// #[wasm_bindgen]
// pub fn mat() -> Mat<f32>{
//     Mat::new(2, 2, vec![
//         1.0, 0.0,
//         3.0, 1.0,
//     ])
// }

#[wasm_bindgen]
pub struct MatF32 {
    inner: Mat<f32>
}

#[wasm_bindgen]
pub fn greet() {
    let window = web_sys::window().expect("uh oh");
    window.alert_with_message("Hello, wasm-algeo-demos!").expect("oh no");
}
