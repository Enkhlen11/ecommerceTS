type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role?: string;
};
export const users: User[] = [
  {
    _id: "1",
    name: "john doe",
    email: "test",
    password: "password123",
    role: "custom",
  },
];
