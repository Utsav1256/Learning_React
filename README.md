# Learning_React
Step 1: Importing Liberaries:
        🔸there are two ways to use any liberaries :
            1} Either by installing all the liberaries 
            2} Or by importing them.

        🔸 So, lets import the libraries:

            🔸 Just search in the browser -> 'name of the liberary' cdn links 

            🔸 Go to : https://babeljs.io/docs/en/babel-standalone
                <!-- To Load Babel -->
                     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

            🔸 Go to : https://reactjs.org/docs/cdn-links.html
                And copy the script tags: 
                Both React and ReactDOM are available over a CDN.
                     <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                
                     <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

        
Step 2: Writing component:
       🔸 To write a component we will need to use script tag
       🔸 whateverv you will retuern from the component, it should be in JSX (JavaScript XML)
       
Step 3: Rendering component:
        🔸 We have created a component, but still will not able to seeit inside  the browser. 
        🔸Becoz, we need to tell react that hey I want to render, I want to display this component on the browser.
        🔸To do that we basically use the package ReactDOM, which we have imported in step 1.
        🔸 render fn. is given to us by ReactDOM
            🔸 it expects two thing :
            🔸 1st the component that you want to render
            🔸 2nd where we want to render/display this component

🔸 So this is howyou can start a react appliocation by using <script></script> tag