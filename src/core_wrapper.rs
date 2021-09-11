use wasm_bindgen::prelude::*;

use algeo::core::frac::Frac as Frac_;

#[wasm_bindgen]
pub struct Frac(Frac_);

#[wasm_bindgen]
impl Frac {
	pub fn new(numer: i32, denom: i32) -> Frac {
		Frac(Frac_::new(numer as i64, denom as i64))
	}

	pub fn numer(&self) -> i64 { self.0.numer }
	pub fn denom(&self) -> i64 { self.0.denom }

	pub fn add(&self, other: &Frac) -> Frac { Frac(self.0 + other.0) }
	pub fn sub(&self, other: &Frac) -> Frac { Frac(self.0 - other.0) }
	pub fn mul(&self, other: &Frac) -> Frac { Frac(self.0 * other.0) }
	pub fn div(&self, other: &Frac) -> Frac { Frac(self.0 / other.0) }
}