import {useState} from "react"
import {useActions} from "../src/hooks/useActions"
import {useTypedSelector} from "./hooks/useTypedSelector";
import "./App.css";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("")
    const {searchRepositories} = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.repositories)
    

    

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchRepositories(term)
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input className="input" value={term} onChange={e => setTerm(e.target.value)} />
                <button className="button">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && 
                data.map((name) => <div className="list" key={name}>{name}</div> )
            }
        </div>
    )
}
export default RepositoriesList