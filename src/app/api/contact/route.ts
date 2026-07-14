import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  nome?: string;
  email?: string;
  tel?: string;
  empresa?: string;
  assunto?: string;
  mensagem?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { nome, email, tel, empresa, assunto, mensagem } = body;

  if (!nome || !email) {
    return NextResponse.json(
      { error: "Nome e email são obrigatórios." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error("Contact form: missing SMTP configuration in environment.");
    return NextResponse.json(
      { error: "O serviço de email não está configurado." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Cartobox] ${assunto ?? "Novo contacto"} — ${nome}`,
      text: [
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Telemóvel: ${tel ?? "-"}`,
        `Empresa: ${empresa ?? "-"}`,
        `Assunto: ${assunto ?? "-"}`,
        "",
        mensagem ?? "",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem." },
      { status: 502 }
    );
  }
}

