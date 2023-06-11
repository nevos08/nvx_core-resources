fx_version "cerulean"
game "gta5"
use_experimental_fxv2_oal "yes"
lua54 "yes"

author "Nevos"
description "Simple status system for the NVX Framework"
version "0.0.1"
repository "https://github.com/nevos08/nvx_core-resources/tree/main/nvx_status"

shared_scripts {
    "@nvx_core/imports.lua",
    "config.lua"
}

server_scripts {
    "@oxmysql/lib/MySQL.lua",
    "server/main.lua"
}

client_scripts {
    "client/main.lua"
}

dependencies {
    "oxmysql"
}
