import React from "react";

function Input({ datos, num, from, to, reult }) {
  return (
    <div className="input__container">
      <form action="">
        <div className="container__datos">
          <label>From:</label>
          <input
            type="text"
            placeholder="Entrada"
            onChange={(x) => num(x.target.value)}
          />
          <select
            onClick={(x) => {
              from(x.target.value);
              console.log(x.target.text)
            }}
            name="option"
            id="input__option"
            size={datos.length}
          >
            {datos.map((datos) => {
              return <option key={datos.id} value={datos.opc}>{datos.opc}</option>;
            })}
          </select>
        </div>

        <div className="container__datos">
          <label>To:</label>
          <input
            type="text"
            placeholder="Salida"
            disabled
            value={reult == 0 ? "" : reult}
          />
          <select
            name="option"
            id="input__option"
            onClick={(x) => {
              to(x.target.value);
          
            }}
            size={datos.length}
          >
            {datos.map((datos) => {
              return <option key={datos.id} value={datos.opc}>{datos.opc}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Input;
