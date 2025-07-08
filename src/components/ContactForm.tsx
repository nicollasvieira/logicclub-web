import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Mail, MapPin, Smartphone, User, MessageCircle, Send } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  assunto: string;
  descricao: string;
}

const initialState: FormData = {
  nome: "",
  email: "",
  whatsapp: "",
  assunto: "",
  descricao: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Partial<FormData> = {};
    if (!form.nome) newErrors.nome = "Nome obrigatório";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Email válido obrigatório";
    if (!form.whatsapp) newErrors.whatsapp = "WhatsApp obrigatório";
    if (!form.assunto) newErrors.assunto = "Assunto obrigatório";
    if (!form.descricao) newErrors.descricao = "Descreva seu projeto";
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setTimeout(() => setForm(initialState), 2000);
      setTimeout(() => setSubmitted(false), 3500);
    }
  }

  return (
    <section id="contato" className="w-full max-w-5xl mx-auto py-24 px-4 md:px-0">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold uppercase tracking-wider text-sm md:text-base">Fale comigo</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mt-2 mb-2">Transforme sua visão em<br className="hidden md:block" /> realidade online conosco!</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">Vamos explorar juntos as oportunidades digitais! Estou pronto para mergulhar em ideias e criar algo incrível.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-stretch">
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-card border border-border rounded-2xl shadow p-8 md:p-10">
          <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2"><MessageCircle className="text-primary" size={22}/> Entre em contato</h3>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" size={20} />
            <Input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome completo" className="h-12 rounded-lg pl-12 bg-background" />
            {errors.nome && <span className="text-destructive text-xs mt-1 block">{errors.nome}</span>}
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" size={20} />
            <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Seu melhor e-mail" className="h-12 rounded-lg pl-12 bg-background" />
            {errors.email && <span className="text-destructive text-xs mt-1 block">{errors.email}</span>}
          </div>
          <div className="relative">
            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" size={20} />
            <Input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="h-12 rounded-lg pl-12 bg-background" />
            {errors.whatsapp && <span className="text-destructive text-xs mt-1 block">{errors.whatsapp}</span>}
          </div>
          <div className="relative">
            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" size={20} />
            <Input name="assunto" value={form.assunto} onChange={handleChange} placeholder="Assunto" className="h-12 rounded-lg pl-12 bg-background" />
            {errors.assunto && <span className="text-destructive text-xs mt-1 block">{errors.assunto}</span>}
          </div>
          <div className="relative">
            <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descreva um pouco do seu projeto..." className="w-full h-28 rounded-lg bg-background border border-input px-12 py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 resize-none" />
            <MessageCircle className="absolute left-4 top-6 text-primary/60" size={20} />
            {errors.descricao && <span className="text-destructive text-xs mt-1 block">{errors.descricao}</span>}
          </div>
          <Button type="submit" className="w-40 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-base mt-2 shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
            Enviar <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          {submitted && <div className="text-green-600 text-center font-medium mt-2">Mensagem enviada! Entraremos em contato em breve.</div>}
        </form>
        {/* Informações de contato */}
        <div className="flex flex-col justify-center gap-8 bg-card border border-border rounded-2xl shadow p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary text-primary-foreground rounded-full p-4 flex items-center justify-center shadow"><Mail size={24} /></span>
            <div>
              <div className="font-semibold text-base text-foreground">Email</div>
              <div className="text-muted-foreground text-sm">contatovithorsilva@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary text-primary-foreground rounded-full p-4 flex items-center justify-center shadow"><Smartphone size={24} /></span>
            <div>
              <div className="font-semibold text-base text-foreground">WhatsApp</div>
              <div className="text-muted-foreground text-sm">+55 (48) 9672-8085</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary text-primary-foreground rounded-full p-4 flex items-center justify-center shadow"><MapPin size={24} /></span>
            <div>
              <div className="font-semibold text-base text-foreground">Endereço</div>
              <div className="text-muted-foreground text-sm">Florianópolis, Santa Catarina - Brasil</div>
            </div>
          </div>
          <div className="mt-8 text-primary font-semibold text-base text-center">Disponível para novos projetos!</div>
        </div>
      </div>
    </section>
  );
} 