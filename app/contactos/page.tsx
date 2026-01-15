import ContactForm from "@/components/Contact_form";
import nodemailer from "nodemailer";
import { FormData } from "@/app/types/mail-form";
import mailFormSchema from "../utils/validation/mail-form";
import { ZodError } from "zod";

export default function Contactos() {
    const sendMail = async (formData: FormData) => {
        "use server";

        try {
            //Validate Data
            mailFormSchema.parse(formData);

            //nodemailer setup
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.SMTP_USERNAME,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            const escapeHtml = (str = "") =>
                str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");

            const plainText = [
                `Nome: ${formData.name || "-"}`,
                `Email: ${formData.email || "-"}`,
                `Telefone: ${formData.phone || "-"}`,
                `Empresa: ${formData.company || "-"}`,
                `Assunto: ${formData.subject || "-"}`,
                "",
                "Mensagem:",
                formData.message || "-",
            ].join("\n");
            // email content
            const htmlBody = `
                <p><strong>Nome:</strong> ${escapeHtml(formData.name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
                <p><strong>Telefone:</strong> ${escapeHtml(formData.phone)}</p>
                <p><strong>Empresa:</strong> ${escapeHtml(formData.company)}</p>
                <p><strong>Assunto:</strong> ${escapeHtml(formData.subject)}</p>
                <hr/>
                <p><strong>Mensagem:</strong></p>
                <p>${escapeHtml(formData.message).replace(/\n/g, "<br/>")}</p>
            `;

            const mailOptions = {
                from: `"Website Contact" <${process.env.SMTP_USERNAME}>`,
                replyTo: formData.email,
                to: process.env.SMTP_RECEIVER_ADDRESS,
                subject: formData.subject,
                text: plainText,
                html: htmlBody,
            };

            //send email
            await transporter.sendMail(mailOptions);
            return {
                success: true,
                error: null,
            };
        } catch (error) {
            let message: string;
            // Get the error message
            if (error instanceof ZodError) {
                message = error.issues.map((err) => err.message).join(", ");
            } else if (error instanceof Error) {
                message = error.message;
            } else if (error && typeof error === "object" && "message" in error) {
                message = String(error.message);
            } else if (typeof error === "string") {
                message = error;
            } else {
                message = "Ocorreu um erro desconhecido";
            }
            return {
                success: false,
                error: message,
            };
        }
    };
    return (
        <section className="flex flex-col items-center justify-center ">
            <div className="container flex-column justify-center items-center gap-y-20">
                <div className="wrapper flex-column gap-y-12 justify-center items-center">
                    <div className="title-wrapper flex-column gap-y-6 justify-center items-center">
                        <h2 className="">Contactos</h2>
                        <p>Estes são os métodos que pode usar para nos contactar.</p>
                    </div>
                    <div className="contact-wrapper w-full flex xl:flex-row flex-col  gap-y-10 xl:gap-x-6 xl:items-center xl:justify-between shadow p-20 ">
                        <div className="address-wrapper">
                            <p className="font-bold!">Morada:</p>
                            <p>
                                Rua da Forcada, S/N, Calços 2445-712 Martingança{" "}
                                <span className="text-sm!">
                                    <br></br>(39.68440, -8.97201)
                                </span>
                            </p>
                        </div>
                        <div className="phone-wrapper ">
                            <div className="flex gap-x-2">
                                <p className="font-bold!">Telefone:</p>
                                <p>244 545 380</p>
                            </div>
                            <div className="flex gap-x-2">
                                <p className="font-bold!">Telemóvel:</p>
                                <p>960 364 411</p>
                            </div>
                        </div>
                        <div className="email-wrapper flex gap-x-2">
                            <p className="font-bold!">Email: </p>
                            <p>
                                <a href="mailto: cartobox@cartobox.pt" className="font-regular! underline">
                                    {" "}
                                    cartobox@cartobox.pt
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full form-map-wrapper flex xl:flex-row flex-col-reverse items-center xl:items-stretch">
                        <div className="map-wrapper w-full max-w-3xl">
                            <iframe
                                className="h-180 xl:h-full rounded-l-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0764922811163!2d-8.974594423478417!3d39.68436939988667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd220941deaf13cd%3A0xb28d128d399d7560!2sCartobox%2C%20Lda!5e1!3m2!1spt-PT!2spt!4v1767806201565!5m2!1spt-PT!2spt"
                                width={"100%"}
                                height={"100%"}
                                style={{ border: 0 }}
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="form-wrapper max-w-3xl w-full bg-white p-10 xl:rounded-r-lg shadow">
                            <ContactForm sendMail={sendMail} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
