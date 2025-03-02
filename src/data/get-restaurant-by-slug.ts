import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({
    where: { slug: slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });
  return restaurant;
};
