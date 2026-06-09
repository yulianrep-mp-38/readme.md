<ul className="list-unstyled">
  <li className="mb-3">
    <span className="me-2">📍</span>
    Calle 10 # 43A-15, El Poblado, Medellín
  </li>
  {/* Agrega: teléfono, email, horario */}
</ul>

import React, { useState } from 'react';

export default function FormularioServicios() {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    servicio: '',
    mensaje: ''
  });

  // Array de opciones que elegiste usar
  const serviciosPrincipales = [
    { value: 'residencial', label: 'Instalación Residencial' },
    { value: 'comercial', label: 'Instalación Comercial' },
    { value: 'mantenimiento', label: 'Mantenimiento Preventivo/Correctivo' },
    { value: 'emergencia', label: 'Atención de Emergencias 24/7' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="container mt-4">
      <form>
        {/* Campo Select Dinámico */}
        <div className="mb-3">
          <label htmlFor="servicio" className="form-label">Tipo de Servicio</label>
          <select 
            id="servicio" 
            className="form-select"
            value={formData.servicio}
            onChange={handleChange}
          >
            <option value="">Selecciona un servicio...</option>
            {serviciosPrincipales.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Campo Textarea de Mensaje */}
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Detalles de la solicitud</label>
          <textarea
            id="mensaje"
            className="form-control"
            rows="4"
            placeholder="Describe brevemente tu necesidad..."
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}