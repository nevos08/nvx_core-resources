local pageReady = false
local status = {}

local function UpdateHUD()
    if not pageReady then
        return
    end

    -- Status
    if Config.EnableStatusHUD then
        local statusTypes = exports["nvx_status"]:GetStatusTypes()
        local nuiData = {}
        for k, v in pairs(status) do
            local config = statusTypes[k]
            if config.hud then
                table.insert(nuiData,
                    { name = k, value = (v / config.max) * 100, color = config.color, icon = config.icon })
            end
        end

        SendNUIMessage({ eventName = "setStatus", status = nuiData })
    end
end

AddStateBagChangeHandler("status", nil, function(_, _, value)
    status = value
    UpdateHUD()
end)

RegisterNetEvent("nvx_core:playerSpawned", function()
    SendNUIMessage({ eventName = "setOpen", state = true })
end)

RegisterNUICallback("ready", function(_, cb)
    pageReady = true

    SendNUIMessage({
        eventName = "setConfig",
        config = { EnableStatusHUD = Config.EnableStatusHUD, EnableVehicleHUD = Config.EnableVehicleHUD,
            position = Config.Position }
    })
    UpdateHUD()

    cb("ok")
end)
