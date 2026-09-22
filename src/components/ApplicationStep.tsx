interface ApplicationStepProps {
  title: string
  statusText: string
  duration?: string
  children?: React.ReactNode
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function ApplicationStep({ title, statusText, duration, children }: ApplicationStepProps) {
  return (
    <section
      className="rounded-xl border p-6"
      style={{ backgroundColor: 'var(--color-surface, #FFFFFF)', borderColor: 'var(--color-border, #D1D5DB)' }}
      aria-label={title}
    >
      <header className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#2B373D]">{title}</h2>
        <div className="flex items-center gap-3">
          {duration ? (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: '#6B7280' }}
            >
              <ClockIcon />
              {duration}
            </span>
          ) : null}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium"
            style={{ backgroundColor: '#B0E572', color: '#2B373D' }}
          >
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[#2B373D]" />
            {statusText}
          </span>
        </div>
      </header>
      {children}
    </section>
  )
}
