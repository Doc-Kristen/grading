type Quest = {
    id: number,
    title: string,
    description: string,
    previewImg: string,
    coverImg: string,
    type: string,
    level: string,
    peopleCount: number[],
    duration: number
}

type Quests = Quest[];

export type { Quest, Quests };
