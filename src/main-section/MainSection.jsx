import "./main-section.css";

export const MainSection = ({title, children}) => (
    <section className="main-section">
        <h2 className="main-section__title">{title}</h2>
        <div className="main-section__content">
            {children}
        </div>
    </section>
)