import { hamburgerLineStyles } from './HamburgerMenu.styles'

type HamburgerMenuProps = {
  active: boolean
  onClick: () => void
  showBg: boolean
}

export function HamburgerMenu({ active, onClick, showBg }: HamburgerMenuProps) {
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
          showBg,
        })}
      />
      <div className={hamburgerLineStyles({ active, showBg })} />
      <div
        className={hamburgerLineStyles({
          absolute: true,
          bottom: true,
          active,
          showBg,
        })}
      />
    </button>
  )
}
