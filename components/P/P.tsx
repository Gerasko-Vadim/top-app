import { PProps } from './P.props'
import styles from "./P.module.css"
import cn from 'classnames'

export const P = ({ size = "m", className, children, ...props }: PProps): JSX.Element => (
    <p className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
    })}
        {...props}

    >{children}</p>
)
