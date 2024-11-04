import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateInput } from '@/lib/security';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const PATTERNS = {
  name: /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  subject: /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s]{2,100}$/,
  message: /^[\s\S]{10,1000}$/,
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Validate all inputs
    const isValidName = validateInput(data.name, PATTERNS.name);
    const isValidEmail = validateInput(data.email, PATTERNS.email);
    const isValidSubject = validateInput(data.subject, PATTERNS.subject);
    const isValidMessage = validateInput(data.message, PATTERNS.message);

    if (!isValidName || !isValidEmail || !isValidSubject || !isValidMessage) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doğru formatta doldurun.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mesajınız iletildi",
        description: "En kısa sürede size dönüş yapacağız.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Hata",
        description: "Mesajınız iletilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-8">İletişim</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ad Soyad</FormLabel>
                    <FormControl>
                      <Input placeholder="Adınız ve soyadınız" {...field} />
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
                    <FormLabel>E-posta</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="E-posta adresiniz" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konu</FormLabel>
                    <FormControl>
                      <Input placeholder="Mesajınızın konusu" {...field} />
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
                    <FormLabel>Mesaj</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Mesajınız" 
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}