fx_version "cerulean"
game "gta5"
lua54 "yes"
use_experimental_fxv2_oal "yes"

author "Nevos"
description "Company system for the NVX Framework"
version "0.0.1"
repository ""

shared_scripts {
    "@ox_lib/init.lua",
    "config.lua",
}

server_scripts {
    "@oxmysql/lib/MySQL.lua",
}

client_scripts {

}
