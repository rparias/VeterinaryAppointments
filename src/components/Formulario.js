import React from 'react';

function Formulario() {
  return (
    <div>
      <h2>Crear cita</h2>
      <form>
        <label htmlFor="mascota">Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          id="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />
        <label htmlFor="propietario">Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          id="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          name="sintomas"
          id="sintomas"
          className="u-full-width"
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;
