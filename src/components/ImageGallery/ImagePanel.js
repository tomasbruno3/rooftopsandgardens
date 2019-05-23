import React, { Component } from 'react';

import Rodal from 'rodal';
import "@reach/dialog/styles.css";




class ImagePanel extends Component {

  constructor(props) {
      super(props)
      this.state= {
        visible: false,
        image:'',
        filter: "all"

      };

    }


    show = (img) => {
      this.setState({ visible: true, image: img });
    }

    hide = () => {
      this.setState({ visible: false });
    }


    render () {
      const {filter} = this.state;
      const imageFiltered = imagesToFilter.filter((img) => img.filter === filter || filter==="all")

      return (

    <div>
    <div className="clearfix"></div>
    <div className="container-fluid no-left-padding no-right-padding gallery-section">
      <div className="container">

        <div className="section-header text-center">
          <h3>Great Art</h3>
          <h4>GALLERY</h4>
        </div>

        <div className="gallery-category">
          <ul id="filters">
            <li><span onClick={()=>this.setState({filter:"all"})} data-filter="all" href="#">All</span></li>
            <li><span onClick={()=>this.setState({filter:"ourmeat"})} data-filter=".ourmeat" href="#" >Our Meats</span></li>
            <li><span onClick={()=>this.setState({filter:"wines"})} data-filter=".wines" href="#" >Wines</span></li>
            <li><span onClick={()=>this.setState({filter:"tradition"})} data-filter=".tradition" href="#">Tradition</span></li>
          </ul>
        </div>


        <div className= "container">

        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} height="380" width="290">
                <div>
                <p> </p>
                <img src={"assets/images/"+this.state.image} alt="Gallery" />
                <p>Hello you </p>
                </div>
        </Rodal>

        <div className="row">
          <div className="gallery-list gallery-fitrow">

            {imageFiltered.map((img) => {
              return (
                <div key={img.id} className="gallery-box col-md-3 col-sm-4 col-xs-4">
                  <a onClick={()=>this.show(img.images)}><img src={"assets/images/"+img.images}alt="Gallery" /></a>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>




  )
}
}


export default ImagePanel


const imagesToFilter = [

  {
    id: 1,
    filter: 'ourmeat',
    images: "Gallery_1.jpg"
  },

  {
    id: 2,
    filter: 'ourmeat',
    images: "Gallery_6.jpg"
  },
  {
    id: 3,
    filter: 'ourmeat',
    images: "Gallery_3.jpg"
  },
  {
    id: 4,
    filter: 'wines',
    images: "Gallery_4.jpg"
  },
  {
    id: 5,
    filter: 'wines',
    images: "Gallery_5.jpg"
  },
  {
    id: 6,
    filter: 'tradition',
    images: "Gallery_6.jpg"
  },
  {
    id: 7,
    filter: 'tradition',
    images: "Gallery_3.jpg"
  },
  {
    id: 8,
    filter: 'tradition',
    images: "Gallery_4.jpg"
  },
];
