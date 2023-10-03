import { useEffect, useState } from "react";
//HOOK PARA PODER RECUPERAR LOS ITEMS DE LA API
export const useItems = () => {
    const [items, setItems] = useState([]);
    
    const myItems = [
        {title: "Remera", id: 1},
        {title: "Pantalon", id: 2},
        {title: "Camisa", id: 3},
        {title: "Zapatos", id: 4},
        {title: "Gorro de lana", id: 5},
        {title: "Cinturon", id: 6},
        {title: "Bufanda", id: 7},
        {title: "Medias", id: 8},
    ]
    
    const fetchItems = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(json => setItems(json))
        .catch(error => console.log(error))
        .finally(() => console.log("Finalizado"))
    };

    const fetchMyItems = () => {
        setItems(myItems)
    }
    useEffect(() => {
        /* fetchItems(); */
        setTimeout(() => {fetchMyItems()}, 2000)
    }, []); 
    
    return (items);
};