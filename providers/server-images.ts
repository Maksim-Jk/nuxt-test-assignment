import type {ProviderGetImage} from '@nuxt/image'
import {createOperationsGenerator} from '#image'

const operationsGenerator = createOperationsGenerator()

export const getImage: ProviderGetImage = (
    src,
    {modifiers} = {},
    ctx,
) => {
    const operations = operationsGenerator(modifiers)
    console.log('operations',operations)
    return {
        url: modifiers?.blur ? modifiers?.preview : modifiers?.url,
    }
}
