import Items from "./Items";

const Listado = ({setLista}) => {
    return (
        <div>
            <h1>Listado</h1>
            <Items setLista={setLista} nombre={"Remera"} />
            <Items setLista={setLista} nombre={"Pantalon"} />
            <Items setLista={setLista} nombre={"Zapatillas"} />
        </div>
    );
}

export default Listado;