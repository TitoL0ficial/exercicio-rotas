import { Link } from "react-router-dom";
import PageCard from "../../../components/PageCard";
import Button from "../../../components/Button";

export default function Promotion() {
  return (
    <>
      <main>
            <section>
                <div className="container">
                    <div>
                        <PageCard title="Página de promoção" />
                    </div>
                    <div className="dflex">
                        <Link to="/subscription">
                            <Button text="Quero participar" />
                        </Link>
                    </div>
                </div>
            </section>
      </main>
    </>
  );
}
