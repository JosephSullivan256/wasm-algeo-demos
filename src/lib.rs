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

#[wasm_bindgen]
pub fn greet() {
    let mat = Mat::new(2, 2, vec![
        1.0, 0.0,
        3.0, 1.0,
    ]);
    let window = web_sys::window().expect("uh oh");
    window.alert_with_message("Hello, wasm-algeo-demos!").expect("oh no");
}
