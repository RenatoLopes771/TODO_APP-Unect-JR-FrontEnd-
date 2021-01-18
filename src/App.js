import React from 'react'; 

function App() {
    return ( 
        <div>
            <section id="sectionTop">
                <h1 class="center">uTask</h1>
            
                <form class="center" post="">
                    <input type="text" required placeholder="Add uma nova tarefa" ></input>
                    <button type="submit" ></button>
                </form>

            </section>

            <section id="sectionMiddle" >
                <hr></hr>

                <h2 class="center" >TODO</h2>

                <div id="div-meio" class="center" >
                </div>

                <div id="nada" class="center" >
                    <img src="./assets/beach.png" alt="Foto de uma praia" class="" ></img>
                    <p>Nada por aqui!</p>
                </div>
            </section>

            <section id="sectionBottom" >
                <hr></hr>

                <h2 class="center" >DONE</h2>

                <div id="div-rodape" >
                </div>

                <div id="nada" class="center" >
                    <img src="./assets/beach.png" alt="Foto de uma praia" class="" ></img>
                    <p>Nada por aqui!</p>
                </div>
            </section>
        </div>
    );
}

export default App;