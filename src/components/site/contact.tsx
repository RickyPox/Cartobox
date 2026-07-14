"use client";

import { useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";

const SUBJECTS = ["Pedido de informação", "Pedido de orçamento", "Outro"] as const;

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [assunto, setAssunto] = useState<string>(SUBJECTS[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
      setAssunto(SUBJECTS[0]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-paper-2 py-25">
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mb-10 max-w-[640px]">
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            Entre em contacto connosco
          </h2>
          <p className="mt-4 text-[19px] leading-[1.6] text-ink-2">
            Conte-nos o que precisa e enviamos-lhe uma proposta à medida.
          </p>
        </Reveal>

        <div className="grid gap-12.5 lg:grid-cols-[1.12fr_.88fr]">
          <Reveal className="rounded-[22px] border border-line bg-surface p-9.5">
            {status === "sent" ? (
              <div className="py-10 text-center">
                <span className="mx-auto mb-5 flex size-16.5 items-center justify-center rounded-full bg-brand-green text-white">
                  <Check className="size-7.5" strokeWidth={2.6} />
                </span>
                <h3 className="mb-2 font-heading text-2xl font-extrabold">Mensagem enviada!</h3>
                <p className="text-ink-2">
                  Obrigado pelo contacto. A equipa Cartobox responde-lhe brevemente.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4.5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="nome" className="font-mono text-[11.5px] font-bold tracking-[.09em] text-ink-2 uppercase">
                      Nome
                    </Label>
                    <Input id="nome" name="nome" required placeholder="O seu nome" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="font-mono text-[11.5px] font-bold tracking-[.09em] text-ink-2 uppercase">
                      Email
                    </Label>
                    <Input id="email" name="email" type="email" required placeholder="nome@empresa.pt" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="tel" className="font-mono text-[11.5px] font-bold tracking-[.09em] text-ink-2 uppercase">
                      Telemóvel
                    </Label>
                    <Input id="tel" name="tel" type="tel" placeholder="9XX XXX XXX" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="empresa" className="font-mono text-[11.5px] font-bold tracking-[.09em] text-ink-2 uppercase">
                      Empresa
                    </Label>
                    <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-mono text-[11.5px] font-bold tracking-[.09em] text-ink-2 uppercase">
                    Assunto
                  </Label>
                  <Select
                    name="assunto"
                    value={assunto}
                    onValueChange={(v) => setAssunto(v ?? SUBJECTS[0])}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="mensagem" className="font-mono text-[11.5px] font-bold tracking-[.09em] text-ink-2 uppercase">
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Descreva o produto, quantidades e medidas pretendidas…"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-destructive">
                    Não foi possível enviar a mensagem. Tente novamente ou contacte-nos por telefone.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-1.5 w-full justify-center rounded-[13px] py-3.75 text-base"
                >
                  {status === "submitting" ? "A enviar…" : "Enviar mensagem"}
                </Button>
              </form>
            )}
          </Reveal>

          <div>
            <Reveal delay={1} className="mb-4 rounded-[22px] border border-line bg-surface p-9.5">
              <div className="mb-5.5 flex items-start gap-3.75">
                <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[11px] bg-kraft-light text-kraft-dark">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="font-mono text-[11px] font-bold tracking-[.12em] text-kraft-dark uppercase">Morada</div>
                  <div className="mt-0.75 text-[15.5px] leading-[1.45] font-semibold">
                    Rua da Forcada, S/N, Calços
                    <span className="block font-normal text-ink-2">2445-712 Martingança</span>
                  </div>
                </div>
              </div>
              <div className="mb-5.5 flex items-start gap-3.75">
                <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[11px] bg-kraft-light text-kraft-dark">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="font-mono text-[11px] font-bold tracking-[.12em] text-kraft-dark uppercase">Telefone</div>
                  <div className="mt-0.75 text-[15.5px] leading-[1.45] font-semibold">
                    244 545 380
                    <span className="block font-normal text-ink-2">960 364 411</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3.75">
                <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[11px] bg-kraft-light text-kraft-dark">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="font-mono text-[11px] font-bold tracking-[.12em] text-kraft-dark uppercase">Email</div>
                  <div className="mt-0.75 text-[15.5px] font-semibold">cartobox@cartobox.pt</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1} className="min-h-[260px] overflow-hidden rounded-[22px] border border-line">
              <iframe
                title="Mapa Cartobox"
                loading="lazy"
                className="h-full min-h-[260px] w-full border-0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.9925%2C39.6745%2C-8.9515%2C39.6945&layer=mapnik&marker=39.6844%2C-8.97201"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
