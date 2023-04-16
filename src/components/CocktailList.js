import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from "./Cocktail"
import Loading from "./Loading"

const CocktailList = () => {
  const { cocktails, loading} = useGlobalContext()

 


  return (
    <div>CocktailList</div>
  )
}

export default CocktailList