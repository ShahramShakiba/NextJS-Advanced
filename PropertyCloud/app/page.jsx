import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';

const HomePage = async () => {
  // console.log(process.env.MONGODB_URI);

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};
export default HomePage;

/* server Component - Client Component

? server component:
- fetch data
- access backend resources(directly)
- keep sensitive info on the server (access token, API, Keys. etc)
- keep large dependencies on the server / reduce client side javascript

? Client Component:
- add interactivity and event listeners(onClick(), onChange(), etc)
- use state and lifecycle effects(useState(), useReducer(), useEffect(), etc)
- use browser-only API
- use custom hooks that depend on state, effects or browser-only API
- use React Class Components
*/
