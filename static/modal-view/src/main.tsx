import React from "react";
import ReactDOM from "react-dom/client";
import "@atlaskit/css-reset";

const App = () => {
  console.log('hhuhuhuhuhuhuhuu')
    return (
        <>
        <div>
            <h1>App</h1>
            <p>
                This is an app.
            </p>
        </div>
        </>
    );  
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
