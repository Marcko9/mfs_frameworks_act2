import imagenLocal from '../assets/img/premier-league-intro.png';

export function Post({likes, autor, imagen, comments, date}) {
  return (
    <div className="container mt-2">
        <div className="card" >
            {/* <img src={ imagenLocal } className="card-img-top" alt="Imagen" /> */}
            <img src={ imagen } className="card-img-top" alt="Imagen" style={{minHeight:"15em", maxHeight:"15em"}}/>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <h5 className="postDate me-auto">{ date }</h5>
                    <button className='btn btn-danger'><i className="fa-solid fa-heart"/>{likes || 1}k</button>
                </div>
                <h5 className="userInfo">{autor}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <h6 className="card-subtitle comment"><i className="fa-regular fa-message me-2 comment"/>Comments ({ comments })</h6>
            </div>
        </div>
    </div>
  );
}
