import logo from './logo.svg';
import './App.css';
let name = "Prince";

function App() {
  return (
   <>
   <nav>
    <li>Home</li>
    <li>Info</li>
    <li>Contact</li>
   </nav>
   <div className="container">
    <h1>Hello {name}</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptate porro iure corporis vitae velit autem accusantium blanditiis libero vel quasi voluptatum officia, iste illum dolores magni sint quas dolorem impedit temporibus obcaecati fugiat.
    </p>
   </div>
   </>

  );
}

export default App;
