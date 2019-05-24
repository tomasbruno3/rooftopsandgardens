import React, { Component } from 'react';
class MenuCard extends Component {

  state = {
      wine:'Las Perdices',
      type:'Malbec-Syra',
      origen:'Argentina',
      year:'2016'
  }

render () {

  return (

    <div>
    <div className="clearfix"></div>

    <div className="container-fluid no-left-padding no-right-padding menu-section">

   <span className="bottom-img"><img src="assets/images/menu-card2.png" alt="Menu Card" /></span>

      <div className="container">

        <div className="section-header text-center">
          <h3>Special Menu</h3>
          <h4>our selection</h4>
        </div>

        <div className="row">

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>Un Cheese Variete <span> Selection of wide range of local cheese</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>Las Empandas Criollas <span> North Argentinan style Empanaditas</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>El Chorizo de campo <span> Chorizo chilly with field bread</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>La Morzilla Ahumada <span> Morzillas cooked with red quebracho </span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>La Tira Especial <span> The first choice of ´El Gaucho´ </span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>El Lomo De Dios<span> The meet of the Gods</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>El Vacio Espacial<span> The meet of the Lords</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>La Entraña Sagrada <span> The meet of the Queens</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>Las Tortas Fritas <span> Deliciosas tortitas fritas rellenas de membrillo</span></h3>

            </div>
          </div>

          <div className="col-md-6">
            <div className="menu-item">
              <div className="item-thumb">
                <i><img src="assets/images/LogoIcon.png" alt="Menu" /></i>
              </div>
              <h3>Queso y Ducle <span>La combinación justa entre el dulce y salado</span></h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  )
}
}

export default MenuCard;
