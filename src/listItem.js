import React from 'react';
import './App.css';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href={this.props.link}><img class="card-img-top" src={'/assets/'+this.props.title+'.jpg'} alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href={this.props.link}>{this.props.title}</a>
              </h4>
              <p class="card-text">{this.props.description}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default ListItem;
