import PropertyCard from '@/components/global/PropertyCard';
import properties from '@/properties.json'

// async function fetchProperties() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

//     if (!res.ok) {
//       throw new Error('Failed to fetch Properties!');
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

const PropertiesPage = async () => {
  // const properties = await fetchProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p className="text-center text-rose-500 text-lg font-medium border-b-2 border-b-rose-100 p-2 w-1/3 mx-auto">
            No properties found !
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
