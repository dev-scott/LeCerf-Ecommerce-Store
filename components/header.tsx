import { Facebook, Instagram, Youtube } from "lucide-react";
import Container from "./ui/container";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
    return (

        <div className="border-b" >


            <Container>

                <div className="relative px-4 sm:px-6 lg:px-8 ">

                    <div className="  py-4">

                        <div className="flex justify-between items-center" >
                            <div className="flex">
                                <div className="header_top_icon" > <Facebook /> </div>
                                <div className="header_top_icon" > <Youtube /></div>
                                <div className="header_top_icon" ><Instagram /></div>
                            </div>


                            <div className="text-gray-700 opacity-90 text-[12px]">

                                <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - 55 FCFA

                            </div>

                            <div className="flex items-center" >

                                <div >
                                    <ThemeToggle />
                                </div>
                                <div className="ml-2">

                                    <span> FR </span>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </Container>
        </div>

    );
}

export default Header;