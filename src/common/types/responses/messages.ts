interface Message {
    _id: string;
    name: string;
    email: string;
    requestType: string;
    message: string;
    IsSeen: boolean;
    createdAt: string; // Assuming ISO string format
    updatedAt: string; // Assuming ISO string format
    __v: number;
  }
  
  interface ResponseData {
    messages: Message[];
  }
  
  type MessagesResponse = {
    status: string;
    data: ResponseData;
  };