import {prisma} from "@/app/lib/prisma";
import CategoryIcon from "@/app/ui/CategoryIcon";

async function getCategories() {
    return await prisma.category.findMany();
}

export default async function OrderSidebar() {
    const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-gray-200 ml-2">
      <nav className="mt-10">
        {categories.map(category => (
            <CategoryIcon
                key={category.id}
                category={category}
            />
        ))}
      </nav>
    </aside>
  )
}
