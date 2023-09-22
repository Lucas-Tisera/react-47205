import Filter from "./Functions/Filter";
import TaskList from "./TaskList";

const ContainerRenderProps = () => {
    //definimos un array de tareas
    const tasks = [
        { id: 1, title: "Hacer ejercicio", completed: true },
        { id: 2, title: "Peinarse", completed: false },
        { id: 3, title: "Estudar para el examen", completed: true },
        { id: 4, title: "Descansar", completed: false },
    ]

    //Renderizamos el componente Filter
    return (
        <div className="App">
            <Filter>
                {/* El componente Filter recibe como parámetro una función que retorna el componente TaskList */}
                {(filterState, handleFilterChange) => (
                    <div>
                        <label htmlFor="filter">Filtrar por estado: </label>
                        <select
                            name="filter"
                            id="filter"
                            value={filterState}
                            onChange={handleFilterChange}
                        >
                            <option value="all">Todos</option>
                            <option value="completed">Completados</option>
                            <option value="uncompleted">Incompletos</option>
                        </select>
                        {/* El componente TaskList recibe como parámetro el array de tareas */}
                        <TaskList 
                            tasks={
                                filterState === "all" 
                                ? tasks 
                                : tasks.filter((task) => 
                                    filterState === "completed" 
                                    ? task.completed 
                                    : !task.completed
                                    
                                    )
                                }
                        />
                    </div>
                )}
            </Filter>
        </div>
    );
}

export default ContainerRenderProps;