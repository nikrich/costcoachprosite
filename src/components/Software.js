require('styles/app.scss');
require('styles/nav.scss');

import React from 'react';

let logoImage = require('../images/logo.svg');

class AppComponent extends React.Component {
  render() {
    return (
      <div class="content-container">
      <div class="wrapper">
       <div class="columns"></div>

            <div class="item four columns first">
                <div class="content">
                   <div class="wrap">
                        <h3>Is your business a victim of inaccurate quoting?</h3>
                        <p>Use CCP's QuickQuote facility to generate accurate quotes for an order quickly and seamlessly based on selected profit levels</p>
                    </div>
                </div>
            </div>
            <div class="item four columns second">
                <div class="content">
                    <div class="wrap">
                        <h3>Do you have enough production capacity to deliver on time?</h3>
                        <p>Use CCP’s Production Load monitor to keep an eye on current loads and assess the impact of  any new order on future production BEFORE accepting.</p>
                    </div>
                </div>
            </div>
            <div class="item four columns third">
                <div class="content">
                   <div class="wrap">
                        <h3>Is this order going to make money for your business?</h3>
                        <p>Utilize CCP’s dynamic income & expendiure statement to assess the potential profit the order will deliver to your business</p>
                    </div>
                </div>
            </div>
            <div class="read-more twelve columns">
                <div class="content">
                   <div class="wrap">
                        <h4>Let Cost Coach Pro do your admin for you !</h4>
                        <a class="btn-default">Find Out More</a>

                    </div>
                </div>
            </div>

        </div>
    </div> 
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
