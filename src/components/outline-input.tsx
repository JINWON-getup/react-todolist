interface Props {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export default function OutLineInput({value, placeholder, onChange}: Props) {
    return (
        <input
            type="text"
            className="outline-input"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}