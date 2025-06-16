import Header from "../../components/Header";
import PageCard from "../../components/PageCard";
import ButtonPromotion from '../../components/ButtonPromotion';

export default function Home() {
    return(
        <>
        <Header/>
        <main>
            <div className="container">
                <PageCard/>
                <ButtonPromotion/> 
            </div>   
        </main>
        </>
    );
}