export default function Index(props) {
    return (
        <h1>{props.title}</h1>
    )
}

export async function getStaticProps(context) {
    return {
        props: {title: 'hello world!'},
    }
}