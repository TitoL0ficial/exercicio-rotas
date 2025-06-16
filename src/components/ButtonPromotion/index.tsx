import './styles.css';

type Props = {
    name: string;
}

export default function ButtonPromotion({ name }: Props) {
    return(
        <div className="btn-promotion">
           {name}
        </div>
    );
}