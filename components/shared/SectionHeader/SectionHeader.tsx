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
    <div className='flex flex-col lg:flex-row lg:justify-between gap-10'>
      <h3 className='vinila-tight w-full lg:w-[30%]'>{displayName}</h3>
      <div className='flex flex-col w-full lg:w-[70%] gap-[50px]'>
        <h4 className='neue-wider'>{title}</h4>
        <span className='neue-normal text-justify'>{subtitle}</span>
      </div>
    </div>
  )
}
