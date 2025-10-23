export default function AcordeonComponent() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Java
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Java.</strong> Java es un lenguaje de programación de alto nivel y una plataforma informática, lanzada por primera vez en 1995 por Sun Microsystems (ahora parte de Oracle). Es conocido por ser portátil ("escribe una vez, ejecuta en cualquier lugar"), orientado a objetos, seguro y confiable, y se utiliza para desarrollar una amplia variedad de aplicaciones, desde software de escritorio y móviles hasta aplicaciones empresariales y web. 

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Python
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Python</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        SQL
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>SQL</strong> SQL (Lenguaje de Consulta Estructurada) es un lenguaje de programación estándar utilizado para gestionar y manipular datos en bases de datos relacionales. Permite a los usuarios realizar operaciones como crear, buscar, actualizar, insertar y eliminar datos; y administrar la base de datos en su conjunto. SQL se usa en sistemas como Microsoft SQL Server, MySQL y Oracle, y es fundamental en muchas aplicaciones, desde redes sociales hasta sistemas financieros. 
                    </div>
                </div>
            </div>
        </div>
    )
}
