import { User } from "@/models/User";
import api from "@/utils/api";


export const register = async (form: {
  name: string;
  email: string;
  password: string;
  secret?: string;
}) => {
  return api.post('/register', form);
};

export const login = async (
  email: string,
  password: string
): Promise<{ token: string; role: string; user: User }> => {
  const res = await api.post('/login', { email, password });
  return res.data;
};