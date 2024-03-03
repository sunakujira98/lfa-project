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
    <div className='flex justify-between gap-40'>
      <h3 className='font-thin w-1/3'>{displayName}</h3>
      <div className='flex flex-col w-2/3'>
        <h4 className='font-thin' style={{ paddingBottom: '50px' }}>
          {title}
        </h4>
        <span className='text-xs font-thin'>{subtitle}</span>
      </div>
    </div>
  )
}
