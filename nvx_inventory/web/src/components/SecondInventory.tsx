import { Box, SimpleGrid, Title, useMantineTheme } from '@mantine/core'
import { useMemo } from 'react'
import { useDrop } from 'react-dnd'
// import { useLocales } from '../context/LocalesContext'
import WeightBar from './WeightBar'
import Item from './Item'

interface SecondInventoryProps {
  inventory: ISecondInventory
}

export default function SecondInventory({ inventory }: SecondInventoryProps) {
  const theme = useMantineTheme()
  // const locales = useLocales()

  const [_collectedProps, dropRef] = useDrop(() => ({
    accept: 'item',
    drop: (item: Item & { fromInventory: string }) => {
      if (item.fromInventory == inventory.name) {
        return
      }
      console.log('dropped: ', item)
    },
  }))

  const weight = useMemo(() => {
    let value = 0
    inventory.items.forEach((item) => (value += item.weight * item.amount))
    return value
  }, [inventory.items])

  return (
    <Box
      ref={dropRef}
      sx={{
        padding: '5px 15px',
        backgroundColor: theme.colors.dark[7],
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.md,
        border: '1px solid #3e3e3e',
      }}
    >
      <Title sx={{ color: 'white', fontFamily: 'Jaldi' }}>{inventory.label}</Title>
      <WeightBar value={weight} max={inventory.maxWeight} />

      <Box sx={{ maxHeight: '700px', overflowY: 'scroll' }}>
        <SimpleGrid cols={5} my="10px">
          {inventory.items.map((item, index) => (
            <Item key={index} item={item} fromInventory={inventory.name} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
