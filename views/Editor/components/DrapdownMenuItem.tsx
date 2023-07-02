import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'

interface Props {
  itemName: string
  className?: string
  onSelect?: ((event: Event) => void)
  children?: React.ReactNode
}

function DrapdownMenuItem({ className, onSelect, children, itemName }: Props) {
  return (
    <DropdownMenuItem
      className={`${className} flex items-center outline-none py-1  hover:bg-gray-300`}
      onSelect={onSelect}
    >
      {children}
      <span>{itemName}</span>
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
  )
}

export default DrapdownMenuItem
