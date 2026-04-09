import { Achievement, UserAchievement } from "@/types/achievements";

export async function getAllAchievements(): Promise<Achievement[]> {
  return [
    // Start
    { id: 1, name: "O começo", description: "Termine seu primeiro treino.", comment: "Todo mundo começa de algum lugar.", tag: "Basic", target: 1},
    { id: 2, name: "Ta doendo", description: "Termine 3 treinos.", comment: "É normal ficar doendo assim mesmo?", tag: "Basic", target: 3 },

    // Volume
    { id: 3, name: "Não tá doendo", description: "Termine 5 treinos.", comment: "Agora nem doi mais.", tag: "Volume", target: 5 },
    { id: 4, name: "Efeito Dunning-Kruger", description: "Termine 10 treinos.", comment: "Sim, sim, você tá.. quase do tamanho dele...", tag: "Volume", target: 10 },
    { id: 5, name: "100x menor que ele", description: "Termine 15 treinos.", comment: "Você percebeu que é 100x menor que ele.", tag: "Volume", target: 15 },

    // Streak
    { id: 8, name: "Consistência", description: "Consiga uma streak de 2 dias.", comment: "Começou a engrenar. Não deixa apagar, hein?", tag: "Streak", target: 2 },
    { id: 9, name: "Consistência²", description: "Consiga uma streak de 4 dias.", comment: "Tá ficando consistente.", tag: "Streak", target: 4 },
    { id: 10, name: "Pegando Fogo", description: "Consiga uma streak de 7 dias.", comment: "Uma semana inteira sem falhar. Tá queimando tudo!", tag: "Streak", target: 7 },
    { id: 11, name: "Consistência³", description: "Consiga uma streak de 8 dias.", comment: "Agora já dá pra chamar de disciplina.", tag: "Streak", target: 8 },
    { id: 12, name: "Incontrolável", description: "Consiga uma streak de 15 dias.", comment: "Já virou rotina. Nada te para, nem desculpa.", tag: "Streak", target: 15 },
    { id: 13, name: "Consistência⁴", description: "Consiga uma streak de 16 dias.", comment: "Virou rotina pesada.", tag: "Streak", target: 16 },
    { id: 14, name: "Sem Freio", description: "Consiga uma streak de 30 dias.", comment: "Um mês direto é pesado pra caralho. Freio? Nunca ouvi falar.", tag: "Streak", target: 30 },
    { id: 15, name: "Consistência⁵", description: "Consiga uma streak de 32 dias.", comment: "Você já não negocia mais com a preguiça.", tag: "Streak", target: 32 },
    { id: 16, name: "Consistência⁶", description: "Consiga uma streak de 64 dias.", comment: "Disciplina absurda.", tag: "Streak", target: 64 },
    { id: 17, name: "Máquina que Não Para", description: "Consiga uma streak de 70 dias.", comment: "Disciplina de aço. Você virou uma máquina de treino.", tag: "Streak", target: 70 },
    { id: 18, name: "Viciado no Suco", description: "Consiga uma streak de 100 dias.", comment: "Já é estilo de vida.", tag: "Streak", target: 100 },
    { id: 19, name: "Consistência⁷", description: "Consiga uma streak de 128 dias.", comment: "Outro nível mental.", tag: "Streak", target: 128 },
    { id: 20, name: "Consistência⁸", description: "Consiga uma streak de 256 dias.", comment: "Quase um semideus do treino.", tag: "Streak", target: 256 },
    { id: 21, name: "Lenda Viva", description: "Consiga uma streak de 365 dias.", comment: '"Um dia quero ser igual ele papai"', tag: "Streak", target: 365 },

    // Creation
    { id: 22, name: "Criador de Monstros", description: "Crie seu primeiro treino.", comment: "Personalizando sua jornada. O shape agora é obra sua.", tag: "Creation", target: 1 },
    { id: 23, name: "Arquiteto do Pump", description: "Crie 5 treinos.", comment: "Você domina sua rotina. Gym virou sua obra-prima, Michelangelo.", tag: "Creation", target: 5 },

    // Intensity
    { id: 24, name: "Sem Tempo Ruim", description: "Treine por pelo menos 1 hora.", comment: "Só o básico? Tá bom, mas já ganhou moral no grupo.", tag: "Intensity", target: 1 },
    { id: 25, name: "Lock In", description: "Treine por pelo menos 2 horas.", comment: "O mundo lá fora que se foda.", tag: "Intensity", target: 2 },
    { id: 26, name: "Maratonista do Ferro", description: "Treine por pelo menos 3 horas.", comment: "Academia virou sua segunda residência.", tag: "Intensity", target: 3 },
    { id: 27, name: "Imbroxável", description: "Treine por pelo menos 4 horas.", comment: "Melhor do que sexo. (E dura mais também)", tag: "Intensity", target: 4 },

    // Secrets
    { id: 28, name: "Batman", description: "Treine depois das 22h.", comment: "Dormir não dá xp. Herói da noite, vilão do sono.", tag: "Secrets", target: 1 },
    { id: 29, name: "Coach", description: "Treine antes das 6h.", comment: "Banho gelado e disciplina.", tag: "Secrets", target: 1 },
    { id: 30, name: "Semana Perfeita", description: "Complete todos os treinos de uma semana.", comment: "Sem falhar. Execução limpa.", tag: "Secrets", target: 1 },
    { id: 31, name: "Duas Semanas Blindado", description: "Complete 2 semanas perfeitas.", comment: "Consistência real começando.", tag: "Secrets", target: 2 },
    { id: 32, name: "Mês Fechado", description: "Complete 4 semanas perfeitas.", comment: "Um mês sem falhar. Respeito.", tag: "Secrets", target: 4 },
    { id: 33, name: "Villain Arc", description: "Treine 7 dias seguidos.", comment: "Você não precisa mais dela, foca em você.", tag: "Secrets", target: 7 },
  ];
}
/* 
export async function getAllAchievements(): Promise<Achievement[]> {
  return get<Achievement[]>("/achievements");
}
*/

export async function getAllUserAchievements(userId: number, token: string | null): Promise<UserAchievement[]> {
  return [
    { achievementId: 1, quantity: 1, unlocked: true },
    { achievementId: 2, quantity: 3, unlocked: true },
    { achievementId: 5, quantity 2  },
    { achievementId: 10,   },
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