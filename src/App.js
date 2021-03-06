import React,{useState,useEffect} from 'react'
import Editor from './components/editor'

function App() {

  const [html,sethtml]=useState('<h1>Hello Punit here</h1>');
  const [css,setcss]=useState('h1{color:grey;text-align:center;}');
  const [js,setjs]=useState('');
  const [srcDoc,setDoc]=useState('');

  useEffect(() => {
   const timeout= setTimeout(() =>{
     setDoc(
      `
      <html>
      <head>
      <style>
      ${css}
      </style>
      </head>
      <body>
      ${html}
      <script>
      ${js}
      </script>
      </body>
      </html>
  `
     )
   },250)

   return()=> clearTimeout(timeout)
  }, [html,css,js]);


  return (
    <>
      <div className="pane top-pane">
          <Editor
          language='xml'
          name='HTML'
          value={html}
          onchange={sethtml}
          />
          <Editor
          language='css'
          name='CSS'
          value={css}
          onchange={setcss}
          />
          <Editor
          language='javascript'
          name='Javascript'
          value={js}
          onchange={setjs}
          />
      </div>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          frameBorder="0"
          sandbox="allow-scripts"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

export default App;
