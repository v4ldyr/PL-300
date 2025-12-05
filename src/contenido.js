/*const contenido = {
    pregunta: {
        titulo: "pregunta",
        titulo2: "solucion"
    }
};*/

const contenido = {
    contenedor1: {
        pregunta: `
        <div>
            <p class="text-sm text-gray-400 mb-4">
                HOTSPOT -
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Planea crear el modelo de Power BI que se muestra en la ilustración. (Haga clic en la pestaña
                "Ilustración").
            </p>
            <div>
                <div class="mx-auto">
                    <img src="img/1/p1.1.jpg" class="object-cover shadow-lg" />
                </div>
                <p class="text-sm text-gray-400 mt-4 mb-4">
                    Los datos tienen los siguientes requisitos de actualización:
                </p>
                <ul class="list-disc list-inside md:list-disc text-sm text-gray-400">
                    <li>Customer debe refrescarse diariamente.</li>
                    <li>Date debe actualizarse cada tres años.</li>
                    <li>Sales deben actualizarse casi en tiempo real.</li>
                    <li>SalesAggregate debe actualizarse una vez por semana.</li>
                </ul>
                <p class="text-sm text-gray-400 mb-4 mt-4">
                    Debe seleccionar los modos de almacenamiento de las tablas. La solución debe cumplir los siguientes
                    requisitos:
                </p>
                <ul class="list-disc list-inside md:list-disc text-sm text-gray-400">
                    <li>Minimizar los tiempos de carga de los elementos visuales.</li>
                    <li>Asegúrese de que los datos se carguen en el modelo según los requisitos de actualización.</li>
                </ul>
                <div></div>
                <p class="text-sm text-gray-400 mt-4">
                    ¿Qué modo de almacenamiento debería seleccionar para cada tabla? Para responder, seleccione las
                    opciones correspondientes en el área de respuestas.
                </p>
                <p class="text-sm text-gray-400 mt-4">
                    <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
                </p>
                <div class="w-50 mx-auto mt-4 mb-4">
                    <img src="img/1/p1.2.png" class="object-cover shadow-lg" />
                </div>
                <!--<div>
                                        </div>-->
            </div>
        </div>
        `,
        solucion: `<div
                            class="bg-emerald-800/30 text-gray-100 px-4 py-4 max-w-7xl mx-auto rounded-lg border border-gray-700 overflow-hidden ring-2 ring-emerald-500/50">
                            <div class="w-50 mx-auto mb-4">
                                <img src="img/1/s1.png" class="object-cover shadow-lg" />
                            </div>
                            <p class="text-sm text-gray-400 mt-4">droplist 1: Dual -</p>
                            <p class="text-sm text-gray-400 mt-4">
                                Customer debe utilizar el modo de almacenamiento dual.
                            </p>
                            <p class="text-sm text-gray-400 mt-4">
                                Dual: Las tablas con esta configuración pueden funcionar como almacenadas en caché o no,
                                según el contexto de la consulta enviada al conjunto de datos de Power BI. En algunos
                                casos, las consultas se procesan desde datos almacenados en caché. En otros, se procesan
                                mediante una consulta a petición en la fuente de datos. Nota: Establezca la propiedad
                                Modo de almacenamiento en uno de estos tres valores: Importar, DirectQuery y Dual.
                            </p>
                            <p class="text-sm text-gray-400 mt-4">droplist 2: Dual -</p>
                            <p class="text-sm text-gray-400 mt-4">
                                Puede configurar las tablas de dimensiones (Customer, Geography, y Date) en Dual para
                                reducir la cantidad de relaciones limitadas en el conjunto de datos y mejorar el
                                rendimiento.
                            </p>
                            <p class="text-sm text-gray-400 mt-4">droplist 3: DirectQuery -</p>
                            <p class="text-sm text-gray-400 mt-4">
                                Sales debe utilizar el modo de almacenamiento DirectQuery. DirectQuery: Las tablas con
                                esta configuración no se almacenan en caché. Las consultas que envíe al conjunto de
                                datos de Power BI (por ejemplo, consultas DAX) y que devuelvan datos de... Las tablas de
                                DirectQuery solo se pueden completar mediante consultas bajo demanda a la fuente de
                                datos. Las consultas que se envían a la fuente de datos utilizan el lenguaje de consulta
                                de dicha fuente, por ejemplo, SQL.
                            </p>
                            <p class="text-sm text-gray-400 mt-4">droplist 4: Import -</p>
                            <p class="text-sm text-gray-400 mt-4">
                                Import: Las tablas importadas con esta configuración se almacenan en caché. Las
                                consultas enviadas al conjunto de datos de Power BI que devuelven datos de las tablas de
                                importación solo se pueden ejecutar desde los datos almacenados en caché.
                            </p>
                            <p class="text-sm text-gray-400 mt-4 font-bold">Nota:-</p>
                            <p class="text-sm text-gray-400 mt-4">Modo Dual (Compuesto):</p>
                                <p class="text-sm text-gray-400 mt-4">
                                El modo de almacenamiento dual se encuentra entre Import y DirectQuery. Es un enfoque híbrido, como la importación de datos, el modo de almacenamiento dual
                                almacena en caché los datos en la tabla. Sin embargo, le deja a Power BI determinar la mejor manera de
                                de consultar la tabla dependiendo del contexto de la consulta.
                                </p>
                                <ul class="list-inside text-sm text-gray-400 mb-4 mt-4">
                                <li>1) Sales debe actualizarse en tiempo casi real por lo que es "Direct Query"</li>
                                <li>2) Sales Aggregate es una vez por semana, por lo que es "Import" (también se requiere rendimiento)</li>
                                <li>3) Tanto Date como Customer tienen relación con Sales y SalesAggregate por lo que son tablas de modo "Dual"
                                porque admiten el rendimiento de DirectQuery (Sales) e Import (SalesAggregate)</li>
                                
                            </u>
                           
                            <div>
                                <a
                                        class="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                                        href="https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-storage-mode" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        Referencia
                                </a>
                            </div>
                        </div>`
    },
    contenedor2: {
        pregunta: `
        <div>
            <p class="text-sm text-gray-400 mb-4">
                Tiene una aplicación de gestión de proyectos alojada íntegramente en Microsoft Teams. La aplicación se
                desarrolló con Microsoft Power Apps. Necesita crear un informe de Power BI que se conecte a la
                aplicación de gestión de proyectos. ¿Qué conector deberías seleccionar?
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Microsoft Teams Personal Analytics</li>
                <li>B. SQL Server database</li>
                <li>C. Dataverse</li>
                <li>D. Dataflows</li>
            </ul>
        </div>
        `,
        solucion: `
        <div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">
                La categoría Power Platform proporciona las siguientes conexiones de datos
            </p>
            <p class="text-sm text-gray-400 mb-4">modelos semanticos de Power BI -</p>
            <p class="text-sm text-gray-400 mb-4">flujos de datos de Power BI -</p>
            <p class="text-sm text-gray-400 mb-4">Common Data Service (heredado)</p>
            <p class="text-sm text-gray-400 mb-4">Dataverse -</p>
            <p class="text-sm text-gray-400 mb-4">Flujos de datos -</p>
            <p class="text-sm text-gray-400 mb-4">
                Otras fuentes de datos incluyen Microsoft Teams Personal Analytics (Beta).
            </p>
            <p class="text-sm text-gray-400">
                Puede utilizar la plantilla de Microsoft Power BI para importar datos a Power BI desde Project para la
                Web y Proyecto en línea. Cuando utilice la plantilla, estará conectado a la instancia de Microsoft
                Dataverse, donde se almacenan los datos de la aplicación web de Microsoft Project.
            </p>
            <a
                class="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-data-sources" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>
        `
    },
    contenedor3: {
        pregunta: `
        <div>
            <p class="text-sm text-gray-400 mb-4">
                Para el departamento de ventas de su empresa, publique un informe de Power BI que importe datos desde un
                archivo de Microsoft Excel ubicado en una carpeta de Microsoft SharePoint. El modelo de datos contiene
                varias medidas.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe crear un informe de Power BI a partir de los datos existentes. La solución debe minimizar el
                esfuerzo de desarrollo. ¿Qué tipo de origen de datos debe utilizar?
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. conjunto de datos Power BI (Power BI dataset)</li>
                <li>B. una carpeta SharePoint</li>
                <li>C. flujo de datos Power (Power BI dataflows) BI</li>
                <li>D. libro de trabajo en Excel</li>
            </ul>
        </div>
        `,
        solucion: `
        <div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respeusta Correcta: A</p>
            <p class="text-sm text-gray-400">
                porque el caso indica que ya hay un informe publicado y el datamodel contiene medidas. por lo tanto, y
                para poder utilizar las medidas en el datamodel, debe conectarse al conjunto de datos existente (que fue
                creado al publicar el informe) en lugar de comenzar desde cero con los archivos de la carpeta de
                SharePoint.
            </p>
        </div>
        `
    },
    contenedor4: {
        pregunta: `
        <div>
            <p class="text-sm text-gray-400 mb-4">
                Se importan dos tablas de Microsoft Excel denominadas Customer y Address en Power Query.
            </p>
            <p class="text-sm text-gray-400 mb-4">Customer contiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400">
                <li>Customer ID</li>
                <li>Customer Name</li>
                <li>Phone</li>
                <li>Email Address</li>
                <li>Address ID</li>
            </ul>
            <p class="text-sm text-gray-400 mt-4 mb-4">Address contiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400">
                <li>Address ID</li>
                <li>Address Line 1</li>
                <li>Address Line 2</li>
                <li>City</li>
                <li>State/Region</li>
                <li>Country</li>
                <li>Postal Code</li>
            </ul>
            <p class="text-sm text-gray-400 mt-4 mb-4">
                Cada ID de Customer representa a un cliente único en la tabla Customer. Cada ID de Address representa
                una dirección única en la tabla Address. Debe crear una consulta que tenga una fila por cliente. Cada
                fila debe contener City, Estate/Region y Country para cada cliente. ¿Qué debes hacer?
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Combinar (Merge) las tablas Customer y Address.</li>
                <li>B. Agrupe (Group) las tablas Customer y Address por la columna ID de Address.</li>
                <li>C. Transponer (Transpose) las tablas Customer y Address.</li>
                <li>D. Anexe (Append) las tablas Cliente y Dirección.</li>
            </ul>
        </div>
        `,
        solucion: `
        <div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Recuerde que Merge es JOIN, APPEND es UNION</p>
            <p class="text-sm text-gray-400 mb-4">
                Una operación de Combinación (Merge) de consultas une dos tablas existentes en función de los valores
                coincidentes de una o varias columnas. Puede optar por utilizar diferentes tipos de Joins, dependiendo
                de la salida que desee.
            </p>
            <div class="mx-auto">
                <img src="img/1/s4.jpg" class="object-cover shadow-lg" />
            </div>
            <div>
                <a
                    class="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                    href="https://learn.microsoft.com/es/power-query/merge-queries-overview" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clip-rule="evenodd" />
                    </svg>
                    Referencia
                </a>
            </div>
        </div>
        `
    },
    contenedor5: {
        pregunta: `
        <div>
            <p class="text-sm text-gray-400 mb-4">
                HOTSPOT -
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Tiene dos bases de datos Azure SQL que contienen las mismas tablas y columnas.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Para cada base de datos, se crea una consulta que recupera datos de una tabla denominada Customer.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe combinar las tablas Customer en una sola tabla. La solución debe minimizar el tamaño del modelo de
                datos y admitir la actualización programada en powerbi.com.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                ¿Qué debes hacer? Para responder, seleccione las opciones apropiadas en el área de respuesta.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe crear un informe de Power BI a partir de los datos existentes. La solución debe minimizar el
                esfuerzo de desarrollo. ¿Qué tipo de origen de datos debe utilizar?
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/p5.jpg" class="object-cover shadow-lg" />
            </div>
        </div>
        `,
        solucion: `
        <div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto mb-4">
                <img src="img/1/s5.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">droplist 1: Anexar (Append) consultas como nuevas -</p>
            <p class="text-sm text-gray-400 mb-4">
                Cuando tenga filas de datos adicionales que desee agregar a una consulta existente, anexe la consulta.
            </p>
            <p class="text-sm text-gray-400 mb-4">Hay dos opciones de datos anexados:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>
                    Anexar (Append) consultas como nuevas muestra el cuadro de diálogo Anexar para crear una nueva
                    consulta anexando varias tablas.
                </li>
                <li>
                    Anexar (Append) consultas muestra el cuadro de diálogo Anexar para agregar tablas adicionales a la
                    consulta actual.
                </li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                Incorrecto: Cuando tienes una o más columnas que deseas agregar a otra consulta, combinas las consultas.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Droplist 2: Deshabilitar la carga de la consulta en el modelo de datos -
            </p>
            <p class="text-sm text-gray-400 mb-4">
                De forma predeterminada, todas las consultas del Editor de consultas se cargarán en la memoria de Power
                BI Model. Puede deshabilitar la carga para algunas consultas, especialmente las consultas que se
                utilizan como transformación intermedia para producir la consulta final para el modelo.
            </p>
            <p class="text-sm text-gray-400">
                Deshabilitar Load no significa que la consulta no se actualizará, solo significa que la consulta no se
                cargará en la memoria. Al hacer clic en Actualizar modelo en Power BI, o cuando se produce una
                actualización programada, incluso las consultas marcadas como Desactivar carga se actualizarán, pero sus
                datos se utilizarán como fuente intermedia para otras consultas en lugar de cargarse directamente en el
                modelo. Este es un consejo de ajuste de rendimiento muy básico, pero muy importante cuando su modelo
                Power BI crece cada vez más.
            </p>
            <a
                class="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://docs.microsoft.com/es/power-query/append-queries" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <a
                class="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://radacad.com/performance-tip-for-power-bi-enable-load-sucks-memory-up" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>
        `
    },
    contenedor6: {
        pregunta: `
        <div>
            <p class="text-sm text-gray-400 mb-4">
                En el Editor de Power Query, tiene tres consultas llamadas ProductCategory, ProductSubCategory y
                Product.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cada Producto tiene un ProductSubCategory.</p>
            <p class="text-sm text-gray-400 mb-4">No todos los ProductSubCategory tienen un ProductCategory padre.</p>
            <p class="text-sm text-gray-400 mb-4">
                Debe combinar las tres consultas en una sola consulta. La solución debe garantizar el mejor rendimiento
                en Power Query.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                ¿Cómo fusionar las tablas? Para responder, arrastre los tipos de combinación adecuados a las consultas
                correctas. Cada tipo de combinación puede usarse una vez, más de una vez o no usarse en absoluto. Puede
                que tenga que arrastrar la barra de división entre paneles o desplazarse para ver el contenido.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Seleccionar y colocar:</p>
            <div class="mx-auto mb-4">
                <img src="img/1/p6.jpg" class="object-cover shadow-lg" />
            </div>
        </div>
        `,
        solucion: `
        <div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/s6.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: Inner -</p>
            <p class="text-sm text-gray-400 mb-4">Cada Product tiene un ProductSubCategory.</p>
            <p class="text-sm text-gray-400 mb-4">Se necesita una unión (join) estándar.</p>
            <p class="text-sm text-gray-400 mb-4">
                Uno de los tipos de combinación (merge) disponibles en el cuadro de diálogo Combinar de Power Query es una
                combinación interna (inner join), filas coincidentes de las tablas izquierda y derecha.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Left outer -</p>
            <p class="text-sm text-gray-400 mb-4">
                No todos los ProductSubCategory tienen un ProductCategory primario.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Uno de los tipos de combinación disponibles (join kinds) en el cuadro de diálogo Combinar (merge) de
                Power Query es una combinación externa izquierda (left outer join), que mantiene todas las filas de la
                tabla izquierda e introduce las filas coincidentes de la tabla derecha.
            </p>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://docs.microsoft.com/es/power-query/merge-queries-inner" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/merge-queries-left-outer" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>
        `
    },
    contenedor7: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Está creando un informe de Power BI que utiliza datos de una base de datos de Azure SQL denominada erp1.
            </p>
            <p class="text-sm text-gray-400 mb-4">Las siguientes tablas se importan.</p>
            <div class="mx-auto mb-4">
                <img src="img/1/p7.jpg" class="object-cover shadow-lg" />
            </div>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400">
                <li>
                    Pedidos (Orders) vendidos a lo largo del tiempo que incluyen una medida del valor total del pedido.
                </li>
                <li>Pedidos (Orders) por atributos de productos vendidos.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                La solución debe minimizar los tiempos de actualización al interactuar con las imágenes del informe. Qué
                debe hacer primero?
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. En Power Query, combine (merge) la consulta Order Line Items y la consulta Products.</li>
                <li>
                    B. Cree una columna calculada que agregue una lista de categorías de productos a la tabla Orders
                    mediante una función DAX.
                </li>
                <li>C. Calcular el recuento de pedidos por producto mediante una función DAX.</li>
                <li>D. Desde Power Query, combine la consulta Orders y la consulta Order Line Items.</li>
            </ul>
        </div>`,
        solucion: `
    <div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: : D</p>
            <p class="text-sm text-gray-400">
                Una operación de combinación (merge) de consultas une dos tablas existentes en función de los valores
                coincidentes de una o varias columnas.
            </p>
            <p class="text-sm text-gray-400">unir (join) las tablas Orders y the Orders Line Items.</p>
            <a
                class="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://docs.microsoft.com/es/power-query/merge-queries-overview"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor8: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Tiene un sitio de Microsoft SharePoint Online que contiene varias bibliotecas de documentos.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Una de las bibliotecas de documentos contiene informes de fabricación guardados como archivos de
                Microsoft Excel. Todos los informes de fabricación tienen la misma estructura de datos.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe utilizar Power BI Desktop para cargar sólo los informes de fabricación en una tabla para su
                análisis.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debes hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>
                    A. Obtenga datos de una carpeta de SharePoint e introduzca la dirección URL del sitio Seleccione
                    Transformar y, a continuación, filtre por la ruta de carpeta a la biblioteca de informes de
                    fabricación.
                </li>
                <li>
                    B. Obtenga datos de una lista de SharePoint e introduzca la dirección URL del sitio. Seleccione
                    Combinar y transformar y, a continuación, filtre por la ruta de la carpeta a la biblioteca de
                    informes de fabricación.
                </li>
                <li>
                    C. Obtener datos de una carpeta de SharePoint, escribir la dirección URL del sitio y, a
                    continuación, seleccionar Combinar y cargar
                </li>
                <li>
                    D. Obtener datos de una lista de SharePoint, escribir la dirección URL del sitio y, a continuación,
                    seleccionar Combinar y cargar
                </li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">
                Obtener datos de la carpeta de SharePoint + seleccione Combinar y cargar para cargar los datos de todos
                los archivos de la carpeta de SharePoint directamente en su aplicación.
            </p>
            <p class="text-sm text-gray-400 mb-4">Nota: Conectarse a una carpeta de SharePoint desde Power Query Desktop</p>
            <p class="text-sm text-gray-400 mb-4">Para conectarse a una carpeta de SharePoint:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. En Obtener datos, seleccione la carpeta SharePoint.</li>
                <li>
                    2. Pegue la dirección URL del sitio de SharePoint que copió en «Determinar la dirección URL del
                    sitio en el cuadro de texto Dirección URL del sitio en el cuadro de diálogo de la carpeta
                    SharePoint». En este ejemplo, la dirección URL del sitio es
                    https://contoso.sharepoint.com/marketing/data. Si la dirección URL del sitio introducida no es
                    válida, aparecerá un icono de advertencia. icono de advertencia junto al cuadro de texto URL.
                </li>
                <li>3. Selección de carpeta de SharePoint y Aceptar para continuar.</li>
                <li>
                    4. Si es la primera vez que visita esta dirección de sitio, seleccione el método de autenticación
                    adecuado. Introduzca sus credenciales y elija a qué nivel aplicar esta configuración. A
                    continuación, seleccione Conectar.
                </li>
                <li>
                    5. Cuando selecciona la carpeta de SharePoint que desea utilizar, se muestra la información de
                    archivo sobre todos los archivos de esa carpeta de SharePoint. Además, también se muestra la
                    información de los archivos de las subcarpetas.
                </li>
                <li>
                    6. Seleccione Combinar y transformar datos para combinar los datos en los archivos de la carpeta de
                    SharePoint seleccionada y cargar los datos en el «Power Query Editor» para su edición. O seleccione
                    Combinar y cargar para cargar los datos de todos los archivos de la carpeta de SharePoint
                    directamente en la aplicación.
                </li>
            </ul>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://docs.microsoft.com/es/power-query/connectors/sharepointfolder"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor9: {
        pregunta: `<p class="text-sm text-gray-400 mb-4">
            Tiene un libro de Microsoft Excel que contiene dos hojas denominadas Sheet1 y Sheet2.
        </p>
        <p class="text-sm text-gray-400 mb-4">Sheet1 contiene la siguiente tabla denominada Table1.</p>
        <div class="mx-auto mb-4">
            <img src="img/1/p9.1.jpg" class="object-cover shadow-lg" />
        </div>
        <p class="text-sm text-gray-400 mb-4">Sheet2 contiene la siguiente tabla denominada Table2.</p>
        <div class="mx-auto mb-4">
            <img src="img/1/p9.2.jpg" class="object-cover shadow-lg" />
        </div>
        <p class="text-sm text-gray-400 mb-4">
            Es necesario utilizar «Power Query Editor» para combinar los productos de Table1 y Table2 en la siguiente
            tabla que tiene una columna que no contiene valores duplicados.
        </p>
        <div class="mx-auto mb-4">
            <img src="img/1/p9.3.jpg" class="object-cover shadow-lg" />
        </div>
        <p class="text-sm text-gray-400 mb-4">
            ¿Qué tres acciones debe realizar en secuencia? Para responder, mueva las acciones apropiadas de la lista de
            acciones al área de respuesta y organícelas en el orden correcto.
        </p>
        <p class="text-sm text-gray-400 mb-4">Seleccionar y colocar:</p>
        <div class="mx-auto mb-4">
            <img src="img/1/p9.4.jpg" class="object-cover shadow-lg" />
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto mb-4">
                <img src="img/1/p9.5.jpg" class="object-cover shadow-lg" />
            </div>
            <a
            class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
            href="https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-shape-and-combine-data"
            target="_blank"
            rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd" />
            </svg>
            Referencia
        </a>
        </div>
        `
    },
    contenedor10: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Tiene un archivo CSV que contiene quejas de los usuarios. El archivo contiene una columna denominada
                Logged (Registrado). Logged contiene la fecha y hora en que se produjo cada queja. Los datos en Logged
                tienen el siguiente formato: 2018-12-31 a las 08:59
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe poder analizar las quejas por la fecha registrada y usar una jerarquía de fechas incorporada.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debes hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>
                    A. Aplique una transformación para extraer los últimos 11 caracteres de la columna Logged y
                    establezca el tipo de datos de la nueva columna en Date.
                </li>
                <li>B. Cambie el tipo de datos de la columna Logged a Date.</li>
                <li>C. Divida la columna Registrado utilizando «at» como delimitador.</li>
                <li>D. Aplique una transformación para extraer los primeros 11 caracteres de la columna Logged.</li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Extraiga la fecha, que son los primeros 11 caracteres.</p>
            <p class="text-sm text-gray-400 mb-4">Los archivos CSV no tienen tipos de datos.</p>
            <p class="text-sm text-gray-400">
                Nota: Un CSV es un archivo de valores separados por comas, que permite guardar los datos en un formato
                tabular. Los CSV parecen una hoja de cálculo común pero con una extensión .csv. Los archivos CSV se
                pueden utilizar con la mayoría de los programas de hojas de cálculo, como Microsoft Excel o Google
                Spreadsheets.
            </p>
        </div>`
    },
    contenedor11: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Tiene un archivo de Microsoft Excel en una carpeta de Microsoft OneDrive
            </p>
            <p class="text-sm text-gray-400 mb-4">
                El archivo debe importarse a un conjunto de datos (dataset) de Power BI.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe asegurarse de que el conjunto de datos (dataset) se pueda actualizar en powerbi.com.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                ¿Cuáles son los dos conectores que puede utilizar para conectarse al archivo? Cada respuesta correcta
                presenta una solución completa.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Libro de Excel.</li>
                <li>B. Texto/CSV.</li>
                <li>C. Carpeta.</li>
                <li>D. Carpeta Sharepoint</li>
                <li>E. Web</li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A & C</p>
            <p class="text-sm text-gray-400">Conectarse a un libro de Excel desde Power Query Desktop</p>
            <p class="text-sm text-gray-400">Para realizar la conexión desde Power Query Desktop:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Seleccione la opción Excel en la selección del conector.</li>
                <li>2. Busque y seleccione el libro de Excel que desea cargar. A continuación, seleccione Abrir.</li>
                <li>3. Etc.</li>
                <li>4. Capacidades de conector de carpeta admitidas</li>
            </ul>
            <p class="text-sm text-gray-400">Ruta de la carpeta -</p>
            <p class="text-sm text-gray-400">Combinar -</p>
            <p class="text-sm text-gray-400">Combinar y cargar -</p>
            <p class="text-sm text-gray-400 mb-4">Combinar y transformar -</p>
            <p class="text-sm text-gray-400 mb-4">Conectarse a una carpeta desde Power Query Online</p>
            <p class="text-sm text-gray-400 mb-4">Para conectarse a una carpeta desde Power Query Online:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Seleccione la opción Carpeta en la selección del conector.</li>
                <li>2. Escriba la ruta de la carpeta que desea cargar.</li>
            </ul>
            <div class="mx-auto mb-4">
                <img src="img/1/s11.jpg" class="object-cover shadow-lg" />
            </div>
            <a
            class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
            href="https://learn.microsoft.com/es-es/power-query/connectors/excel"
            target="_blank"
            rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd" />
            </svg>
            Referencia
        </a>
        </div>`
    },
    contenedor12: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">Está perfilando datos mediante "Power BI Editor".</p>
            <p class="text-sm text-gray-400 mb-4">
                Tiene una tabla denominada Reports que contiene una columna denominada State. La distribución y las
                métricas de datos de calidad para los datos en State se muestran en la siguiente exposición.
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/p12.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Utilice los menús desplegables para seleccionar la opción de respuesta que completa cada instrucción en
                función de la información presentada en el gráfico.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p12.2.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto mb-4">
                <img src="img/1/s12.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Droplist 1: 69 -</p>
            <p class="text-sm text-gray-400 mb-4">69 distinct/different values.</p>
            <p class="text-sm text-gray-400 mb-4">
                Nota: La distribución de columnas le permite obtener una idea de la distribución general de valores
                dentro de una columna en las previsualizaciones de datos, incluido el recuento de valores distintos
                (número total de valores diferentes encontrados en una columna determinada) y valores únicos (número
                total de valores que solo aparecen una vez en una columna determinada).
            </p>
            <p class="text-sm text-gray-400 mb-4">Droplist 2: 4 -</p>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/data-profiling-tools"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor13: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">Tiene dos archivos CSV denominados Products y Categories.</p>
            <p class="text-sm text-gray-400 mb-4">El archivo Products contiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>ProductID.</li>
                <li>ProductName.</li>
                <li>SupplierID.</li>
                <li>CategoryID.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El archivo Categories contiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>CategoryID.</li>
                <li>CategoryName.</li>
                <li>CategoryDescription.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                Desde Power BI Desktop, puede importar los archivos al Power BI Editor.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Debe crear un conjunto de datos (dataset) de Power BI que contenga una sola tabla denominada Product. La
                tabla Product incluye las siguientes columnas:
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>ProductID.</li>
                <li>ProductName.</li>
                <li>SupplierID.</li>
                <li>CategoryID.</li>
                <li>CategoryName.</li>
                <li>CategoryDescription.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                ¿Cómo debe combinar las consultas y qué debe hacer en la consulta Categories? Para responder, seleccione
                las opciones apropiadas en el área de respuesta.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mx-auto mb-4">
            <img src="img/1/p13.jpg" class="object-cover shadow-lg" />
        </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto mb-4">
                <img src="img/1/s13.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Droplist 1: Combinar/Merge</p>
            <p class="text-sm text-gray-400 mb-4">
                Hay dos formas principales de combinar consultas: combinar/merge y anexar/append.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Cuando tiene una o más columnas que desea agregar a otra consulta, combina/merge las consultas.</li>
                <li>
                    Cuando tenga filas de datos adicionales que desee agregar a una consulta existente, anexe/append la
                    consulta.
                </li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                Droplist 2: Desactivar la carga de la consulta/Disable the query load - -
            </p>
            <p class="text-sm text-gray-400 mb-4">Gestión de la carga de consultas -</p>
            <p class="text-sm text-gray-400 mb-4">
                En muchas situaciones, tiene sentido desglosar las transformaciones de datos en múltiples consultas. Un
                ejemplo popular es la combinacion/merge donde se juntan dos consultas en una para hacer esencialmente
                una combinación. En este tipo de situaciones, algunas consultas no son relevantes para cargar en
                Desktop, ya que son pasos intermedios, mientras que aún son necesarios para que las transformaciones de
                datos funcionen correctamente. Para estas consultas, puede asegurarse de que no se carguen en el Desktop
                desmarcando 'Habilitar carga' en el menú contextual de la consulta en el Desktop o en la pantalla
                Propiedades:
            </p>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-shape-and-combine-data"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor14: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Tiene una base de datos Azure SQL que contiene transacciones de ventas. La base de datos se actualiza
                con frecuencia.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Es necesario generar informes a partir de los datos para detectar transacciones fraudulentas. Los datos
                deben estar visibles dentro de los cinco minutos posteriores a una actualización.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe configurar la conexión de datos?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregue una instrucción SQL.</li>
                <li>B. Establezca el valor de Tiempo de espera del comando en minutos.</li>
                <li>C. C. Set Data Connectivity mode to Import.</li>
                <li>D. Establezca el modo de conectividad de datos en DirectQuery.</li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">
                DirectQuery: No se importa ni se copia ningún dato en Power BI Desktop. Para las fuentes relacionales,
                las tablas y columnas seleccionadas aparecen en la lista de Campos. Para las fuentes multidimensionales,
                como SAP Business Warehouse, las dimensiones y medidas del cubo seleccionado aparecen en la lista de
                Campos. A medida que creas o interactúas con una visualización, Power BI Desktop consulta directamente
                la fuente de datos subyacente, por lo que siempre estás viendo información actualizada.
            </p>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-use-directquery"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor15: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">ARRASTRAR Y SOLTAR -</p>
            <p class="text-sm text-gray-400 mb-4">Tienes una carpeta que contiene 100 archivos CSV.</p>
            <p class="text-sm text-gray-400 mb-4">
                Debes hacer que los metadatos de los archivos estén disponibles como un único conjunto de datos
                utilizando Power BI.
            </p>
            <p class="text-sm text-gray-400 mb-4">La solución no debe almacenar los datos de los archivos CSV.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuáles son las tres acciones que debes realizar en secuencia?</p>
            <p class="text-sm text-gray-400 mb-4">
                Para responder, mueve las acciones apropiadas de la lista de opciones al área de respuesta y ordénalas
                en el orden correcto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Selecciona y coloca:</p>
            <div class="mx-auto mb-4">
                <img src="img/1/p15.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto mb-4">
                <img src="img/1/s15.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Paso 1: Desde Power BI Desktop, selecciona Obtener datos (Get Data) y luego elige Carpeta (Folder).
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Abre Power BI Desktop, selecciona Obtener datos\all (Get Data\all) y elige Carpeta (Folder) de entre
                todas las opciones disponibles en el panel izquierdo.
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/s15.2.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Ingresa la ruta de la carpeta, selecciona Aceptar (OK) y luego elige Transformar datos (Transform data)
                para ver los archivos de la carpeta en el Editor de Power Query.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Paso 2: Desde el Editor de Power Query, expande la columna “Attributes” (Atributos).
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Paso 3: Desde el Editor de Power Query, combina la columna “Content” (Contenido).
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/s15.3.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Comportamiento al combinar archivos -</p>
            <p class="text-sm text-gray-400 mb-4">
                Para combinar archivos binarios en el Editor de Power Query, selecciona la columna Content (la etiqueta
                de la primera columna) y luego ve a Inicio -> Combinar archivos (Home -> Combine Files).
            </p>
            <p class="text-sm text-gray-400 mb-4">
                También puedes simplemente seleccionar el icono de Combinar archivos (Combine Files) que aparece junto a
                la columna Content (Contenido).
            </p>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-combine-binaries"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor16: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Un desarrollador de inteligencia de negocios (BI) crea un flujo de datos en Power BI que usa DirectQuery
                para acceder a tablas de un servidor Microsoft SQL local. El Motor de Cálculo Mejorado para Flujos de
                Datos está activado para el flujo de datos.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Usted necesita usar el flujo de datos en un informe. La solución debe cumplir con los siguientes
                requisitos:
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Minimizar las operaciones de procesamiento en línea.</li>
                <li>Minimizar los tiempos de cálculo y los tiempos de representación para los elementos visuales.</li>
                <li>Incluir datos del año actual, hasta y incluido el día anterior.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear una conexión de flujos de datos que tenga seleccionado el modo DirectQuery..</li>
                <li>
                    B. Crear una conexión de flujos de datos que tenga seleccionado el modo DirectQuery y configurar una
                    conexión de puerta de enlace (gateway) para el conjunto de datos.
                </li>
                <li>
                    C. Crear una conexión de flujos de datos que tenga seleccionado el modo Importar (Import) y
                    programar una actualización diaria.
                </li>
                <li>
                    D. Crear una conexión de flujos de datos que tenga seleccionado el modo Importar (Import) y crear
                    una solución de «Microsoft Power Automate» para actualizar los datos cada hora..
                </li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Una actualización diaria es adecuada.</p>
            <p class="text-sm text-gray-400 mb-4">
                Cuando configura una programación de actualización, Power BI se conecta directamente a las fuentes de
                datos utilizando la información de conexión y las credenciales en el conjunto de datos para consultar
                los datos actualizados, y luego carga los datos actualizados en el conjunto de datos. Cualquier
                visualización en informes y paneles basados en ese conjunto de datos en el servicio de Power BI también
                se actualiza.
            </p>
            <a
                class="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/refresh-desktop-file-local-drive"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor17: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">ARRASTRAR Y SOLTAR</p>
            <p class="text-sm text-gray-400 mb-4">
                Usted publica un conjunto de datos que contiene datos de una base de datos local de Microsoft SQL
                Server.
            </p>
            <p class="text-sm text-gray-400 mb-4">El conjunto de datos (dataset) debe actualizarse diariamente.</p>
            <p class="text-sm text-gray-400 mb-4">
                Debe asegurarse de que el servicio de Power BI pueda conectarse a la base de datos y actualizar el
                conjunto de datos.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                ¿Cuáles son las cuatro acciones que debe realizar en secuencia? Para responder, mueva las acciones
                apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Agregar el propietario del conjunto de datos a la fuente de datos.</li>
                <li>Configurar una puerta de enlace de datos local.</li>
                <li>Configurar una puerta de enlace de datos de red virtual.</li>
                <li>Agregar uan fuente de datos.</li>
                <li>Configurar una actualización programada.</li>
            </ul>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p17.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto flex justify-center items-center">
                <img src="img/1/s17.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`
    },
    contenedor18: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Intenta conectarse desde Power BI Desktop a una base de datos Cassandra.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                De la lista de conectores de Obtener Datos, descubre que no hay un conector específico para la base de
                datos Cassandra.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Necesita seleccionar un conector de datos alternativo que se conecte a la base de datos.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de conector debería elegir?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Base de datos de Microsoft SQL Server</li>
                <li>B. ODBC</li>
                <li>C. OLE DB</li>
                <li>D. OData</li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 ">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor19: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">
                Recibe datos de ventas anuales que deben incluirse en los informes de Power BI.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Desde el Editor de Power Query, se conecta a la fuente de Microsoft Excel que se muestra en la siguiente
                muestra.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p19.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Necesita crear un informe que cumpla con los siguientes requisitos:
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Visualiza el valor de Ventas (Sales) a lo largo de un período de años y meses.</li>
                <li>Agrega un segmentador de datos (Slicer) para el mes.</li>
                <li>Agrega un segmentador de datos para el año.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                ¿Qué tres acciones debe realizar en secuencia? Para responder, mueva las acciones apropiadas de la lista
                de acciones al área de respuesta y ordénelas en el orden correcto.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Seleccionar las columnas Mes (Month) y NúmeroDeMes (MonthNumber).</li>
                <li>Seleccionar Anular dinamización (Unpivot) de otras columnas.</li>
                <li>Renombrar la columna Atributo como Año (Year) y la columna Valor (Value) como Ventas (Sales).</li>
                <li>Seleccionar las columnas 2019, 2020 y 2021.</li>
                <li>Seleccionar Transponer (Transpose).</li>
            </ul>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/1/p19.2.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
                <div class="mx-auto flex justify-center items-center">
                    <img src="img/1/s19.jpg" class="object-cover shadow-lg" />
                </div>
            </div>`
    },
    contenedor20: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">
                Está utilizando Power BI Desktop para conectarse a una base de datos de Azure SQL.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                La conexión está configurada como se muestra en la siguiente imagen.
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/p20.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Utilice los menús desplegables para seleccionar la opción de respuesta que complete cada enunciado
                basándose en la información presentada en la gráfica.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p20.2.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto flex justify-center items-center">
                <img src="img/1/s20.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`
    },
    contenedor21: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">
                Tiene las bases de datos de Azure SQL que se muestran en la siguiente tabla.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p21.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Planea construir un único archivo PBIX para cumplir con los siguientes requisitos:
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>
                    Los datos deben ser consumidos desde la base de datos que corresponde a cada etapa del ciclo de vida
                    de desarrollo.
                </li>
                <li>NO deben usarse las canalizaciones de implementación (pipelines) de Power BI.</li>
                <li>La solución debe minimizar el esfuerzo administrativo.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                ¿Qué debe hacer? Para responder, seleccione las opciones apropiadas en el área de respuesta.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p21.2.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto flex justify-center items-center">
                <img src="img/1/s21.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`
    },
    contenedor22: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                Está creando una consulta para ser utilizada como una dimensión País (Country) en un esquema de
                estrella.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                Una instantánea de los datos de origen se muestra en la siguiente tabla.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p22.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Necesita crear la dimensión. La dimensión debe contener una lista de países únicos.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                ¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de la solución.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Eliminar la columna País (Country).</li>
                <li>B. Eliminar duplicados de la tabla.</li>
                <li>C. Eliminar duplicados de la columna Ciudad (City).</li>
                <li>D. Eliminar la columna Ciudad.</li>
                <li>E. Eliminar duplicados de la columna País.</li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D & E</p>
        </div>`
    },
    contenedor23: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">ARRASTRAR Y SOLTAR -</p>
            <p class="text-sm text-gray-400 mb-4">
                Utiliza el Editor de Power Query para obtener una vista previa de los datos que se muestran en la
                siguiente imagen.
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/p23.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Necesita limpiar y transformar la consulta para que se mantengan todas las filas de datos, y los valores
                de error en la columna de descuento (discount) sean reemplazados con un descuento de 0.05. La solución
                debe minimizar el esfuerzo administrativo.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                ¿Qué tres acciones debe realizar en secuencia? Para responder, mueva las acciones apropiadas de la lista
                de acciones al área de respuesta y ordénelas en el orden correcto.
            </p>
            <div class="mx-auto mb-4 flex justify-center items-center">
                <img src="img/1/p23.2.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto flex justify-center items-center">
                <img src="img/1/s23.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`
    },
    contenedor24: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">
                Intenta utilizar el Editor de Power Query para crear una columna personalizada y recibe el mensaje de
                error que se muestra en la siguiente imagen.
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/p24.1.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                Utilice los menús desplegables para seleccionar la opción de respuesta que complete cada enunciado
                basándose en la información presentada en la gráfica.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mx-auto mb-4">
                <img src="img/1/p24.2.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mx-auto flex justify-center items-center">
                <img src="img/1/s24.jpg" class="object-cover shadow-lg" />
            </div>
        </div>`
    },
    contenedor25: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Desde el Editor de Power Query, intenta ejecutar una consulta y recibe el
                siguiente mensaje de error.</p>
            <p class="text-sm text-gray-400 mb-4">ErrorDeFuenteDeDatos: No se pudo encontrar el archivo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuáles son dos posibles causas del error? Cada respuesta correcta
                presenta una solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. No tiene permisos para el archivo.</li>
                <li>B. Se utilizó un nivel de privacidad incorrecto para la fuente de datos.</li>
                <li>C. El archivo está bloqueado.</li>
                <li>D. El archivo referenciado fue movido a una nueva ubicación.</li>
            </ul>
        </div>`,
        solucion: `<div
            class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AD</p>
        </div>`
    },
    contenedor26: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene datos en una hoja de cálculo de Microsoft Excel como se muestra en
                la siguiente tabla.</p>
            <div class="mx-auto mb-4">
                <img src="img/1/p26.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita usar «Power Query» para limpiar y transformar el conjunto de datos.
                La solución debe cumplir con los siguientes requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Si la columna de descuento (discount) devuelve un error, se debe usar un descuento de 0.05.</li>
                <li>Se deben mantener todas las filas de datos.</li>
                <li>Se debe minimizar el esfuerzo administrativo.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer en el Editor de «Power Query»?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Seleccionar Reemplazar Errores.</li>
                <li>B. Editar la consulta en el grupo Errores de Consulta.</li>
                <li>C. Seleccionar Eliminar Errores.</li>
                <li>D. Seleccionar Mantener Errores.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
        </div>`
    },
    contenedor27: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un informe en Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">Carga un extracto de datos que incluye un campo de texto libre llamado
                col1.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita analizar la distribución de frecuencia de las longitudes de las
                cadenas en col1. La solución no debe afectar el tamaño del modelo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. En el informe, agregar una columna calculada DAX que calcule la longitud de col1.</li>
                <li>B. En el informe, agregar una función DAX que calcule la longitud promedio de col1.</li>
                <li>C. Desde el Editor de «Power Query», agregar una columna que calcule la longitud de col1.</li>
                <li>D. Desde el Editor de «Power Query», cambiar la distribución del perfil de columna para agrupar por
                    longitud para col1.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">La función DAX LEN devuelve el número de caracteres en una cadena de
                texto.</p>
            <p class="text-sm text-gray-400 mb-4">Nota: DAX es una colección de funciones, operadores y constantes de Power
                BI que se pueden usar en una fórmula, o expresión, para calcular y devolver uno o más valores.</p>
            <p class="text-sm text-gray-400 mb-4">Dicho de manera más simple, DAX le ayuda a crear nueva información a
                partir de datos ya existentes en su modelo.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/dax/len-function-dax" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-quickstart-learn-dax-basics"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor28: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una colección de informes para el departamento de Recursos Humanos
                (HR) de su empresa. Los conjuntos de datos usan seguridad a nivel de fila (RLS). La empresa tiene múltiples
                regiones de ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Cada región de ventas tiene un gerente de Recursos Humanos.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los gerentes de Recursos Humanos puedan
                interactuar solo con los datos de su región. Se debe impedir que los gerentes de Recursos Humanos cambien el
                diseño de los informes.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe provisionar el acceso a los informes para los gerentes de
                Recursos Humanos?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Publicar los informes en una aplicación y otorgar permiso de acceso a los gerentes de Recursos
                    Humanos.</li>
                <li>B. Crear un nuevo espacio de trabajo, copiar los conjuntos de datos e informes, y agregar a los gerentes
                    de Recursos Humanos como miembros del espacio de trabajo.</li>
                <li>C. Publicar los informes en un espacio de trabajo diferente al que aloja los conjuntos de datos.</li>
                <li>D. Agregar a los gerentes de Recursos Humanos como miembros del espacio de trabajo existente que aloja
                    los informes y los conjuntos de datos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://kunaltripathy.com/2021/10/06/bring-your-power-bi-to-power-apps-portal-part-ii/"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor29: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita proporcionar a un usuario la capacidad de agregar miembros a un
                espacio de trabajo. La solución debe usar el principio de menor privilegio.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué rol debe asignar al usuario?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Visor</li>
                <li>B. Administrador</li>
                <li>C. Colaborador</li>
                <li>D. Miembro</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">El rol de Miembro permite agregar miembros u otros con permisos inferiores
                al espacio de trabajo.</p>
            <div class="mx-auto mb-4">
                <img src="img/2/s3.jpg" class="object-cover shadow-lg" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-roles-new-workspaces"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
        </a>
    </div>`
    },
    contenedor30: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una consulta de Power BI llamada Ventas (Sales) que importa las
                columnas
                que se muestran en la siguiente tabla.</p>
            <div class="mx-auto mb-4">
                <img src="img/2/p4.jpg" class="object-cover shadow-lg" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Los usuarios solo usan la parte de fecha del campo Sales_Date
                (Fecha_de_Ventas). Solo las filas con un Estado (Status) de "Finalizado" (Finished) se usan en el análisis.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita reducir los tiempos de carga de la consulta sin afectar el
                análisis.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones logran este objetivo? Cada respuesta correcta presenta
                una solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Eliminar las filas en las que Ventas[Estado] (Sales[Status]) tiene un valor de "Cancelado"
                    (Canceled).</li>
                <li>B. Eliminar Ventas[Fecha_de_Ventas]. (Sales[Sales_Date])</li>
                <li>C. Cambiar el tipo de datos de Ventas[Tiempo_de_Entrega] (Sales[Delivery_time]) a Entero.</li>
                <li>D. Dividir Ventas[Fecha_de_Venta] (Sales[Sale_Date]) en columnas separadas de fecha y hora.</li>
                <li>E. Eliminar Ventas[Fecha_Cancelada] (Sales[Canceled_Date]).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AD</p>
            <p class="text-sm text-gray-400 mb-4">A: Eliminar filas no interesantes aumentará el rendimiento de la consulta.
            </p>
            <p class="text-sm text-gray-400 mb-4">D: Dividir la columna Fecha_de_Ventas (Sale_Date) hará que las
                comparaciones en la
                fecha de ventas sean más rápidas.</p>
            <p class="text-sm text-gray-400 mb-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">AE</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(68%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 63%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">ADD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(32%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 32%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor31: {
        pregunta: ``,
        solucion: ``
    },
    contenedor32: {
        pregunta: ``,
        solucion: ``
    },
    contenedor33: {
        pregunta: ``,
        solucion: ``
    },
    contenedor34: {
        pregunta: ``,
        solucion: ``
    },
    contenedor35: {
        pregunta: ``,
        solucion: ``
    },
    contenedor36: {
        pregunta: ``,
        solucion: ``
    },
    contenedor37: {
        pregunta: ``,
        solucion: ``
    },
    contenedor38: {
        pregunta: ``,
        solucion: ``
    },
    contenedor39: {
        pregunta: ``,
        solucion: ``
    },
    contenedor40: {
        pregunta: ``,
        solucion: ``
    }
};

/*contenedor7: {
    pregunta: ``,
    solucion: ``
}*/