import { Link } from "react-router-dom";
import PageCard from "../../../components/PageCard";
import Button from "../../../components/Button";

export default function Subscription() {
    return(
        <>
        <main>
            <section>
                <div className="container">
                    <div>
                        <PageCard title="Página de inscrição"/>              
                    </div> 
                    <div className="dflex">
                        <Link to="/promotion">
                            <Button text="Ver promoção"/>
                        </Link> 
                    </div> 
                </div>               
            </section>  
        </main>
        </>
    );
}