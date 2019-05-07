import React, {Component} from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/SideBar';
import Posts from './components/posts';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (   
        <React.Fragment>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                  <Sidebar />
                  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                      <Posts/>
                  </main>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
  }
}

export default App;
