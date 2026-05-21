type Props = {
    id: string;
    name: string;
    label: string;
}

const Checkbox = ({
    id, name, label
}: Props) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <input
                type="checkbox"
                className="accent-orange-primary size-4"
                id={id}
                name={name}
            />
            <label htmlFor={id} className="text-sm text-text-muted">{label}</label>
        </div>
    )
}

export default Checkbox