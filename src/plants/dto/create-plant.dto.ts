export class CreatePlantDto {
  name: string;
  scientificName: string;
  room: string;
  images: string[];
  location: string;
  needs: {
    light: string;
    water: string;
    humidity: string;
  };
  health: number;
  category: string;
  difficulty: string;
  petFriendly: boolean;
  lastWatered?: Date;
  nextWatering?: Date;
  tags?: string[];
  userId?: string;
}
