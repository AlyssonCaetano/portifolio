function App() {
    const projects = [
      {
        title: "Projeto 1",
        description: "Descrição do projeto 1."
      },
      {
        title: "Projeto 2",
        description: "Descrição do projeto 2."
      },
      {
        title: "Projeto 3",
        description: "Descrição do projeto 3."
      }
    ];
  
    return (
      <div className="container">
        <header className="header">
          <h1>Meu Portfólio</h1>
          <p>Bem-vindo ao meu portfólio! Aqui estão alguns dos meus projetos.</p>
        </header>
  
        <main>
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </main>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);