interface Props {
    label: string;
    onClick: () => void;
}

export default function TextButton({onClick, label}: Props) {
    return (
        <p
            className="text-button"
            onClick={onClick}
        >
            {label}
        </p>
    )
}