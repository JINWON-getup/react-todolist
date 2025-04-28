interface Props {
    onClick: () => void;
    label: string;
}

export default function PrimaryButton({onClick, label}: Props) {
    return (
        <button
            className="primary-button"
            onClick={onClick}
        >
            {label}
        </button>
    )
}