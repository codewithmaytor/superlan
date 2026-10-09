export const contactFields = ['name', 'email', 'phone', 'subject', 'message'] as const
export type ContactField = (typeof contactFields)[number]
export type ContactData = Record<ContactField, string>
export type ContactErrors = Partial<Record<ContactField, string>>

export const contactLimits: Record<ContactField, number> = {
  name: 120,
  email: 254,
  phone: 32,
  subject: 150,
  message: 5000,
}

export function getContactErrors(value: unknown): ContactErrors {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const errors: ContactErrors = {}
  for (const field of contactFields) {
    const error = (value as Record<string, unknown>)[field]
    if (typeof error === 'string') errors[field] = error
  }
  return errors
}

export function validateContactData(value: unknown):
  | { valid: true; data: ContactData }
  | { valid: false; errors: ContactErrors } {
  const body = value && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
  const data: ContactData = { name: '', email: '', phone: '', subject: '', message: '' }
  const errors: ContactErrors = {}

  for (const field of contactFields) {
    const input = body[field]
    if (field === 'phone' && input === undefined) continue
    if (typeof input !== 'string') {
      errors[field] = field === 'phone' ? 'Enter a valid phone number.' : 'This field is required.'
      continue
    }
    data[field] = input.trim()
    if (!data[field] && field !== 'phone') {
      errors[field] = 'This field is required.'
    } else if (data[field].length > contactLimits[field]) {
      errors[field] = `Use ${contactLimits[field]} characters or fewer.`
    } else if (field !== 'message' && /[\r\n\u0000-\u001f\u007f]/.test(data[field])) {
      errors[field] = 'Enter a valid value.'
    } else if (field === 'message' && /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(data[field])) {
      errors[field] = 'Enter a valid message.'
    }
  }

  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!errors.phone && data.phone) {
    const digits = data.phone.replace(/\D/g, '')
    if (!/^\+?[\d\s().-]+$/.test(data.phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = 'Enter a valid phone number, such as +254 715 398 683.'
    }
  }

  return Object.keys(errors).length ? { valid: false, errors } : { valid: true, data }
}
