RegisterNetEvent("nvx_core:playerLoaded", function(player)
    local exists = MySQL.prepare.await("SELECT COUNT(1) FROM inventories WHERE name = ? AND type = ?",
        { player.getUUID(), "player" })

    if exists == 0 then
        CreatePlayerInventory(player.getUUID())
    end
end)

lib.callback.register("nvx_inventory:getInventory", function(playerId)
    local player = NVX.Functions.GetPlayer(playerId)
    local res = MySQL.prepare.await("SELECT * FROM inventories WHERE name = ? AND type = ?",
        { player.getUUID(), "player" })

    if not res then
        print("[nvx_core] There was an error loading a players inventory. [UUID: " .. player.getUUID() .. "]")
        return
    end

    res.items = json.decode(res.items)
    local items = {}
    for _, data in pairs(res.items) do
        local baseItem = Config.Items[data.name]
        if not baseItem then
            -- TODO remove item from inventory
            goto continue
        end

        table.insert(items,
            {
                label = baseItem.label,
                name = baseItem.name,
                amount = data.amount,
                weight = baseItem.weight,
                type = baseItem.type,
                meta = data.meta
            })
        ::continue::
    end

    local inventory = {
        maxWeight = res.max_weight,
        items = items
    }

    NVX.Shared.Table.Print(inventory)
    return inventory
end)
