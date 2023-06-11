import { Box, Flex, Image, NumberInput, SimpleGrid, Title, Tooltip, useMantineTheme } from '@mantine/core'
import { useMemo } from 'react'
import { useLocales } from '../context/LocalesContext'
import WeightBar from './WeightBar'

interface InventoryProps {
  inventory: IInventory
  isMain?: boolean
}

export default function Inventory({ inventory, isMain }: InventoryProps) {
  const theme = useMantineTheme()
  const locales = useLocales()

  const weight = useMemo(() => {
    let value = 0
    inventory.items.forEach((item) => (value += item.weight * item.amount))
    return value
  }, [inventory.items])

  return (
    <Box
      sx={{
        padding: '5px 15px',
        backgroundColor: theme.colors.dark[7],
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.md,
        border: '1px solid #3e3e3e',
      }}
    >
      <Title sx={{ color: 'white', fontFamily: 'Jaldi' }}>{isMain ? locales.title : inventory.label}</Title>
      <WeightBar value={weight} max={inventory.maxWeight} />

      <Box sx={{ maxHeight: '700px', overflowY: 'scroll' }}>
        <SimpleGrid cols={5} my="10px">
          {inventory.items.map((item) => (
            <Item item={item} />
          ))}
        </SimpleGrid>
      </Box>

      {isMain && (
        <Flex>
          <NumberInput />
        </Flex>
      )}
    </Box>
  )
}

interface ItemProps {
  item: Item
}

function Item({ item }: ItemProps) {
  const theme = useMantineTheme()
  return (
    <Tooltip label={item.label} position="bottom" color={theme.colors.dark[4]}>
      <Box
        sx={{
          width: '100px',
          height: '100px',
          padding: '10px',
          backgroundColor: theme.colors.dark[5],
          borderRadius: theme.radius.sm,
          border: '1px solid #383838',
          cursor: 'pointer',
        }}
      >
        <Image src={`./icons/${item.name}.png`} />
      </Box>
    </Tooltip>
  )
}
