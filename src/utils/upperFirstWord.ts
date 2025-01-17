const upperFirstWord = (str: string) => {
    const firstWord = str[0].toUpperCase()
    const rest = str.substring(1)

    return firstWord + rest
}

export default upperFirstWord