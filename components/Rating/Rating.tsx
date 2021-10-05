import React, { useEffect, useState } from "react"
import { RatingProps } from './Rating.props'
import StarIcon from "./star.svg"
import styles from "./Rating.module.css"
import cn from 'classnames'

export const Rating = ({ isEditable = false, rating, setRating, className, children, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRattingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}
                />
            )
        })
        setRattingArray(updateArray)
    }

    return (
        <div
            {...props}
        >
            {
                ratingArray.map((r, i) => (<span key={i}>{r}</span>))
            }

        </div>
    )
}



