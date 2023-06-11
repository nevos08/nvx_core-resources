Config = {}
Config.TickInterval = 2 * 60 * 1000 -- 2 minutes

Config.Types = {
    ["hunger"] = {
        min = 0.0,
        max = 100.0,
        remove = 5.0, -- how much to remove on every tick
        default = 100.0,
        showUI = true,
        color = "#d6661c",
        icon = "burger",
    },
    ["thirst"] = {
        min = 0.0,
        max = 100.0,
        remove = 8.0, -- how much to remove on every tick
        default = 100.0,
        showUI = true,
        color = "#1c7ed6",
        icon = "glass-water"
    },
    ["alcohol"] = {
        min = 0.0,
        max = 100.0,
        remove = 1.0,
        default = 10.0,
        showUI = true,
        color = "#a10ca6",
        icon = "wine-bottle"
    }
}
