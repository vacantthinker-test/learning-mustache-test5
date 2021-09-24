/**
 * reference && stack
 * @param tokens
 * @returns {*[]}
 */
export default function nestedTokens(tokens) {
    let nestedTokens = []
    let collector = nestedTokens
    let stack = []

    let token;
    for (let i = 0; i < tokens.length; i++) {
        token = tokens[i]
        let type = token[0]
        switch (type) {
            case '#':
                collector.push(token)
                stack.push(token)
                token[2] = []
                collector = token[2]
                break
            case '/':
                stack.pop()
                collector = stack.length > 0
                    ? stack[stack.length - 1][2]
                    : nestedTokens
                break
            default:
                collector.push(token)
                break
        }
    }
    // console.log('nestedTokens', nestedTokens)
    return nestedTokens
}