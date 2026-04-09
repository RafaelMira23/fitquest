export interface Achievement {
    id: number;
    name: string;
    description: string;
    comment: string;
    tag: string;
    target: number;
}

export interface UserAchievement {
    achievementId: number;
    quantity: number;
    unlocked: boolean;
}