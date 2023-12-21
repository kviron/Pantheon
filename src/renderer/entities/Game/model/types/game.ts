import { UUID, Nullable } from '@/shared/types/entities';

export interface Game {
  id: UUID;
  name: string;
  slug: string;
  site: Nullable<string>;
  cover: Nullable<string>;
  genre: string;
  publisher: string;
  rating: number;
  mods: number;
  pantheon_url: string;
  paths: {
    gameDirectory: Nullable<string>;
  };
}

export interface GameSchema {
  gameData?: Game;

  _inited: boolean;
}
