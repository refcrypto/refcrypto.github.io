import React from 'react';
import Nav from './nav';
import ListItem from './listItem';
import './App.css';


class List extends React.Component {
  constructor(props){
    super(props);
  }

  getListItems(){
    return this.props.items.map((item, index) =>
      <ListItem key={index} title={item.title} link={item.link} description={item.description} />
    );
  }

  render() {
    return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          {this.getListItems()}
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default List;
