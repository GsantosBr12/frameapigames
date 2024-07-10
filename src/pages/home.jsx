import Header from "../content/header"
import CS2 from "../../public/Counter-Strike_2_logo.svg"

function Home() {
    return (
        <>
            <Header />
             <img src={CS2} alt="" />
        </>
    )
}

export default Home