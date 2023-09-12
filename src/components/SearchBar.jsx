export function SearchBar(){
    return (
        <div className="container mt-2" style={{maxWidth:"600px"}}>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </div>
    );
}