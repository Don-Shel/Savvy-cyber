import { useResponsiveJSX } from "./useResponsiveJSX";

const Component = () => {
    const breakpoints = useResponsiveJSX([480, 768, 1280]);

    return (
        <>
            {breakpoint === 0 && <div class="navbar"></div>}
            {breakpoint === 1 && <section classs="hero"></section>}
            {breakpoint === 2 && <article></article>}
            {breakpoint === 3 && <div class="footer-container"></div>}
        </>
    );
};

export default Component;
