import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../Home/CardProduct";
import './style/similarProducts.css'

const SilimartProducts = ({ product }) => {
    // url de productos similares
	// TODO
    // const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
    const baseUrl = import.meta.env.VITE_API_URL;

    const [productsBycategori, getBycategori] = useFetch(baseUrl);

    useEffect(() => {
        if (product) {
			const categoryId = product.category.id
            getBycategori(`/products?categoryId=${categoryId}`);
        }
    }, [product]);


    return (
		<div>
			<h3 className="Similar__products">Discover similar items</h3>
			<div className="contenedor__productos">
				{
					productsBycategori?.map(prod => prod.id !== product.id && (
						<CardProduct 
							key={prod.id} 
							product={prod}
						/>
					))
				}
			</div>
		</div>
	);
};

export default SilimartProducts;
