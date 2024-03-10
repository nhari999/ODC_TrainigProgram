import Footer from "./Shared/Footer";
import SideBar from "./Shared/SideBar";


const Layout = ({ children }) => {

    return (
        <div>
            <div  >
                <SideBar />
                <Footer />
            </div>
            <div> {children}</div>


        </div>



    );
}

export default Layout