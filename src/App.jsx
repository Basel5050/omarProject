import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import { BeakerIcon } from '@heroicons/react/24/solid'
function App() {

  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button>Button</Button>
      <BeakerIcon className="size-6 text-blue-500" />
    </h1>
    </>
  )
}

export default App
