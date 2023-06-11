local pageReady = false
local status = {}

local function UpdateHUD()
    if not pageReady then
        return
    end

    -- Status
    local nuiData = {}
    for k, v in pairs(status) do
        local config = Config.Status.Types[k]
        if not config.showUI then
            return
        end

        table.insert(nuiData, { name = k, value = (v / config.max) * 100, color = config.color, icon = config.icon })
    end

    SendNUIMessage({ eventName = "setStatus", status = nuiData })
end

RegisterNetEvent("nvx_core:playerSpawned", function()
    SendNUIMessage({ eventName = "setOpen", state = true })
end)

AddStateBagChangeHandler("status", nil, function(_, _, value)
    status = value
    UpdateHUD()
end)

RegisterNUICallback("ready", function(_, cb)
    pageReady = true

    SendNUIMessage({
        eventName = "setConfig",
        config = { EnableStatusHUD = Config.EnableStatusHUD, EnableVehicleHUD = Config.EnableVehicleHUD }
    })
    UpdateHUD()
    cb("ok")
end)
