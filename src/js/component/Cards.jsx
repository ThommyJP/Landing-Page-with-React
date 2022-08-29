import React from "react";

//create your first component
const Card = () => {
	return (
        <div className="row row-cols-1 row-cols-md-4">
        <div className="col mb-4">
          <div className="card">
            <img src= "https://images.unsplash.com/photo-1658706195668-34b293d10c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Titulazo</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1658866689290-5fd5a660b452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Titulon</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1658827004762-6c038cfab798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Titulote</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1658595640246-cdd03895bbb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Titulo</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
       
      </div>     
	);
};

export default Card;
