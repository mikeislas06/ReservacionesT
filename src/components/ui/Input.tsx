type Props = {
    placeholder: string;
    name: string;
    type: string;
}

const Input = ({
    placeholder, name, type
}: Props) => {
    return (
        <>
            <label
                htmlFor={name}
                className="text-sm text-text-muted font-medium">
                {placeholder}
            </label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className='bg-background-gray p-2 rounded-lg shadow-md border-[#D1D5DB] border'
            />
        </>
    )
}

export default Input