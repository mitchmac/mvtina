import { getSimpleStaticProps } from '../lib/util.js'

export default function Index(props) {
    const {title, subTitle} = props.data.getPageDocument.data;
    return (
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </>
    )
}

export async function getStaticProps(context) {
    return await getSimpleStaticProps({collection: 'Page', relativePath: 'index.md', fields: ['title', 'subTitle']})
}