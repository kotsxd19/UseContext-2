import React from "react";


const Information = () => (
  
  <div className="info-container">
    <h1>¿Qué es <code>useContext</code> en React?</h1>
    <p>
      <strong>useContext</strong> es un hook de React que permite acceder al valor de un contexto directamente en un componente funcional, sin necesidad de utilizar el componente <code>Context.Consumer</code>.
    </p>
    <h2>¿Para qué se utiliza?</h2>
    <ul>
      <li>Compartir datos globales como temas, usuario autenticado o configuraciones.</li>
      <li>Evitar el <em>prop drilling</em> (pasar props innecesarias a través de muchos componentes).</li>
    </ul>
    <h2>Ejemplo básico</h2>
    <pre>
      <code>{`
const MyContext = React.createContext();
function MyComponent() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
      `}</code>
    </pre>
    <p>
      En este ejemplo, <code>useContext(MyContext)</code> devuelve el valor actual del contexto <code>MyContext</code>.
    </p>

  </div>
);

export default Information;