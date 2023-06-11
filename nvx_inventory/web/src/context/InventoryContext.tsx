import { createContext, useContext, useState } from 'react'

interface IInventoryContext {}

const InventoryContext = createContext({})
export const useInventory = () => useContext(InventoryContext)

export default function InventoryContextProvider() {
  const [inventory, setInventory] = useState<any>(null)
  const [secondInventory] = useState<any>(null)

  return <InventoryContext.Provider value={{}}></InventoryContext.Provider>
}
