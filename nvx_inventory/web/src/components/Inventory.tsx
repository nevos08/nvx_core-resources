import { Box, Button, Group, NumberInput, SimpleGrid, Title, useMantineTheme } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useLocales } from '../context/LocalesContext'

import WeightBar from './WeightBar'
import Item from './Item'

interface InventoryProps {
  inventory: IInventory
}

export default function Inventory({ inventory }: InventoryProps) {
  const theme = useMantineTheme()
  const locales = useLocales()

  const [_collectedProps, dropRef] = useDrop(() => ({
    accept: 'item',
    drop: (item: Item & { fromInventory: string }) => {
      if (item.fromInventory == 'me') {
        return
      }
      console.log('dropped: ', item)
    },
  }))

  const [count, setCount] = useState<number>(1)

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
        paddingBottom: '10px',
        backgroundColor: theme.colors.dark[7],
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.md,
        border: '1px solid #3e3e3e',
      }}
    >
      <Title sx={{ color: 'white', fontFamily: 'Jaldi' }}>{locales.title}</Title>
      <WeightBar value={weight} max={inventory.maxWeight} />

      <Box sx={{ maxHeight: '700px', overflowY: 'scroll' }}>
        <SimpleGrid cols={5} my="10px">
          {inventory.items.map((item, index) => (
            <Item key={index} item={item} fromInventory="me" />
          ))}
        </SimpleGrid>
      </Box>

      <Group>
        <NumberInput
          size="md"
          hideControls
          sx={{ flexBasis: '50%' }}
          value={count}
          onChange={(value: number) => setCount(value)}
        />
        <Button size="md" sx={{ flexGrow: 1 }}>
          {locales.use}
        </Button>
        <Button size="md" sx={{ flexGrow: 1 }}>
          {locales.give}
        </Button>
      </Group>
    </Box>
  )
}
