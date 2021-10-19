import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import OrderForm from '../OrderForm/OrderForm';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const styles = {
    cursor: 'col-resize',
    marginRight: '100px',
    height: '100%',
  };
  
const DashBoard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid">
                <>
                    <SplitPane
                        split="vertical"
                        minSize={100}
                        defaultSize={100}
                        resizerStyle={styles}
                    >
                       <Sidebar></Sidebar>
                        <div>
                            <Route exact path="/order" component={OrderForm} />
                            <Route path="/service-list" component={ServiceList} />
                            <Route path="/review" component={Review} />
                        </div>
                    </SplitPane>
                </>
            </div>

        </div>
    );
};


export default DashBoard;