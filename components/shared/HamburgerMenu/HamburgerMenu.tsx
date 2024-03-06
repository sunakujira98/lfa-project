import { hamburgerLineStyles } from './HamburgerMenu.styles'

type HamburgerMenuProps = {
  active: boolean
  onClick: () => void
}

export function HamburgerMenu({ active, onClick }: HamburgerMenuProps) {
  return (
    <button
      type='button'
      className='group relative flex h-4 w-6 items-center justify-center lg:hidden'
      onClick={onClick}
    >
      <div
        className={hamburgerLineStyles({
          absolute: true,
          top: true,
          active,
        })}
      />
      <div className={hamburgerLineStyles({ active })} />
      <div
        className={hamburgerLineStyles({
          absolute: true,
          bottom: true,
          active,
        })}
      />
    </button>
  )
}
