// // import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';

import Country from "./components/Country/Country";
import Parson from "./components/Person/Parson";

function App() {
  return (
    <div className=''>
      <Country></Country>
    </div>
  );
}

// =======RestCountries API=========

// import { useEffect, useState } from 'react';
// import './App.css';
// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello React</h1>
//       <LoadCountries></LoadCountries>
//       <h4>Details</h4>
//     </div>
//   );
// }


// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   // useEffect( () =>{},[])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => setCountries(data));
//   }, [])
//   return (
//     <div>
//       {
//         // countries.map(country => console.log(country))
//         // countries.map(country => <AllCountries name={country.name.common} area={country.area} flags={country.flags.png}></AllCountries>)
//         countries.map(country => <AllCountries country={country}></AllCountries>)
//       }
//     </div>
//   )
// }


// function AllCountries(props) {
//   const { flags, area, name } = props.country;
//   const { common } = name;
//   const {png} = flags;
//   console.log(flags)

//   // console.log(area)
//   // console.log(name)
//   return (
//     <div className='country'>
//       <h3>Countries : {common}</h3>
//       <h3>Area : {area}</h3>
//       <img src="{png}" alt="" />
//     </div>
//   )
// }





// ============== useEffect and useState =====================

// function App() {
//   return (
//     <div className='App'>
//       <ExternalUser></ExternalUser>
//       <h4>Details</h4>
//     </div>
//   );
// }

// function ExternalUser() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data));
//   },[])
//   return (
//     <div>
//       {
//         users.map(user => <UserList id={user.id} name={user.name} email={user.email}></UserList>) 
//       }
//     </div>
//   )
// }



// function UserList(props) {
//   return (
//     <div className='manUser'>
//         <div className='user'>
//           <h3>User Id : {props.id}</h3>
//           <h3>User Name : {props.name}</h3>
//           <h3>User Name : {props.email}</h3>
//         </div>
//     </div>
//   )
// }


// ================ useState ===================
// return (
//   <div className='App'>
//     <Count></Count>
//     <h4>Details</h4>
//   </div>
// );
// }


// function Count() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <div className='count'>
//       <h4>Count : {count}</h4>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Increment</button>
//     </div>
//   );
// }

// ==================== props ==========================
    // const products = ["midul", "Rasel", "Emran", "manik", "Ajharul", "Mahodi", "Ohab", "Tohidul", "Mafuz"];

  // const products = [
  //   {name:'Laptop', price:99.99},
  //   {name:'Mobil', price:55},
  //   {name:'Watch', price:88},
  //   {name:'Tv', price:99.99},
  //

  // এখানে ম্যাপ এর ব্যবহার করা হয়ে ওটা এখানে নাই 
  //{ product.map(produc => <ParsonName name={produc.name}></ParsonName>)}

// return (
//   <div className='App'>
//     <ParsonName {}></ParsonName>
//     <h4>Details</h4>
//   </div>
// );
// }



// function ParsonName(props) {
//   console.log(props)
//   return (
//     <div className='parsonstyle'>
//       <h2>Name : {props.name}</h2>
//       <h2>Price : {props.price}</h2>
//     </div>
//   )
// }




export default App;
