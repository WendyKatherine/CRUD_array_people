//import Person from './components/Person';
import { useState } from 'react'
import './App.css'
import {People} from './components/People';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'juanelo',
      role: 'veci',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJaWcSaNofA5O3249zEMWoB6P7FdUuWCc6w&s'
    },
    {
      id: 2,
      name: 'huevardo',
      role: 'aseista profesional',
      img: 'https://i.pinimg.com/originals/e5/4f/88/e54f8812408dfd38f98761ac76b4b0fd.jpg'
    },
    {
      id: 3,
      name: 'wenvarda',
      role: 'gerenta',
      img: 'https://pics.craiyon.com/2023-07-04/36337125861c40438aa725b713fadc61.webp'
    },
  ]);

  return (
    <div>
      <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App
