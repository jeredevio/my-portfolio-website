import NextResponse from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: 'Hi Jeremy',
      react: (
        <>
        <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}