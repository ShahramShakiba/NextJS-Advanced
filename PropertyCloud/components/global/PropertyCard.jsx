import Link from 'next/link';
import Image from 'next/image';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  // Divide monthly/weekly/nightly Rates
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      //toLocaleString() = to get "," for each thousands
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt={property.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />

      <div className="p-4">
        {/*----- Property Type & Name -----*/}
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600"> {property.type} </div>
          <h3 className="text-xl font-bold"> {property.name} </h3>
        </div>

        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        {/*----- Property Facilities -----*/}
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-1" /> {property.beds}{' '}
            <span className="md:hidden lg:inline">Beds</span>
          </p>

          <p>
            <FaBath className="inline mr-1" /> {property.baths}{' '}
            <span className="md:hidden lg:inline">Baths</span>
          </p>

          <p>
            <FaRulerCombined className="inline mr-1" />
            {property.square_feet}{' '}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        {/*----- Property Rental Conditions -----*/}
        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="inline mr-1" /> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-1" /> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-1" /> Monthly
            </p>
          )}
        </div>

        {/*------ Border ------*/}
        <div className="border border-gray-100 mb-5"></div>

        {/*------ Property Location ------*/}
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700 mt-1" />
            
            <span className="text-orange-700">
              {property.location.city} {property.location.state}
            </span>
          </div>

          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
