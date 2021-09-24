import { getStaticPropsForTina } from 'tinacms';

export async function getSimpleStaticProps(collection, relativePath, fields) {
    const tinaProps = await getStaticPropsForTina({
        query: `
      query Get${collection}Document($relativePath: String!) {
        get${collection}Document(relativePath: $relativePath) {
          data {
            ${fields.join(' ')}
           }
        }
      }
    `,
        variables: {
            relativePath: relativePath,
        },
    })

    return {
        props: {
            ...tinaProps,
        }

    }
}