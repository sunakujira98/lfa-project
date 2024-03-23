type SectionHeaderProps = {
  displayName: string
  title: string
  subtitle: string
}

export function SectionHeader({
  displayName,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-40'>
      <h3 className='font-thin w-full lg:w-1/3'>{displayName}</h3>
      <div className='flex flex-col w-full lg:w-2/3 gap-10'>
        <h4 className='font-thin lg:pb-12'>{title}</h4>
        <span className='text-xs font-thin'>{subtitle}</span>
      </div>
    </div>
  )
}
