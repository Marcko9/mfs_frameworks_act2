

export function NavBar({showProfile, setShowProfile, showWebDetail, setShowWebDetail}){

    const onProfileClick = () => {
        console.log('onProfileClick');
        console.log({showWebDetail});
        console.log({showProfile});
        if(!showProfile){
            setShowWebDetail(false);
            setShowProfile(true);
        }
    }

    const onLogoClick = () => {
        console.log('onLogoClick');
        console.log({showWebDetail});
        console.log({showProfile});
        if(!showWebDetail){
            setShowWebDetail(true);
            setShowProfile(false);
        }
    }
    
    
    return (
    <nav className="navbar bg-light">
        <div className="container-fluid">
            <i className="bi bi-lightning-charge-fill" onClick={onLogoClick}></i>
            <span className="navbar-brand mb-0 h1 ms-2 me-auto">three pics</span>
            <i className="bi bi-person-circle" onClick={onProfileClick}></i>
        </div>       
    </nav> 
    );
}