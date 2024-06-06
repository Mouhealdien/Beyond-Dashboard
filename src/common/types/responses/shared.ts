export type  Shared={
      phone: string
      email: string
      address: {
        en:string,
        ar:string
      }
      linkedinLink: string
      facebookLink: string
      instagramLink: string
}
export type  Shared2={
    shared:Shared
}

export type SharedResponse = {
    status: string;
    data: Shared2;
  };