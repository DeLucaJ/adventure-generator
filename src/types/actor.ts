import { AdventureElement } from '@/types';

export default abstract class Actor extends AdventureElement {
  ideals: string[] = [];
  bonds: string[] = [];
  flaws: string[] = [];
  secrets: string[] = [];
  goals: string[] = [];
  motivations: string[] = [];
}