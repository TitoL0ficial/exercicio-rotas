import ButtonPromotion from "../../components/ButtonPromotion";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";

export default function Promotion() {
    return(
        <>
        <Header/>
        <main>
            <div className="container">
                <PageCard name="Página de promoção"/>
                <ButtonPromotion name="Quero participar"/> 
            </div>   
        </main>
        </>
    );
}