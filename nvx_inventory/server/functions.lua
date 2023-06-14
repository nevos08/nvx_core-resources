function CreatePlayerInventory(uuid)
    local defaultItems = {}

    for name, data in pairs(Config.DefaultItems) do
        local baseItem = Config.Items[name]
        if not baseItem then
            return
        end

        table.insert(defaultItems, { name = baseItem.name, amount = data.amount, meta = data.meta })
    end

    MySQL.insert.await("INSERT INTO inventories (`name`, `type`, `items`, `max_weight`) VALUES (?, ?, ?, ?)",
        { uuid, "player", json.encode(defaultItems), Config.PlayerMaxWeight })
end
