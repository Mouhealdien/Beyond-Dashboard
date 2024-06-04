
// Define interfaces for the nested structures
export interface SubTitle {
    ar: string[];
    en: string[];
  }
  
  export interface Statistic {
    title: {
      ar: string;
      en: string;

    };
    number: string;
  }
  
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
  
  export interface Certificate {
    _id: string;
    title: {
      ar: string;
      en: string;
      _id: string;
    };
    img: string;
    year: number;
    issuedBy: string;
  }
  
  // Define the Home interface to represent the home object structure
  export interface Home {
    subTitle: SubTitle
    title: {
      ar: string;
      en: string;
    };
    statisticTitle: {
      ar: string;
      en: string;
    };
    statistic: Statistic[];
    quote: {
      ar: string;
      en: string;
    };
    testimonialTitle: {
      ar: string;
      en: string;
    };
    testimonialSubTitle: {
      ar: string;
      en: string;
    };
    testimonials: Testimonial[];
    certificatesTitle: {
      ar: string;
      en: string;
    };
    certificates: Certificate[];
  }
  
  // Adjust the ResponseData interface to include the home object
  export interface ResponseData {
    home: Home;
  }
  
  // Update the ApiResponse type if needed based on the overall structure
  export type HomeResponse = {
    status: string;
    data: ResponseData;
  };
  