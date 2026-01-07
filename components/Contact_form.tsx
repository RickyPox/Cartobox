"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import mailFormSchema from "@/app/utils/validation/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/app/types/mail-form";
import toast from "react-hot-toast";

export default function ContactForm({ sendMail }: { sendMail: (formData: FormData) => Promise<{ success: boolean; error: string | null }> }) {
    const [assunto, setAssunto] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(mailFormSchema),
    });

    const onSubmit = async (formData: FormData) => {
        const res = await sendMail(formData);

        if (res.success) {
            toast.success("Mensagem enviado com Sucesso!", {
                position: "bottom-center",
            });
            reset();
        } else {
            toast.error(res.error, {
                position: "bottom-center",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact w-full space-y-4">
            <div className="w-full mt-1">
                <input id="name" type="text" placeholder="Nome" className="w-full p-2" {...register("name")} />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
            </div>

            <div className="w-full mt-1">
                <input id="email" type="email" placeholder="Email" className="w-full p-2" {...register("email")} />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
            </div>

            <div className="w-full mt-1">
                <input id="phone" type="tel" placeholder="Telemóvel" className="w-full p-2" {...register("phone")} />
                {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
            </div>

            <div className="w-full mt-1">
                <input id="empresa" type="text" placeholder="Nome da empresa" className="w-full p-2" {...register("company")} />
                {errors.company && <span className="text-red-500 text-sm mt-1">{errors.company.message}</span>}
            </div>

            <div className="w-full mt-1">
                <select
                    className={`w-full px-2 py-2.5 ${assunto === "" ? "text-gray-500 focus:text-black" : "text-black"}`}
                    defaultValue=""
                    id="assunto"
                    {...register("subject", {
                        onChange: (e) => setAssunto(e.target.value),
                    })}
                >
                    <option value="" disabled>
                        Assunto
                    </option>
                    <option value="Pedido de Informação">Pedido de Informação</option>
                    <option value="Pedido de Orçamento">Pedido de Orçamento</option>
                    <option value="Outro">Outro</option>
                </select>
                {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
            </div>

            <div className="w-full mt-1">
                <textarea id="message" rows={4} placeholder="Escreva a sua mensagem" className="w-full p-2" {...register("message")} />
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
                {isSubmitting ? "A enviar" : "Enviar Mensagem"}
            </button>
        </form>
    );
}
