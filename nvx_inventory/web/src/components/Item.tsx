import { Box, Tooltip, Image, useMantineTheme } from '@mantine/core'
import { useDrag } from 'react-dnd'

interface ItemProps {
  item: Item
  fromInventory: string
}

export default function Item({ item, fromInventory }: ItemProps) {
  const theme = useMantineTheme()
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'item',
      item: { ...item, fromInventory },
      collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.0 : 1 }),
    }),
    []
  )

  return (
    <Tooltip label={item.label} position="bottom" color={theme.colors.dark[4]}>
      <Box
        ref={dragRef}
        sx={{
          width: '100px',
          height: '100px',
          padding: '10px',
          backgroundColor: theme.colors.dark[5],
          borderRadius: theme.radius.sm,
          border: '1px solid #383838',
          cursor: 'pointer',
          opacity: opacity,
        }}
      >
        <Image src={`./icons/${item.name}.png`} w="100%" />
      </Box>
    </Tooltip>
  )
}
