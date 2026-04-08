export interface Achievement {
    id: number;
    name: string;
    description: string;
    comment: string; 
}

export interface UserAchievement {
    achievementId: number;
    unlockedAt: Date;
}