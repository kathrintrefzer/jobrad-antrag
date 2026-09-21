import type { ApplicationStep } from '../tokens.ts'
import { colors } from '../tokens.ts'

interface ProgressIndicatorProps {
  steps: ApplicationStep[]
}

export function ProgressIndicator({ steps }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Antragsfortschritt">
      <ol className="flex flex-wrap items-center gap-2">
        {steps.map((step) => {
          const isActive = step.status === 'active'
          return (
            <li key={step.name} className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium"
                style={{
                  backgroundColor: isActive ? colors.activeBackground : 'transparent',
                  color: isActive ? colors.activeText : colors.inactiveText,
                }}
              >
                {isActive && (
                  <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: colors.activeText }} />
                )}
                {isActive ? <strong>{step.name}</strong> : step.name}
              </span>
              {!isActive && (
                <span aria-hidden="true" className="inline-block h-px w-4 bg-current opacity-30" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
