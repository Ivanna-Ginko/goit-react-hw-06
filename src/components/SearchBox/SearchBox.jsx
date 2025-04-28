import css from "./SearchBox.module.css"



export default function SearchBox ({ filter, onFilter })  {
    return (
        <div className={css.box}>
            <p className={css.text}>Find contacts by name</p>
            <input className={css.input} type="text" value={filter} onChange={e => onFilter(e.target.value)}>
            </input>
        </div>
    )
    
}