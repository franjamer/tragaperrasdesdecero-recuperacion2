import './App.css';
import '../src/style.css';
import './main.js';











function App() {
  return (
    <>
    <div className="App">
        <header id="marcador" className="cabecera-Marcador">
          Aqui va el marcador con las inputs resultado,tiradas y apuesta
          <label><input id="puntosTirada" type="number"></input></label>
        </header>
         <section id="tablero" className="seccion-tablero">
        
          <div className="imgybtn">
          <img id="imgn1" className="img" src="./imagenes/granpremio.svg"alt="imagenes que tienen premio"/>
          <button>
            slot 1
          </button>
        </div>  
        <div className="imgybtn">
        <img id="imgn2" className="img" src="./imagenes/granpremio.svg"alt="imagenes que tienen premio"/>
        <button>
          slot 2
        </button>
        </div>

        <div className="imgybtn">
        <img id="imgn3" className="img" src="./imagenes/granpremio.svg"alt="imagenes que tienen premio"/>
        <button>
          slot 3
        </button>
        </div>

        <div className="imgybtn">
        <img id="imgn4" className="img" src="./imagenes/granpremio.svg"alt="imagenes que tienen premio"/>
        <button>
          slot 4
        </button>
        </div>

      </section>
    </div>
    <main id="principal" className="principal">
    
    <section id="botonGrande" className="seccion-botongrande">Aqui va el botón grande que hace la tirada de los cuatro casilleros 
        <button id="tirarx4"className="boton-grande-Tirar">Boton de tirar</button>
    </section>
    <section id="premios" className="seccion-premios">
        <div id="combinaciondepremios" className="div-combinacionpremios">Aqui va la tabla con la combinacioón de premios</div>
        <div id="valoresindividuales" className="div-valoresindividuales">Aquí va los valores individuales de cada imagen</div>
    </section>
    <section id="botonera" className="seccion-botonera">
        Aqui van los botones secundarios que son: Nueva Apuesta, Pasar saldo a tiradas y Cobrar Saldo
        <button id="puntosatiradas">puntos a Tiradas</button>
        <button id="marcadorabote">monetizar puntos</button>
        <button id="nueva partida">Nueva partida</button>
    </section>
</main>
     </>
  );
 
}

export default App;
