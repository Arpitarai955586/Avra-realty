export type FieldErrors = Record<string, string>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d][\d\s-]{7,18}$/;

export function validateContactForm(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}): { valid: boolean; errors: FieldErrors } {
  const errors: FieldErrors = {};

  if (data.honeypot) {
    return { valid: false, errors: { form: "Spam detected." } };
  }

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phoneRegex.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters).";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateEnquiryForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
}): { valid: boolean; errors: FieldErrors } {
  const errors: FieldErrors = {};

  if (data.honeypot) {
    return { valid: false, errors: { form: "Spam detected." } };
  }

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phoneRegex.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters).";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
