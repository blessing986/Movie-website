/* eslint-disable react-hooks/rules-of-hooks */
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Modal from "./component/modal";
import bgImg from "./assets/bg-image.jpg"

function home() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div>

      <section className="bg-slate-600 h-96">  

        <div className="flex justify-between pt-6 mx-4 items-center">

          <h1 className="text-2xl font-bold">logo</h1>

          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </div>

        </div>

        <div>

          <ul className="flex items-center ml-8 w-3/4 mt-4">

            <li className="mr-6 border rounded-full px-4 py-1 text-white text-sm">Series</li>
            <li className="mr-6 border rounded-full px-4 py-1 text-white text-sm">Films</li>
            <div className="flex items-center justify-center border rounded-full px-4 py-1 text-white text-sm">
              <li>Categories</li>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

                {isOpen && <Modal setIsOpen={setIsOpen} />}

            </div>
          </ul>
        </div>

        <div className="mt-6 mx-6 rounded overflow-hidden">

        <img src={bgImg} alt="nothing" />

          
        </div>

      </section>

      <div className="ml-2 mt-4">

        <h1 className="font-bold text-lg">Trending Now</h1>
      </div>

    </div>

  )

}

export default home;

