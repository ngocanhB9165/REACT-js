import Footer from "./Footer";
import Header from "./Header";
// import SideBar from "./SideBar";

function MasterLayout({ children }) {
    return (<>
        <Header />
        {children}
        <Footer />
    </>);
}

export default MasterLayout;