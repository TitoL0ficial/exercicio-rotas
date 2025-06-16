import ButtonPromotion from "../../../components/ButtonPromotion";
import PageCard from "../../../components/PageCard";

export default function Promotion() {
    return(
        <>
        <main>
            <div className="container">
                <PageCard name="Página de promoção"/>
                <ButtonPromotion name="Quero participar"/> 
            </div>   
        </main>
        </>
    );
}