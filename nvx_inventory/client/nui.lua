RegisterNUICallback("ready", function(_, cb)
    isReady = true
    cb("ok")
end)

RegisterNUICallback("close", function(_, cb)
    SendNUIMessage({ eventName = "setOpen", state = false })
    SetNuiFocus(false, false)
    cb("ok")
end)
