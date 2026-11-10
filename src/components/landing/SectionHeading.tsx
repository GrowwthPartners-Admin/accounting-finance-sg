type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({ eyebrow, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-[740px] text-center' : 'max-w-[690px]'}>
      <p className={`flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] ${centered ? 'justify-center' : ''} ${light ? 'text-[#a7e8d8]' : 'text-[#176b67]'}`}><span className={`h-px w-7 ${light ? 'bg-[#a7e8d8]' : 'bg-[#176b67]'}`} />{eyebrow}</p>
      <h2 className={`mt-5 text-balance text-[2rem] font-extrabold leading-[1.16] tracking-[-0.04em] sm:text-[2.55rem] lg:text-[3.05rem] ${light ? 'text-white' : 'text-[#102f3b]'}`}>{title}</h2>
      {description && <p className={`body-copy-lead mt-5 max-w-[620px] text-base leading-8 ${centered ? 'mx-auto' : ''} ${light ? 'text-[#c6d8db]' : 'text-[#566a70]'}`}>{description}</p>}
    </div>
  )
}
