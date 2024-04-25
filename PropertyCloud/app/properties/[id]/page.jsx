'use client';

const PropertyPage = () => {
  return <div>PropertyPage</div>;
};
export default PropertyPage;

/* Dynamic Page - catch all page
- dynamic page: [id] 

- catch all page:  [...id]
-> after ID that I put in should still load this page
*/

/* server-component & hooks
?- using any hook like useRouter in server-component will give us an error and to fix the error we can add _'use client';_ at the top of our code
*/

/* useRouter()
- If you want to access the router object inside any function component in your app, you can use the useRouter hook,

-  const router = useRouter();
- <button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
        Go Home 
  </button>
*/

/* useParams()
- lets you read a route's dynamic params filled in by the current URL.

- http://localhost:3000/properties/123 <-  to get this id

- const { id } = useParams();
- <button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
      Go Home {id}
  </button>
*/

/* useSearchParams() - Query Params
- lets you read the current URL's query string.

- http://localhost:3000/properties/123?name=John <- to get this name

- const searchParams = useSearchParams();
  const name = searchParams.get('name');

  <button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
      Go Home {name}
  </button>

*/

/* usePathname()
-  lets you read the current URL's pathname.

- http://localhost:3000/properties/123 <- to get the entire path: properties/123

- const pathName = usePathname();
<button onClick={() => router.push('/')} className="bg-blue-300 p-2 m-4">
    Go Home {pathName}
</button>
*/
