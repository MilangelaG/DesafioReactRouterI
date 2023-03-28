import React from 'react'

const Contacto = () => {
  return (
    <div className='container mt-5'>
      <h2>Cuentanos, ¿En que podemos ayudarte💖?</h2>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email </label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    <div>
        <button className='btn btn-secondary mt-3'>Enviar</button>
    </div>
    </div>
  )
}

export default Contacto