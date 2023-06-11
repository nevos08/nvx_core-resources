import { useEffect, useState } from 'react'
import { Transition, Box, Center, useMantineTheme } from '@mantine/core'

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
        <Center sx={styles as any} h="100vh">
          <Box
            sx={{
              backgroundColor: theme.colors.dark[7],
              borderRadius: theme.radius.sm,
              boxShadow: theme.shadows.md,
              border: '1px solid #383838',
            }}
          ></Box>
        </Center>
      )}
    </Transition>
  )
}
