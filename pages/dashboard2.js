import { Navbar } from "../components/AdminNavbar"
import { Sidebar } from "../components/admin/sidebar"
import Layout from "../components/admin/layout"


export default function admin() {
    return (
        <>
            <Navbar />
            {/* <Sidebar /> */}
            <Layout/>
        </>
    )
}