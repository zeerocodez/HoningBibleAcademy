import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'admin@honingbibleacademy.com', // Replace with real email if available
    pass: process.env.EMAIL_PASS || 'placeholder_password', // Replace with real password if available
  },
});

export async function sendWelcomeEmail(to: string, name: string) {
  try {
    await transporter.sendMail({
      from: `"Honing Bible Academy" <${process.env.EMAIL_USER || 'admin@honingbibleacademy.com'}>`,
      to,
      subject: 'Welcome to Honing Bible Academy!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome, ${name}!</h2>
          <p>Thank you for enrolling in Honing Bible Academy. We are thrilled to have you join our community.</p>
          <p>Your application has been received and is currently marked as <strong>PENDING</strong>.</p>
          <p>Our admin team will review your application shortly. Once approved, you will have full access to your student dashboard and courses.</p>
          <br/>
          <p>Blessings,</p>
          <p><strong>The Honing Bible Academy Team</strong></p>
        </div>
      `,
    });
    console.log(`Welcome email sent to ${to}`);
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}

export async function sendAdminNotification(newUserName: string, newUserEmail: string, courseId: string) {
  const adminEmail = 'zeerocodes@gmail.com'; // Primary admin email
  try {
    await transporter.sendMail({
      from: `"Honing Bible Academy System" <${process.env.EMAIL_USER || 'admin@honingbibleacademy.com'}>`,
      to: adminEmail,
      subject: 'New Student Enrollment - Action Required',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Enrollment Alert</h2>
          <p>A new student has just registered on the platform.</p>
          <ul>
            <li><strong>Name:</strong> ${newUserName}</li>
            <li><strong>Email:</strong> ${newUserEmail}</li>
            <li><strong>Course:</strong> ${courseId}</li>
          </ul>
          <p>Please log in to the admin dashboard to review and approve their admission.</p>
        </div>
      `,
    });
    console.log(`Admin notification sent for ${newUserEmail}`);
  } catch (error) {
    console.error('Error sending admin notification email:', error);
  }
}
