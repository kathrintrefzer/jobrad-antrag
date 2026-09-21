interface ApplicationStepProps {
  title: string
  statusText: string
  children?: React.ReactNode
}

export function ApplicationStep({ title, statusText, children }: ApplicationStepProps) {
  return (
    <section
      className="rounded-xl border p-6"
      style={{ backgroundColor: 'var(--color-surface, #FFFFFF)', borderColor: 'var(--color-border, #D1D5DB)' }}
      aria-label={title}
    >
      <header className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#2B373D]">{title}</h2>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium"
          style={{ backgroundColor: '#B0E572', color: '#2B373D' }}
        >
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[#2B373D]" />
          {statusText}
        </span>
      </header>
      {children}
    </section>
  )
}
