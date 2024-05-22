import '.App.css'
import { useState, useEffect, Fragment } from 'react'

function App() {
    const [item, setItem] = useState([])

    const getItem = async () => {
        const url = 'https://fakestoreapi.com/products/1';
        const items = await fetch(url);
        const itemApi = await items.json();

        setItem(itemApi)
    }

    useEffect(() => {
        getItem()
    }, []);

    return (
        <div className='cointainer'>
            <div className='row'>
                {item.map((item1, idx) => {
                    return (
                        <>
                            <div className='col-4'>
                                <h4>{item1.category}</h4>
                                <h4>{item1.title}</h4>
                                <h4>{item1.descreption}</h4>
                                <div className='d-flex justify-content-between aling-items-center'><span>Price :</span> <span>{item1.price}</span></div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );

}

export default App;