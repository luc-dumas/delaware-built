import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast.success("Message sent! We'll be in touch.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-16" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="relative group">
          <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-green-accent transition-colors">FULL NAME</label>
          <input
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-green-accent transition-colors py-2 px-0 font-light placeholder:text-outline-variant/50"
          />
        </div>
        <div className="relative group">
          <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-green-accent transition-colors">EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-green-accent transition-colors py-2 px-0 font-light placeholder:text-outline-variant/50"
          />
        </div>
      </div>

      <div className="relative group">
        <label className="block text-[10px] font-semibold uppercase tracking-widest mb-2 group-focus-within:text-green-accent transition-colors">MESSAGE</label>
        <textarea
          rows={4}
          placeholder="Describe the scale and intent of your project..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-green-accent transition-colors py-2 px-0 font-light resize-none placeholder:text-outline-variant/50"
        />
      </div>

      <div className="flex justify-center pt-8">
        <button
          type="submit"
          disabled={loading}
          className="bg-green-accent text-green-accent-foreground px-16 py-5 text-xs font-bold uppercase tracking-widest-xl transition-all duration-300 hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </div>
    </form>
  );
}
