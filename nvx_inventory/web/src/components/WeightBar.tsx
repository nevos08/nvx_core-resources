import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex, Progress } from '@mantine/core'

interface WeightBarProps {
  max: number
  value: number
}

export default function WeightBar({ max, value }: WeightBarProps) {
  return (
    <Flex gap="15px" align="center">
      <FontAwesomeIcon icon={'weight-hanging'} size="xl" style={{ flexBasis: 'auto' }} />
      <Progress value={(value / max) * 100} size="xl" sx={{ flexGrow: 1 }} />
    </Flex>
  )
}
