import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaRegComment } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import product from "../data";
import { convertToM } from "../utils/func";
const ProductDetail = () => {
  const { productId } = useParams();
  const productDetail = product[productId];


  return (
    <div className="mx-auto pt-20 max-w-5xl w-full min-h-screen bg-gray-100 flex flex-col px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="relative">
          <img
            alt="product-detail-img"
            src={productDetail.imageUrl}
            className="w-full h-[28rem] object-cover rounded-t-2xl"
          />
          <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all">
            <FaRegHeart className="w-6 h-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium">{productDetail.sellerName}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                  {productDetail.location}
                </p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              프로필 보기
            </button>
          </div>

          <div className="border-t pt-6">
            <h1 className="text-2xl font-bold mb-3">{productDetail.name}</h1>
            <p className="text-gray-600 mb-4 min-h-[3rem]">{productDetail.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <BsClockHistory className="w-4 h-4 mr-1" />
                <span>{productDetail.createdAt}</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="w-4 h-4 text-red-500 mr-1" />
                <span>관심 {productDetail.interest}</span>
              </div>
              <div className="flex items-center">
                <FaRegComment className="w-4 h-4 text-gray-400 mr-1" />
                <span>채팅 {productDetail.chatcnt}</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">판매가</p>
                <p className="text-2xl font-bold">{convertToM(productDetail.price)}원</p>
              </div>
              <div className="space-x-3">
                <button className="px-4 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50">
                  관심등록
                </button>
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  채팅하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;