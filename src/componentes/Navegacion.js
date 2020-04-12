import React, {Component} from 'react'; //Mayuscula minuscula

class Navegacion extends Component{
    render(){
        return(

            <div className="Navegacion">
                <nav className="navbar nav justify-content-center">

                    <a className="navbar-brand mr-0" href="/">
                        <img src="./logo2.png" width="150" alt=""/>                        
                    </a>
                    
                    <button className="navbar-toggler mx-0 p-1" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
            
            );
    }
}

export default Navegacion;