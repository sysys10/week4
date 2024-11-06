import { Link } from "react-router-dom";


export default function Home() {
    return (<div className="flex flex-col gap-2 items-center justify-center h-screen w-full">

        <h1 className="text-4xl font-semibold">당근마켓에 오신 여러분들 환영합니다.</h1>
        <Link to={'/products'} className="text-xl text-white font-bold bg-orange-400 px-6 py-3 rounded-3xl hover:bg-orange-500">상품 둘러보기</Link>
    </div>)
}