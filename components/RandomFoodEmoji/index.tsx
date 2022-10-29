import { FunctionComponent, useState, useCallback, useEffect } from "react";

const trashFoodEmojiCodes: string[] = [
    "🌭",
    "🍕",
    "🍟",
    "🍔",
]

const RandomFoodEmoji: FunctionComponent = (): JSX.Element => {
    const [randomEmoji, setRandomEmoji] = useState<string>(trashFoodEmojiCodes[0]);

    const generateIntervalRandomEmoji = useCallback(() => {
        setInterval(() => {
            const randomInt: number = Math.floor(Math.random() * trashFoodEmojiCodes.length)
            const emoji: string = trashFoodEmojiCodes[randomInt]

            setRandomEmoji(emoji);
        }, 2000)
    }, [])

    useEffect(() => {
        generateIntervalRandomEmoji();
    }, [generateIntervalRandomEmoji])

    return (
        <span role="img" aria-label="emoji">{randomEmoji}</span>
    )
}

export default RandomFoodEmoji;