import {useEffect,useState} from 'react';

const useProducts = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =useState(true);


    useEffect(() => {
        fetch('https://fast-savannah-83899.herokuapp.com/products')
       .then(res => res.json())
       .then(result => {
         setProducts(result.products)
         setLoading(false);
       });
     }, [products,loading]);

    return [ products, loading ];

}

export default useProducts;