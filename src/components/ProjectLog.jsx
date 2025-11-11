import { Link } from "react-router-dom";
import "../styles/style.css";

function ProjectLog() {
  return (
    <section className="log-page">
      <div className="log-overlay"></div>
      <div className="log-container">
        <h1>Bitácora del proyecto</h1>
        <p className="log-intro">
          Acá registramos nuestro recorrido en el desarrollo del proyecto.
        </p>

        <article className="log-entry">
          <h2>TP1 – Planeación y primeros pasos</h2>
          <h3>Decisiones de diseño</h3>
          <p>
            Nos reunimos en equipo via Google Meet para definir la temática.
            Despues de un debate y sobre si utilizabamos algún diseño de serie o
            película, nos pusimos de acuerdo en que realizábamos una web
            inspirada en Game of Thrones. Siguiendo los requisitos, empezamos a
            buscar tipografías en Google Fonts y luego colores que vayan acorde
            al diseño y sean agradables a la vista.
          </p>

          <h3>Dificultades encontradas</h3>
          <p>
            En principio no nos encontramos con tantas, nos pusimos de acuerdo
            de manera unánime. Intercambiamos ideas sobre que podría ser lo
            mejor para el diseño y tambien pensando en como el proyecto podía
            seguir a futuro.
          </p>

          <h3>Cambios</h3>
          <p>
            En principio, como escribiamos código todos, encontramos mezclas de
            idioma especialmente en nombres de archivos y en clases o IDs. Nos
            encargamos de corregirlos y que todos sigan la misma línea, que
            dedicimos que sea en el idioma inglés. Una vez realizados esos
            cambios, revisamos que todo esté correcto y funcional para ser
            subido.
          </p>
        </article>

        <article className="log-entry">
          <h2>TP2 – Migración a React y SPA.</h2>
          <h3>Inicio y estructura</h3>
          <p>
            Lo primero que hicimos fue reunirnos a leer la consigna en grupo y a
            dividir tareas. Definimos como sería la estructura del proyecto,
            separando el codigo en carpetas y siguiendo las prácticas
            recomendadas. Lo hicimos de esa manera no solo para cumplir con la
            consigna, sino también para mantener nuestro proyecto ordenado y
            escalable.
          </p>

          <h3>Componentes y navegación</h3>
          <p>
            El núcleo del TP fue migrar el HTML estático a componentes de React.
            Se crearon componentes para cada sección para manejar la navegación,
            configurando las rutas y creando el componente Sidebar como menú
            principal para lograr la experiencia SPA (Single Page Application).
            Esta fue una decisión en conjunto, y acto seguido decidimos que era
            el momento de pasar a lo dinámico.
          </p>

          <h3>Dinámico (JSON y API)</h3>
          <p>
            Nos encontramos en buscar una API pública para consumir y que nos de
            la posibilidad de cumplir con la consigna. Una vez encontrada,
            empezamos con el desarrollo. Primero creamos la seccion de Casas que
            lee y renderiza un archivo local con 20 objetos. Después pasamos a
            la sección de Personajes en donde consumimos la API buscada
            previamente (ThronesAPI) usando fetch y una funcion asincrona
            esperando primero la respuesta del servidor y luego la conversión
            del JSON. Fue clave implementar un manejo de errores y un indicador
            de carga para manejar la asincronia correctamente.
          </p>

          <h3>Desafío técnico: responsividad</h3>
          <p>
            Nuestro mayor desafío fue la responsividad. El Sidebar fijo de
            escritorio no funcionaba en móviles y queríamos encontrar la mejor
            solución. Implementamos un menú hamburguesa utilizando lógica en
            React (useState). También nos encargamos de tocar el CSS, usando
            transiciones para mostrar y ocultar el menú de forma prolija.
          </p>
        </article>

        <article className="log-entry">
          <h2>TP3 – Evolución del Proyecto SPA</h2>
          <h3>Organización</h3>
          <p>
            Como ya teníamos la base sólida de los TPs anteriores, nos juntamos
            para revisar detalles y dejar el proyecto lo más completo y prolijo
            posible. Volvimos a realizar la reunión por Meet para repasar la
            consigna y ver qué realizabamos en conjunto y qué consigna podiamos
            dividirla.
          </p>

          <h3>Desafíos y soluciones</h3>
          <p>
            Nos encontramos con algunos detalles en las animaciones y los
            efectos CSS que no quedaban del todo como queríamos. Por momentos
            algunas transiciones no funcionaban bien en todas las secciones (por
            ejemplo, las cards de casas y personajes). Fuimos revisando el
            código y aplicando correcciones hasta que todo quedara parejo y
            visualmente más limpio.
          </p>
          <h3>Trabajo en equipo y reflexión final</h3>
          <p>
            Nos dimos cuenta que algunas cosas las trabajabamos mejor en
            conjunto, y otras en las que cada uno quizás se sentía mejor
            trabajando individualmente. Algunas consignas las realizamos entre
            todos mientras que algunas otras dividimos trabajo y luego nos
            juntabamos para dar y aceptar sugerencias entre nosotros. Creemos
            que fue un proyecto que nos sirvió no solo para mejorar nuestro
            desarrollo sino también para mejorar nuestras soft skills y aprender
            cosas nuevas del trabajo en equipo.
          </p>
        </article>

        <Link to="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default ProjectLog;
