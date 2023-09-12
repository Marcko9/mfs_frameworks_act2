export function Post({likes, autor, image, comments, date, text}) {
  return (
    <div className="container mt-2">
        <div className="card h-100">
            <img src={ image } className="card-img-top" alt="Imagen" style={{minHeight:"15em", maxHeight:"15em"}}/>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <h5 className="postDate me-auto">{ date }</h5>
                    <button className='btn btn-danger'><i className="fa-solid fa-heart"/>{likes || 1}k</button>
                </div>
                <h5 className="userInfo">{autor}</h5>
                <p className="card-text">{text || "..."}</p>
                
            </div>
            <div class="card-footer">
                <h6 className="card-subtitle comment"><i class="bi bi-chat-right me-2 comment"></i>Comments ({ comments })</h6>
            </div>
        </div>
    </div>
  );
}
