import React from "react";
import "./Answers.css";

const Answers = () => {
  return (
    <div className="container">
      <div className="single-q-ans-area">
        <h3>How React works?</h3>
        <p>
          React is a JavaScript library that creates user interfaces. We can use
          it to help build single page applications and mobile apps, we can also
          build complex apps if we utilise it with other libraries. react has
          virtual dom and it's also manipulates the browser's dom. react
          separates the app into three main components these are Model , view
          and controler. the model manages the data and the rules these are
          react component, state, and other rendering things. View is what user
          sees and controler is what recieves input from user it can be click
          event or api request
        </p>
      </div>
      <div className="single-q-ans-area">
        <h3>state vs props.</h3>
        <p>
          React state is an updateable structure that is used to contain data or
          information about the component and can change over time the change in
          state can happen as a response to user action or system event. It can
          only be accessed or modified inside the component or by the component
          directly.
          <br />
          <br />
          Props are read-only components. It is an object which stores the value
          of attributes of a tag and work similar to the HTML attributes. It
          allows passing data from one component to other components. It is
          similar to function arguments and can be passed to the component the
          same way as arguments passed in a function. Props are immutable so we
          cannot modify the props from inside the component.
        </p>
      </div>
    </div>
  );
};

export default Answers;
