import { getStaticPropsForTina } from 'tinacms';

export async function getSimpleStaticProps(query) {
    const tinaProps = await getStaticPropsForTina({
        query: `
      query Get${query.collection}Document($relativePath: String!) {
        get${query.collection}Document(relativePath: $relativePath) {
          data {
            ${query.fields.join(' ')}
           }
        }
      }
    `,
        variables: {
            relativePath: query.relativePath,
        },
    })

    return {
        props: {
            ...tinaProps,
        }

    }
}