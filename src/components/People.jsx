import PropTypes from "prop-types";
import Person from "./Person";
import { useState } from "react";

export const People = ( {people, setPeople} ) => {

  //estado para gestionar el id de la persona que vamos a editar
  const [ editingId, setEditingId ] = useState(null);

  //Estado para almacenar temporalmente los datos de la persona que se esta editando
  const [ editedPerson, setEditedPerson ] = useState({
    name:'',
    role: '',
    img: '',
  });

  //Metodo para gestionar los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Metodo para crear una nueva persona o huevo
  const handleCreate = (e) => {
    e.preventDefault();
    //Agregar una persona al array
    setPeople([...people, { id: people.length + 1, ...editedPerson }]);

    //Reiniciar el estado del formulario
    setEditedPerson({ name: '', role: '', img:'' });
  };

  return (
    <div>
      <h1 className="text-center m-4">People Teams</h1>
      <div className="container">
        <div className="row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
            {
                people.map((people) => {
                    return (
                        <div key={people.id}>
                            <Person
                                id={people.id}
                                name={people.name}
                                role={people.role}
                                img={people.img}
                            />
                        </div>
                    );
                })
            }
        </div>
      </div>
      <div className="container mt-4 row p-2">
        <h2 className="text-center">Crear huevo</h2>
        <form action="">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Nombre:</label>
            <input type="text" name="name" value={editedPerson.name} required className="form-control"/>
          </div>
        </form>
      </div>
    </div>
  )
}

People.propTypes = {
    people: PropTypes.array,
    setPeople: PropTypes.func
}