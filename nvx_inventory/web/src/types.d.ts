type ItemTypes = 'item' | 'weapon'

type Item = {
  name: string
  label: string
  type: ItemTypes
  amount: number
  weight: number
  meta?: any
}

interface IInventory {
  label?: string
  maxWeight: number
  items: Item[]
}

interface ILocales {
  title: string
}
