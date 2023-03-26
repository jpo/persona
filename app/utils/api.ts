// app/utils/api.ts

import { PrismaClient, Adventure } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAdventure(title: string, description: string): Promise<Adventure> {
  const newAdventure = await prisma.adventure.create({
    data: {
      title,
      description,
    },
  });

  return newAdventure;
}
