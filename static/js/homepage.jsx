"use strict";

function Homepage() {
  return (
    <div>
      <h1>Welcome </h1>
        <a href=" " >check out our cards! 
        {/* should be link in <a href   http://localhost:5000/cards*/} 
         {/*didn't wotk unsure if it was becuse not host browswer*/}
        </a>
      )
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
