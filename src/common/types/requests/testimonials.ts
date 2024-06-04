export interface Testimonial {
    name: {
      ar: string;
      en: string;
    };
    job: {
      ar: string;
      en: string;
    };
    description: {
      ar: string;
      en: string;
    };
    img: string;
  }

export type TestimonialsResponse=Testimonial[]
