import { User } from "@/types/user";
import { get } from "./api";

export async function getUser(): Promise<User> {
  return {
    id: 1,
    name: "Rafifas",
    level: -1,
    xp: 80,
    xpToNextLevel: 100,
    streak: -1,
  };
}
/* 
export async function getUser(): Promise<User> {
  return get<User>("/user");
*/

// Its a mock, when the api is ready, SYNC with the backend
