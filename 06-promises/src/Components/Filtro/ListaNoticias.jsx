const ListaNoticias = ({posts}) => {
    return(
    <div className="App">
      {
        posts ?  
        posts.map((post) => (
            <li key={post.id}>
              <h2>{post.titulo}</h2>
              <p>{post.contenido}</p>
            </li>
          )
          )
          : <h2>Cargando...</h2>
        }
    </div>
    )
}

export default ListaNoticias;