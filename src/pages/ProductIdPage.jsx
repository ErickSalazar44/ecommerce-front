import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInf from "../components/Product_id/ProductInf";
import SilimartProducts from "../components/Product_id/SilimartProducts";
import "../components/Product_id/style/productBody.css";
import SliderImgs from "../components/Product_id/SliderImgs";


const ProductIdPage = () => {
    const { id } = useParams();
    //TODO
    // const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
    const baseUrl = import.meta.env.VITE_API_URL;
    const [product, getProductById] = useFetch(baseUrl);

    useEffect(() => {
        getProductById(`/products/${id}`);
    }, [id]);
    return (
        <div className='productBody'>
            <div className='productBody__section--product'>
                <SliderImgs product={product} />
                <ProductInf product={product} />
            </div>
            <SilimartProducts product={product} />
        </div>
    );
};

export default ProductIdPage;
