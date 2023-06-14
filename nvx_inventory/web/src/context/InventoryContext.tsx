import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface IInventoryContext {
  inventory: IInventory
  secondInventory: ISecondInventory
}

const InventoryContext = createContext({})
export const useInventory = () => useContext(InventoryContext) as IInventoryContext

export default function InventoryContextProvider({ children }: { children: ReactNode }) {
  // const [inventory, setInventory] = useState<IInventory>({
  //   maxWeight: 1200,
  //   items: [
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //   ],
  // })

  // const [secondInventory, setSecondInventory] = useState<ISecondInventory | null>({
  //   label: 'Second Inventory',
  //   name: 'second-inventory',
  //   type: 'player',
  //   maxWeight: 1200,
  //   items: [
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //     { name: 'bread', label: 'Brot', amount: 3, type: 'item', weight: 5 },
  //   ],
  // })

  const [inventory, setInventory] = useState<IInventory | null>(null)
  const [secondInventory, setSecondInventory] = useState<ISecondInventory | null>(null)

  useEffect(() => {
    const handler = ({ data }: any) => {
      console.log(JSON.stringify(data.inventory))
      if (data.eventName == 'setData') {
        if (data.inventory) {
          setInventory(data.inventory)
        }

        if (data.secondInventory) {
          setSecondInventory(data.secondInventory)
        }
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return <InventoryContext.Provider value={{ inventory, secondInventory }}>{children}</InventoryContext.Provider>
}
