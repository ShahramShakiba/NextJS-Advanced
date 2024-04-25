import Link from 'next/link';

const HomePage = () => {
  console.log('hello');
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
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
