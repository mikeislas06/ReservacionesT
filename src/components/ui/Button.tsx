
type Props = {
    text: string;
    variant: 'primary' | 'secondary' | 'outline' | 'disabled';
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const variants = {
    primary: "bg-orange-primary hover:bg-orange-primary-hover text-white-primary",
    secondary: "bg-white-primary hover:bg-white-primary-hover text-orange-primary",
    outline: "bg-white-primary border border-orange-primary hover:bg-orange-primary-hover text-orange-primary",
    disabled: "bg-white-primary opacity-50 text-gray-400 cursor-not-allowed"
}

export const Button = ({
    text, variant, fullWidth = true, type = "button"
}: Props) => {
    return (
        <button
            className={`${fullWidth ? "w-full" : ""} rounded-lg shadow-lg p-3 ${variants[variant]}`}
            disabled={variant === 'disabled'}
            type={type}
        >{text}</button>
    )
}