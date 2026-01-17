import ItemCard from '@/components/ItemCard';

async function getItems() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch items');
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Our Collection</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Explore our handpicked selection of premium goods, designed to elevate your everyday life.</p>
        </div>
        
        {items.length === 0 ? (
           <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No items found. Is the server running?</p>
              <p className="text-sm text-gray-400 mt-2">Make sure to run 'npm run start' in the server folder.</p>
           </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item: any) => (
                <ItemCard key={item.id} item={item} />
            ))}
            </div>
        )}
      </div>
    </div>
  );
}
