use wasm_bindgen::prelude::*;
use algeo::{core::frac::Frac as Frac_, linalg::mat::Mat as Mat_};

#[wasm_bindgen]
pub struct Mat(Mat_<Frac_>);

