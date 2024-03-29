mod core_wrapper;
mod linalg_wrapper;

mod utils;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen]
pub fn greet(msg: &str) {
    let window = web_sys::window().expect("uh oh");
    window
        .alert_with_message(
            &format!("Hello, wasm-algeo-demos! '{}'", msg)
        )
        .expect("oh no");
}
