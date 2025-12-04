// src/lib/services/mail.ts
// Local/development stub – disable Resend so the site can run without an API key.

export async function sendEmail(..._args: any[]) {
  console.log('Email disabled: RESEND_API_KEY not configured. Skipping sendEmail().');
}
