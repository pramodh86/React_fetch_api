
import { useEffect, useState } from 'react';
import './App.css'

interface MyObject {
  text: string;
  author: string;
}

function App() {
 
    const URL = "https://type.fit/api/quotes"
    let data:MyObject[] = [];

    let [quotesList,setQuotesList]=useState<MyObject[]>([]);
    let [error,setError]=useState(false)
    let [loading,setLoading]=useState(true)
    let [index,setIndex]=useState(0)



    const handleClick = () => {

      if(index === quotesList.length - 1 )
        {setIndex(0) }else
      { setIndex(index= index + 1)}
      
    }

    

    const handleQuotesLoad = async () => {

     
        try{
        const response = await fetch(URL)
        data = await response.json();

        setQuotesList([...data])
        setLoading(false)
        setError(false)
        
        
      }catch(err)
      {
        setLoading(false)
        setError(true)
        
      }
        
        
      
      
        
    }


    useEffect(()=>{

      handleQuotesLoad()



    },[])


    console.log(quotesList)

  return (
    <>
    <div className='container'>
      <div className='card'>
        <div className='quote'>{quotesList.length > 0 && (
                        <>
                            <h2 className='quote'>{quotesList[index].text}</h2>
                            <h3>{quotesList[index].author}</h3>
                        </>
                    )}</div>
        
        <button onClick={handleClick}>New Quote</button>
      </div>
    </div>
     
    </>
  )
}

export default App
