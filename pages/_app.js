import dynamic from "next/dynamic";
import { TinaEditProvider, setEditing } from "tinacms/dist/edit-state";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const App = ({ Component, pageProps }) => {
    setEditing(true);

    return (
        <>
            <TinaEditProvider
                showEditButton={true}
                editMode={
                    <TinaCMS
                        branch="main"
                        isLocalClient={true}
                        {...pageProps}
                    >
                        {(livePageProps) => (
                            <Component {...livePageProps} />
                        )}
                    </TinaCMS>
                }
            >
                <Component {...pageProps} />
            </TinaEditProvider>
        </>
    );
};

export default App;