import type { ApplicationStep } from '../tokens.ts'
import { colors } from '../tokens.ts'

interface ProgressIndicatorProps {
  steps: ApplicationStep[]
}

export function ProgressIndicator({ steps }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Antragsfortschritt">
      <ol className="flex items-start gap-2">
        {steps.map((step, index) => {
          const isActive = step.status === 'active'
          const stepNumber = index + 1
          const isLast = index === steps.length - 1
          return (
            <li key={step.name} className="flex flex-1 items-start">
              <div className="flex flex-1 flex-col items-center gap-2 px-2 text-center">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: isActive ? colors.activeBackground : 'transparent',
                    color: isActive ? colors.activeText : colors.inactiveText,
                    border: isActive ? 'none' : `1px solid ${colors.border}`,
                  }}
                >
                  {stepNumber}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span
                    className="text-sm font-medium"
                    style={{ color: isActive ? colors.activeText : colors.inactiveText }}
                  >
                    {step.name}
                  </span>
                  <span className="text-xs" style={{ color: colors.inactiveText }}>
                    {isActive ? 'Aktiver Schritt' : 'Ausstehend'}
                  </span>
                </span>
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="mt-4 h-px flex-1 bg-current opacity-20"
                  style={{ color: colors.inactiveText }}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
