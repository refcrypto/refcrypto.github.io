import React from 'react';
import List from './list';
import Items from './data.json';
import './App.css';

class ListPage extends React.Component {
  render() {
    return (
      <React.Fragment>
    <div class="container">

      <h1 class="my-4">Main list</h1>

      <List items={Items}/>

      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>

    </div>

    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Refcrypto</p>
      </div>
    </footer>
    </React.Fragment>

    );
  }
}

export default ListPage;
