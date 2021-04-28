import React from 'react';
import ScrollUpButton from "react-scroll-up-button";
import '../styles/ScrollUp.css';

const ScrollUp = () => {
    return (
        <div>
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          ShowAtPosition={1335}
        >
          <button className="scrollup_btn">
          <i class="fas fa-caret-up"></i>
          </button>
        </ScrollUpButton>
      </div>
    );
};

export default ScrollUp;