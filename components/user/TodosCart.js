import css from "../../pages/todos/todos.module.scss";
import {useState} from "react";

export const TodosCart = ({title, completed, id}) => {
    const [val, setVal] = useState(completed)

    const onChecked = (e) => {

        setVal(e.target.checked)
    }
    return (
        <div className={css.todos}>
            <h2>Todos ID {id}</h2>

            <div>
                <h3>
                    <input type="checkbox" onChange={onChecked} id={id}/>
                    <label htmlFor={id}>{title}</label>
                </h3>
            </div>
        </div>
    );
}
