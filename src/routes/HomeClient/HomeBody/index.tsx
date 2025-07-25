import PageCard from "../../../components/PageCard";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeBody() {
    return(
        <main>
            <section>
                <div className="container">
                    <div>
                        <PageCard title="Página inicial"/>              
                    </div> 
                    <div className="dflex">
                        <Link to="/promotion">
                            <Button text="Ver promoção"/>
                        </Link> 
                    </div> 
                </div>               
            </section>  
        </main>
    );
}