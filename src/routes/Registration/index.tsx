import ButtonPromotion from "../../components/ButtonPromotion";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";

export default function Registration() {
    return(
        <>
                <Header/>
                <main>
                    <div className="container">
                        <PageCard name="Página de incrição"/>
                        <ButtonPromotion name="Ver promoção"/> 
                    </div>   
                </main>
                </>
    );
}