local function StartTicks()
    Citizen.CreateThread(function()
        while NVX.PlayerLoaded do
            TriggerServerEvent("nvx_status:onTick")
            Wait(Config.Status.TickInterval)
        end
    end)
end

AddEventHandler("nvx_core:playerSpawned", StartTicks)

exports("GetStatusTypes", function()
    return Config.Types
end)
