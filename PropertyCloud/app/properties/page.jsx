import PropertyCard from '@/components/PropertyCard';
// import properties from '@/properties.json'

async function fetchedProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    console.log(res);
    if (!res.ok) {
      const errorDetails = await res.text();
      throw new Error(
        `Failed to fetch Properties! Server responded with: ${errorDetails}`
      );
    }

    // const properties = await res.json();
    // console.log(properties);
    // return properties;

    return res.json();
  } catch (error) {
    console.error('Error fetching properties:', error);
    return { error: error.message };
  }
}

const PropertiesPage = async () => {
  const properties = await fetchedProperties();
  console.log(properties);

  if (!properties || properties.length === 0) {
    return (
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <p className="text-center text-rose-500 text-lg font-medium border-b-2 border-b-rose-100 p-2 w-1/3 mx-auto">
            No properties found ! 
          </p>
        </div>
      </section>
    );
  }

  if (properties) {
    return (
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
    );
  }
};
export default PropertiesPage;
