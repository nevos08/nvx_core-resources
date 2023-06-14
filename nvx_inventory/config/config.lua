Config = {}
Config.Locales = "de"

Config.PlayerMaxWeight = 1000
Config.DefaultItems = { -- which items should the player get if he loads in first?
    ["apple"] = {
        amount = 2,
    },
    ["water"] = {
        amount = 3,
    },
    ["WEAPON_PISTOL"] = {
        amount = 1,
        meta = {
            ammo = 100
        }
    }
}
