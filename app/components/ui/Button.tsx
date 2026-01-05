import styles from './Button.module.css'

type Props = {
    variant?: 'primary' | 'secondary'
    fullWidth?: boolean
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
                           variant = 'primary',
                           fullWidth = false,
                           children,
                           ...props
                       }: Props) {
    return (
        <button
            {...props}
            className={[
                styles.button,
                variant === 'secondary' && styles.secondary,
                fullWidth && styles.fullWidth,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {children}
        </button>
    )
}
