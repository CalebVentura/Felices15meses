//AQUI ESTÁ LA APLICACIÓN, esta es una componenete (Principal), cada una de estas tiene su propio css

import React, {Component} from 'react'; //IMporta react
//import logo from './logo.svg';//Logo

//Sus estilos
import './App.css';

import Navegacion from './componentes/Navegacion';
import Carousel from './componentes/Carousel';

//COMPONENTE APP
// La clase es una representacion de una parte de la página
class App extends Component {
  render(){
    return (
      // Todo debe estar encerrado por esta etiqueta
      //Para no confundir con "class" de REact se usa "className"
      // Propiedades ojooooo IMPORTANTE

      <div className="App">
        <Navegacion nombre=" ♥ Guianella ♥ "/>
        <Carousel/>
        {/*<Tareas/>*/}

        {/*Sección  ¿qué libros buscas?*/}
        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container mx-auto">
            <div className="">
              <div className="col-md">
                <h2>¡Hola mi Amor ♥ !</h2>
              </div>
              <div className="col-md">
                <img className="img-fluid rounded" src="./img/hola.png" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
            </div>
          </div>
        </section>
        

        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container mx-auto">
            <div className="">
              <div className="col-md">
                <h2> ¿ Me permites contarte una historia muy especial ?</h2>
              </div>
              <div className="col-md">
                <img className="img-fluid rounded" src="./img/2.png" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
            </div>
          </div>
        </section>


        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container mx-auto">
            <div className="">
              <div className="col-md">
                <h2> Gracias </h2>
              </div>
              <div className="col-md">
                <img className="img-fluid rounded" src="./img/3.png" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
            </div>
          </div>
        </section>

        {/*Sección ¿Cómo funciona?*/}
        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container-fluid my-4">
            <h3>Todo comenzó aquí 😍 </h3>
          
            <div className="row my-5">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Primer día</strong>
                    <h3 className="mb-0">Nos contactamos por primera vez</h3>
                    <br/>
                    <p className="card-text mb-auto">De sorpresa una tarde del 26 de Diciembre del 2018 leí tu mensaje, habian pasado dos días desde que me enviaste el primer "Hola" </p>
                  </div>
                  <div className="col-md">
                <img className="img-fluid rounded" src="./img/4.jpg" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Sorprendido</strong>
                    <h3 className="mb-0">Casualidades</h3><br/>
                    <p className="mb-auto">Habías respondido a una foto que mencionas que yo te envié desde otra cuenta fake, segun las evidencias es posible que yo lo haya enviado, sin embargo siempre he creido que cupido se apoderó de mi cuenta y envió aquella foto, puesto que sabía muy bien que este era el inicio de las experiencias maravillosas que vienen para nosotros dos.</p>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Comienzo</strong>
                    <h3 className="mb-0">Comienza la charla</h3><br/>
                    <p className="mb-auto">Es así que desde ese día empezamos a reirnos, a compenetrar. Comenzábamos a conocernos y poco a poco fue naciendo una bonita relación de amistad a los lejos... Me hablabas de tu cumpleaños que justo fue un día anterior al día de hablar por primera vez, me hablabas de la UNI jajaj, te stalkié (orcié), hablábamos de como fue nuestra navidad y cómo será nuestro año nuevo. No hubo un solo día en que dejáramos de hablar y hasta ahora a sido así. 😊  </p>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Emoción</strong>
                    <h3 className="mb-0">Me preparaba para ir a verte</h3><br/>
                    <p className="mb-auto"> Es así en el transcurso de los días que nació la idea de ir a Mala, a verte por primera vez, tenia un graaan presentimiento, nunca antes había esperado con tantas ansias para ver a una persona que aún no conocía en persona. Llegó el año nuevo y yo ansioso cada vez más, ni ese día dejamos de hablarnos. Y es que me diste tanta tanta confianza que no tenía temor de mostrarte parte de mi vida </p>
                  </div>
                  <div className="col-md">
                <img className="img-fluid rounded" src="./img/5.0.jpg" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
                </div>
              </div>
            
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Llegó el día</strong>
                    <h3 className="mb-0">El día más esperado del 2019</h3>
                    <br/>
                    <p className="card-text mb-auto">Era el primero de Enero del 2019, justo celebrando año nuevo que me enrumbé hacia Pando --- ¿para qué ? Pues para los preparativos, debía arreglarme, bañarme, acicalarme para ver a la mujer que se volvería la más importante en mi vida. </p>
                    <p>3am del día 2 de Enero, me desperté puntual, es más le gané a mi alarma en sonar, un buen baño... como nunca antes a esa hora, ya estaba mi camisa doblada y semi planchada, ya estaba limpio el pantalon, la correa, los lentes, el libro... Todo, salí 5 am de ahí rumbo a Atocongo a tomar el bus que me llevaría más cerca a ti.
          
                    </p>
                    <p>No conocía Atocongo, pero llegué ... Alli estaba, allí estaba aquel bus que me llevaría a ti.</p>
                  </div>
                  <div className="col-md">
                <img className="img-fluid rounded" src="./img/6.jpg" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">En Mala</strong>
                    <h3 className="mb-0">Y llegamos a Mala</h3><br/>
                    <p className="mb-auto">Ya había estudiando el pueblo, ya eran días en que me metí a los mapas tratando de conocer todo Mala, y pues... llegué, llegamos yo y mis ganas inmensas de verte, de dejar de verte por tus fotos de facebook y verte en vivo y en directo</p>

                    <p>Allí estaba yo y las tantas ganas de verte, esperando por ti, por mi amada</p>
                  </div>
                  <div className="col-md">
                <img className="img-fluid rounded" src="./img/7.jpg" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">...</strong>
                    <h3 className="mb-0">Continuará</h3><br/>
                    <p className="mb-auto"> 😊  </p>
                  </div>

                </div>
              </div>

            
            
                        
            
            
            
            </div>
        
          </div>
            
        </section>

        {/*Sección Nosotros*/}
        <section className="my-5">
          <div className="container">
            <h3>Nosotros</h3>
            <div className="media row">
              <div className="col-md-3">
                <img src="./img/8.png" width="300" className="align-self-center mr-3" alt="..."/>
              </div>
              
              <div className=" col-md-9 media-body text-justify">
                <p>Nosotros somos de las mejores parejas que se han formado en este planeta, somo personas simples que han sabido amarse, que han puesto de su parte para hacerse felices el uno al otro, futuros ingenieros, futuros padres de Joseph y Cielito, padres actuales de nuestro Rabillo. Amantes empedernidos, con tantas ganas de ... abrazarse y .... besarse y ... darse muuucho AMor.</p>
              </div>
            </div>
            <div className="col-md">
                <img className="img-fluid rounded" src="./img/9.png" alt="Dibujo de Ingeniería - P. Kaster" />
              </div>
          </div>
        </section>
        <hr ></hr>
        <footer className="bd-footer text-muted bg-dark">
          <div className="container-fluid p-3 p-md-5">
            <br/>
            <br/>
            <br/>
            <p className="text-light"> G & C </p>
            <p className="text-light"> Forever </p>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </footer>
      
      </div>
    );
  }

}

export default App;
