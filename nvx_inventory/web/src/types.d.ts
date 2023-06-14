type ItemTypes = 'item' | 'weapon'
type InventoryTypes = 'player' | 'vehicle' | 'storage'

type Item = {
  name: string
  label: string
  type: ItemTypes
  amount: number
  weight: number
  meta?: any
}

interface IInventory {
  maxWeight: number
  items: Item[]
}

interface ISecondInventory extends IInventory {
  name: string
  label: string
  type: InventoryTypes
}

interface ILocales {
  title: string
  use: string
  give: string
}
