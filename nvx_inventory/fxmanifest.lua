fx_version "cerulean"
game "gta5"
lua54 "yes"

author "Nevos"
description "Inventory system for the NVX Framework"
version "0.0.1"
repository "https://github.com/nevos08/nvx_core-resources/tree/main/nvx_inventory"

ui_page "web/dist/index.html"
files {
    "locales/*.json",
    "web/dist/*",
    "web/dist/**/*"
}

shared_scripts {
    "@nvx_core/imports.lua",
    "@ox_lib/init.lua",
    "config/config.lua",
    "config/config.items.lua",
    "shared/locales.lua",
}

server_scripts {
    "@oxmysql/lib/MySQL.lua",
    "server/*.lua"
}

client_scripts {
    "client/*.lua"
}
