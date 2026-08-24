import { getAccessToken, googleSignIn } from './authService';

export const ADMIN_NOTIFICATION_EMAIL = 'divyaratnakar07@gmail.com';

export interface EnrollmentDetails {
  serviceTitle: string;
  serviceId: string;
  duration?: string;
  fullName: string;
  email: string;
  phone?: string;
  occupation?: string;
  primaryGoal: string;
  dietaryType: string;
  biggestChallenge?: string;
}

export interface ContactDetails {
  fullName: string;
  email: string;
  topic: string;
  message: string;
}

export interface VisitorDetails {
  pageUrl: string;
  referrer: string;
  userAgent: string;
  screenSize: string;
  timestamp: string;
}

/**
 * Base64 URL-safe encode RFC822 standard email message
 */
function createMimeMessage(to: string, subject: string, htmlBody: string): string {
  // Use UTF-8 Base64 subject encoding
  const base64Subject = btoa(unescape(encodeURIComponent(subject)));
  const utf8Subject = `=?utf-8?B?${base64Subject}?=`;

  const lines = [
    `To: ${to}`,
    'Content-Type: text/html; charset=UTF-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    htmlBody
  ];

  const rawMessage = lines.join('\r\n');
  return btoa(unescape(encodeURIComponent(rawMessage)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Dispatches an email via the Google Gmail REST API users.messages.send
 */
export async function sendEmailViaGmail(
  subject: string,
  htmlBody: string,
  recipient: string = ADMIN_NOTIFICATION_EMAIL
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    let token = await getAccessToken();

    // If no token exists, prompt sign-in to authenticate Gmail API dispatch
    if (!token) {
      console.log('No cached token found for Gmail API. Prompting sign-in...');
      const authResult = await googleSignIn();
      token = authResult?.accessToken || null;
    }

    if (!token) {
      throw new Error('Google authentication required to send email notification.');
    }

    const raw = createMimeMessage(recipient, subject, htmlBody);

    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData?.error?.message || `Gmail API error HTTP ${response.status}`);
    }

    const data = await response.json();
    return { success: true, messageId: data.id };
  } catch (error: any) {
    console.error('Failed to send email via Gmail:', error);
    return { success: false, error: error?.message || 'Unknown error occurred while sending email' };
  }
}

/**
 * Send Enrollment / Program Consultation Intake Notification
 */
export async function notifyEnrollment(details: EnrollmentDetails): Promise<{ success: boolean; error?: string }> {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZoneName: 'short'
  });

  const subject = `🚀 New Program Enrollment: ${details.fullName} (${details.serviceTitle})`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;">
      
      <div style="background-color: #0f172a; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: left;">
        <h2 style="color: #10b981; margin: 0 0 6px 0; font-size: 20px; font-weight: 700;">Nourish & Move — New Program Intake</h2>
        <p style="color: #94a3b8; margin: 0; font-size: 13px;">Notification for Divya Ratnakar (Certified Diet Planner)</p>
      </div>

      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #0f172a; font-size: 16px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">Applicant Profile</h3>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #64748b;">Full Name:</td>
            <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${details.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${details.email}" style="color: #059669; text-decoration: none; font-weight: 600;">${details.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0;">${details.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Occupation:</td>
            <td style="padding: 8px 0;">${details.occupation || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Program Track:</td>
            <td style="padding: 8px 0;"><span style="background-color: #ecfdf5; color: #065f46; padding: 4px 8px; border-radius: 4px; font-weight: 600;">${details.serviceTitle}</span></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Dietary Pattern:</td>
            <td style="padding: 8px 0;">${details.dietaryType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Primary Goal:</td>
            <td style="padding: 8px 0; color: #0f172a;">${details.primaryGoal}</td>
          </tr>
        </table>

        ${details.biggestChallenge ? `
          <div style="margin-top: 16px; padding: 12px; background-color: #f1f5f9; border-radius: 6px;">
            <strong style="display: block; font-size: 13px; color: #475569; margin-bottom: 4px;">Friction Point / Challenge Described:</strong>
            <p style="margin: 0; font-size: 13px; color: #1e293b; font-style: italic;">"${details.biggestChallenge}"</p>
          </div>
        ` : ''}
      </div>

      <div style="text-align: center; margin-bottom: 20px;">
        <a href="mailto:${details.email}?subject=Your%20Nourish%20%26%20Move%20Consultation%20Intake%20-%20Divya%20Ratnakar" 
           style="background-color: #059669; color: #ffffff; display: inline-block; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 14px;">
          Reply to Applicant Directly
        </a>
      </div>

      <div style="font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 14px;">
        Received on: ${timestamp} • Automated Gmail notification sent to <strong>${ADMIN_NOTIFICATION_EMAIL}</strong>
      </div>
    </div>
  `;

  return sendEmailViaGmail(subject, html);
}

/**
 * Send General Contact Message Inquiry Notification
 */
export async function notifyContactInquiry(details: ContactDetails): Promise<{ success: boolean; error?: string }> {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const subject = `📩 New Website Inquiry from ${details.fullName} (${details.topic})`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;">
      <div style="background-color: #0f172a; padding: 18px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #38bdf8; margin: 0 0 4px 0; font-size: 18px;">New Contact Message</h2>
        <p style="color: #94a3b8; margin: 0; font-size: 12px;">Nourish & Move Portal</p>
      </div>

      <div style="background-color: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 18px;">
        <p><strong>From:</strong> ${details.fullName} (&lt;${details.email}&gt;)</p>
        <p><strong>Topic:</strong> ${details.topic}</p>
        <div style="margin-top: 12px; padding: 12px; background-color: #f1f5f9; border-radius: 6px;">
          <p style="margin: 0; color: #1e293b; white-space: pre-line;">${details.message}</p>
        </div>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${details.email}?subject=Re:%20${encodeURIComponent(details.topic)}" 
           style="background-color: #0284c7; color: #ffffff; display: inline-block; padding: 10px 20px; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 13px;">
          Reply to ${details.fullName}
        </a>
      </div>
      <div style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 16px;">
        Logged: ${timestamp} • Recipient: ${ADMIN_NOTIFICATION_EMAIL}
      </div>
    </div>
  `;

  return sendEmailViaGmail(subject, html);
}

/**
 * Send Site Visitor Event Notification
 */
export async function notifySiteVisitor(details: VisitorDetails): Promise<{ success: boolean; error?: string }> {
  const subject = `👁️ New Visitor on Nourish & Move`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 550px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
      <div style="background-color: #0f172a; padding: 16px; border-radius: 6px; margin-bottom: 16px;">
        <h3 style="color: #34d399; margin: 0; font-size: 16px;">Site Visitor Alert</h3>
        <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px;">A new user has landed on your site</p>
      </div>

      <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 13px; color: #334155;">
        <p style="margin: 4px 0;"><strong>Landed On:</strong> ${details.pageUrl}</p>
        <p style="margin: 4px 0;"><strong>Referrer:</strong> ${details.referrer || 'Direct / Bookmark'}</p>
        <p style="margin: 4px 0;"><strong>Viewport:</strong> ${details.screenSize}</p>
        <p style="margin: 4px 0;"><strong>Timestamp:</strong> ${details.timestamp}</p>
        <p style="margin: 4px 0; font-size: 11px; color: #64748b;"><strong>Device Info:</strong> ${details.userAgent}</p>
      </div>
    </div>
  `;

  return sendEmailViaGmail(subject, html);
}
