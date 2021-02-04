#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Choo Choo! Welcome to your Rocket server 🚅"
}

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();
}
