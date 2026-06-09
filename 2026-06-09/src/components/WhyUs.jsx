const razones = [
{  icono: '⚡',
    titulo: 'Respuesta en menos de 24h',
    descripcion : 'Atendemos tus solicitudes de cotización o dudas técnicas con la máxima agilidad en menos de un día.'
  },

  
  {
    icono: '💎',
    titulo: 'Materiales de primera calidad',
    descripcion: 'Trabajamos únicamente con marcas homologadas y componentes de alta durabilidad para asegurar la vida útil de tu instalación.'
  },



  {
    icono: '💵',
    titulo: 'Presupuesto sin costo',
    descripcion: 'Evaluamos tu proyecto o necesidad eléctrica y te entregamos una cotización detallada sin ningún tipo de compromiso.'
  },



  {
    icono: '🚨',
    
    titulo: 'Atención 24/7 para emergencias',
    descripcion: 'Estamos disponibles a cualquier hora del día o de la noche para resolver fallos eléctricos críticos y proteger tu espacio.'
  },


]

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            {/* 🛠️ TODO: Agrega <img> con className="img-fluid rounded shadow" */}
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            {/* 🛠️ TODO: Escribe 2-3 párrafos sobre la empresa */}
            <p className="text-muted mb-4">
              {/* Tu texto aquí */}
            </p>

            {/* 🛠️ PASO 2: Renderiza las razones con .map() */}
            <ul className="list-unstyled">
              {/* TODO: razones.map(...) */}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
  