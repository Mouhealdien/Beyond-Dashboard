export type  User={
    password: string
    email: string

}
export type  User2={
  Users:User
}

export type UserResponse = {
  status: string;
  data: User2;
};