import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],        // tu reçois et l’utilisateur aussi
      subject: subject,
      reply_to: email,               // pour que tu puisses répondre facilement
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
