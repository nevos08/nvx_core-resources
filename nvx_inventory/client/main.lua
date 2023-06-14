spawned, isReady = false, false

function OpenInventory()
    if not spawned or not isReady then
        return
    end

    local inventory = lib.callback.await("nvx_inventory:getInventory", false)

    SendNUIMessage({ eventName = "setData", inventory = inventory })
    SendNUIMessage({ eventName = "setOpen", state = true })
    SetNuiFocus(true, true)
end

RegisterNetEvent("nvx_core:playerSpawned", function()
    spawned = true
end)

lib.addKeybind({
    name = "open-inventory",
    description = Locales.keybindDescription,
    defaultKey = "I",
    onPressed = function()
        OpenInventory()
    end
})
