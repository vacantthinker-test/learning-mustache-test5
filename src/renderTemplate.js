import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
    // console.log(tokens)
    // console.log(data)
    let  result = ''

    for (let i = 0; i < tokens.length; i++) {
        let currentToken = tokens[i]

        let type = currentToken[0]
        let value = currentToken[1]
        switch (type) {
            case 'text':
                result += value
                break
            case 'name': // {name: 'mr.L'}
                result += lookup(data, value)
                break
            case '#':
                result += parseArray(currentToken, data)
                break
        }
    }

    return result
}