import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //Array de Citas
  const [citas, saveCitas] = useState([]);

  const createCita = cita => {
    saveCitas([...citas, cita]);
  };

  //useEffect, cuando citas se actualice, este metodo se ejecutara
  //es similar a componentDidMount + componentDidUpdate en una sola funcion
  useEffect(() => {
    console.log('Documento listo o algo paso con las citas');
  }, [citas]);

  const deleteCita = id => {
    //creo un nuevo arreglo pero excluyendo al actual con el filter y reemplazo el state
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    saveCitas(nuevasCitas);
  };

  const titleCitas =
    citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {/* Paso la funcion createCita del padre al hijo mediante props */}
            <Formulario createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{titleCitas}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
