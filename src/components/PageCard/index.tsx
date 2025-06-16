import './styles.css';

type Props = {
    name: string;
}

export default function PageCard({ name }: Props) {
    return(
        <div className="page-card container">
            <h2>{name}</h2>
        </div>
    );
}