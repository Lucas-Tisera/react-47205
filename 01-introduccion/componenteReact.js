export const App = () => {
    const MiBoton = ({ tipo, contenido, color }) => {
      return <input type={tipo} value={contenido}></input>;
    };
    const MiParrafo = () => {
      return <p> ESTE ES MI PARRAFO </p>;
    };
    return (
      <>
        <section>
          <h1>Mi Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            autem, officiis excepturi in similique corporis tenetur est,
            blanditiis eaque dolorem pariatur voluptas vero, reprehenderit hic
            obcaecati quia temporibus? Aut, tenetur?
          </p>
          <MiBoton tipo={"button"} contenido="Leer Mas" color="rojo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            autem, officiis excepturi in similique corporis tenetur est,
            blanditiis eaque dolorem pariatur voluptas vero, reprehenderit hic
            obcaecati quia temporibus? Aut, tenetur?
          </p>
          <MiBoton tipo={"text"} contenido="Ir al foro" />
        </section>
        <MiParrafo />
      </>
    );
  };
  