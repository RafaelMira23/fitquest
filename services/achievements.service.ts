import { Achievement, UserAchievement } from "@/types/achievements";

export async function getAllAchievements(): Promise<Achievement[]> {
  return [
    // Basic
    { id: 1, name: "Primeira Dose de Suco", description: "Termine seu primeiro treino.", comment: "Todo mundo começa de algum lugar." },
    { id: 2, name: "Isso é bom, né?", description: "Termine 10 treinos.", comment: "Bem-vindo ao lado escuro do shape, irmão." },

    // Volume
    { id: 3, name: "Ferro na Veia", description: "Termine 25 treinos.", comment: "Agora tá levando a sério." },
    { id: 4, name: "Bombado de Carteirinha", description: "Termine 50 treinos.", comment: "Shape aparecendo e as camisetas já apertando." },
    { id: 5, name: "Monstro do Suco", description: "Termine 100 treinos.", comment: "Já é outro nível, caralho. O whey virou seu sangue." },
    { id: 6, name: "Deus Grego", description: "Termine 250 treinos.", comment: "Disciplina absurda. Olympia te manda salve de longe." },
    { id: 7, name: "Pro do Suco Vitalício", description: "Termine 500 treinos.", comment: "Vida fitness. Você agora vive de ferro e proteína." },

    // Streak
    { id: 8, name: "Consistência", description: "Consiga uma streak de 2 dias.", comment: "Começou a engrenar. Não deixa apagar, hein?" },
    { id: 9, name: "Consistência²", description: "Consiga uma streak de 4 dias.", comment: "Tá ficando consistente." },
    { id: 10, name: "Pegando Fogo", description: "Consiga uma streak de 7 dias.", comment: "Uma semana inteira sem falhar. Tá queimando tudo!" },
    { id: 11, name: "Incontrolável", description: "Consiga uma streak de 15 dias.", comment: "Já virou rotina. Nada te para, nem desculpa." },
    { id: 12, name: "Sem Freio", description: "Consiga uma streak de 30 dias.", comment: "Um mês direto é pesado pra caralho. Freio? Nunca ouvi falar." },
    { id: 13, name: "Máquina que Não Para", description: "Consiga uma streak de 70 dias.", comment: "Disciplina de aço. Você virou uma máquina de treino." },
    { id: 14, name: "Viciado no Suco", description: "Consiga uma streak de 100 dias.", comment: "Já é estilo de vida." },
    { id: 15, name: "Lenda Viva", description: "Consiga uma streak de 365 dias.", comment: '"Um dia quero ser igual ele papai"' },

    // Creation
    { id: 16, name: "Criador de Monstros", description: "Crie seu primeiro treino.", comment: "Personalizando sua jornada. O shape agora é obra sua." },
    { id: 17, name: "Arquiteto do Pump", description: "Crie 5 treinos.", comment: "Você domina sua rotina. Gym virou sua obra-prima, Michelangelo." },

    // Intensity
    { id: 18, name: "Sem Tempo Ruim", description: "Treine por pelo menos 1 hora.", comment: "Só o básico? Tá bom, mas já ganhou moral no grupo." },
    { id: 19, name: "Lock In", description: "Treine por pelo menos 2 horas.", comment: "O mundo lá fora que se foda." },
    { id: 20, name: "Maratonista do Ferro", description: "Treine por pelo menos 3 horas.", comment: "Academia virou sua segunda residência." },
    { id: 21, name: "Imbroxável", description: "Treine por pelo menos 4 horas.", comment: "Melhor do que sexo. (E dura mais também)" },

    // Secrets
    { id: 22, name: "Batman", description: "Treine depois da 10 da noite.", comment: "Dormir não dá xp. Herói da noite, vilão do sono." },
    { id: 23, name: "Coach", description: "Treine antes das 6 da manhã.", comment: "Banho gelado e disciplina." },
    { id: 24, name: "Villain Arc", description: "Treine 7 dias seguidos.", comment: "Você não precisa mais dela, foca em você." },
  ];
}
/* 
export async function getAllAchievements(): Promise<Achievement[]> {
  return get<Achievement[]>("/achievements");
}
*/

export async function getAllUserAchievements(userId: string): Promise<UserAchievement[]> {
  return [
    { achievementId: 1, unlockedAt: new Date("2024-01-01T10:00:00Z") },
    { achievementId: 3, unlockedAt: new Date("2024-01-05T15:30:00Z") },
    { achievementId: 8, unlockedAt: new Date("2024-01-06T09:00:00Z") },
    { achievementId: 10, unlockedAt: new Date("2024-01-10T20:45:00Z") },
  ];
}
/* 
export async function getAllUserAchievements(userId: string): Promise<UserAchievement[]> {
  try {
    return await get<UserAchievement[]>(`/user/${userId}/achievements`);
  } catch (error) {
    console.error("Error fetching user achievements:", error);
    throw error;
  }
}
*/