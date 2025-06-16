import PageCard from "../../../components/PageCard";
import ButtonPromotion from '../../../components/ButtonPromotion';

export default function HomeBody() {
    return(
        <main>
            <div className="container">
                <PageCard name="Página inicial"/>
                <ButtonPromotion name="Ver promoção"/> 
            </div>   
        </main>
    );
}