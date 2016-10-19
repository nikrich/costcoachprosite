require('styles/about.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="row about-container">
        <div id="about" className="about eight columns">
            <section className="container">
                <h2 className="title">About</h2>
                <p className="about-text">CCP assists businesses in effectively costing it’s products, applying different profit margins to generate accurate quotations for any job or project and assess the impact of an order on current production loads. CCP further provides the business with future raw material and labour requirements and the business owner with detailed Income & Cash flow statements to assist in the effective day-to-day management of the business. COST COACH PRO’s ease-of-use is particularly appropriate for small and medium-sized businesses, where financial skills are not always as well developed as the inherent technical skills. The CCP software is complemented by a training programme which provides the business’ relevant staff with both an general understanding of the financial principles of a business and in the specific use of the CCP software.To obtain more information on CCP, attend one of our regular information sessions or arrange for a personal demonstration, please feel free to contact us via e-mail at <a href="mailto:hein@costcoachpro.com">hein@costcoachpro.com</a> or <a href="mailto:barry@costcoachpro.com">barry@costcoachpro.com</a>
                </p>
            </section>
        </div>
        <div className="visual four columns"></div>
    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
