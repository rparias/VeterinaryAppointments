import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ createCita }) {
  //cita es el state actual, actualizarCita es para actualizar el state actual
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, actualizarError] = useState(false);

  const handleChange = event => {
    actualizarCita({
      ...cita,
      [event.target.name]: event.target.value
    });
  };

  //extraigo los fields del state
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = event => {
    event.preventDefault();

    //TODO: validate form
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    //TODO: create and assign ID
    cita.id = uuidv4();

    //TODO: create cita from parent
    createCita(cita);

    //TODO: restart form
  };

  return (
    <div>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="mascota">Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          id="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label htmlFor="propietario">Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          id="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
          onChange={handleChange}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          name="sintomas"
          id="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;
