"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAgreed) {
      toast.error('Você deve concordar com os termos de uso e política de privacidade.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        fname: "",
        lname: "",
        email: "",
        message: ""
      });
      setIsAgreed(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section>
    
      <img src="/assets/logo/contact-bg.png" alt="Hero Image" className="absolute z-10 object-cover h-[1080px]" />
      
      <div className="absolute z-20 max-w-[1920px] mx-auto p-[252px]">
        <div className="max-w-[570px]">
          
          {/* Title */}
          <h1 className="text-[#F7F7F7]">
            Let's Connect
          </h1>
          <p className="text-[#CECFD2]">
            I partner with early-stage teams to move from concept to evidence. My work spans discovery, UX/UI, and production-ready frontend (React/TypeScript), with an emphasis on measurable outcomes.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fname" className="text-[#344054] font-medium text-sm">
                First Name
              </Label>
              <Input
                id="fname"
                name="fname"
                type="text"
                value={formData.fname}
                onChange={handleInputChange}
                placeholder="First Name"
                className="h-12"
                required
              />
            </div>
            {/* Last Name Field */}
            <div className="space-y-2">
              <Label htmlFor="lname" className="text-[#344054] font-medium text-sm">
                Last Name
              </Label>
              <Input
                id="lname"
                name="lname"
                type="text"
                value={formData.lname}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="h-12"
                required
              />
            </div>
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#344054] font-medium text-sm">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite seu e-mail"
                className="h-12"
                required
              />
            </div>
            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#344054] font-medium text-sm">
                Mensagem
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Digite sua mensagem..."
                className="min-h-[128px] resize-none"
                required
              />
            </div>
            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                type="checkbox"
                id="terms"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                required
              />
              <label htmlFor="terms" className="text-[#344054] text-sm leading-relaxed">
                Li e estou de acordo com Termo de Uso e Política de Privacidade.
              </label>
            </div>
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full px-[18px] py-[12px] rounded-[8px] bg-[rgba(255,255,255,0.10)] border-2 border-[rgba(255,255,255,0.12)] text-[#F7F7F7] font-semibold hover:bg-[rgba(255,255,255,0.25)] transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
