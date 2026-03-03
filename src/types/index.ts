export type Theme = 'light' | 'dark' | 'system';

export interface Persona {
  id: string;
  name: string;
  description: string;
  prompt: string;
  emoji: string;
  color: string;
}

export interface TransformationResult {
  original: string;
  transformed: string;
  personaId: string;
  timestamp: number;
}