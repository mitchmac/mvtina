import { getStaticPropsForTina } from 'tinacms'

export default function Index(props) {
    return (
        <h1>{props.title}</h1>
    )
}

export async function getStaticProps(context) {
    // Query the filesystem for the content of the page.
    // getPageDocument schema comes from .tina/schema.ts
    const tinaProps = await getStaticPropsForTina({
        query: `
      query GetPageDocument($relativePath: String!) {
        getPageDocument(relativePath: $relativePath) {
          data {
            title
           }
        }
      }
    `,
        variables: {
            relativePath: 'index.md',
        },
    })

    return {
        props: {
            ...tinaProps.data.getPageDocument.data,
            ...tinaProps,
        }

    }
}