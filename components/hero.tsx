import Image from "next/image";
import { Button } from "./ui/button";
import Hero_background from "@/public/hero_background.png"
import sale from "@/public/sale.png"
import HeroDress from "@/public/hero_dress.png"
import { url } from "inspector";
import getBillboard from "@/actions/get-billboard";


const Hero = async() => {

    const billboard = await getBillboard("edee01b2-b96e-42dc-9c38-027839e3af6e")


    return (

        <div className="relative px-4 sm:px-6 lg:px-8 py-3">

            {/* style={{ backgroundImage: `url(${data?.imageUrl})` }} */}
            <div style={{ backgroundImage: `url(${billboard?.imageUrl})` }}  className="relative px-4 sm:px-6 lg:px-8 py-3  rounded-sm overflow-hidden">

                <div className=" w-full max-w-[420px] max-h-10 text-white  mx-auto bg-primary rounded-full px-4 py-3 text-center mt-3  opacity-90 text-[12px] flex items-center justify-between ">

                    <span className="px-4 py-1 h-full bg-gray-700 rounded-full text-white">Annonce</span> <span> <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - 55 FCFA </span>

                </div>

                <div className="flex mt-4 flex-col sm:flex-row justify-between items-center h-[400px]   " >

                    <div className="flex-1  flex justify-center flex-col items-start">

                        {/* <Image src={sale} width={200} alt="ff"
                        height={100} className="object-cover" /> */}
                        <h1 className=" text-5xl font-bold">Building <br /> a better you</h1>
                        <span className=" mt-8 ">Explore the latest collection of clothing , shoes , <br /> accessories and more .</span>
                        <div className=" mt-4 space-x-2 ">
                            <Button className="bg-primary text-white">Shop Now</Button>
                            <Button variant={"outline"}>Shop Explore</Button>
                        </div>





                    </div>

                    <div className="flex-1 min-h-full  " >


                        <Image src={HeroDress} alt="hero dress" className="object-cover" />

                        


                    </div>

                </div>


            </div>

        </div>
    )


}

export default Hero;