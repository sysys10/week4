import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="z-50 fixed left-0 right-0 top-0 h-14 bg-white">
      <nav className="max-w-4xl w-full h-full mx-auto flex items-center justify-between px-4">
        <Link to={"/"} className="text-4xl text-orange-400 font-bold">
          당근마켓
        </Link>
        <div className="flex gap-4 mr-4 text-lg text-gray-600">
          <Link to={"/products"}>상품목록</Link>
          <Link to={"/"}>홈</Link>
          <Link to={"/login"}>로그인</Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
