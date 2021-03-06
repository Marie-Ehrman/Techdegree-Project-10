import React from 'react';


// Form component usable in other components requiring a form
// Modeled from React Authentication Courses
export default (props) => {

  // destructure props 
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }
  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
      {/* creates elements with the React.Fragment component in parent componenets */}
        {elements()}
        {/* dynamically render buttons from parent component */}
        <div className="grid-100 pad-bottom">
          <button className="button" type="submit">{submitButtonText}</button>
          <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

// handles validation errors to be displayed on screen
function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;
  if (errors.length) {
    console.log(errors);
    errorsDisplay = (
      //render error messages 
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error.message}</li>)}
          </ul>
        </div>
      </div>
    );
  }
  return errorsDisplay;
}
