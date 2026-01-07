import { z } from "zod";

const mailFormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.email("O email não é válido"),
    message: z.string().min(1, "A mensagem é obrigatória"),
    subject: z.string().min(1, "O assunto é obrigatório"),
    phone: z.string().optional(),
    company: z.string().min(1, "Insira o nome da sua empresa"),
});

export default mailFormSchema;
