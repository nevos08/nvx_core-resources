fx_version "cerulean"
game "gta5"
use_experimental_fxv2_oal "yes"
lua54 "yes"

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
