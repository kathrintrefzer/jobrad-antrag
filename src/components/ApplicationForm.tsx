import { ProgressIndicator } from './ProgressIndicator.tsx'
import { ApplicationStep } from './ApplicationStep.tsx'
import { steps } from '../tokens.ts'

export function ApplicationForm() {
  return (
    <div className="mx-auto max-w-2xl">
      <ProgressIndicator steps={steps} />
      <div className="mt-8">
        <ApplicationStep title="Freigabe durch deinen Arbeitgeber" statusText="Aktiver Schritt">
          <p className="text-[#2B373D]">
            Dein Arbeitgeber muss den JobRad-Antrag zuerst freigeben. Sobald die Freigabe vorliegt,
            kannst du im nächsten Schritt dein Wunschrad auswählen.
          </p>
          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: '#B0E572', color: '#2B373D' }}
            >
              Freigabe anfordern
            </button>
          </div>
        </ApplicationStep>
      </div>
    </div>
  )
}
