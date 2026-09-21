export const colors = {
  activeBackground: '#B0E572',
  activeText: '#2B373D',
  inactiveText: '#6B7280',
  border: '#D1D5DB',
  surface: '#FFFFFF',
  background: '#F9FAFB',
  textPrimary: '#2B373D',
} as const

export type StepStatus = 'active' | 'pending'

export interface ApplicationStep {
  name: string
  status: StepStatus
}

export const steps: ApplicationStep[] = [
  { name: 'Freigabe', status: 'active' },
  { name: 'Rad auswählen', status: 'pending' },
  { name: 'Bike-Services', status: 'pending' },
  { name: 'Abschluss', status: 'pending' },
]
