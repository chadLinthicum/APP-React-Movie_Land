// const Person = (props) => {
//   return(
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last Name: {props.lastName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0); //good practice to call second variable the same as first one but add "set" since it's a setter function for the variable

//   useEffect(() => {
//     alert("You've changed the counter to " + counter)
//   }, [counter]); //second parameter to the use effect, dependency array

//   return (
//     <div className="App">
//       <br/>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>

{
  /* <h1>Hello</h1>
      <Person name="Chad" lastName="Linthicum" age={31}/>
      <Person name="Emily" lastName="Cullen" age="31"/>
      <Person name="Erica" lastName="Hamilton" age="34"/>
      <Person name="James" lastName="Cullen" age="32"/> */
}
{
  /* {name ? (
        <>
          <h1>{name}</h1>
        </>
      ): (
        <>
          <h1>Oops</h1>
          <h2>THere is no name</h2>
        </>
      )} */
}
//     </div>
//   );
// };

// export default App;

// const MovieCard = (props) => {
//   return (
//     <div className="movie">
//       <div>
//         <p>{props.movie1.Year}</p>
//       </div>
//       <div>
//         <img
//           src={
//             props.movie1.Poster !== "N/A"
//               ? props.movie1.Poster
//               : "https://via.placeholder.com/400"
//           }
//           alt={props.movie1.Title}
//         />
//       </div>
//       <div>
//         <span>{props.movie1.Type}</span>
//         <h3>{props.movie1.Title}</h3>
//       </div>
//     </div>
//   );
// };
