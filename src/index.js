import React from "react";
import ReactDOm from 'react-dom/client'
import Counter from "./Counter";

const root=ReactDOm.createRoot(document.getElementById('root'))
root.render(
  <>
  <Counter/>
  </>
)