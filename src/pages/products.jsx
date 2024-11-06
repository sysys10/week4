import { CiChat1, CiHeart } from "react-icons/ci";
import productData from "../data";
import { Link } from "react-router-dom";
import { convertToM } from "../utils/func";

const Products = () => {
  return (
    <div className="max-w-4xl w-full mx-auto min-h-screen bg-gray-100 px-10 py-8">
      <h1>상품 리스트</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {productData.map((product, idx) => (
          <Link to={`/detail/${idx}`} key={idx} className="h-80 bg-white border border-gray-200 rounded-2xl hover:-translate-y-2 duration-200">
            <img
              src={`${product.imageUrl}`}
              alt="prodcut-thumbnail-img"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="px-2 py-1">
              <div>
                <h1 className="text-lg font-semibold ">{product.name}</h1>
                <p className="truncate text-sm">{product.sellerName}</p>
                <p className="text-lg text-blue-500">{convertToM(product.price)}</p>
                <span className="flex justify-between mt-2">
                  <p className="text-gray-500">{product.location}</p>

                  <span className="flex items-center">
                    <CiHeart />
                    {product.interest} <CiChat1 className="ml-2" />
                    {product.chatcnt}
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Products;
