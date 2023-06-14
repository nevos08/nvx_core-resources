import { useEffect, useState } from 'react'
import { Transition, Flex } from '@mantine/core'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useInventory } from './context/InventoryContext'
import Inventory from './components/Inventory'
import SecondInventory from './components/SecondInventory'
import { emit } from './lib/nui'

export default function App() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    emit('ready')
    const handler = ({ data }: any) => {
      if (data.eventName == 'setOpen') {
        setOpen(data.state)
      }
    }

    window.addEventListener('message', handler)

    return () => {
      window.removeEventListener('message', handler)
    }
  }, [])

  useEffect(() => {
    const keydownHandler = ({ key }: { key: string }) => {
      if (key == 'Escape' && open) {
        emit('close')
      }
      window.addEventListener('keydown', keydownHandler)
      return () => window.removeEventListener('keydown', keydownHandler)
    }
  }, [open])

  return (
    <Transition mounted={open} transition="scale" duration={500}>
      {(styles) => (
        <div style={styles}>
          <DndProvider backend={HTML5Backend}>
            <Content />
          </DndProvider>
        </div>
      )}
    </Transition>
  )
}

function Content() {
  const { inventory, secondInventory } = useInventory()

  return (
    <Flex px="50px" w="100vw" h="100vh" justify={secondInventory ? 'space-between' : 'center'} align="center">
      <Inventory inventory={inventory} />
      {secondInventory && <SecondInventory inventory={secondInventory} />}
    </Flex>
  )
}
