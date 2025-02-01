use std::option;

use cleverlib::{clever_parser_options::CleverParserOptions, event_collection::EventCollection};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn read_clef() {
    println!("Test");
    let clef = "{}";
    let options = CleverParserOptions {
        debug: Some(false),
        ignore_errors: Some(false),
    };
    let event_collection = EventCollection::create(vec![clef.to_string()].as_ref(), Some(&options));
    println!("{:?}", event_collection.unwrap().log_levels);
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    read_clef();
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
