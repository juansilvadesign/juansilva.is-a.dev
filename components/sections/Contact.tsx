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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fname":
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2) return "First name must be at least 2 characters";
        return "";
      case "lname":
        if (!value.trim()) return "Last name is required";
        if (value.trim().length < 2) return "Last name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Please enter a valid email";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFieldErrors(errors);
    setTouched({
      fname: true,
      lname: true,
      email: true,
      message: true
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    if (!isAgreed) {
      toast.error('Você deve concordar com os termos de uso e política de privacidade.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        fname: "",
        lname: "",
        email: "",
        message: ""
      });
      setIsAgreed(false);
      setFieldErrors({});
      setTouched({});

      // Reset success state after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
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

      <div className="absolute z-20 max-w-[1920px] mx-auto pt-[200px] pl-[252px]">
        <div className="flex flex-col gap-12 max-w-[570px]">

          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-[#F7F7F7]">
              Let's Connect
            </h1>
            <p className="text-[#CECFD2]">
              I partner with early-stage teams to move from concept to evidence. My work spans discovery, UX/UI, and production-ready frontend (React/TypeScript), with an emphasis on measurable outcomes.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name Field */}
            <div className="relative">
              <Input
                id="fname"
                name="fname"
                type="text"
                value={formData.fname}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder=" "
                className={`peer h-14 pt-4 ${
                  touched.fname && fieldErrors.fname
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
                required
              />
              <Label
                htmlFor="fname"
                className="absolute left-2 top-1 text-[#85888E] text-xs font-lora transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-[#85888E] peer-placeholder-shown:top-3.5 
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#85888E]"
              >
                First Name
              </Label>
              {touched.fname && fieldErrors.fname && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.fname}</p>
              )}
            </div>
            {/* Last Name Field */}
            <div className="relative">
              <Input
                id="lname"
                name="lname"
                type="text"
                value={formData.lname}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder=" "
                className={`peer h-14 pt-4 ${
                  touched.lname && fieldErrors.lname
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
                required
              />
              <Label
                htmlFor="lname"
                className="absolute left-2 top-1 text-[#85888E] text-xs font-lora transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-[#85888E] peer-placeholder-shown:top-3.5 
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#85888E]"
              >
                Last Name
              </Label>
              {touched.lname && fieldErrors.lname && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.lname}</p>
              )}
            </div>
            {/* Email Field */}
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder=" "
                className={`peer h-14 pt-4 ${
                  touched.email && fieldErrors.email
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
                required
              />
              <Label
                htmlFor="email"
                className="absolute left-2 top-1 text-[#85888E] text-xs font-lora transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-[#85888E] peer-placeholder-shown:top-3.5 
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#85888E]"
              >
                Email
              </Label>
              {touched.email && fieldErrors.email && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
              )}
            </div>
            {/* Message Field */}
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder=" "
                className={`peer resize-none pt-6 transition-all duration-200 ease-in-out placeholder-shown:leading-none focus-visible:outline-none focus-visible:ring-transparent focus:h-[128px] [&:not(:placeholder-shown)]:h-[128px] ${
                  touched.message && fieldErrors.message
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
                required
              />
              <Label
                htmlFor="message"
                className="absolute left-2 top-1 text-[#85888E] text-xs font-lora transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-[#85888E] peer-placeholder-shown:top-3.5 
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#85888E]"
              >
                Message
              </Label>
              {touched.message && fieldErrors.message && (
                <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
              )}
            </div>
            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <Checkbox
                type="checkbox"
                id="terms"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                required
              />
              <label htmlFor="terms" className="text-[#85888E] text-sm font-lora leading-4">
                Li e estou de acordo com Termo de Uso e Política de Privacidade.
              </label>
            </div>
          </form>
          
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-[18px] py-[12px] rounded-[8px] font-semibold transition-all duration-300 ${
              submitSuccess
                ? "bg-green-500/20 border-2 border-green-500 text-green-400"
                : isSubmitting
                ? "bg-[rgba(255,255,255,0.10)] border-2 border-[rgba(255,255,255,0.12)] text-[#F7F7F7] opacity-70"
                : "bg-[rgba(255,255,255,0.10)] border-2 border-[rgba(255,255,255,0.12)] text-[#F7F7F7] hover:bg-[rgba(255,255,255,0.25)]"
            }`}
            disabled={isSubmitting}
          >
            {submitSuccess
              ? "✓ Message Sent!"
              : isSubmitting
              ? "Submitting..."
              : "Submit"}
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
