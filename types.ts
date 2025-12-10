export type Category = 'checklist' | 'mindset' | 'warning' | 'strategy';

export interface CardData {
  id: number;
  category: Category;
  title: string;
  text: string;
  iconName: string; // Using string to map to Lucide icons dynamically or via switch
}

export interface AppState {
  isStarted: boolean;
  currentCard: CardData | null;
  history: number[]; // Array of card IDs shown to avoid immediate repeats
}