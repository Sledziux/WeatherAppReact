const NotFound = ({query, setQuery, search}) => {
    return ( 
        <div className="notFound">
            <input 
                type="text" 
                placeholder="Miasto"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={e => search(e)}
            />

            <p>Nie znaleziono miasta o takiej nazwie!</p>
        </div>
     );
}
 
export default NotFound;