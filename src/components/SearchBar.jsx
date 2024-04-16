import {useState} from "react"

function searchBar(onSubmit){
    const [term,setTerm]=useState('')
    const handleFromSubmit=(event)=>{
        event.preventDefault()
        console.log('Necesito decirle al componente padre sobre los componentes')
        onsubmit(term)
    }
        const handleChange = (event)=>{
            console.log(event.target.value)
            setTerm(event.target.value)
        }
    const handleClick = () =>{
        onsubmit(term)
    }

    return(
    <div>
        <h1>Search Bar: </h1>
        <form onSubmit={handleFormSubmit}>
            confirma tu <busqueda:>term</busqueda:>
            <input onChange={(handleChange)} value={term}/>
            </form>
            <button onClick={handleClick}>Click me </button> 
        </div>
    )
}
export default SearchBar