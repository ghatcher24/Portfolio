
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, Linkedin } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// This is a server action placeholder. In a real app, you'd process the form data.
async function submitContactForm(data: ContactFormValues) {
  console.log("Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // throw new Error("Simulated server error!"); // Uncomment to test error
  return { success: true, message: "Message sent successfully!" };
}

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <SectionWrapper id="contact" title="Get In Touch" icon={Send}>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. 
            Feel free to reach out to me using the form or through my other contact channels.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Mail size={20} />
              <a href="mailto:ghatcherengineering@gmail.com">ghatcherengineering@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Phone size={20} />
              <a href="tel:+19788466751">+1 (978) 846-6751</a>
            </div>
            <div className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
              <Link href="https://linkedin.com/in/gordonhatcher" target="_blank" rel="noopener noreferrer">linkedin.com/in/gordonhatcher</Link>
            </div>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-lg">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="bg-background focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      rows={5}
                      {...field}
                      className="bg-background focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </SectionWrapper>
  );
}
