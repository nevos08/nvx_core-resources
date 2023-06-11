import { useEffect, useState } from 'react'
import { Transition, useMantineTheme, Flex } from '@mantine/core'
import InventoryContextProvider, { useInventory } from './context/InventoryContext'
import Inventory from './components/Inventory'

export default function App() {
  const theme = useMantineTheme()

  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    const handler = ({ data }: any) => {
      if (data.eventName == 'setOpen') {
        setOpen(data.state)
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <Transition mounted={open} transition="scale" duration={500}>
      {(styles) => (
        <div style={styles}>
          <InventoryContextProvider>
            <Content />
          </InventoryContextProvider>
        </div>
      )}
    </Transition>
  )
}

function Content() {
  const { inventory, secondInventory } = useInventory()

  return (
    <Flex px="50px" w="100vw" h="100vh" justify={secondInventory ? 'space-between' : 'center'} align="center">
      <Inventory inventory={inventory} isMain={true} />
      {secondInventory && <Inventory inventory={secondInventory} />}
    </Flex>
  )
}
