import "../styles/index.scss";
import Recipes from "./Recipes";

const App = () => {
    return (
        <>
            <section className={"hero"}/>
            <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
            </main>

            <Recipes/>
        </>
    );
};

export default App;