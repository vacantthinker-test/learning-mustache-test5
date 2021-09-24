/**
 *
 * @param token scopeToken
 * @param data scopeArrayData
 * @returns {string}
 */
import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function parseArray(currentToken, data) {
    let result = ''
    let keyName = currentToken[1] // ['#', 'arr', new Array()]
    let scopeArrayData = lookup(data, keyName);
    for (let i = 0; i < scopeArrayData.length; i++) {
        let itemData = scopeArrayData[i];
        let wrappedScopeData = {
            ...itemData,
            '.': itemData
        }
        let scopeToken = currentToken[2]
        result += renderTemplate(scopeToken, wrappedScopeData)
    }

    return result
}