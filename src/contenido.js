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
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
        <div class="space-y-4">
            <div class="flex items-center">
                <div class="w-10 text-right text-[12px]">A</div>
                <div class="ml-2 text-gray-600 text-[12px]">(80%)</div>
                <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                    <div class="bg-green-500/50 h-full rounded-full" style="width: 80%"></div>
                </div>
            </div>
            <div class="flex items-center">
                <div class="w-10 text-right font-medium text-[12px]">B</div>
                <div class="ml-2 text-gray-600 text-[12px]">(20%)</div>
                <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                    <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 20%"></div>
                </div>
            </div>
        </div>
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
                Para cada base de datos, se crea una consulta que recupera datos de una tabla denominada Customer (Cliente).
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
            </div>`
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
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(71%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 71%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(29%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 29%"></div>
                    </div>
                </div>
            </div>
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
                <li>C. Set Data Connectivity mode to Import.</li>
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
                <img src="img/1/p19.2.jpg" class="object-cover shadow-lg" />
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
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">AD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(80%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 80%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">CD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(20%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 20%"></div>
                    </div>
                </div>
            </div>
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
                    <div class="w-10 text-right font-medium text-[12px]">AD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(32%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 32%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor31: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Construye un informe para analizar las transacciones de clientes de una
                base de datos que contiene las tablas que se muestran en la siguiente tabla.</p>
            <div class="mx-auto mb-4">
                <img src="img/2/p5.jpg" class="object-cover shadow-lg" />
            </div>
        </div>
        <p class="text-sm text-gray-400 mb-4">Importa las tablas.</p>
        <p class="text-sm text-gray-400 mb-4">¿Qué relación debe usar para vincular las tablas?</p>
        <ul class="list-inside text-sm text-gray-400 mb-4">
            <li>A. Uno a muchos desde Transacción a Cliente.</li>
            <li>B. Uno a uno entre Cliente y Transacción.</li>
            <li>C. Muchos a muchos entre Cliente y Transacción.</li>
            <li>D. Uno a muchos desde Cliente a Transacción.</li>
        </ul>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
        <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
        <p class="text-sm text-gray-400 mb-4">Uno en el lado de la Clave Primaria (tabla Cliente) «primary Key (Customer
            table)»,
            muchos en el lado de la Clave Externa (tabla Transacción) «foreign Key (Trasaction table)» de la relación.
        </p>
    </div>`
    },
    contenedor32: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un conector personalizado que devuelve ID, De, Para, Asunto, Cuerpo
                y Tiene Archivos Adjuntos por cada correo electrónico enviado durante el año pasado. Se devuelven más de 10
                millones de registros.</p>
            <p class="text-sm text-gray-400 mb-4">Construye un informe analizando las redes internas de los empleados
                basándose en a quién envían correos electrónicos.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita evitar que los destinatarios del informe lean los correos
                electrónicos analizados. La solución debe minimizar el tamaño del modelo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde la vista Modelo, establecer las columnas Asunto y Cuerpo como Ocultas.</li>
                <li>B. Eliminar las columnas Asunto y Cuerpo durante la importación.</li>
                <li>C. Implementar seguridad a nivel de fila (RLS) para que los destinatarios del informe solo puedan ver
                    resultados basados en los correos electrónicos que enviaron.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">El Asunto y el Cuerpo no son necesarios en el informe. Eliminarlos
                resuelve el problema de seguridad y minimiza el modelo.</p>
        </div>`
    },
    contenedor33: {
        pregunta: `<div>
        <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
        <div class="mt-4 mb-4">
            <img src="img/2/p7.1.jpg" class="object-cover mx-auto shadow-lg md:mx-0" />
        </div>
        <p class="text-sm text-gray-400 mb-4">Necesita hacer que la tabla esté disponible como un tipo de datos
            organizacional en Microsoft Excel.</p>
        <p class="text-sm text-gray-400 mb-4">¿Cómo debe configurar las propiedades de la tabla? Para responder,
            seleccione las opciones apropiadas en el área de respuesta.</p>
        <p class="text-sm text-gray-400 mb-4">
            <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
        </p>
        <div class="mt-4 mb-4">
            <img src="img/2/p7.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
        </div>
    </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s7.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Droplist 1: "Centro de Costo" (Cost Center) -</p>
            <p class="text-sm text-gray-400 mb-4">Los valores de la etiqueta de fila se usan en Excel para que los usuarios
                puedan identificar fácilmente la fila. Aparece como el valor de celda para una celda vinculada, en el panel
                Selector de Datos y en la tarjeta de información.b</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s7.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Droplist 2: "ID" -</p>
            <p class="text-sm text-gray-400 mb-4">El valor del campo de columna Clave proporciona el ID único para la fila.
                Este
                valor permite a Excel vincular una celda a una fila específica en la tabla.</p>
            <p class="text-sm text-gray-400 mb-4">Droplist 3: Sí (Yes) -</p>
            <p class="text-sm text-gray-400 mb-4">En la Galería de Tipos de Datos en Excel, sus usuarios pueden encontrar
                datos
                de tablas destacadas en sus conjuntos de datos de Power BI.</p>
                <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                    href="https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-create-excel-featured-tables"
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
    contenedor34: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el modelo de Power BI que se muestra en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p8.png" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Un gerente solo puede representar un único país.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita usar seguridad a nivel de fila (RLS) para cumplir con los
                siguientes requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Los gerentes solo deben ver los datos de su respectivo país.</li>
                <li>El número de roles RLS debe minimizarse.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta una
                solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear un único rol que filtre País[Correo_del_Gerente] Country[Manager_Email] usando la función «DAX USERNAME».</li>
                <li>B. Crear un único rol que filtre País[Correo_del_Gerente] Country[Manager_Email] usando la función «DAX USEROBJECTID».</li>
                <li>C. Para la relación entre Detalle de Compra (Purchase Detail) y Compra (Purchase), seleccionar Aplicar filtro de seguridad en ambas
                    direcciones.</li>
                <li>D. Crear un rol para cada país.</li>
                <li>E. Para la relación entre Compra y Detalle de Compra (Purchase and Purchase Detail), cambiar la dirección del filtro cruzado a Simple.
                </li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AC</p>
            <p class="text-sm text-gray-400 mb-4">A: Puede aprovechar las funciones DAX username() o userprincipalname()
                dentro de su conjunto de datos. Puede usarlas dentro de expresiones en Power BI Desktop. Cuando publique su
                modelo, se usará dentro del servicio Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Nota: Para definir roles de seguridad, siga estos pasos.</p>
            <p class="text-sm text-gray-400 mb-4">Importe datos a su informe de Power BI Desktop, o configure una conexión
                DirectQuery.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Desde la pestaña Modelado, seleccione Administrar roles.</li>
                <li>2. Desde la ventana Administrar roles, seleccione Crear.</li>
                <li>3. En Roles, proporcione un nombre para el rol.</li>
                <li>4. En Tablas, seleccione la tabla a la que desea aplicar una regla DAX.</li>
                <li>5. En el cuadro de expresión DAX del filtro de tabla, ingrese las expresiones DAX. Esta expresión
                    devuelve
                    un valor verdadero o falso. Por ejemplo: [ID_Entidad] = [Value]</li>
                <li>6. Después de crear la expresión DAX, seleccione la marca de verificación encima del cuadro de expresión
                    para validar la expresión.</li>
                <li>Nota: Puede usar username() dentro de esta expresión.</li>
                <li>7. Seleccione Guardar.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">C: Por defecto, el filtrado de seguridad a nivel de fila usa filtros
                unidireccionales, ya sea que las relaciones estén configuradas en dirección simple o bidireccional. Puede
                habilitar manualmente el filtrado cruzado bidireccional con seguridad a nivel de fila seleccionando la
                relación y marcando la casilla Aplicar filtro de seguridad en ambas direcciones. Seleccione esta opción
                cuando también haya implementado seguridad a nivel de fila dinámica a nivel de servidor, donde la seguridad
                a nivel de fila se basa en nombre de usuario o ID de inicio de sesión.</p>
                <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <div class="w-10 text-right text-[12px]">AC</div>
                        <div class="ml-2 text-gray-600 text-[12px]">(77%)</div>
                        <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                            <div class="bg-green-500/50 h-full rounded-full" style="width: 77%"></div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-10 text-right font-medium text-[12px]">AD</div>
                        <div class="ml-2 text-gray-600 text-[12px]">(17%)</div>
                        <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                            <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 17%"></div>
                        </div>
                    </div>
                </div>
        </div>`
    },
    contenedor35: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos importado de Power BI que contiene el modelo de
                datos que se muestra en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p9.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utilice los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado basándose en la información presentada en la gráfica.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cambiar la configuración de [respuesta elegida] de las relaciones mejorará
                el rendimiento de las consultas de informes.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Cardinalidad</li>
                <li>Dirección del filtro cruzado</li>
                <li>Asumir integridad referencial</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El modelo de datos está organizado en una [respuesta elegida].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>esquema de estrella</li>
                <li>esquema de copo de nieve</li>
                <li>tabla desnormalizada</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/2/p9.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s9.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Droplist 1: Asumir Integridad Referencial (Assume Referential Integrity)
            </p>
            <p class="text-sm text-gray-400 mb-4">Al conectarse a una fuente de datos usando DirectQuery, puede usar la
                opción Asumir Integridad Referencial (Assume Referential Integrity) para habilitar la ejecución de consultas
                más eficientes contra su
                fuente de datos. Esta función tiene algunos requisitos de los datos subyacentes y solo está disponible
                cuando se usa DirectQuery.</p>
            <p class="text-sm text-gray-400 mb-4">Nota: Los siguientes requisitos son necesarios para que Asumir integridad
                referencial (Assume Referential Integrity) funcione correctamente:</p>
            <p class="text-sm text-gray-400 mb-4">Los datos en la columna "Desde" en la relación nunca son Nulos o en
                blanco.</p>
            <p class="text-sm text-gray-400 mb-4">Para cada valor en la columna "Desde", hay un valor correspondiente en la
                columna "Hacia".</p>
            <p class="text-sm text-gray-400 mb-4">Droplist 2: Esquema de estrella -</p>
            <p class="text-sm text-gray-400 mb-4">El esquema de estrella es un enfoque de modelado maduro ampliamente
                adoptado por almacenes de datos relacionales (data warehouses). Requiere que los modeladores clasifiquen sus
                tablas del modelo
                como dimensión o datos.</p>
            <p class="text-sm text-gray-400 mb-4">Generalmente, las tablas de dimensión contienen un número relativamente
                pequeño de filas. Las tablas de hechos, por otro lado, pueden contener un número muy grande de filas y
                continúan creciendo con el tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s9.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/desktop-assume-referential-integrity"
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
    contenedor36: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de Power BI que contiene una tabla llamada Ventas (Sales)
                y una
                tabla de fechas relacionada. Ventas contiene una medida llamada Ventas Totales (Total Sales).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una medida que calcule las ventas totales del mes
                equivalente del año anterior.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar el cálculo? Para responder, seleccione las opciones
                apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p10.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Droplist 1: CALCULATE (CALCULAR) -</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: PARALLELPERIOD (PERÍODO PARALELO)-</p>
            <p class="text-sm text-gray-400 mb-4"> PARALLELPERIOD devuelve una tabla que contiene una
                columna de fechas que
                representa un período paralelo a las fechas en la columna de fechas especificada, en el contexto actual, con
                las fechas desplazadas un número de intervalos hacia adelante o hacia atrás en el tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis: PARALLELPERIOD(«dates», «number_of_intervals», «interval»).
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>dates: Una columna que contiene fechas.</li>
                <li>intervalo: El intervalo por el cual desplazar las fechas.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El valor para el intervalo puede ser uno de los siguientes: año,
                trimestre, mes.</p>
            <p class="text-sm text-gray-400 mb-4">incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">SAMEPERIODLASTYEAR (MISMO_PERIODO_AÑO_ANTERIOR) devuelve
                una tabla que
                contiene una columna de
                fechas desplazadas un año hacia atrás en el tiempo desde las fechas en la columna de fechas
                especificada, en
                el contexto actual.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis: SAMEPERIODLASTYEAR(«dates»)</p>
            <p class="text-sm text-gray-400 mb-4">DATESMTD (FECHAS_DEL_MES_AL_DIA) devuelve una tabla que
                contiene una
                columna de las
                fechas para el mes hasta la fecha, en el contexto actual.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis: DATESMTD(«dates»)</p>
            <p class="text-sm text-gray-400 mb-4">Droplist 3: 'DATE'[Month] ('FECHA'[Mes])</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/dax/parallelperiod-function-dax" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor37: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">ARRASTRAR & SOLTAR -</p>
            <p class="text-sm text-gray-400 mb-4">Planea crear un informe que mostrará datos de ventas del último año para
                múltiples regiones.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita restringir el acceso a filas individuales de los datos en una
                base por región usando roles.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué cuatro acciones debe realizar en secuencia? Para responder, mueva las
                acciones apropiadas de la lista de
                acciones al área de respuesta y ordénelas en el orden correcto.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p11.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s11.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Puede definir roles y reglas dentro de Power BI Desktop. Cuando publica en
                Power BI, también publica las definiciones de roles.</p>
            <p class="text-sm text-gray-400 mb-4">Para definir roles de seguridad, siga estos pasos.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Importe datos a su informe de Power BI Desktop (Paso 1).</li>
                <li>2. Desde la pestaña Modelado, seleccione Administrar roles.</li>
                <li>3. Desde la ventana Administrar roles, seleccione Crear. (Paso 2)</li>
                <li>4. En Roles, proporcione un nombre para el rol.</li>
                <li>5. En Tablas, seleccione la tabla a la que desea aplicar una regla DAX.</li>
                <li>6. En el cuadro de expresión DAX del filtro de tabla, ingrese las expresiones DAX. Esta expresión
                    devuelve
                    un valor verdadero o falso. Por ejemplo: [Entity] = [Value] (Paso 3)</li>
                <li>7. Después de crear la expresión DAX, seleccione la marca de verificación encima del cuadro de expresión
                    para validar la expresión.</li>
                <li>8. Seleccione Guardar.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Asignar usuarios al rol.</p>
            <p class="text-sm text-gray-400 mb-4">No puede asignar usuarios a un rol dentro de Power BI Desktop. Los asigna
                en el servicio de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 4: Publicar el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Ahora que ha terminado de validar los roles en Power BI Desktop, proceda y
                publique su informe en el servicio de Power BI.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor38: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">ARRASTRAR & SOLTAR</p>
            <p class="text-sm text-gray-400 mb-4">Crea un modelo de datos en Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Los desarrolladores y usuarios de informes proporcionan comentarios de que
                el modelo de datos es demasiado complejo.</p>
            <p class="text-sm text-gray-400 mb-4">El modelo contiene las siguientes tablas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p12.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">El modelo tiene las siguientes relaciones:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Hay una relación uno a uno entre Región_de_Ventas (Sales_Region) y Gerente_de_Región (Region_Manager).
                </li>
                <li>Hay más registros en Gerente (Manager) que en Gerente_de_Región (Region_Manager), pero cada registro en
                    Gerente_de_Región tiene
                    un registro correspondiente en Gerente.</li>
                <li>Hay más registros en Gerente_de_Ventas (Sales_Manager) que en Región_de_Ventas (Sales_Region), pero cada
                    registro en Región_de_Ventas
                    tiene un registro correspondiente en Gerente_de_Ventas.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita desnormalizar el modelo en una sola tabla. Solo los gerentes que
                están asociados a una región de ventas deben incluirse en los informes. ¿Qué tres acciones debe realizar en
                secuencia? Para responder, mueva las acciones apropiadas de la lista de acciones al área de respuesta y
                ordénelas en el orden correcto.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Hay más de un orden correcto de las opciones de respuesta.
                Recibirá crédito por cualquiera de los órdenes correctos que seleccione.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p12.2.jpeg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s12.jpeg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Paso 1: Fusionar [Región_de_Ventas] y [Gerente_de_Ventas]
                (Merge [Sales_region] and [Sale_Manager]) usando una
                combinación interna (inner join).</p>
            <p class="text-sm text-gray-400 mb-4">Combinación interna (inner join): Devuelve las filas presentes tanto en la
                tabla
                izquierda como en la derecha solo si hay una coincidencia. De lo contrario, devuelve cero registros.</p>
            <p class="text-sm text-gray-400 mb-4">Nota: Región_de_Ventas y Gerente_de_Ventas. (Sales_Region and
                Sales_Manager)</p>
            <p class="text-sm text-gray-400 mb-4">Hay una relación uno a uno entre Región_de_Ventas y Gerente_de_Región.
                (Sales_Region and Sales_Manager)</p>
            <p class="text-sm text-gray-400 mb-4">Hay más registros en Gerente_de_Ventas (Sales_Manager) que en
                Región_de_Ventas (Sales_Region), pero cada
                registro en Región_de_Ventas tiene un registro correspondiente en Gerente_de_Ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Fusionar [Gerente_de_Región] y [Gerente] usando una combinación
                interna (Merge [Region_Manager] and [Manager] ).</p>
            <p class="text-sm text-gray-400 mb-4">Solo los gerentes (manager) que están asociados a una región de ventas
                (sales_region) deben incluirse en los informes.</p>
            <p class="text-sm text-gray-400 mb-4">Nota: Gerente_de_Región y Gerente (Region_Manager and Manager).</p>
            <p class="text-sm text-gray-400 mb-4">Hay más registros en Gerente (Manager) que en Gerente_de_Región
                (Region_Manager), pero cada registro
                en Gerente_de_Región tiene un registro correspondiente en Gerente.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Fusionar [Región_de_Ventas] y [Gerente_de_Región] (merge
                [Sales_Region] and [Region_Manager]) usando una
                combinación derecha (right join) como nueva consulta llamada [Región_de_Ventas_y_Gerente_de_Región]
                ([Sales_Region_and_Region_Manager])</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://www.tutorialgateway.org/joins-in-power-bi/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor39: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Microsoft Power BI. El tamaño del archivo PBIX es de
                550 MB. Se accede al informe usando un espacio de trabajo de aplicación en la capacidad compartida de
                powerbi.com.</p>
            <p class="text-sm text-gray-400 mb-4">El informe utiliza un conjunto de datos importado que contiene una tabla
                de hechos. La tabla de hechos contiene 12 millones de filas. El conjunto de datos está programado para
                actualizarse dos veces al día a las 08:00 y 17:00.</p>
            <p class="text-sm text-gray-400 mb-4">El informe es una sola página que contiene 15 elementos visuales de
                AppSource y 10 elementos visuales predeterminados.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios dicen que el informe es lento para cargar los elementos
                visuales cuando acceden e interactúan con el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita recomendar una solución para mejorar el rendimiento del informe.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería recomendar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cambiar cualquier medida DAX para usar funciones iteradoras.</li>
                <li>B. Habilitar interacciones visuales.</li>
                <li>C. Reemplazar los elementos visuales predeterminados con elementos visuales de AppSource.</li>
                <li>D. Dividir los elementos visuales en múltiples páginas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Una página con muchos elementos visuales también puede hacer que la carga
                de su informe sea lenta. Por favor, reduzca apropiadamente el número de visualizaciones en una página.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://community.fabric.microsoft.com/t5/Desktop/Visuals-are-loading-extremely-slow/td-p/1565668"
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
    contenedor40: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">HOTSPOT -</p>
            <p class="text-sm text-gray-400 mb-4">Está creando un modelo de datos importado de Microsoft Power BI para
                realizar análisis de canasta. El objetivo del análisis es identificar qué productos suelen comprarse juntos
                en la misma transacción a través de y dentro de los territorios de ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Importa una tabla de hechos llamada Ventas como se muestra en la imagen.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p14.1.jpeg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Las tablas de dimensión relacionadas se importan al modelo.</p>
            <p class="text-sm text-gray-400 mb-4">Ventas (Sales) contiene los datos que se muestran en la siguiente tabla.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p14.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Está evaluando cómo optimizar el modelo.</p>
            <p class="text-sm text-gray-400 mb-4">Para cada una de las siguientes afirmaciones, seleccione "Sí" si la
                afirmación es verdadera. De lo contrario, seleccione "No".</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p14.3.jpeg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
        <div class="mt-4 mb-4">
            <img src="img/2/s14.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
        </div>
        <p class="text-sm text-gray-400 mb-4">Cuadro 1: Sí -</p>
        <p class="text-sm text-gray-400 mb-4">Esas dos columnas no son necesarias en el análisis.</p>
        <p class="text-sm text-gray-400 mb-4">Cuadro 2: No -</p>
        <p class="text-sm text-gray-400 mb-4">Se puede eliminar la clave sustituta ClaveFechaOrden (OrderDateKey) del
            análisis.</p>
        <p class="text-sm text-gray-400 mb-4">Cuadro 3: No -</p>
        <p class="text-sm text-gray-400 mb-4">El impuesto (Tax) cargado no es relevante para el análisis.</p>
    </div>`
    },
    contenedor41: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos de Microsoft Power BI que contiene tres tablas
                llamadas Órdenes, Fecha y Ciudad. Hay una relación uno a muchos entre Fecha y Órdenes y entre Ciudad y
                Órdenes.</p>
            <p class="text-sm text-gray-400 mb-4">El modelo contiene dos roles de seguridad a nivel de fila (RLS) llamados
                Rol1 y Rol2. Rol1 contiene el siguiente filtro:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Ciudad[Provincia Estado] = "Kentucky"</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Rol2 contiene el siguiente filtro:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha[Año Calendario] = 2020</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Si un usuario es miembro de ambos Rol1 y Rol2, ¿qué datos verá en un
                informe que usa el modelo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. El usuario verá datos para los cuales el valor de Provincia Estado es Kentucky o donde el Año
                    Calendario es 2020.</li>
                <li>B. El usuario recibirá un error y no podrá ver los datos en el informe.</li>
                <li>C. El usuario solo verá datos para los cuales el valor de Provincia Estado es Kentucky.</li>
                <li>D. El usuario solo verá datos para los cuales el valor de Provincia Estado es Kentucky y el Año
                    Calendario es 2020.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">La seguridad a nivel de fila (RLS) con Power BI puede usarse para
                restringir el acceso a datos para usuarios determinados. Los filtros restringen el acceso a datos a nivel de
                fila, y puede definir filtros dentro de roles.</p>
            <p class="text-sm text-gray-400 mb-4">Se aplican ambos roles, y se deben cumplir ambos filtros de rol.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es B: Una relación de modelo es limitada cuando no hay garantía del
                lado "uno". Recibirá un mensaje de error si pertenece a múltiples roles RLS y al menos uno de los roles
                depende de una relación limitada. Pero aquí ambas relaciones tienen un lado "uno" garantizado.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(86%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 86%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(14%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 14%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor42: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella. Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Está modelando datos usando Microsoft Power BI. Parte del modelo de datos
                es una gran tabla de Microsoft SQL Server llamada Orden que tiene más de 100 millones de registros.</p>
            <p class="text-sm text-gray-400 mb-4">Durante el proceso de desarrollo, necesita importar una muestra de los
                datos de la tabla Orden.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Desde el Editor de Power Query, importa la tabla y luego agrega un paso de filtro a la consulta. <p
                class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Esto cargaría la tabla completa en el primer paso.</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Agrega una cláusula WHERE a la declaración SQL.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/native-database-query" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(54%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 54%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(46%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 46%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor43: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta.
            </p>
            <p class="text-sm text-gray-400 mb-4">Después de responder una pregunta en esta sección, NO podrá volver a ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión. Está modelando datos usando
                Microsoft Power BI. Parte del modelo de datos es una gran tabla de Microsoft SQL Server llamada Orden que
                tiene más de 100 millones de registros.</p>
            <p class="text-sm text-gray-400 mb-4">Durante el proceso de desarrollo, necesita importar una muestra de los
                datos de la tabla Orden.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Escribe una expresión DAX que use la función FILTRO.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Agrega una cláusula WHERE a la declaración SQL.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>DAX no es un lenguaje diseñado para recuperar datos como SQL,
                sino que se usa para fines de análisis de datos. Siempre es un enfoque mejor y recomendado transformar los
                datos lo más cerca posible de la propia fuente de datos. Por ejemplo, si su fuente de datos es una base de
                datos relacional, es mejor usar TSQL.
            </p>
            <p class="text-sm text-gray-400 mb-4">SQL es un lenguaje de consulta estructurado, mientras que DAX es un
                lenguaje de fórmulas utilizado para fines de análisis de datos. Cuando nuestros datos se almacenan en
                algunos sistemas de bases de datos estructurados como SQL Server Management Studio, MySQL u otros, debemos
                usar SQL para recuperar los datos almacenados.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://www.learndax.com/dax-vs-sql-when-to-use-dax-over-sql/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor44: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta.
            </p>
            <p class="text-sm text-gray-400 mb-4">Después de responder una pregunta en esta sección, NO podrá volver a ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión. Está modelando datos usando
                Microsoft Power BI. Parte del modelo de datos es una gran tabla de Microsoft SQL Server llamada Orden que
                tiene más de 100 millones de registros.</p>
            <p class="text-sm text-gray-400 mb-4">Durante el proceso de desarrollo, necesita importar una muestra de los
                datos de la tabla Orden.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Agrega una cláusula WHERE a la declaración SQL.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Power Query le permite especificar su consulta de base de datos nativa en
                un cuadro de texto bajo Opciones avanzadas al conectarse a una base de datos. En el ejemplo siguiente,
                importará datos de una base de datos SQL Server usando una consulta de base de datos nativa ingresada en el
                cuadro de texto de declaración SQL.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Conéctese a una base de datos SQL Server usando Power Query. Seleccione la opción de base de datos
                    SQL Server en la selección de conectores.</li>
                <li>2. En la ventana emergente de base de datos SQL Server.</li>
                <li>3. Especifique el Servidor y la Base de datos desde donde desea importar datos usando una consulta de
                    base de datos nativa.</li>
                <li>4. En Opciones avanzadas, seleccione el campo Declaración SQL y pegue o ingrese su consulta de base de
                    datos nativa, luego seleccione Aceptar.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/2/s18.jpeg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/native-database-query" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor45: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está preparando un informe financiero en Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Se conecta a los datos almacenados en una hoja de cálculo de Microsoft
                Excel usando el Editor de Power Query como se muestra en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p19.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita preparar los datos para soportar lo siguiente:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Visualizaciones que incluyan todas las medidas en los datos a lo largo del tiempo</li>
                <li>Cálculos interanuales para todas las medidas</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué cuatro acciones debe realizar en secuencia? Para responder, mueva las
                acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.</p>
            <p class="text-sm text-gray-400 mb-4">Seleccionar y Colocar:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p19.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s19.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/unpivot-column" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor46: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un informe de análisis que consumirá datos de las tablas que
                se muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p20.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Existe una relación entre las tablas.</p>
            <p class="text-sm text-gray-400 mb-4">No hay requisitos de informes sobre employee_id y employee_photo.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita optimizar el modelo de datos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe configurar para employee_id y employee_photo? Para responder,
                seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p20.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s20.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: Ocultar</p>
            <p class="text-sm text-gray-400 mb-4">Es necesaria en la relación, por lo que no se puede eliminar.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Eliminar</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://community.fabric.microsoft.com/t5/Desktop/How-to-Hide-a-Column-in-power-Bi/m-p/414470"
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
    contenedor47: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Planea crear un conjunto de datos de Power BI para analizar la asistencia
                en una escuela. Los datos provendrán de dos vistas separadas llamadas Vista1 y Vista2 en una base de datos
                de Azure SQL.</p>
            <p class="text-sm text-gray-400 mb-4">Vista1 contiene las columnas que se muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p21.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Vista2 contiene las columnas que se muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p21.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Las vistas se pueden relacionar según la columna ID de Clase.</p>
            <p class="text-sm text-gray-400 mb-4">El ID de Clase es el identificador único para la clase, período, maestro y
                año escolar especificados. Por ejemplo, la misma clase puede ser impartida por el mismo maestro durante dos
                períodos diferentes, pero la clase tendrá un ID de clase diferente.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita diseñar un modelo de datos de esquema de estrella utilizando los
                datos de ambas vistas. La solución debe facilitar los siguientes análisis:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>El conteo de clases que ocurren por período.</li>
                <li>El conteo de estudiantes presentes por período por día.</li>
                <li>El número promedio de estudiantes asistiendo a una clase cada mes.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿En qué tabla debe incluir los campos Nombre del Maestro y Número de
                Período? Para responder, seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p21.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s21.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: Hechos de Maestro -</p>
            <p class="text-sm text-gray-400 mb-4">Las tablas de hechos almacenan observaciones o eventos, y pueden ser
                órdenes de venta, balances de existencias, tasas de cambio, temperaturas, etc. Una tabla de hechos contiene
                columnas clave de dimensión que se relacionan con las tablas de dimensión, y columnas de medidas numéricas.
            </p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>El esquema de estrella es un enfoque de modelado maduro ampliamente
                adoptado por almacenes de datos relacionales. Requiere que los modeladores clasifiquen sus tablas del modelo
                como dimensión o hechos.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Hechos de Asistencia -</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">Las tablas de dimensión describen entidades de negocio, las cosas que
                modela. Las entidades pueden incluir productos, personas, lugares y conceptos, incluido el tiempo mismo. La
                tabla más consistente que encontrará en un esquema de estrella es una tabla de dimensión de fecha. Una tabla
                de dimensión contiene una columna clave (o columnas) que actúa como un identificador único, y columnas
                descriptivas.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/guidance/star-schema" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor48: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el modelo de Power BI que se muestra en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p22.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Hay cuatro departamentos en la tabla Departamentos (Departaments).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los usuarios solo puedan ver los datos de su
                respectivo departamento.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear un segmentador de datos que filtre Departamentos según DepartmentID.</li>
                <li>B. Crear un rol de seguridad a nivel de fila (RLS) para cada departamento y luego definir la membresía
                    del rol.</li>
                <li>C. Crear un parámetro DepartmentID para filtrar la tabla Departamentos (Departaments).</li>
                <li>D. A la tabla DatosConfidenciales (ConfidentialData), agregar una medida calculada que use la función
                    DAX CURRENTGROUP.
                </li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">La seguridad a nivel de fila (RLS) con Power BI se puede usar para
                restringir el acceso a datos para usuarios determinados. Los filtros restringen el acceso a datos a nivel de
                fila, y puede definir filtros dentro de roles.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor49: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">En Power BI Desktop, está construyendo un informe de ventas que contiene
                dos tablas. Ambas tablas tienen configurada la seguridad a nivel de fila (RLS).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una relación entre las tablas. La solución debe garantizar
                que el filtrado cruzado bidireccional respete la configuración de RLS. ¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear una relación inactiva entre las tablas y seleccionar Aplicar filtro de seguridad en ambas
                    direcciones.</li>
                <li>B. Crear una relación activa entre las tablas y seleccionar Aplicar filtro de seguridad en ambas
                    direcciones.</li>
                <li>C. Crear una relación inactiva entre las tablas y seleccionar Asumir integridad referencial.</li>
                <li>D. Crear una relación activa entre las tablas y seleccionar Asumir integridad referencial.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Por defecto, el filtrado de seguridad a nivel de fila usa filtros
                unidireccionales, ya sea que las relaciones estén configuradas en dirección simple o bidireccional. Puede
                habilitar manualmente el filtrado cruzado bidireccional con seguridad a nivel de fila seleccionando la
                relación y marcando la casilla Aplicar filtro de seguridad en ambas direcciones. Seleccione esta opción
                cuando también haya implementado seguridad a nivel de fila dinámica a nivel de servidor, donde la seguridad
                a nivel de fila se basa en nombre de usuario o ID de inicio de sesión.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s23.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor50: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una columna llamada UnidadesEnStock (UnitsInStock) como se muestra
                en la siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p24.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">UnidadesEnStock tiene 75 valores no nulos, de los cuales 51 son únicos.
            </p>
            <p class="text-sm text-gray-400 mb-4">Utilice los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado basándose en la información presentada en la gráfica.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p24.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: 75 filas -</p>
            <p class="text-sm text-gray-400 mb-4">"Es anulable" permite valores NULL en la columna.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: reducir</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://blog.crossjoin.co.uk/2019/01/20/is-nullable-column-property-power-bi/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor51: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI con las siguientes tablas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p25.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Tiene la siguiente medida DAX.</p>
            <p class="text-sm text-gray-400 mb-4">Accounts := CALCULATE (DISTINCTCOUNT (Balances[AccountID]),LASTDATE
                ('Date'[Date]))</p>
            <p class="text-sm text-gray-400 mb-4">Para cada una de las siguientes afirmaciones, seleccione Sí si la
                afirmación es verdadera. De lo contrario, seleccione No.</p>
                <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Una visualización de tabla que muestra la jerarquía de fecha a nivel de año y la medida [Accounts] mostrará
                el número total de cuentas que estuvieron activas a lo largo del año.</li>
                <li>Una visualización de tabla que muestra la jerarquía de fecha a nivel de mes y la medida [Accounts] mostrará
                el número total de cuentas que estuvieron activas a lo largo del mes.</li>
                <li>Una visualización de tabla que muestra la jerarquía de fecha a nivel de día y la medida [Accounts] mostrará
                el número total de cuentas que estuvieron activas ese día.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p25.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s25.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: No -</p>
            <p class="text-sm text-gray-400 mb-4">Mostrará el número total de cuentas que estuvieron activas solo en el
                último día del año.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota:</span>
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>CONTAR.DISTINTO (DISTINCTCOUNT) cuenta el número de valores distintos en una columna.</li>
                <li>ÚLTIMAFECHA (LASTDATE) devuelve la última fecha en el contexto actual para la columna de fechas (Date)
                    especificada.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: No -</p>
            <p class="text-sm text-gray-400 mb-4">Mostrará el número total de cuentas que estuvieron activas solo en el
                último día del mes.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 3: Si -</p>
        </div>`
    },
    contenedor52: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene las tablas que se muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p26.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Impresiones (Impressions)contiene aproximadamente 30 millones de registros por
                mes.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un sistema de análisis para cumplir con los siguientes
                requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Presentar conteos de impresiones de anuncios por día, campaña y nombre del sitio. Se requieren los
                    análisis del último año.</li>
                <li>Minimizar el tamaño del modelo de datos.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de
                la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear relaciones uno a muchos entre las tablas.</li>
                <li>B. Agrupar la consulta de Impresiones en Power Query por ID_Anuncio (Ad_id), Nombre_Sitio (Site_name) y Fecha_Impresión (Impression_date).
                    Agregar usando la función CONTARFILAS.</li>
                <li>C. Crear una tabla calculada que contenga ID_Anuncio (Ad_id), Nombre_Sitio (Site_name) y Fecha_Impresión (Impression_date).</li>
                <li>D. Crear una medida calculada que agregue usando la función CONTARFILAS.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AB</p>
            <p class="text-sm text-gray-400 mb-4">incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No C: Una tabla calculada aumentaría el tamaño del modelo de datos.</p>
            <p class="text-sm text-gray-400 mb-4">No D: Se necesitan Fecha_Impresión, etc.</p>
        </div>`
    },
    contenedor53: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un modelo de datos de Microsoft Power BI que tiene las tablas
                que se muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p27.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Productos está relacionada con la tabla CategoríaProducto
                (Productcategory) a
                través de la columna IDCategoríaProducto (ProductCategoryID). Cada producto tiene una categoría de producto.
                Necesita asegurarse
                de que pueda analizar las ventas por categoría de producto.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe configurar la relación desde CategoríaProducto
                (ProductCategory) a Productos (Products)?
                Para responder, seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p27.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: Uno a muchos (One-to-many) -</p>
            <p class="text-sm text-gray-400 mb-4">Las opciones de cardinalidad uno a muchos y muchos a uno son esencialmente
                las mismas, y también son los tipos de cardinalidad más comunes.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto: Una relación muchos a muchos significa que ambas columnas
                pueden contener valores duplicados. Este tipo de cardinalidad se usa con poca frecuencia. Normalmente es
                útil al diseñar requisitos de modelo complejos. Puede usarlo para relacionar hechos muchos a muchos o para
                relacionar hechos de mayor granularidad. Por ejemplo, cuando los hechos de objetivos de ventas se almacenan
                a nivel de categoría de producto y la tabla de dimensión de producto se almacena a nivel de producto.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Simple (Single) -</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto: Tenga en cuenta que las relaciones bidireccionales pueden
                afectar
                negativamente al rendimiento. Además, intentar configurar una relación bidireccional podría resultar en
                rutas de propagación de filtros ambiguas. En este caso, Power BI Desktop podría fallar al confirmar el
                cambio de relación y le alertará con un mensaje de error.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-relationships-understand"
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
    contenedor54: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Importa un conjunto de datos de Power BI que contiene las siguientes
                tablas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha (Date)</li>
                <li>Producto (Product)</li>
                <li>Inventario de Producto (Product Inventory)</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">La tabla Inventario de Producto (Product Inventory) contiene 25 millones
                de filas. Una muestra
                de los datos se muestra en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p28.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Inventario de Producto (Product Inventory) se relaciona con la
                tabla Fecha (Date) usando la
                columna ClaveFecha (DateKey). La tabla Inventario de Producto se relaciona con la tabla Producto (Product)
                usando la columna
                ClaveProducto (ProductKey).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita reducir el tamaño del modelo de datos sin perder información.
                ¿Qué debe hacer?</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>A. Cambiar la Agregación para ClaveFecha (DateKey) a No Resumir (Don't Summarize).</li>
                <li>B. Eliminar la relación entre Fecha (Date) e Inventario de Producto (Product Inventory).</li>
                <li>C. Cambiar el tipo de datos de CostoUnitario (UnitCost) a Entero.</li>
                <li>D. Eliminar FechaMovimiento (MovementDate).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Las columnas ClaveFecha (DateKey) y FechaMovimiento (MovementDate) tienen la misma información.
                FechaMovimiento se puede eliminar.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No C: El tipo de datos Entero perdería datos.</p>
        </div>`
    },
    contenedor55: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está mejorando un modelo de Power BI que tiene cálculos DAX.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una medida que devuelva las ventas totales acumuladas del
                año hasta la fecha, desde la misma fecha del año calendario anterior.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué funciones DAX debe usar? Para responder, seleccione las opciones
                apropiadas en el área de respuesta.b</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p29.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s29.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: CALCULAR (CALCULATE) -</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <p class="text-sm text-gray-400 mb-4">Ventas totales en la última fecha seleccionada =</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s29.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: SUMAR (SUM) -</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s29.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 3: MISMO_PERÍODO_AÑO_ANTERIOR (SAMEPERIODLASTYEAR) -</p>
            <p class="text-sm text-gray-400 mb-4">MISMO_PERÍODO_AÑO_ANTERIOR devuelve un conjunto de fechas en la selección
                actual del año anterior.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <p class="text-sm text-gray-400 mb-4">MISMO_PERÍODO_AÑO_ANTERIOR devuelve el período seleccionado desplazado un
                año hacia atrás =</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s29.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/dax/calculate-function-dax" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://dax.guide/sameperiodlastyear/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor56: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Está modelando datos usando Microsoft Power BI. Parte del modelo de datos
                es una gran tabla de Microsoft SQL Server llamada Orden que tiene más de 100 millones de registros.</p>
            <p class="text-sm text-gray-400 mb-4">Durante el proceso de desarrollo, necesita importar una muestra de los
                datos de la tabla Orden.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Agrega un filtro a nivel de informe que filtra según la fecha
                del pedido.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Necesita los datos sin procesar, no un informe con los datos.</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar, agregue una cláusula WHERE a la declaración SQL.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/native-database-query" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor57: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que importa una tabla de fechas y una tabla
                de ventas de una fuente de datos de base de datos de Azure SQL. La tabla de ventas tiene las siguientes
                claves externas de fecha:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha de vencimiento</li>
                <li>Fecha de pedido</li>
                <li>Fecha de entrega</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita apoyar el análisis de ventas a lo largo del tiempo basado en
                todas las claves externas (foreign keys) de fecha.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Para cada clave externa de fecha, agrega relaciones inactivas
                entre la tabla de ventas y la tabla de fechas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Si</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Solución: Desde el panel de Campos, renombra la tabla de
                fechas como Fecha de vencimiento. Usas una expresión DAX para crear Fecha de pedido y Fecha de entrega como
                tablas calculadas.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/guidance/relationships-active-inactive" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(85%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 85%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(15%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 15%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor58: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que importa una tabla de fechas y una tabla
                de ventas de una fuente de datos de base de datos de Azure SQL. La tabla de ventas tiene las siguientes
                claves externas de fecha:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha de vencimiento</li>
                <li>Fecha de pedido</li>
                <li>Fecha de entrega</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita apoyar el análisis de ventas a lo largo del tiempo basado en
                todas las claves externas (foreign keys) de fecha.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Desde el Editor de Power Query, renombra la consulta de fecha
                como Fecha de vencimiento. Referencia la consulta Fecha de vencimiento dos veces para crear las consultas
                para Fecha de pedido y Fecha de entrega.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Solución: Desde el panel de Campos, renombra la tabla de
                fechas como Fecha de vencimiento. Usas una expresión DAX para crear Fecha de pedido y Fecha de entrega como
                tablas calculadas.</p>
                <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                    href="https://learn.microsoft.com/es-es/power-bi/guidance/relationships-active-inactive" target="_blank"
                    rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clip-rule="evenodd" />
                    </svg>
                    Referencia
                </a>
        </div>`
    },
    contenedor59: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que importa una tabla de fechas y una tabla
                de ventas de una fuente de datos de base de datos de Azure SQL. La tabla de ventas tiene las siguientes
                claves externas (foreign key) de fecha:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Fecha de vencimiento</li>
                <li>Fecha de pedido</li>
                <li>Fecha de entrega</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita apoyar el análisis de ventas a lo largo del tiempo basado en
                todas las claves externas (foreign keys) de fecha.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Desde el panel de Campos, renombra la tabla de fechas como Fecha
                de vencimiento. Usas una expresión DAX para crear Fecha de pedido y Fecha de entrega como tablas calculadas.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Metodología de refactorización -</p>
            <p class="text-sm text-gray-400 mb-4">Aquí hay una metodología para refactorizar un modelo de una única tabla de
                tipo dimensión con roles múltiples, a un diseño con una tabla por rol.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Elimine cualquier relación inactiva.</li>
                <li>2. Considere renombrar la tabla de tipo dimensión con roles múltiples para describir mejor su rol. En el
                    ejemplo (no presente aquí), la tabla Aeropuerto está relacionada con la columna AeropuertoDeLlegada de
                    la tabla Vuelo, por lo que se renombra como Aeropuerto de Llegada.</li>
                <li>3. Cree una copia de la tabla con roles múltiples, dándole un nombre que refleje su rol. Si es una tabla
                    de Importación, recomendamos definir una tabla calculada. Si es una tabla de DirectQuery, puede duplicar
                    la consulta de Power Query. En el ejemplo, la tabla Aeropuerto de Salida se creó usando la siguiente
                    definición de tabla calculada.
                    Aeropuerto de Salida = 'Aeropuerto de Llegada'
                    Cree una relación activa para relacionar la nueva tabla.</li>
                <li>4. Considere renombrar las columnas en las tablas para que reflejen con precisión su rol. En el ejemplo,
                    todas las columnas tienen prefijos con las palabras Salida o Llegada. Estos nombres aseguran que los
                    elementos visuales del informe, por defecto, tengan etiquetas autodescriptivas y no ambiguas. También
                    mejora la experiencia de Preguntas y Respuestas, permitiendo a los usuarios escribir fácilmente sus
                    preguntas.</li>
                <li>5. Considere agregar descripciones a las tablas con roles múltiples. (En el panel de Campos, una
                    descripción aparece en una información sobre herramientas cuando un autor de informes pasa el cursor
                    sobre la tabla). De esta manera, puede comunicar cualquier detalle adicional de propagación de filtros a
                    sus autores de informes.</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/guidance/relationships-active-inactive" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor60: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Recibe datos de ingresos que deben incluirse en informes de Microsoft
                Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Previsualiza los datos de una fuente de Microsoft Excel en Power Query
                como se muestra en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p34.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Planea crear varios elementos visuales a partir de los datos, incluido un
                elemento visual que muestre los ingresos desglosados por año y producto.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita transformar los datos para asegurarse de que pueda construir los
                elementos visuales. La solución debe garantizar que las columnas se nombren apropiadamente para los datos
                que contienen.b</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debe realizar en secuencia? Para responder, mueva las
                acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p34.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s34.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Paso 1: Seleccionar Departamento y Producto y Anular dinamización
                (Unpivot) de otras
                columnas</p>
            <p class="text-sm text-gray-400 mb-4">El comando Anular dinamización (Unpivot) de otras columnas anula la
                dinamización de
                las columnas no seleccionadas. Use este comando en una consulta cuando no se conocen todas las columnas. Las
                nuevas columnas agregadas durante una operación de actualización también se anulan de dinamización.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Anular dinamización (Unpivot) de columnas: En Power Query, puede
                transformar
                columnas en pares atributo-valor, donde las columnas se convierten en filas.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/s34.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" /> </div>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Renombrar la columna Atributo como Año y la columna Valor como
                Ingresos</p>
            <p class="text-sm text-gray-400 mb-4">Necesita hacer esto después de anular la dinamización (Unpivot).</p>
            <p class="text-sm text-gray-400 mb-4">Power Query siempre creará el par atributo-valor usando dos columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Atributo: El nombre de los encabezados de columna que se anularon de dinamización (Unpivot).</li>
                <li>Valor: Los valores que estaban debajo de cada uno de los encabezados de columna anulados de
                    dinamización (Unpivot).</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Seleccionar Usar la primera fila como encabezados</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-query/unpivot-column" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor61: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI llamado Pedidos que soporta los siguientes
                análisis:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Ventas totales a lo largo del tiempo</li>
                <li>El conteo de órdenes a lo largo del tiempo</li>
                <li>Conteos de clientes nuevos y recurrentes</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El tamaño del modelo de datos está acercándose al límite para un conjunto
                de datos en capacidad compartida.</p>
            <p class="text-sm text-gray-400 mb-4">La vista de modelo para el conjunto de datos (dataset) se muestra en la
                siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p35.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La vista de datos para la tabla Órdenes (Orders) se muestra en la
                siguiente imagen.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p35.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" /> </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Órdenes (Orders) se relaciona con la tabla Clientes (Customer)
                usando la columna IDCliente (CustomerID).</p>
            <p class="text-sm text-gray-400 mb-4">La tabla Órdenes (Orders) se relaciona con la tabla Fecha (Date) usando la
                columna FechaOrden (OrderDate).</p>
            <p class="text-sm text-gray-400 mb-4">Para cada una de las siguientes afirmaciones, seleccione Sí si la
                afirmación es verdadera. De lo contrario, seleccione No.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                 <li>Resumir los pedidos por las columnas ClienteID (CustomerID), Pedido (OrderID) y FechaPedidoOrderDate reducirá el tamaño del modelo, mientras
                    que aún se admitirá el análisis actual.</li>
                 <li>Eliminar la columna ClienteID (CustomerID) de Pedidos reducirá el tamaño del modelo, mientras que aún se admitirá el
                    análisis actual.</li>
                 <li>Eliminar las columnas PrecioUnitario (UnitPrice) y Descuento (Discount) de Pedidos reducirá el tamaño del modelo, mientras que aún
                    se admitirá el análisis actual.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/2/p35.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" /> </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s35.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: No -</p>
            <p class="text-sm text-gray-400 mb-4">No soportaría las ventas totales a lo largo del tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: No -</p>
            <p class="text-sm text-gray-400 mb-4">No soportaría los conteos de clientes nuevos y recurrentes.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 3: Sí</p>
        </div>`
    },
    contenedor62: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está construyendo un informe financiero usando Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla llamada datos_financieros que contiene una columna llamada
                Fecha y una columna llamada Ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una medida que calcule el cambio relativo en ventas en
                comparación con el trimestre anterior.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la medida? Para responder, seleccione las opciones
                apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p36.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s36.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: CALCULAR (CALCULATE)-</p>
            <p class="text-sm text-gray-400 mb-4">Calcular la suma.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: AGREGARFECHA (DATEADD) -</p>
            <p class="text-sm text-gray-400 mb-4">AGREGARFECHA -1 TRIMESTRE (DATEADD -1 QUARTER) dará el trimestre anterior.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 3: DIVIDIR (DIVIDE) -</p>
            <p class="text-sm text-gray-400 mb-4">Usar DIVIDIR para obtener el cambio relativo.</p>
        </div>`
    },
    contenedor63: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un modelo y un informe de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene una sola tabla en un modelo de datos llamada Producto. Producto
                contiene los siguientes campos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>ID</li>
                <li>Nombre (Name)</li>
                <li>Color</li>
                <li>Categoría (Category)</li>
                <li>Ventas Totales (Total Sales)</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una tabla calculada que muestre solo los ocho productos
                principales basados en el valor más alto en Ventas Totales.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la expresión DAX? Para responder, arrastre los
                valores apropiados a los objetivos correctos. Cada valor puede usarse una vez, más de una vez, o no usarse.
                Es posible que deba arrastrar la barra divisoria entre los paneles o desplazarse para ver el contenido.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p37.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s37.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: PRINCIPALES N -</p>
            <p class="text-sm text-gray-400 mb-4">PRINCIPALES N devuelve las primeras N filas de la tabla especificada.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s37.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: DESC -</p>
            <p class="text-sm text-gray-400 mb-4">Orden descendente para obtener los valores más altos primero.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/dax/topn-function-dax" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor64: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un informe de ventas en Power BI para el territorio de ventas
                de la región Noroeste de su empresa. Los datos provendrán de una vista en una base de datos de Microsoft SQL
                Server. Una muestra de los datos se muestra en la siguiente tabla:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p38.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">El informe facilitará los siguientes análisis:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>El conteo de órdenes y la suma de ventas totales por Fecha de Orden</li>
                <li>El conteo de clientes que realizaron un pedido</li>
                <li>La cantidad promedio por orden</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita reducir los tiempos de actualización de datos y los tiempos de
                consulta del informe.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de
                la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Establecer el tipo de datos para NúmeroOrdenVentas (SalesOrderNumber) como Número Decimal.</li>
                <li>B. Eliminar las columnas ClaveCliente (CustomerKey) y ClaveProducto (ProductKey).</li>
                <li>C. Eliminar las columnas MontoImpuesto (TaxAmt) y Flete (Freight).</li>
                <li>D. Filtrar los datos solo al territorio de ventas de la región Noroeste (NorthWest).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: CD</p>
            <p class="text-sm text-gray-400 mb-4">C: Eliminar columnas que no se usan en el informe.</p>
            <p class="text-sm text-gray-400 mb-4">D: Reducir el número de filas.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No A: No es posible.</p>
            <p class="text-sm text-gray-400 mb-4">No B: Se necesita ClaveCliente para el conteo de clientes que realizaron
                un pedido.</p>
        </div>`
    },
    contenedor65: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un modelo de Power BI que contiene una tabla llamada Tienda.
                Tienda contiene los siguientes campos.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p39.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Planea crear un mapa visual que mostrará las ubicaciones de las tiendas y
                proporcionará la capacidad de profundizar desde País (Country) a Estado/Provincia (State/Province) a Ciudad (City).</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer para asegurar que las ubicaciones se mapeen correctamente?
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cambiar el tipo de datos de Ciudad (City), Estado/Provincia (State/Province) y País (Country).</li>
                <li>B. Establecer la Agregación para Ciudad (City), Estado/Provincia (State/Province) y País (Country) en No resumir.</li>
                <li>C. Establecer la categoría de datos de Ciudad (City), Estado/Provincia (State/Province) y País (Country).</li>
                <li>D. Crear una columna calculada que concatene los valores en Ciudad (City), Estado/Provincia (State/Province) y País (Country).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Una jerarquía es un conjunto de campos categorizados de manera jerárquica
                donde un nivel es el padre de otro nivel. Los valores del nivel padre se pueden profundizar (drill down) al
                nivel inferior.</p>
            <p class="text-sm text-gray-400 mb-4">Crear Jerarquía -</p>
            <p class="text-sm text-gray-400 mb-4">Haga clic derecho en el campo que desea establecer como nivel 1 de la
                jerarquía en la lista de campos y luego seleccione Crear Jerarquía.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s39.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Después de eso, verá una nueva jerarquía creada con el nombre de su campo
                más la palabra Jerarquía. Esto tendría un icono de jerarquía al lado y también una opción para expandir a
                los campos de la jerarquía. Si expande, verá también una copia del campo Categoría allí.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s39.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Etc.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://radacad.com/what-a-power-bi-hierarchy-is-and-how-to-use-it/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor66: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está construyendo un modelo de datos para un informe de Power BI. </p>
            <p class="text-sm text-gray-400 mb-4">Tiene datos con formato como se muestra en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p40.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un gráfico de barras agrupadas como se muestra en la
                siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p40.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde el Editor de Power Query, dividir la columna Máquina-Usuario (User-Machine) usando un
                    delimitador.</li>
                <li>B. Desde el Editor de Power Query, crear una columna que contenga los últimos tres dígitos de la columna
                    Máquina-Usuario (User-Machine).</li>
                <li>C. En una función DAX, crear dos columnas calculadas llamadas Máquina y Usuario usando la función
                    SUSTITUIR (SUSTITUTE).</li>
                <li>D. En una función DAX, crear dos medidas llamadas Máquina y Usuario usando la función SUSTITUIR
                    (SUSTITUTE).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Dividir (Split) una columna de texto (Power Query)</p>
            <p class="text-sm text-gray-400 mb-4">Puede dividir una columna con un tipo de datos de texto en dos o más
                columnas utilizando un carácter delimitador común. Por ejemplo, una columna Nombre que contiene valores
                escritos como <Apellido>, <Nombre> se puede dividir en dos columnas usando el carácter coma (,).</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Power Query es una herramienta de Extracción, Transformación y Carga (ETL). Nos permite:
            </p>
            <p class="text-sm text-gray-400 mb-4">Descargar y obtener datos de diferentes fuentes. A esto lo llamamos
                ingestión de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Combinar, limpiar y modelar estos datos. A esto lo llamamos manipulación
                de datos.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://support.microsoft.com/es-es/office/dividir-una-columna-de-texto-power-query-5282d425-6dd0-46ca-95bf-8e0da9539662"
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
    contenedor67: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una tabla de fechas en Power BI que debe contener 10 años
                calendario completos, incluido el año actual.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la expresión DAX? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p41.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s41.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: AÑO (YEAR) -</p>
            <p class="text-sm text-gray-400 mb-4">Obtener el año actual.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: HOY (TODAY) -</p>
            <p class="text-sm text-gray-400 mb-4">HOY devuelve la fecha actual.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 3: CALENDARIO (CALENDAR) -</p>
            <p class="text-sm text-gray-400 mb-4">CALENDARIO devuelve una tabla con una sola columna llamada Fecha (Date)
                que
                contiene un conjunto contiguo de fechas. El rango de fechas va desde la fecha de inicio especificada hasta
                la fecha de finalización especificada, inclusive de esas dos fechas.</p>
            <p class="text-sm text-gray-400 mb-4">La siguiente fórmula devuelve una tabla con fechas entre el 1 de enero de
                2005 y el 31 de diciembre de 2015.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s41.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://dax.guide/calendar/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor68: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella. Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que importa una tabla de fechas y una tabla
                de ventas de una fuente de datos de base de datos de Azure SQL. La tabla de ventas tiene las siguientes
                claves externas de fecha:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha de vencimiento</li>
                <li>Fecha de pedido</li>
                <li>Fecha de entrega</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita apoyar el análisis de ventas a lo largo del tiempo basado en
                todas las claves externas de fecha.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Crea medidas que usan la función DAX USARRELACIÓN
                (USERELATIONSHIP) para filtrar
                ventas en la relación activa entre la tabla de ventas y la tabla de fechas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Solución: Desde el panel de Campos, renombra la tabla de
                fechas como Fecha de vencimiento. Usas una expresión DAX para crear Fecha de pedido y Fecha de entrega como
                tablas calculadas.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/guidance/relationships-active-inactive" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor69: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene una medida llamada Ventas
                Totales (Total Sales).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una nueva medida que devolverá la suma de Ventas Totales (Total Sales)
                para un año hasta una fecha seleccionada.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la expresión DAX? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p43.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s43.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: TOTALACUMULADO_AÑO (TOTALYTD) -</p>
            <p class="text-sm text-gray-400 mb-4">TOTALACUMULADO_AÑO (TOTALYTD) evalúa la expresión especificada en el
                intervalo que
                comienza el primer día del año y termina con la última fecha en la columna de fechas especificada después de
                aplicar los filtros especificados.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s43.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Expresión - La expresión a ser evaluada.</p>
            <p class="text-sm text-gray-400 mb-4">Fechas - El nombre de una columna que contiene fechas o una tabla de una
                columna que contiene fechas.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s43.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>`
    },
    contenedor70: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está modificando un modelo de Power BI usando Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla llamada Ventas (Sales) que contiene los siguientes campos.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p44.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla llamada Tamaño de Transacción (Transaction Size) que
                contiene los siguientes datos.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p44.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una columna calculada para clasificar cada transacción como
                pequeña, mediana o grande basándose en el valor en Monto de Venta (Sales Amount).</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar el código? Para responder, arrastre los valores
                apropiados a los objetivos correctos. Cada valor puede usarse una vez, más de una vez, o no usarse.</p>
            <p class="text-sm text-gray-400 mb-4">Es posible que deba arrastrar la barra divisoria entre los paneles o
                desplazarse para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p44.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s44.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: CALCULAR (CALCULATE) -</p>
            <p class="text-sm text-gray-400 mb-4">CALCULAR evalúa una expresión en un contexto de filtro modificado.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s44.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La expresión utilizada como primer parámetro es esencialmente la misma que
                una medida.</p>
            <p class="text-sm text-gray-400 mb-4">Los filtros pueden ser:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Expresiones de filtro booleano -</li>
                <li>Expresiones de filtro de tabla -</li>
                <li>Funciones de modificación de filtro -</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Expresión de filtro de tabla -</p>
            <p class="text-sm text-gray-400 mb-4">Un filtro de expresión de tabla aplica un objeto de tabla como filtro.
                Podría ser una referencia a una tabla del modelo, pero más probablemente es una función que devuelve un
                objeto de tabla. Puede usar la función FILTRO para aplicar condiciones de filtro complejas, incluidas
                aquellas que no pueden definirse mediante una expresión de filtro booleano.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Y -</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 3: FILTRO (FILTER) -</p>
            <p class="text-sm text-gray-400 mb-4">FILTRO devuelve una tabla que representa un subconjunto de otra tabla o
                expresión.</p>
            <p class="text-sm text-gray-400 mb-4">Sintaxis:</p>
            <div class="mt-4 mb-4">
                <img src="img/2/s44.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>DISTINTO (DISTINCT) devuelve una tabla de una columna que contiene los
                valores
                distintos de la columna especificada. En otras palabras, se eliminan los valores duplicados y solo se
                devuelven los valores únicos.
            </p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/dax/calculate-function-dax" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/dax/filter-function-dax" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor71: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI para el departamento de compras. El informe
                contiene datos de las siguientes tablas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p45.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Hay una relación uno a muchos desde Proveedores a LíneasElementos
                (LineItems) que
                utiliza las columnas ID e ID Proveedor (Supplier ID).</p>
            <p class="text-sm text-gray-400 mb-4">El informe contiene los elementos visuales que se muestran en la siguiente
                tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p45.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" /> </div>
            <p class="text-sm text-gray-400 mb-4">Necesita minimizar el tamaño del conjunto de datos sin afectar los
                elementos visuales.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Fusionar Proveedores y LíneasElementos (LineItems).</li>
                <li>B. Eliminar la columna LíneasElementos[Descripción] (LineItems[Description]).</li>
                <li>C. Eliminar las filas de LíneasElementos donde LíneasElementos[Fecha Factura] (LineItems[Invoice Date])
                    sea anterior al inicio del
                    mes pasado.</li>
                <li>D. Agrupar LíneasElementos (LineItems) por LíneasElementos[ID Factura] (LineItems[Invoice ID]) y
                    LíneasElementos[FechaFactura] (LineItems[Invoice Date]) con una suma
                    de LíneasElementos[Precio] (LineItems[Price]).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Eliminar una columna que no se usa en los elementos visuales reduce el
                tamaño del conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No A: Fusionar las tablas aumentaría el conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">No C: Dos de los elementos visuales necesitan datos históricos.</p>
            <p class="text-sm text-gray-400 mb-4">No D: Agrupar no afectaría el tamaño.</p>
        </div>`
    },
    contenedor72: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI para el departamento de marketing. El informe
                informa sobre el tráfico web a un blog y contiene datos de las siguientes tablas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p46.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Hay una relación uno a muchos desde Publicaciones (Posts) a Tráfico
                (Traffic) que utiliza
                las columnas URL y URL Visitada (URL Visited).</p>
            <p class="text-sm text-gray-400 mb-4">El informe contiene los elementos visuales que se muestran en la siguiente
                tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p46.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">El conjunto de datos tarda mucho tiempo en actualizarse.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita modificar las consultas de Publicaciones (Posts) y Tráfico
                (Traffic) para reducir
                los tiempos de carga.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones reducirán los tiempos de carga? Cada respuesta correcta
                presenta parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Eliminar las filas en Publicaciones (Posts) donde Publicaciones[Fecha Publicación] (Posts[Publish
                    Date]) esté en los últimos siete días.</li>
                <li>B. Eliminar las filas en Tráfico donde Tráfico[URL Visitada] (Traffic[URL Visited]) no contenga "blog".
                </li>
                <li>C. Eliminar Tráfico[Dirección IP] (Traffic[IP Address]), Tráfico[Agente Navegador] (traffic[Browser
                    Agent]) y Tráfico[URLReferente] (Traffic[Referring URL]).</li>
                <li>D. Eliminar Publicaciones[TextoCompleto] (Posts[Full Text]) y Publicaciones[Resumen] (Posts[Sumary]).</li>
                <li>E. Eliminar las filas en Tráfico donde Tráfico[URLReferente] no comience con "/".</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: BD</p>
            <p class="text-sm text-gray-400 mb-4">B: Solo las filas de entradas del blog son útiles para los elementos
                visuales.</p>
            <p class="text-sm text-gray-400 mb-4">D: Estas dos columnas no se usan en los elementos visuales y se pueden
                eliminar.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No A: Tres elementos visuales necesitan datos históricos.</p>
            <p class="text-sm text-gray-400 mb-4">No C: Tráfico[URLReferente] (traffic[Referring URL]) se usa en uno de los elementos visuales y por
                lo tanto no se puede eliminar.</p>
            <p class="text-sm text-gray-400 mb-4">No E: Estas filas se usan en 3 elementos visuales.</p>
        </div>`
    },
    contenedor73: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Esta creando una medida rapida como se muestra en la siguiente imagen</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p47.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una medida de promedio móvil mensual para Ventas a lo largo
                del tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe configurar el cálculo de la medida rápida? Para responder,
                seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p47.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s47.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor74: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el modelo de datos de Power BI que se muestra en la siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p48.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Ventas contiene registros de ventas por día de los últimos cinco
                años hasta la fecha actual.</p>
            <p class="text-sm text-gray-400 mb-4">Planea crear una medida para devolver las ventas totales de marzo de 2021
                cuando se selecciona marzo de 2022.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué expresión DAX debe usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. CALCULAR (SUMA(Ventas[Ventas]), AÑOANTERIOR(dimFecha[Fecha])) (Calculate (Sum(Sales[Sales]), PREVIOUSYEAR( dimDate[Date])))</li>
                <li>B. TOTALACUMULADO_AÑO (SUMA(Ventas[Ventas]), dimFecha[Fecha]) (TOTALYTD (SUM(Sales[Sales]), dimDate[Date] ))</li>
                <li>C. CALCULAR (SUMA(Ventas[Ventas]), MISMO_PERÍODO_AÑO_ANTERIOR(dimFecha[Fecha])) (Calculate (SUM(Sales[Sales]), SAMEPERIODLASTYEAR(dimDate[Date] )))</li>
                <li>D. SUMA(Ventas[Ventas]) (SUM(Sales[Sales]))</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
        </div>`
    },
    contenedor75: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Usa Power BI Desktop para cargar datos desde una base de datos de
                Microsoft SQL Server.</p>
            <p class="text-sm text-gray-400 mb-4">Mientras espera que se carguen los datos, recibe el siguiente error.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p49.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita resolver el error.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuáles son dos formas de lograr el objetivo? Cada respuesta correcta
                presenta una solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Reducir el número de filas y columnas devueltas por cada consulta.</li>
                <li>B. Dividir consultas de larga ejecución en subconjuntos de columnas y usar Power Query para fusionar las consultas.</li>
                <li>C. Usar Power Query para combinar consultas de larga ejecución en una sola consulta.</li>
                <li>D. Deshabilitar el plegado de consultas en consultas de larga ejecución.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AB</p>
        </div>`
    },
    contenedor76: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Desde el Editor de Power Query, perfilas los datos mostrados en la siguiente imagen.</p>
            <p class="text-sm text-gray-400 mb-4">Las columnas (IoT GUID) e (IoT ID) son únicas para cada fila en la consulta.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p50.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesitas analizar eventos de IoT por la hora y el día del año. La solución debe mejorar el rendimiento del conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Divides la columna FechaHora de IoT (IoT DateTime) en una columna llamada Fecha (Date) y una columna llamada Hora (Time).</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(85%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 85%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(15%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 15%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor77: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Desde el Editor de Power Query, perfilas los datos mostrados en la
                siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p51.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Las columnas GUID de IoT e ID de IoT son únicas para cada fila en la
                consulta.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas analizar eventos de IoT por la hora y el día del año. La
                solución debe mejorar el rendimiento del conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Eliminas la columna (IoT GUID) y conservas la columna (IoT ID).</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(71%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 71%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(29%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 29%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor78: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Desde el Editor de Power Query, perfilas los datos mostrados en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p52.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Las columnas (IoT GUID) e (IoT ID) son únicas para cada fila en la consulta.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas analizar eventos de IoT por la hora y el día del año. La solución debe mejorar el rendimiento del conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Cambias la columna FechaHora de IoT (IoT dateTime) al tipo de datos Fecha (Date).</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor79: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Microsoft Power BI. El tamaño del archivo PBIX es de
                550 MB. Se accede al informe usando un espacio de trabajo de aplicación en la capacidad compartida de
                powerbi.com.</p>
            <p class="text-sm text-gray-400 mb-4">El informe utiliza un conjunto de datos importado que contiene una tabla
                de hechos. La tabla de hechos contiene 12 millones de filas. El conjunto de datos está programado para
                actualizarse dos veces al día a las 08:00 y 17:00.</p>
            <p class="text-sm text-gray-400 mb-4">El informe es una sola página que contiene 15 elementos visuales de
                AppSource y 10 elementos visuales predeterminados.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios dicen que el informe es lento para cargar los elementos
                visuales cuando acceden e interactúan con el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita recomendar una solución para mejorar el rendimiento del informe.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería recomendar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cambiar cualquier medida DAX para usar funciones iteradoras.</li>
                <li>B. Eliminar columnas no utilizadas de las tablas en el modelo de datos.</li>
                <li>C. Reemplazar los elementos visuales predeterminados con elementos visuales de AppSource.</li>
                <li>D. Aumentar el número de veces que se actualiza el conjunto de datos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor80: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos de Power BI que contiene dos tablas llamadas
                Productos (Products) y Ventas (Sales).</p>
            <p class="text-sm text-gray-400 mb-4">Existe una relación uno a muchos entre las tablas.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe que contiene un filtro a nivel de informe para Productos.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una medida que devolverá el porcentaje de ventas totales
                para cada producto. La medida debe respetar el filtro a nivel de informe al calcular el total.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la medida DAX? Para responder, arrastre las funciones
                DAX apropiadas a los objetivos correctos. Cada función puede usarse una vez, más de una vez, o no usarse. Es
                posible que deba arrastrar la barra divisoria entre los paneles o desplazarse para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p54.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s54.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor81: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos de Power BI que analiza las ventas de productos a
                lo largo del tiempo. El modelo de datos contiene las siguientes tablas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p55.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Existe una relación uno a muchos entre las tablas.</p>
            <p class="text-sm text-gray-400 mb-4">La opción de fecha/hora automática para el modelo de datos está habilitada.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita reducir el tamaño del modelo de datos manteniendo la capacidad de analizar las ventas de productos por mes y trimestre.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear una relación entre la tabla Fecha (Date) y la tabla Ventas (Sales).</li>
                <li>B. Deshabilitar la opción de fecha/hora automática.</li>
                <li>C. Crear una tabla Fecha (Date) y seleccionar Marcar como tabla de fecha.</li>
                <li>D. Deshabilitar la carga en la tabla Fecha (Date).</li>
                <li>E. Eliminar la relación entre la tabla Producto (Product) y la tabla Ventas (Sales).</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AC</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">AC</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(84%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 84%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                
                
                <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(16%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 16%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor82: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Microsoft Power BI. El tamaño del archivo PBIX es de
                550 MB. Se accede al informe usando un espacio de trabajo de aplicación en la capacidad compartida de
                powerbi.com.</p>
            <p class="text-sm text-gray-400 mb-4">El informe utiliza un conjunto de datos importado que contiene una tabla
                de hechos. La tabla de hechos contiene 12 millones de filas. El conjunto de datos está programado para
                actualizarse dos veces al día a las 08:00 y 17:00.</p>
            <p class="text-sm text-gray-400 mb-4">El informe es una sola página que contiene 15 elementos visuales de
                AppSource y 10 elementos visuales predeterminados.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios dicen que el informe es lento para cargar los elementos
                visuales cuando acceden e interactúan con el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita recomendar una solución para mejorar el rendimiento del informe.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería recomendar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Implementar seguridad a nivel de fila (RLS).</li>
                <li>B. Eliminar columnas no utilizadas de las tablas en el modelo de datos.</li>
                <li>C. Reemplazar los elementos visuales predeterminados con elementos visuales de AppSource.</li>
                <li>D. Habilitar interacciones visuales.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor83: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos de Power BI que contiene una tabla llamada
                Tiendas (Stores). La tabla tiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Nombre de Tienda (Store Name)</li>
                <li>Fecha de Apertura (Open Date)</li>
                <li>Estatus (Status)</li>
                <li>Estado (State)</li>
                <li>Ciudad (City)</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una columna calculada llamada Nombre de Tienda Activa
                (Active Store Name) que
                cumpla con los siguientes requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Cuando el valor de la columna Estado (Status) es "A", se debe devolver el valor en la columna Nombre de
                    Tienda (Store Name).
                </li>
                <li>Cuando el valor de la columna Estado (Status) NO es "A", se debe devolver el valor en la columna Nombre
                    de Tienda (Store Name) precedido por "Inactiva -".</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la expresión DAX? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p57.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s57.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor84: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un archivo CSV que contiene quejas de usuarios. El archivo contiene
                una columna llamada Registrado. Registrado contiene la fecha y hora en que ocurrió cada queja. Los datos en
                Registrado están en el siguiente formato: 2018-12-31 a las 08:59.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita poder analizar las quejas por la fecha de registro y usar una
                jerarquía de fecha incorporada.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Aplicar una transformación para extraer los primeros 11 caracteres de la columna Registrado.</li>
                <li>B. Agregar una columna condicional que genere 2018 si la columna Registrado comienza con 2018 y
                    establecer el tipo de datos de la nueva columna como Número Entero.</li>
                <li>C. Crear una columna por ejemplo que comience con 2018-12-31 y establecer el tipo de datos de la nueva
                    columna como Fecha.</li>
                <li>D. Aplicar una transformación para extraer los últimos 11 caracteres de la columna Registrado y
                    establecer el tipo de datos de la nueva columna como Fecha.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor85: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Desde el Editor de Power Query, perfilas los datos mostrados en la
                siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p59.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Las columnas (IoT GUID) e (IoT ID) son únicas para cada fila en la
                consulta.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas analizar eventos de IoT por la hora y el día del año. La
                solución debe mejorar el rendimiento del conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Creas una columna personalizada que concatena la columna (IoT
                GUID) y la columna (IoT ID) y luego eliminas las columnas (IoT GUID) e (IoT ID).</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(60%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 60%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(40%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 40%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor86: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de Power BI que contiene una tabla llamada Empleado. La
                tabla contiene los siguientes datos.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p60.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cada empleado tiene un gerente como se muestra en la columna
                IDEmpleadoPadre (ParentEmployeeID).</p>
            <p class="text-sm text-gray-400 mb-4">Todas las rutas de reporte conducen al CEO en la parte superior de la
                jerarquía organizacional.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una columna calculada que devuelva el conteo de niveles
                desde cada empleado hasta el CEO.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué expresión DAX debe usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. PATHLENGTH(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]))</li>
                <li>B. PATHITEM(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]),1,INTEGER)</li>
                <li>C. PATHCONTAINS(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]),1)</li>
                <li>D. PATH(Employee[EmployeeID],Employee[ParentEmployeeID])</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
        </div>`
    },
    contenedor87: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Microsoft Power BI. El tamaño del archivo PBIX es de
                550 MB. Se accede al informe usando un espacio de trabajo de aplicación en la capacidad compartida de
                powerbi.com.</p>
            <p class="text-sm text-gray-400 mb-4">El informe utiliza un conjunto de datos importado que contiene una tabla
                de hechos. La tabla de hechos contiene 12 millones de filas. El conjunto de datos está programado para
                actualizarse dos veces al día a las 08:00 y 17:00.</p>
            <p class="text-sm text-gray-400 mb-4">El informe es una sola página que contiene 15 elementos visuales de
                AppSource y 10 elementos visuales predeterminados.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios dicen que el informe es lento para cargar los elementos
                visuales cuando acceden e interactúan con el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita recomendar una solución para mejorar el rendimiento del informe.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería recomendar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Reemplazar los elementos visuales predeterminados con elementos visuales de AppSource.</li>
                <li>B. Eliminar columnas no utilizadas de las tablas en el modelo de datos.</li>
                <li>C. Cambiar el conjunto de datos importado a DirectQuery.</li>
                <li>D. Aumentar el número de veces que se actualiza el conjunto de datos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor88: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un archivo CSV que contiene quejas de usuarios. El archivo contiene
                una columna llamada Registrado (Logged). Registrado contiene la fecha y hora en que ocurrió cada queja. Los datos en
                Registrado están en el siguiente formato: 2018-12-31 a las 08:59 (2018-12-31 at 08:59).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita poder analizar las quejas por la fecha de registro y usar una
                jerarquía de fecha incorporada.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cambiar el tipo de datos de la columna Registrado (Logged) a Fecha (Date).</li>
                <li>B. Dividir la columna Registrado (Logged) usando "a las" (at) como delimitador.</li>
                <li>C. Agregar una columna condicional que genere 2018 si la columna Registrado (Logged) comienza con 2018 y
                    establecer el tipo de datos de la nueva columna como Número Entero.</li>
                <li>D. Aplicar la función Analizar (Parse) desde las opciones de transformaciones de Fecha (Date) a la columna Registrado (Logged).
                </li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B (revisar en libro)</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(86%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 86%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(14%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 14%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor89: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el modelo de datos de Power BI que se muestra en la siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p63.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una medida para contar el número de categorías de productos
                que tuvieron productos vendidos durante un período seleccionado.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la expresión DAX? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p63.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s63.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor90: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Microsoft Power BI. El tamaño del archivo PBIX es de
                550 MB. Se accede al informe usando un espacio de trabajo de aplicación en la capacidad compartida de
                powerbi.com.</p>
            <p class="text-sm text-gray-400 mb-4">El informe utiliza un conjunto de datos importado que contiene una tabla
                de hechos. La tabla de hechos contiene 12 millones de filas. El conjunto de datos está programado para
                actualizarse dos veces al día a las 08:00 y 17:00.</p>
            <p class="text-sm text-gray-400 mb-4">El informe es una sola página que contiene 15 elementos visuales de
                AppSource y 10 elementos visuales predeterminados.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios dicen que el informe es lento para cargar los elementos
                visuales cuando acceden e interactúan con el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita recomendar una solución para mejorar el rendimiento del informe.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería recomendar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Habilitar interacciones visuales.</li>
                <li>B. Cambiar cualquier medida DAX para usar funciones iteradoras.</li>
                <li>C. Implementar seguridad a nivel de fila (RLS).</li>
                <li>D. Eliminar columnas no utilizadas de las tablas en el modelo de datos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
        </div>`
    },
    contenedor91: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el modelo de datos de Power BI que se muestra en la siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p65.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Ventas (Sales) tiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p65.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">El modelo de datos debe soportar los siguientes análisis:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Ventas totales por producto por mes en el que se realizó el pedido</li>
                <li>Cantidades vendidas por producto por día en el que se realizó el pedido</li>
                <li>Número de transacciones de venta por trimestre en el que se realizó el pedido</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Para cada una de las siguientes afirmaciones, seleccione Sí si la
                afirmación es verdadera. De lo contrario, seleccione No.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Eliminar la columna LastUpdated de la tabla Sales reduce el tamaño del modelo y aún así permite realizar los análisis requeridos.</li>
                <li>Eliminar la columna ProductID de la tabla Sales reduce el tamaño del modelo y aún así permite realizar los análisis requeridos.</li>
                <li>Eliminar la columna ShipDate (FechaEnvio) de la tabla Sales reduce el tamaño del modelo y aún así permite realizar los análisis requeridos.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/2/p65.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s65.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor92: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un archivo CSV que contiene quejas de usuarios. El archivo contiene
                una columna llamada Registrado (Logged). Registrado contiene la fecha y hora en que ocurrió cada queja. Los datos en
                Registrado están en el siguiente formato: 2018-12-31 a las 08:59.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita poder analizar las quejas por la fecha de registro y usar una
                jerarquía de fecha incorporada.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear una columna por ejemplo que comience con 2018-12-31 y establecer el tipo de datos de la nueva
                    columna como Fecha (Date).</li>
                <li>B. Crear una columna por ejemplo que comience con 2018-12-31.</li>
                <li>C. Aplicar una transformación para extraer los últimos 11 caracteres de la columna Registrado (Logged).</li>
                <li>D. Agregar una columna condicional que genere 2018 si la columna Registrado (Logged) comienza con 2018 y
                    establecer el tipo de datos de la nueva columna como Número Entero.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
        </div>`
    },
    contenedor93: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos de Power BI que contiene una tabla llamada
                Empleados. La tabla tiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Employee Name</li>
                <li>Email Address</li>
                <li>Start Date</li>
                <li>Job Title</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Está implementando seguridad a nivel de fila dinámica (RLS).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un filtro de tabla para cumplir con los siguientes
                requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Los usuarios deben ver solo sus propios datos de empleado.</li>
                <li>La expresión DAX debe funcionar tanto en Power BI Desktop como en el servicio de Power BI.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué expresión debe usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. [Email Address] - USERNAME()</li>
                <li>B. [Employee Name] - USERPRINCIPALNAME()</li>
                <li>C. [Employee Name] = USERNAME()</li>
                <li>D. [Email Address] = USERPRINCIPALNAME()</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
        </div>`
    },
    contenedor94: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el modelo de datos de Power BI que se muestra en la siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p68.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla País contiene los siguientes datos.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p68.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Crea dos roles de seguridad a nivel de fila (RLS) llamados Gerente y CFO.
            </p>
            <p class="text-sm text-gray-400 mb-4">Planea publicar el conjunto de datos en el servicio de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear expresiones DAX para los filtros RLS. La solución debe
                cumplir con los siguientes requisitos:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Cada gerente debe ver solo los datos en las tablas Ventas y Recursos Humanos de su propio país.</li>
                <li>Se debe evitar que el CFO vea los datos en la tabla Recursos Humanos.</li>
                <li>El CFO debe ver los datos de ventas de todos los países.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar las expresiones DAX para cumplir con los requisitos?
                Para responder, arrastre las expresiones apropiadas a los objetivos correctos.</p>
            <p class="text-sm text-gray-400 mb-4">Cada expresión puede usarse una vez, más de una vez, o no usarse. Es
                posible que deba arrastrar la barra divisoria entre los paneles o desplazarse para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p68.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s68.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor95: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos de Power BI que importa datos desde una hoja de cálculo de Microsoft Excel.</p>
            <p class="text-sm text-gray-400 mb-4">Usa Power Query para cargar una consulta que contiene columnas renombradas y personalizadas.</p>
            <p class="text-sm text-gray-400 mb-4">Más tarde, intenta volver a cargar la consulta y recibe el siguiente mensaje de error.</p>
            <p class="text-sm text-gray-400 mb-4">ErrorDeExpresión: La columna 'Categoría' de la tabla no se encontró.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuáles son dos posibles causas del error? Cada respuesta correcta presenta una solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. La columna fue eliminada del archivo fuente.</li>
                <li>B. La columna fue renombrada en el archivo fuente.</li>
                <li>C. El archivo ya no se encuentra en la ubicación especificada.</li>
                <li>D. El tipo de datos de la columna fue cambiado.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AB</p>
        </div>`
    },
    contenedor96: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de Power BI que contiene una tabla llamada Ventas. La
                tabla Ventas contiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>ID de Línea de Pedido</li>
                <li>ID de Producto</li>
                <li>Precio Unitario</li>
                <li>ID de Pedido</li>
                <li>Cantidad</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Los pedidos se identifican de manera única usando el ID de pedido y pueden
                tener múltiples líneas de pedido. Cada línea de pedido dentro de un pedido contiene un ID de producto
                diferente.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita escribir una medida DAX que cuente el número de pedidos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué fórmula debe usar?</p>

            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. CONTAR('Ventas'[ID de Pedido])</li>
                <li>B. CONTARA('Ventas'[ID de Pedido])</li>
                <li>C. CONTARFILAS('Ventas')</li>
                <li>D. CONTAR.DISTINTO('Ventas'[ID de Pedido])</li>
            </ul>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Count('Sales'[Order ID])</li>
                <li>B. CountA('Sales' [Order ID])</li>
                <li>C. CountRows('Sales')</li>
                <li>D. DistinctCount('Sales' [Order ID])</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(61%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 61%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(39%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 39%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor97: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un modelo de Power BI en Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una tabla calculada llamada Números que contendrá todos los
                enteros del -100 al 100.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar el cálculo DAX? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p71.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s71.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor98: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">En el Editor de Power Query, tiene una consulta llamada Datos de Ventas
                que contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p72.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear dos consultas llamadas Dimensión Producto y Hechos de
                Ventas basadas en la consulta Datos de Ventas. La solución debe minimizar el esfuerzo de mantenimiento y el
                tamaño del conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de
                la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Referenciar la consulta Datos de Ventas para crear las nuevas consultas.</li>
                <li>B. Deshabilitar la carga para la consulta Hechos de Ventas.</li>
                <li>C. Duplicar la consulta Datos de Ventas para crear las nuevas consultas.</li>
                <li>D. Desmarcar Incluir en actualización de informe para la consulta Datos de Ventas.</li>
                <li>E. Deshabilitar la carga para la consulta Datos de Ventas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AE</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">AE</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(85%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 85%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(15%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 15%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor99: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de Power BI que contiene una tabla llamada Fecha. La
                tabla Fecha contiene las siguientes columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha</li>
                <li>Año Fiscal</li>
                <li>Trimestre Fiscal</li>
                <li>Nombre del Mes</li>
                <li>Año Calendario</li>
                <li>Número de Semana</li>
                <li>Número de Mes</li>
                <li>Trimestre Calendario</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una tabla calculada basada en la tabla Fecha. La tabla
                calculada debe contener solo combinaciones únicas de valores para Año Calendario, Trimestre Calendario y Mes
                Calendario.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué función DAX debe incluir en la definición de la tabla?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. AÑADIRCOLUMNAS</li>
                <li>B. CALCULAR</li>
                <li>C. RESUMIR</li>
                <li>D. TABLADATOS</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(85%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 85%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(15%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 15%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor100: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de Power BI que contiene los siguientes datos.</p>
            <div class="mt-4 mb-4">
                <img src="img/2/p74.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Fecha (Date) se relaciona con la tabla Ventas (Sales) usando las
                columnas Fecha.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una tabla calculada que contendrá lo siguiente:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Una fila para cada año</li>
                <li>Una columna que contenga las ventas totales por año</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar el cálculo DAX? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p74.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s74.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor101: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Utiliza el Editor de Power Query para importar y previsualizar datos de
                ventas de los años 2020 y 2021 en un archivo de Microsoft Excel como se muestra en la siguiente imagen.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p75.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita dar forma a la consulta para mostrar las siguientes tres
                columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Mes</li>
                <li>Ventas</li>
                <li>Año</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe seleccionar en el Editor de Power Query?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Fusionar columnas</li>
                <li>B. Transponer</li>
                <li>C. Anular dinamización de columnas</li>
                <li>D. Dinamizar columna</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(92%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 92%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 8%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 8%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor102: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un modelo de Power BI para analizar inventario.</p>
            <p class="text-sm text-gray-400 mb-4">Carga datos en tres tablas llamadas Fecha, Producto e Inventario. La tabla Inventario se relaciona con las tablas Fecha y Producto usando relaciones uno a muchos.</p>
            <p class="text-sm text-gray-400 mb-4">Los datos de inventario se registran diariamente sin excepciones. La cantidad de inventario correcta para un producto dado en un mes es el último valor registrado para ese mes.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita escribir una medida DAX que muestre el valor de inventario correcto cuando un usuario analiza el inventario por año, mes o fecha.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe completar la medida? Para responder, seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/2/p76.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/2/s76.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor103: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que importa una tabla de fechas y una tabla
                de ventas de una fuente de datos de base de datos de Azure SQL. La tabla de ventas tiene las siguientes
                claves externas de fecha:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Fecha de vencimiento</li>
                <li>Fecha de pedido</li>
                <li>Fecha de entrega</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita apoyar el análisis de ventas a lo largo del tiempo basado en las
                tres fechas al mismo tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Desde el panel de Campos, renombra la tabla de fechas como Fecha
                de vencimiento. Usas una expresión DAX para crear Fecha de pedido y Fecha de entrega como tablas calculadas.
                Creas relaciones activas entre la tabla de ventas y cada tabla de fecha.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cumple esto con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(83%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 83%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(17%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 17%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    /*tema 3 -------------------------------------------------------------------------------------------------------------- */
    contenedor104: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una hoja de cálculo de Microsoft Excel que contiene los datos que se
                muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p1.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Planea construir un modelo de datos para un informe de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita preparar los datos para que estén disponibles para el modelo en
                el formato que se muestra en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p1.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debe realizar en secuencia en el Editor de Power Query?
                Para responder, mueva las acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el
                orden correcto.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Seleccionar las columnas [Departamento] ([Departament]) y [Etapa] ([Stage]) y desagregar las demás
                    columnas.</li>
                <li>Seleccionar y desagregar las columnas [Departamento] ([Departament]) y [Etapa] ([Stage]).</li>
                <li>Agrupar por [Departamento] ([Departament]) y [Escuela] ([School]) y crear una nueva columna llamada
                    [Puntaje Promedio]
                    ([Avg Score]) que utilice la función PROMEDIO (AVERAGE) en la columna [Puntaje] ([Score]).</li>
                <li>Renombrar la columna [Atributo] ([Attribute]) como [Escuela] ([School]) y la columna [Valor] ([Value])
                    como [Puntaje] ([Score]).</li>
                <li>Agrupar por [Departamento] ([Departament]), [Escuela1] ([School1]), [Escuela2] ([School2]), [Escuela3]
                    ([School3]), [Escuela4] ([School4]) y crear una nueva columna
                    llamada [Puntaje Promedio] que utilice la función promedio en la columna [Etapa].</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p1.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s1.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4"></p>
            <p class="text-sm text-gray-400 mb-4">Paso 1: Seleccionar las columnas [Departamento] ([Departament]) y [Etapa]
                ([Stage]) y anular
                dinamización (Unpivot) de las otras columnas.</p>
            <p class="text-sm text-gray-400 mb-4">Anulamos la dinamización de las columnas (Unpivot) Escuela1, Escuela2,
                Escuela3 y Escuela4.</p>
            <p class="text-sm text-gray-400 mb-4">Es posible que desee anular la dinamización de los datos (Unpivot), a
                veces llamado
                aplanar los datos, para ponerlos en un formato de matriz de modo que todos los valores similares estén en
                una columna.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s1.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuando anula la dinamización, desempaqueta los pares atributo-valor que
                representan un punto de intersección de las nuevas columnas y los reorienta en columnas aplanadas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Los valores (en azul a la izquierda) se anulan de dinamización en una nueva columna (en azul a la
                    derecha).</li>
                <li>Los atributos (en verde a la izquierda) se anulan de dinamización en una nueva columna (en verde a la
                    derecha) y los duplicados se mapean correspondientemente a la nueva columna de Valores.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Renombrar la columna [Atributo] ([Attribute]) como [Escuela] ([School]) y la columna
                [Valor] ([Value]) como [Puntuación] ([Score]).</p>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Agrupar por [Departamento] ([Departament]) y [Escuela] ([School]) y...</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://support.microsoft.com/es-es/office/anular-dinamizaci%C3%B3n-de-columnas-power-query-0f7bad4b-9ea1-49c1-9d95-f588221c7098"
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
    contenedor105: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe que contiene un gráfico de barras y un gráfico de
                columnas. El gráfico de barras muestra el recuento de clientes por segmento de cliente. El gráfico de
                columnas muestra las ventas por mes.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que cuando se selecciona un segmento en el gráfico
                de barras, se vea qué porción de las ventas totales del mes pertenece al segmento de cliente.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo deben configurarse las interacciones visuales en el gráfico de
                columnas cuando se selecciona el gráfico de barras?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. resaltar</li>
                <li>B. filtrar</li>
                <li>C. sin impacto</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">En la mayoría de los elementos visuales, resaltar no elimina los datos no
                relacionados. En cambio, resalta los datos relacionados. El resto de los datos permanece visible pero
                atenuado.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Por defecto, las visualizaciones en una página de informe pueden usarse
                para filtrar y resaltar cruzadamente las otras visualizaciones en la página. Por ejemplo, seleccionar un
                estado en una visualización de mapa resalta el gráfico de columnas y filtra el gráfico de líneas para
                mostrar solo los datos que se aplican a ese estado.
            </p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No B: Los filtros eliminan todo excepto los datos en los que desea
                enfocarse.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/power-bi-reports-filters-and-highlighting"
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
    contenedor106: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Un usuario crea un informe de Power BI llamado InformeA que usa un tema
                personalizado.</p>
            <p class="text-sm text-gray-400 mb-4">Usted crea un panel llamado PanelA.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurar que el PanelA use el tema personalizado. La solución
                debe minimizar el esfuerzo de desarrollo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de
                la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Publicar InformeA en Power BI.</li>
                <li>B. Desde InformeA, guardar el tema actual.</li>
                <li>C. Publicar InformeA en la galería de temas de la Comunidad de Microsoft Power BI.</li>
                <li>D. Desde PanelA, crear un tema personalizado.</li>
                <li>E. Desde PanelA, cargar un tema JSON.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AE</p>
            <p class="text-sm text-gray-400 mb-4">A: Con los temas de informe de Power BI Desktop, puede aplicar cambios de
                diseño a todo su informe, como usar colores corporativos, cambiar conjuntos de iconos o aplicar nuevo
                formato visual predeterminado.b</p>
            <p class="text-sm text-gray-400 mb-4">Cuando publica un archivo de Power BI Desktop en el servicio de Power BI,
                publica los datos del modelo en su espacio de trabajo de Power BI. Lo mismo ocurre con cualquier informe que
                haya creado en la vista de Informe.</p>
            <p class="text-sm text-gray-400 mb-4">Para publicar un conjunto de datos e informes de Power BI Desktop</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. En Power BI Desktop, elija Archivo > Publicar > Publicar en Power BI o seleccione Publicar en la
                    cinta. Inicie sesión en Power BI, si aún no lo ha hecho.
                </li>
                <li>2. Seleccione el destino. Puede buscar su lista de espacios de trabajo disponibles para encontrar el
                    espacio de trabajo en el que desea publicar. El cuadro de búsqueda le permite filtrar sus espacios de
                    trabajo. Seleccione el espacio de trabajo y luego haga clic en el botón Seleccionar para publicar.</li>
                <div class="mt-4 mb-4">
                    <img src="img/3/p3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
                </div>
                <li>3. Etc.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">E: Una forma de crear un tema personalizado es cargar un archivo JSON que
                tenga configuraciones para todos los colores que desea usar para su panel. En Power BI Desktop, los
                creadores de informes usan archivos JSON para crear temas para informes. Puede cargar estos mismos archivos
                JSON para paneles, o encontrar y cargar archivos JSON desde la página de la galería de Temas en la Comunidad
                de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">También puede guardar su tema personalizado como un archivo JSON y luego
                compartirlo con otros creadores de paneles.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-upload-desktop-files"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">AE</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(92%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 92%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros </div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 8%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 8%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor107: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una visualización que compare ingresos y costo a lo largo
                del tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de visualización debe usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. gráfico de cascada</li>
                <li>B. gráfico de áreas apiladas</li>
                <li>C. gráfico de líneas</li>
                <li>D. gráfico de anillos</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Los gráficos de líneas pueden tener muchas líneas diferentes, por ejemplo,
                tanto los ingresos como el costo a lo largo del tiempo.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-line-chart?tabs=powerbi-desktop"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(65%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 65%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(35%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 35%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor108: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe en Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">Agrega una visualización de influenciadores clave como se muestra en la
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p5.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utilice los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado basándose en la información presentada en la gráfica.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Traducción: Identificar factores adicionales que aumentan la rotacion
                puede lograrse mediante [elegir respuesta]</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Activar el informe cruzado</li>
                <li>Agregar más campos a "Explicar por"</li>
                <li>Agregar más campos a "Expandir por"</li>
                <li>Mover campos  de "Explicar por" a "Expandir por"</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p5.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s5.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: mover campos de Explicar por a Expandir por -</p>
            <p class="text-sm text-gray-400 mb-4">Puede usar Expandir Por para agregar campos que desea usar para establecer
                el nivel del análisis sin buscar nuevos influenciadores. ¿Por qué ciertos factores se convierten en
                influenciadores o dejan de
                serlo cuando muevo más campos al campo Explicar por? La visualización evalúa todos los factores explicativos
                juntos. Un factor
                podría ser un influenciador por sí solo, pero cuando se considera con otros factores podría no serlo.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: 3 -</p>
            <p class="text-sm text-gray-400 mb-4">0.30 en lugar de 0.10. Un factor 3 veces mayor.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-influencers?tabs=powerbi-desktop"
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
    contenedor109: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Construye un informe para ayudar al equipo de ventas a entender su
                desempeño y los impulsores de las ventas.</p>
            <p class="text-sm text-gray-400 mb-4">El equipo necesita tener una sola visualización para identificar qué
                factores afectan el éxito.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de visualización debe usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Influenciadores clave</li>
                <li>B. Gráfico de líneas y columnas agrupadas</li>
                <li>C. Preguntas y Respuestas (Q&A)</li>
                <li>D. Gráfico de embudo</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">La visualización de influenciadores clave le ayuda a comprender los
                factores que impulsan una métrica que le interesa. Analiza sus datos, clasifica los factores que importan y
                los muestra como influenciadores clave. Por ejemplo, suponga que desea averiguar qué influye en la rotación
                de empleados, también conocida como deserción. Un factor podría ser la duración del contrato de empleo, y
                otro factor podría ser el tiempo de desplazamiento.</p>
            <p class="text-sm text-gray-400 mb-4">Cuándo usar influenciadores clave.</p>
            <p class="text-sm text-gray-400 mb-4">La visualización de influenciadores clave es una excelente opción si
                desea:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Ver qué factores afectan la métrica que se está analizando.</li>
                <li>Contrastar la importancia relativa de estos factores. Por ejemplo, ¿los contratos a corto plazo afectan
                    la deserción más que los contratos a largo plazo?</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium" href="linkHere" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor110: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla que contiene las siguientes tres columnas:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Ciudad </li>
                <li>○Ventas Totales</li>
                <li>○Ocupación</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una visualización de influenciadores clave (Key influencers) como se muestra
                en la imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p7.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe configurar la visualización? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: Ventas Totales -</p>
            <p class="text-sm text-gray-400 mb-4">La visualización de influenciadores clave le ayuda a comprender los
                factores que impulsan una métrica que le interesa, aquí Ventas Totales. Analiza sus datos, clasifica los
                factores que importan y los muestra como influenciadores clave.</p>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Ocupación -</p>
            <p class="text-sm text-gray-400 mb-4">Las medidas y las columnas resumidas se analizan automáticamente al nivel
                de los campos de Explicar por utilizados.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-influencers?tabs=powerbi-desktop"
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
    contenedor111: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está usando la visualización de influenciadores clave (Key influencers)
                para identificar qué
                factores afectan la cantidad de artículos vendidos en un pedido.</p>
            <p class="text-sm text-gray-400 mb-4">Agrega los siguientes campos al campo Explicar Por:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>País del Cliente</li>
                <li>Categoría del Producto</li>
                <li>País del Proveedor</li>
                <li>Empleado de Ventas</li>
                <li>Nombre del Proveedor</li>
                <li>Nombre del Producto</li>
                <li>Ciudad del Cliente</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">La visualización de influenciadores clave devuelve los resultados
                mostrados en la siguiente exhibición.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p8.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué puede identificar a partir del elemento visual?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Los clientes en Austria ordenan 18.8 unidades más que la cantidad promedio del pedido.</li>
                <li>B. Los clientes en Boise ordenan un 20.37 por ciento más que la cantidad promedio del pedido.</li>
                <li>C. La categoría del producto influye positivamente en la cantidad por pedido.</li>
                <li>D. Los clientes en Cork ordenan cantidades más bajas que el promedio.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Se muestra la cantidad promedio de unidades.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No B: Se muestra la cantidad promedio de unidades, no el porcentaje.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-influencers?tabs=powerbi-desktop"
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
    contenedor112: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe que contiene cuatro páginas. Cada página contiene
                segmentadores de datos para los mismos cuatro campos.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios reportan que cuando seleccionan valores en un segmentador de
                datos en una página, las selecciones no se conservan en las otras páginas.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita recomendar una solución para asegurar que los usuarios puedan
                seleccionar un valor una vez para filtrar los resultados en todas las páginas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuáles son dos posibles recomendaciones para lograr este objetivo? Cada
                respuesta correcta presenta una solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear un marcador para cada valor del segmentador.</li>
                <li>B. Reemplazar los segmentadores con filtros a nivel de informe.</li>
                <li>C. Sincronizar los segmentadores entre las páginas.</li>
                <li>D. Reemplazar los segmentadores con filtros a nivel de página.</li>
                <li>E. Reemplazar los segmentadores con filtros a nivel de elemento visual.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: BC</p>
            <p class="text-sm text-gray-400 mb-4">C: Puede sincronizar un segmentador y usarlo en cualquier o todas las
                páginas de un informe.</p>
            <p class="text-sm text-gray-400 mb-4">B: Puede establecer filtros en tres niveles diferentes para el informe: a
                nivel de elemento visual, a nivel de página y a nivel de informe.</p>
            </a>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Supongamos que desea que los lectores de su informe puedan ver las
                métricas de ventas generales, pero también resaltar el desempeño de gerentes de distrito individuales y
                diferentes marcos de tiempo. Podría crear informes separados o gráficos comparativos. Podría agregar filtros
                en el panel Filtros. O podría usar segmentadores. Los segmentadores son otra forma de filtrar. Reducen la
                porción del conjunto de datos que se muestra en las otras visualizaciones del informe.
            </p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">BC</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(92%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 92%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 8% )</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 8%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor113: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe que incluye una visualización de tarjeta.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita aplicar el siguiente formato condicional a la tarjeta minimizando el esfuerzo de diseño:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Para valores que sean mayores o iguales a 100, la fuente de la etiqueta de datos debe ser rojo oscuro.</li>
                <li>Para valores que sean menores a 100, la fuente de la etiqueta de datos debe ser gris oscuro.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de formato debe usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Escala de color</li>
                <li>B. Reglas</li>
                <li>C. Valor de campo</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Encontrar el formato condicional en el elemento visual de tarjeta es un
                poco complicado. No hay una opción separada para eso. Debe ir a la pestaña Formato del elemento visual, y
                luego expandir la Etiqueta de Datos. Justo al lado del color de la Etiqueta de Datos, debe pasar el mouse, y
                aparecerá un icono de tres puntos, al hacer clic en él, verá Formato Condicional.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s10.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Ahora, en la pestaña Formato Condicional, puede aplicarlo en diferentes
                métodos. Por ejemplo, puede elegir Reglas, y luego...</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s10.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">El modo Reglas le dará la capacidad de poner roles personalizados como se
                muestra a continuación:</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s10.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://radacad.com/enhance-the-card-visual-in-power-bi-with-conditional-formatting/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor114: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un panel (dashboard) de Power BI llamado PanelA (TileA) que contiene un icono llamado
                IconoA. IconoA contiene un mapa de árbol visual de un informe llamado InformeA (ReportA).</p>
            <p class="text-sm text-gray-400 mb-4">Necesita proporcionar a los usuarios del PanelA (DashboardA) iconos adicionales que se
                relacionen con el contenido de IconoA (TileA).</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debe realizar en secuencia? Para responder, mueva las
                acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p11.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s11.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Paso 1: Desde InformeA (ReportA), seleccionar Obtener Información</p>
            <p class="text-sm text-gray-400 mb-4">Luego seleccione "Obtener Información" (Get Insights) Desde la pestaña
                Conjuntos de
                datos + flujos de datos (Dataset + dataflows), seleccione Más opciones (...) junto al conjunto de datos, y luego elija Obtener
                información.</p>
            <p class="text-sm text-gray-400 mb-4">Power BI "Información Rápida" (Quick Insights) ahora escaneará los datos
                relacionados con el
                icono y mostrará una lista de información potencial que puede querer explorar más a fondo. Para profundizar
                en un punto de datos específico, incluso puede seleccionar datos en el elemento visual y "Información
                Rápida" (Quick Insights) se
                centrará en ese punto de datos al buscar información.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s11.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Power BI utiliza varios algoritmos para buscar tendencias en su conjunto
                de datos.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s11.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">En cuestión de segundos, su información está lista. Seleccione Ver
                información para mostrar las visualizaciones.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s11.4.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Las visualizaciones se muestran en un lienzo especial de "Información
                Rápida" (Quick Insights)
                con hasta 32 tarjetas de información separadas. Cada tarjeta tiene un gráfico o diagrama más una breve
                descripción.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Desde PanelA (DashboardA), seleccionar las opciones de IconoA
                (TileA), y luego
                seleccionar Ver Información</p>
            <p class="text-sm text-gray-400 mb-4">La pantalla de información se abre en Modo Enfoque (Focus mode).</p>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Desde el Modo Enfoque (Focus mode), fijar los elementos visuales
                relevantes al
                PanelA (DashboardA)</p>
            <p class="text-sm text-gray-400 mb-4">Vaya al 'modo de enfoque' (Focus mode) en un icono del panel (dashboard)
                para datos cargados en
                Power BI.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-insights" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor115: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un panel usando el servicio de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene una página de informe existente que contiene tres gráficos.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita agregar los gráficos al panel manteniendo la interactividad entre
                los gráficos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debe hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Editar interacciones en el informe y establecer todas las interacciones en Filtrar.</li>
                <li>B. Fijar cada gráfico como un icono.</li>
                <li>C. Editar el tema del panel y fijar cada gráfico como un icono.</li>
                <li>D. Fijar la página del informe como un icono en vivo.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Una forma de agregar un nuevo icono al panel es fijando una página
                completa del informe. Esta es una manera fácil de fijar más de una visualización a la vez. Además, cuando
                fija una página completa, los iconos están en vivo; puede interactuar con ellos directamente en el panel
                (dashboard). Y
                los cambios que realice a cualquiera de las visualizaciones en el editor de informes, como agregar un filtro
                o cambiar los campos utilizados en el gráfico, también se reflejan en el icono del panel (dashboard). Fijar
                iconos en
                vivo de informes a paneles solo está disponible en el servicio de Power BI (app.powerbi.com).</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboard-pin-live-tile-from-report"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(76%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 76%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(24%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 24%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor116: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un elemento visual como se muestra en la siguiente
                imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p13.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">El color del indicador para Ventas Totales (Total Sales) se basará en % de Crecimiento
                respecto al Año Anterior (Growth to Last Year).</p>
            <p class="text-sm text-gray-400 mb-4">La solución debe usar solo los cálculos existentes.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe configurar el elemento visual? Para responder, seleccione las
                opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/3/p13.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s13.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 1: Color de fondo -</p>
            <p class="text-sm text-gray-400 mb-4">Para aplicar formato condicional, seleccione una visualización de Tabla o
                Matriz en Power BI Desktop. En el panel Visualizaciones, haga clic derecho o seleccione la flecha hacia
                abajo junto al campo en el pozo de Valores que desea formatear. Seleccione Formato condicional y luego elija
                el tipo de formato a aplicar.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s13.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" /> </div>
            <p class="text-sm text-gray-400 mb-4">Cuadro 2: Reglas -</p>
            <p class="text-sm text-gray-400 mb-4">Para formatear el color de fondo de celda o el color de fuente por reglas,
                en el campo Formato por del cuadro de diálogo Color de fondo o Color de fuente, seleccione Reglas.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s13.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-conditional-table-formatting"
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
    contenedor117: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está usando informes existentes para construir un panel que se verá
                frecuentemente en modo vertical en teléfonos móviles.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita construir el panel.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué cuatro acciones debe realizar en secuencia? Para responder, mueva las
                acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p14.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s14.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Paso 1: Editar la vista móvil del panel</p>
            <p class="text-sm text-gray-400 mb-4">Abra un informe en la vista de edición.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Fijar elementos de los informes al panel</p>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Abrir el panel.</p>
            <p class="text-sm text-gray-400 mb-4">Abra el panel para ver el icono en vivo fijado.</p>
            <p class="text-sm text-gray-400 mb-4">Desde el panel de navegación, seleccione el panel con el nuevo icono en
                vivo. Allí, puede hacer cosas como renombrar, cambiar el tamaño, vincular y mover la página del informe
                fijada.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 4: Reorganizar, cambiar el tamaño o eliminar elementos del diseño
                móvil</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboard-pin-live-tile-from-report"
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
    contenedor118: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Planea crear el gráfico mostrado en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p15.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debe crear la línea horizontal punteada que denota el percentil 40
                de las ventas diarias para el período mostrado?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregar una medida al elemento visual que use la siguiente expresión DAX. Medida1 = PERCENTILX.INC
                    (Ventas, ventas[Ventas Totales], 0.40) | Measure1 = PERCENTILEX.INC (Sales,sales[Total Sales],0.40)</li>
                <li>B. Agregar una medida al elemento visual que use la siguiente expresión DAX. Medida1 = PERCENTILX.EXC
                    (Ventas, ventas[Ventas Totales], 0.40) | Measure1 = PERCENTILEX.EXC (Sales,sales[Total Sales],0.40)</li>
                <li>C. Agregar una nueva línea de percentil que use Ventas Totales como la medida y 40% como el percentil.
                </li>
                <li>D. Crear una línea horizontal que tenga un valor fijo de 24,000.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">La función de análisis le permite mostrar percentiles a través de grupos
                especificados a lo largo de un eje específico.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Haga clic en la pestaña de análisis.</li>
                <li>2. Seleccione Percentil.</li>
                <li>3. Puede elegir un percentil específico junto con otras opciones de formato.</li>
                <li>4. Arrastre una fecha o una dimensión no numérica al Eje de un gráfico de columnas.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/s15.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <div class="mt-4 mb-4">
                <img src="img/3/s15.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://theorderguys.com/dash-intel/powerbi/statistical_functions_percentile.php" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor119: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está construyendo un informe de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios verán el informe usando sus dispositivos móviles.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita configurar el informe para mostrar datos basados en la ubicación
                de cada usuario.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debe realizar? Cada respuesta correcta presenta parte de
                la solución.b</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde el Editor de Power Query, detectar los tipos de datos de las columnas relevantes.</li>
                <li>B. En Categoría de Datos, establecer la categoría de datos geográficos para las columnas relevantes.</li>
                <li>C. Crear una jerarquía para columnas del tipo de datos de geografía.</li>
                <li>D. Usar las columnas del tipo de datos de geografía en todos los elementos visuales.</li>
                <li>E. Para las columnas relevantes, establecer sinónimos para que coincidan con términos geográficos comunes.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: BD</p>
            <p class="text-sm text-gray-400 mb-4">B: Identificar datos geográficos en su informe</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. En Power BI Desktop, cambie a la Vista de Datos (ícono de vista de datos).</li>
                <li>2. Seleccione una columna con datos geográficos (por ejemplo, una columna Ciudad).</li>
                <li>3. En la pestaña Modelado, seleccione Categoría de Datos, luego la categoría correcta (en este ejemplo,
                    Ciudad).</li>
                <div class="mt-4 mb-4">
                    <img src="img/3/s16.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
                </div>
                <li>texto</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">4. Continúe estableciendo categorías de datos geográficos para cualquier
                otro campo en el modelo.</p>
            <p class="text-sm text-gray-400 mb-4">D: Crear elementos visuales con sus datos geográficos</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s16.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cambie a la Vista de Informe (ícono de vista de informe) y cree elementos
                visuales que utilicen los campos geográficos en sus datos.b</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s16.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Publicar el informe en el servicio de Power BI.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-mobile-geofiltering"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">BD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(74%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 74%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">BC</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(18%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 18%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 9% )</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-yellow-500/50 bg- h-full rounded-full" style="width: 9%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor120: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes un informe que contiene un gráfico de anillos y un gráfico de
                columnas agrupadas. Las interacciones entre los elementos visuales utilizan la configuración predeterminada.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesitas modificar el informe para que, al seleccionar una columna en el
                gráfico de columnas, el gráfico de anillos se redibuje utilizando los datos de la columna seleccionada.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debes hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Seleccionar el gráfico de anillos y configurar la interacción del gráfico de columnas como Filtrar.</li>
                <li>B. Seleccionar el gráfico de columnas y configurar la interacción del gráfico de anillos como Filtrar.</li>
                <li>C. Seleccionar el gráfico de anillos y configurar la interacción del gráfico de columnas como Ninguno.</li>
                <li>D. Seleccionar el gráfico de columnas y configurar la interacción del gráfico de anillos como Ninguno.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Los filtros eliminan todos los datos excepto aquellos en los que quieres
                centrarte.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Habilita los controles de interacción visual.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Selecciona una visualización para activarla.</li>
                <li>2. Muestra las opciones de Interacciones Visuales.</li>
                <li>3. En Power BI Desktop, selecciona Formato > Editar interacciones.</li>
                <div class="mt-4 mb-4">
                    <img src="img/3/s17.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
                </div>
                <li>4. Para mostrar los controles de interacción de la visualización, selecciona Editar interacciones. Power
                    BI agrega íconos de filtro y resaltado a todas las demás visualizaciones en la página del informe.
                </li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Podemos ver que el mapa de árbol aplica filtros cruzados al gráfico de
                líneas y al mapa, y aplica resaltado cruzado al gráfico de columnas. Ahora puedes cambiar cómo la
                visualización seleccionada interactúa con las demás visualizaciones en la página del informe.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s17.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-reports-visual-interactions?tabs=powerbi-desktop"
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
    contenedor121: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes una página de informe que contiene los elementos visuales que se
                muestran en la siguiente imagen.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p18.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utiliza los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado basándote en la información presentada en la gráfica.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Seleccionar un trimestre en el gráfico de líneas [respuesta elegida] el
                gráfico de columnas agrupadas.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>filtrar de forma cruzada</li>
                <li>resaltar de forma cruzada</li>
                <li>no afectará</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Seleccionar un punto de datos en la línea de Tailspin Toys en el gráfico
                de líneas [respuesta elegida] el mapa.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>filtrar de forma cruzada</li>
                <li>resaltar de forma cruzada</li>
                <li>no afectará</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p18.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s18.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: filtro cruzado -</p>
            <p class="text-sm text-gray-400 mb-4">El gráfico de columnas agrupadas tiene el icono de filtro activo.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s18.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: resaltado cruzado -</p>
            <p class="text-sm text-gray-400 mb-4">El mapa tiene el icono de resaltado cruzado activo.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s18.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-reports-visual-interactions?tabs=powerbi-desktop"
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
    contenedor122: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Estás creando un informe de Power BI mediante Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas incluir un objeto visual que muestre tendencias y otra información útil automáticamente. El objeto visual debe actualizarse en función de las selecciones realizadas en otros objetos visuales.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de objeto visual deberías usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Preguntas y respuestas (Q&A)</li>
                <li>B. narrativa inteligente</li>
                <li>C. influyentes clave</li>
                <li>D. árbol de descomposición</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">La visualización de narrativa inteligente te ayuda a resumir rápidamente
                objetos visuales e informes. Proporciona información innovadora relevante que puedes personalizar.</p>
            <p class="text-sm text-gray-400 mb-4">Utiliza resúmenes de narrativa inteligente en tus informes para abordar conclusiones clave, señalar tendencias y editar el lenguaje y el formato para una audiencia específica. En PowerPoint, en lugar de pegar una captura de pantalla de las conclusiones clave de tu informe, puedes añadir narrativas que se actualizan con cada actualización. Tu audiencia puede utilizar los resúmenes para comprender los datos, llegar más rápido a los puntos clave y explicar los datos a otros.b</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-smart-narrative"
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
    contenedor123: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">En Power BI Desktop, tienes un conjunto de datos que contiene una tabla.
            </p>
            <p class="text-sm text-gray-400 mb-4">Creas un objeto visual de tabla en una página de informe de Power BI como
                se muestra en la siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p20.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesitas configurar el objeto visual para que muestre la imagen
                referenciada en lugar de la URL en la columna Imagen de la planta (Plant Image).</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué deberías hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde la pestaña Formato, seleccionar Valores y luego establecer Iconos de URL en Activado para la
                    tabla.</li>
                <li>B. Establecer la Categoría de datos del campo Imagen de la planta (Plant Image) en URL web.</li>
                <li>C. Establecer el Tipo de datos del campo Imagen de la planta (Plant Image) en Binario.</li>
                <li>D. Establecer la Categoría de datos del campo Imagen de la planta (Plant Image) en URL de imagen.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Agregar imágenes a tu informe:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Crea una columna con las URL de las imágenes. Consulta las Consideraciones más adelante en este
                    artículo para conocer los requisitos.</li>
                <li>2. Selecciona esa columna. En la cinta Herramientas de columna, en Categoría de datos, selecciona URL de
                    imagen.</li>
                <li>3. Agrega la columna a una tabla, matriz, segmentación o tarjeta de varias filas.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Desde powerbi.com, agrega un mosaico para el conjunto de datos
                Excel1 al PanelA.</p>
            <p class="text-sm text-gray-400 mb-4">En el servicio de Power BI (app.powerbi.com), un panel contiene mosaicos
                anclados desde uno o más conjuntos de datos, por lo que puedes hacer preguntas sobre cualquiera de los datos
                contenidos en cualquiera de esos conjuntos de datos.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/power-bi-images-tables" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor124: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes una hoja de cálculo de Microsoft Excel llamada Excel1 que contiene
                resultados de una encuesta.</p>
            <p class="text-sm text-gray-400 mb-4">Tienes un panel de Power BI llamado PanelA que tiene habilitada la función
                de Preguntas y respuestas.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas asegurarte de que los usuarios que pueden acceder al PanelA
                puedan hacer preguntas basadas en el contenido de Excel1 y anclar objetos visuales basados en sus consultas
                al PanelA. La solución debe minimizar el tiempo de desarrollo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones deberías realizar en secuencia? Para responder, mueve
                las acciones apropiadas de la lista de acciones al área de respuesta y ordénalas en la secuencia correcta.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Desde powerbi.com, anclar un rango de Excel1 al TableroA (DashboardA).</li>
                <li>Desde Excel, formatear los datos en Excel1 como tabla.</li>
                <li>Desde powerbi.com, importar Excel1 como conjunto de datos (dataset).</li>
                <li>Desde powerbi.com, agregar un mosaico para el conjunto de datos Excel1 al TableroA (DashboardA).</li>
                <li>Desde Excel, crear un rango con nombre utilizando los datos en Excel1.</li>
                <li>Desde powerbi.com, cargar Excel1.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p21.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s21.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Paso 1: Desde powerbi.com, cargar Excel1.</p>
            <p class="text-sm text-gray-400 mb-4">Carga tu archivo de Excel en el servicio de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">El servicio de Power BI se conecta a muchas fuentes de datos, incluidos
                archivos de Excel que se encuentran en tu computadora.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Inicia sesión en el servicio de Power BI.</li>
                <li>2. En Mi área de trabajo, selecciona Nuevo > Cargar un archivo.</li>
                <li>3. Selecciona Archivo local, busca la ubicación donde guardaste el archivo de Excel Muestra financiera y
                    selecciona Abrir.</li>
                <li>4. En la página Archivo local, selecciona Importar.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Ahora tienes un conjunto de datos de Muestra financiera. Power BI también
                creó automáticamente un panel en blanco. Si no ves el panel, actualiza tu navegador.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Desde powerbi.com, importar Excel1 como un conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Desde powerbi.com, agregar un mosaico para el conjunto de datos
                Excel1 al PanelA.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-from-excel-to-stunning-report"
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
    contenedor125: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tienes un gráfico de barras agrupadas que contiene una medida llamada
                Salario como valor y un campo llamado Empleado como eje. El salario está presente en los datos como una
                cantidad numérica que representa dólares estadounidenses.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas crear una línea de referencia para mostrar qué empleados están
                por encima del salario mediano.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Creas una línea constante y estableces el valor en 0.5.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Creas una línea de percentil utilizando la medida Salario y
                estableces el percentil en 50%.</p>
            <p class="text-sm text-gray-400 mb-4">La mediana es el valor medio o el percentil 50 de un conjunto de datos.
            </p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://theorderguys.com/dash-intel/powerbi/statistical_functions_median.php" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor126: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tienes un gráfico de barras agrupadas que contiene una medida llamada
                Salario como valor y un campo llamado Empleado como eje. El salario está presente en los datos como una
                cantidad numérica que representa dólares estadounidenses.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas crear una línea de referencia para mostrar qué empleados están por encima del salario mediano.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Creas una línea de promedio utilizando la medida Salario.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">El promedio no es la mediana.</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Creas una línea de percentil utilizando la medida Salario y estableces el percentil en 50%.</p>
            <p class="text-sm text-gray-400 mb-4">La mediana es el valor medio o el percentil 50 de un conjunto de datos.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium" href="https://theorderguys.com/dash-intel/powerbi/statistical_functions_median.php" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor127: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                    <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                    mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                    planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                    pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a ella.
                    Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tienes un gráfico de barras agrupadas que contiene una medida llamada Salario como valor y un campo llamado Empleado como eje. El salario está presente en los datos como una cantidad numérica que representa dólares estadounidenses.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas crear una línea de referencia para mostrar qué empleados están por encima del salario mediano.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Creas una línea de percentil utilizando la medida Salario y estableces el percentil en 50%.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">La mediana es el valor medio o el percentil 50 de un conjunto de datos.
            </p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://theorderguys.com/dash-intel/powerbi/statistical_functions_median.php" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(89%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 89%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(11%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 11%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor128: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Estás perfilando datos mediante el Editor de Power Query.</p>
            <p class="text-sm text-gray-400 mb-4">Tienes una tabla que contiene una columna llamada columna1. Las
                estadísticas de columna y la distribución de valores de la columna1 se muestran en la siguiente ilustración.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/3/p25.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utiliza los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado según la información presentada en el gráfico.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Hay [respuesta elegida]</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>20 valores que ocurren</li>
                <li>365 valores que ocurren</li>
                <li>277,329 valores que ocurren</li>
                <li>hay un valor que ocurre</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">La Pera, especie con flores se encuentra con más frecuencia en la columna1
                que la especie [respuesta elegida].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Ceniza, Verde</li>
                <li>Cangrejo, Floración</li>
                <li>Olmo, Americano</li>
                <li>Abeto, Azul</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p25.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s25.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: hay 20 valores que ocurren -</p>
            <p class="text-sm text-gray-400 mb-4">Hay 20 valores únicos.</p>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: Olmo, Americano -</p>
            <p class="text-sm text-gray-400 mb-4">Olmo, Americano está por debajo de la especie Haya, floración en el
                gráfico.</p>
        </div>`
    },
    contenedor129: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes un informe de Power BI alojado en powerbi.com que muestra los
                gastos por departamento para los gerentes de departamento.</p>
            <p class="text-sm text-gray-400 mb-4">El informe contiene un gráfico de líneas que muestra los gastos por mes.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas permitir que los usuarios elijan entre ver el informe como un
                gráfico de líneas o como un gráfico de columnas. La solución debe minimizar el esfuerzo de desarrollo y
                mantenimiento.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué deberías hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Habilitar a los lectores del informe para personalizar objetos visuales.to</li>
                <li>B. Crear una página de informe separada para que los usuarios vean el gráfico de columnas.</li>
                <li>C. Agregar un gráfico de columnas, un marcador y un botón para que los usuarios elijan un objeto visual.</li>
                <li>D. Crear un informe móvil que contenga un gráfico de columnas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Permitir que los usuarios personalicen objetos visuales en un informe</p>
            <p class="text-sm text-gray-400 mb-4">Habilitar la personalización en un informe</p>
            <p class="text-sm text-gray-400 mb-4">Puedes habilitar la función ya sea en Power BI Desktop o en el servicio
                Power BI. También puedes habilitarla en informes insertados.</p>
            <p class="text-sm text-gray-400 mb-4">Para habilitar la función en el servicio Power BI (powerbi.com), ve a
                Configuración de tu informe.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s26.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/power-bi-personalize-visuals?tabs=powerbi-service#enable-personalization-in-a-report"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(59%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 59%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(41%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 41%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor130: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes dos informes de Power BI llamados InformeA e InformeB, cada uno utiliza una paleta de colores distinta.</p>
            <p class="text-sm text-gray-400 mb-4">Estás creando un panel (dashboard) de Power BI que incluirá dos objetos visuales de cada informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas utilizar un tema oscuro coherente para el panel (dashboard). La solución debe preservar los colores originales de los informes.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones deberías realizar? Cada respuesta correcta presenta una parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cargar una instantánea.</li>
                <li>B. Para el navegador, establecer la preferencia de color al modo oscuro.</li>
                <li>C. Al anclar objetos visuales al panel (dashboard), seleccionar Usar tema de destino.</li>
                <li>D. Seleccionar el tema oscuro del panel (dashboard).</li>
                <li>E. Activar el flujo de mosaicos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: CD</p>
            <p class="text-sm text-gray-400 mb-4">D: Con los temas de panel puedes aplicar un tema de color a todo tu panel,
                como colores corporativos, colores estacionales o cualquier otro tema de color que desees aplicar. Cuando
                aplicas un tema de panel, todos los objetos visuales en tu panel utilizan los colores del tema seleccionado.
                En el panel que aparece, selecciona uno de los temas predefinidos.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s27.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">C: Informes y paneles con temas diferentes</p>
            <p class="text-sm text-gray-400 mb-4">Si tu informe utiliza un tema diferente al tema del panel, en la mayoría
                de los casos puedes controlar si el objeto visual conserva el tema actual del informe o utiliza el tema del
                panel.</p>
            <p class="text-sm text-gray-400 mb-4">* Intenta volver a anclar el mosaico y selecciona Usar tema del panel.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s27.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboard-themes" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">CD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(90%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 90%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(10%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 32%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor131: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes un conjunto de datos que contiene datos de ingresos del año pasado.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesitas utilizar la detección de anomalías en Power BI para mostrar
                anomalías en el conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué deberías configurar? Para responder, selecciona las opciones
                apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tipo de gráfico:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Líneas</li>
                <li>Circular</li>
                <li>Treemap</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Configuración del gráfico:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Selecciona la opción "Mostrar valor como"</li>
                <li>Habilitar obtención de detalles entre informes</li>
                <li>Rellenar el eje con un campo de fecha</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p28.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: Línea -</p>
            <p class="text-sm text-gray-400 mb-4">La detección de anomalías solo es compatible con objetos visuales de
                gráfico de líneas que contengan datos de series temporales en el campo Eje.</p>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: Completar el eje con un campo de fecha</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Las Explicaciones de anomalías no funcionan con las opciones de 'Mostrar valor como'.</li>
                <li>No se admite la exploración en profundidad para ir al siguiente nivel en la jerarquía.</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-anomaly-detection"
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
    contenedor132: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes un gráfico de líneas que muestra el número de empleados en un departamento a lo largo del tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">Necesitas ver los costos salariales totales de los empleados cuando pasas el cursor sobre un punto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué deberías hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregar salario a los campos de obtención de detalles.</li>
                <li>B. Agregar salario a los filtros visuales.</li>
                <li>C. Agregar salario a la información sobre herramientas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Personalizar la información sobre herramientas con agregación o medidas
                rápidas</p>
            <p class="text-sm text-gray-400 mb-4">Puedes personalizar la información sobre herramientas seleccionando una
                función de agregación.</p>
            <p class="text-sm text-gray-400 mb-4">Selecciona la flecha junto al campo en el contenedor Información sobre
                herramientas. Luego, selecciona entre las opciones disponibles.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s29.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>La información sobre herramientas es una forma elegante de
                proporcionar más información contextual y detalle a los puntos de datos en un objeto visual. Puedes
                personalizar la información sobre herramientas en Power BI Desktop y en el servicio Power BI.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cuando se crea una visualización, la información sobre herramientas predeterminada muestra el valor y la categoría del punto de datos.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-custom-tooltips?tabs=powerbi-desktop"
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
    contenedor133: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tienes el objeto visual que se muestra en la ilustración Original. (Haz
                clic en la pestaña Original.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p30.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesitas configurar el objeto visual como se muestra en la ilustración
                Modificado. (Haz clic en la pestaña Modificado.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p30.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué deberías agregar al objeto visual?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. una medida</li>
                <li>B. una línea de promedio</li>
                <li>C. una línea de tendencia</li>
                <li>D. un pronóstico</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Por ejemplo, así es como se ve el pronóstico actual:</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s30.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://spreadsheeto.com/power-bi-forecasting/#intro" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor134: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesitas crear un objeto visual que permita la exploración ad hoc de los
                datos como se muestra en la siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p31.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de objeto visual deberías usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. narrativa inteligente</li>
                <li>B. árbol de descomposición</li>
                <li>C. Preguntas y respuestas</li>
                <li>D. influyentes clave</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">El objeto visual de árbol de descomposición en Power BI te permite visualizar datos a través de múltiples dimensiones. Agrega datos automáticamente y permite profundizar en tus dimensiones en cualquier orden. También es una visualización de inteligencia artificial (IA), por lo que puedes pedirle que encuentre la siguiente dimensión para profundizar basándose en ciertos criterios.</p>
            <p class="text-sm text-gray-400 mb-4">Esto lo convierte en una herramienta valiosa para la exploración ad hoc y la realización de análisis de causa raíz.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p31.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium" href="linkHere" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor135: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Su empresa tiene empleados en 10 estados.</p>
            <p class="text-sm text-gray-400 mb-4">La empresa decidió recientemente asociar cada estado a una de las
                siguientes tres regiones: Este, Oeste y Norte.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un modelo de datos que contiene información de los empleados por
                estado. El modelo NO incluye información de región.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe que muestra los empleados por estado.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita ver a los empleados por región lo más rápido posible.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear una nueva agregación que resuma por estado.</li>
                <li>B. Crear una nueva agregación que resuma por empleado.</li>
                <li>C. Crear un nuevo grupo en la columna de estado y establecer el Tipo de grupo en Lista.</li>
                <li>D. Crear un nuevo grupo en la columna de estado y establecer el Tipo de grupo en Bin.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">En Power BI Desktop, puede agrupar puntos de datos para ayudarle a ver,
                analizar y explorar datos y tendencias en sus objetos visuales con mayor claridad.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s32.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es D: También puede definir el tamaño del bin para agrupar valores en
                grupos de igual tamaño que le permitan visualizar mejor los datos de manera significativa. Esta acción a
                menudo se denomina agrupamiento en bins.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-grouping-and-binning"
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
    contenedor136: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una colección de informes para el departamento de RR.HH. de su empresa.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una visualización para el departamento de RR.HH. que muestre el recuento histórico de empleados y prediga tendencias durante los próximos seis meses.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de visualización debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. gráfico de cintas</li>
                <li>B. gráfico de dispersión</li>
                <li>C. gráfico de líneas</li>
                <li>D. influyentes clave</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Los mejores datos para la previsión son los datos de series temporales o
                los números enteros que aumentan uniformemente. El gráfico de líneas debe tener solo una línea.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://powerbi.microsoft.com/fr-ca/blog/introducing-new-forecasting-capabilities-in-power-view-for-office-365/"
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
    contenedor137: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un panel de Microsoft Power BI. El informe utilizado para crear el
                panel utiliza un conjunto de datos importado desde un origen de datos de Microsoft SQL Server.</p>
            <p class="text-sm text-gray-400 mb-4">El panel se muestra en la ilustración. (Haga clic en la pestaña
                Ilustración.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p34.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <div class="mt-4 mb-4">
                <img src="img/3/p34.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué ocurrió a las 12:03:06 p.m.?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Se agregó una nueva transacción al origen de datos.</li>
                <li>B. Se actualizó la memoria caché de los mosaicos del panel.</li>
                <li>C. Un usuario agregó un comentario a un mosaico.</li>
                <li>D. Un usuario presionó F5.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Si presiona F5 o el botón de actualizar, los gráficos del panel se
                actualizan.</p>
            <p class="text-sm text-gray-400 mb-4">Nota: Power BI le permite pasar rápidamente de los datos a la información
                y a la acción, pero debe asegurarse de que los datos en sus informes y paneles de Power BI sean recientes.
            </p>
            <p class="text-sm text-gray-400 mb-4">Saber cómo actualizar los datos suele ser fundamental para ofrecer
                resultados precisos.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/refresh-data" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(83%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 83%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(17%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 17%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor138: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un informe de Power BI. La primera página del informe debe
                contener las siguientes dos vistas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Ventas por código postal</li>
                <li>Ventas por mes</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Ambas vistas deben mostrar una segmentación para seleccionar un valor para
                un campo llamado Cadena.</p>
            <p class="text-sm text-gray-400 mb-4">La vista Ventas por código postal debe mostrar un objeto visual de mapa
                como se muestra en la siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p35.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La vista Ventas por mes debe mostrar un objeto visual de gráfico de
                columnas como se muestra en la siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p35.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Los usuarios deben poder cambiar entre las vistas mediante botones en la página del informe. El campo Cadena seleccionado debe mantenerse al cambiar entre las vistas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuál es el número mínimo de marcadores requerido y qué propiedad debe aplicar a cada marcador? Para responder, seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>

            <div class="mt-4 mb-4">
                <img src="img/3/p35.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s35.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: 2 -</p>
            <p class="text-sm text-gray-400 mb-4">Uno para cada objeto visual.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cuando edita un informe en Power BI Desktop y en el servicio Power BI,
                puede agregar marcadores de informe para capturar el estado actual de una página del informe.
            </p>
            <p class="text-sm text-gray-400 mb-4">Los marcadores guardan los filtros y segmentadores actuales, los objetos
                visuales resaltados de forma cruzada, el orden de clasificación, etc. Cuando otros usuarios vean su informe,
                pueden volver a ese estado exacto seleccionando el marcador que guardó.</p>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: Visualización -</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios deben poder cambiar entre las vistas mediante botones en la
                página del informe. El campo Cadena seleccionado debe mantenerse al cambiar entre las vistas.</p>
            <p class="text-sm text-gray-400 mb-4">Puede seleccionar si cada marcador aplicará propiedades de Datos, como
                filtros y segmentadores; propiedades de Visualización, como el foco y su visibilidad; y cambios de Página
                actual, que presentan la página que estaba visible cuando se agregó el marcador. Estas capacidades son
                útiles cuando usa marcadores para cambiar entre vistas del informe o selecciones de objetos visuales, en
                cuyo caso probablemente querrá desactivar las propiedades de datos, para que los filtros no se restablezcan
                cuando los usuarios cambien de vista al seleccionar un marcador.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cuando crea un marcador, los siguientes elementos se guardan con el
                marcador:
            </p>
            <p class="text-sm text-gray-400 mb-4">La página actual -</p>
            <p class="text-sm text-gray-400 mb-4">Filtros -</p>
            <p class="text-sm text-gray-400 mb-4">Segmentadores, incluido el tipo de segmentador (por ejemplo, desplegable o
                lista) y el estado del segmentador</p>
            <p class="text-sm text-gray-400 mb-4">Estado de selección visual (como los filtros de resaltado cruzado)</p>
            <p class="text-sm text-gray-400 mb-4">Orden de clasificación -</p>
            <p class="text-sm text-gray-400 mb-4">Ubicación de exploración en profundidad -</p>
            <p class="text-sm text-gray-400 mb-4">Visibilidad de un objeto (mediante el panel Selección)</p>
            <p class="text-sm text-gray-400 mb-4">El modo de foco o Spotlight de cualquier objeto visible</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/desktop-bookmarks" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor139: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el objeto visual que se muestra en la ilustración. (Haga clic en la
                pestaña Ilustración.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p36.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita mostrar la relación entre el Costo total (Total Cost) y las
                Ventas totales (Total Sales) a
                lo largo del tiempo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregar un eje de reproducción (play axis).</li>
                <li>B. Desde el panel Análisis, agregar una línea de promedio (Average line).</li>
                <li>C. Agregar una segmentación (Slicer) para el año.</li>
                <li>D. Crear una medida DAX que calcule el crecimiento interanual.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Cuándo usar una segmentación:</p>
            <p class="text-sm text-gray-400 mb-4">teLas segmentaciones son una excelente opción cuando desea:xto</p>
            <p class="text-sm text-gray-400 mb-4">Mostrar filtros de uso común o importantes en el lienzo del informe para
                un acceso más fácil.</p>
            <p class="text-sm text-gray-400 mb-4">Facilitar la visualización del estado filtrado actual sin tener que abrir
                una lista desplegable.</p>
            <p class="text-sm text-gray-400 mb-4">Filtrar por columnas que no son necesarias y están ocultas en las tablas
                de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Crear informes más enfocados colocando segmentaciones junto a objetos
                visuales importantes.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Supongamos que desea que los lectores de su informe puedan ver
                las métricas de ventas generales, pero también destacar el rendimiento de gerentes de distrito individuales
                y en diferentes períodos de tiempo. Podría crear informes separados o gráficos comparativos. Podría agregar
                filtros en el panel Filtros. O podría usar segmentaciones. Las segmentaciones son otra forma de filtrar.
                Reducen la parte del conjunto de datos que se muestra en las otras visualizaciones del informe.
            </p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium" href="linkHere" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(87%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 87%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(13%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 13%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor140: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el panel de Power BI que se muestra en la ilustración del Panel.
                (Haga clic en la pestaña Panel.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p37.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que cuando los usuarios vean el panel en un
                dispositivo móvil, el panel aparezca como se muestra en la ilustración Móvil. (Haga clic en la pestaña
                Móvil.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p37.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer? Para responder, seleccione las opciones apropiadas en
                el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Actualizar el diseño en:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Diseño móvil del Dashboard</li>
                <li>Diseño web del Dashboard</li>
                <li>Diseño móvil del Reporte</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Cambiar tamaño y mover:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>El mosaico del mapa de SubTotal</li>
                <li>Los mosaicos de Total de Ventas y Cantidad Total</li>
                <li>El mosaico de Total de Ventas por Categoría Principal</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p37.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s37.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: Diseño móvil del informe -</p>
            <p class="text-sm text-gray-400 mb-4">Power BI proporciona varias funciones para ayudarle a crear versiones
                optimizadas para móviles de sus informes:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Una vista de diseño móvil donde crea su informe optimizado para móviles arrastrando y soltando objetos
                    visuales en un lienzo con un emulador de teléfono.</li>
                <li>Etc.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: El mosaico de Ventas totales por categoría principal</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/power-bi-create-mobile-optimized-report-about"
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
    contenedor141: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un informe de Power BI para analizar segmentos de clientes.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita identificar segmentos de clientes de forma dinámica basándose en
                la tasa de rebote (Bounce Rate) en dimensiones como origen, geografía y demografía. La solución debe
                minimizar el esfuerzo de análisis.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de visualización debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. árbol de descomposición</li>
                <li>B. gráfico de embudo</li>
                <li>C. Preguntas y respuestas</li>
                <li>D. influyentes clave</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">El objeto visual de árbol de descomposición en Power BI le permite
                visualizar datos a través de múltiples dimensiones. Agrega datos automáticamente y permite profundizar en
                sus dimensiones en cualquier orden. También es una visualización de inteligencia artificial (IA), por lo que
                puede pedirle que encuentre la siguiente dimensión para profundizar basándose en ciertos criterios.</p>
            <p class="text-sm text-gray-400 mb-4">Esto lo convierte en una herramienta valiosa para la exploración ad hoc y
                la realización de análisis de causa raíz.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-decomposition-tree"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(68%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 68%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(32%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 32%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor142: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla que contiene datos de ventas y aproximadamente 1000 filas.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita identificar valores atípicos en la tabla.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de visualización debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. gráfico de áreas</li>
                <li>B. gráfico de dispersión</li>
                <li>C. gráfico circular</li>
                <li>D. gráfico de anillos</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Detección de valores atípicos en Power BI mediante un gráfico de embudo,
                que es un gráfico de dispersión.</p>
            <p class="text-sm text-gray-400 mb-4">Los valores atípicos son aquellos puntos de datos que se encuentran fuera
                del patrón general de distribución y la forma más fácil de detectarlos es mediante gráficos. Los diagramas
                de caja y bigotes, los gráficos de dispersión pueden ayudar a detectarlos fácilmente.</p>
        </div>`
    },
    contenedor143: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe que contiene tres páginas. Una de las páginas contiene
                una visualización de KPI.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita filtrar todas las visualizaciones del informe excepto la
                visualización de KPI.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debería realizar? Cada respuesta correcta presenta una
                parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Editar las interacciones de la visualización de KPI.</li>
                <li>B. Agregar la misma segmentación a cada página y configurar Sincronizar segmentaciones.</li>
                <li>C. Editar las interacciones de la segmentación que está en la misma página que la visualización de KPI.
                </li>
                <li>D. Configurar un filtro de nivel de página.</li>
                <li>E. Configurar un filtro de nivel de informe.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: BC</p>
            <p class="text-sm text-gray-400 mb-4">Las segmentaciones son otra forma de filtrar. Reducen la parte del
                conjunto de datos que se muestra en las otras visualizaciones del informe.</p>
            <p class="text-sm text-gray-400 mb-4">Controlar qué objetos visuales de la página se ven afectados por las
                segmentaciones</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo: usar interacciones visuales para evitar que las selecciones de la
                segmentación filtren este gráfico.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Vaya a la página Resumen del informe y luego seleccione la segmentación de Gerente de distrito que
                    creó anteriormente.</li>
                <li>2. En el menú de Power BI Desktop, seleccione el menú Formato en Herramientas visuales y luego
                    seleccione Editar interacciones.</li>
                <li>3. Aparecen controles de filtro, cada uno con una opción Filtrar y Ninguna, sobre todos los objetos
                    visuales de la página. Inicialmente, la opción Filtrar está preseleccionada en todos los controles.</li>
                <li>4. Seleccione la opción Ninguna en el control de filtro sobre el gráfico de Variación de ventas totales
                    por mes fiscal y gerente de distrito para evitar que la segmentación de Gerente de distrito lo filtre.
                </li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es D: Un filtro de nivel de página se utiliza para filtrar una página
                completa.</p>
            <p class="text-sm text-gray-400 mb-4">No es E: Un filtro de nivel de informe se utiliza para filtrar un informe
                completo.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/power-bi-report-add-filter?tabs=powerbi-desktop"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">BC</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(94%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 94%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 6% )</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 6%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor144: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un objeto visual de Power BI que utiliza indicadores para mostrar
                valores que están fuera de rango, como se muestra en la siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p41.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utilice los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado según la información presentada en el gráfico.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">El tipo de visual es un gráfico de [opción de respuesta].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>líneas</li>
                <li>líneas y columnas agrupadas</li>
                <li>áreas</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Los indicadores visuales que muestran valores fuera de rango se crean
                mediante [opción de respuesta].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>un objeto visual personalizado</li>
                <li>una línea de tendencia</li>
                <li>detección de anomalías</li>
                <li>marcadores de gráfico de líneas</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p41.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/S41.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: un gráfico de líneas -</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">no es un gráfico de líneas y columnas agrupadas</p>
            <p class="text-sm text-gray-400 mb-4">El gráfico de líneas y columnas agrupadas es un gráfico combinado que
                integra el gráfico de líneas y el gráfico de columnas en un solo objeto visual. Al combinar estos dos
                objetos visuales, puede realizar una comparación muy rápida entre dos conjuntos de medidas.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/S41.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: detección de anomalías -</p>
            <p class="text-sm text-gray-400 mb-4">La detección de anomalías le ayuda a mejorar sus gráficos de líneas
                mediante la detección automática de anomalías en sus datos de series temporales. También proporciona
                explicaciones para las anomalías para ayudar con el análisis de causa raíz. Con solo un par de clics, puede
                encontrar información fácilmente sin necesidad de segmentar y desglosar los datos.</p>
            <p class="text-sm text-gray-400 mb-4">Ejemplo:</p>
            <div class="mt-4 mb-4">
                <img src="img/3/S41.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-anomaly-detection"
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
    contenedor145: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está creando un informe de Power BI para analizar patrones de compra de
                los consumidores a partir de una tabla llamada Transacciones. La tabla Transacciones contiene un campo
                numérico llamado Gasto.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita incluir un objeto visual que identifique qué campos tienen el
                mayor impacto en el Gasto.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de objeto visual debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Preguntas y respuestas</li>
                <li>B. narrativa inteligente</li>
                <li>C. árbol de descomposición</li>
                <li>D. influyentes clave (key influencers)</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">El objeto visual de influyentes clave le ayuda a comprender los factores
                que impulsan una métrica que le interesa. Analiza sus datos, clasifica los factores que importan y los
                muestra como influyentes clave. Por ejemplo, supongamos que desea determinar qué influye en la rotación de
                empleados, también conocida como deserción. Un factor podría ser la duración del contrato laboral, y otro
                factor podría ser el tiempo de desplazamiento.</p>
            <p class="text-sm text-gray-400 mb-4">Cuándo usar influyentes clave (key influencers):</p>
            <p class="text-sm text-gray-400 mb-4">El objeto visual de influyentes clave es una excelente opción si desea:
            </p>
            <p class="text-sm text-gray-400 mb-4">Ver qué factores afectan la métrica que se está analizando.</p>
            <p class="text-sm text-gray-400 mb-4">Comparar la importancia relativa de estos factores. Por ejemplo, ¿los
                contratos de corta duración afectan la deserción más que los contratos de larga duración?</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-influencers?tabs=powerbi-desktop"
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
    contenedor146: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">texto</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p43.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">texto</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">La línea discontinua que representa el promedio anual de empleados se creó
                mediante [opción de respuesta].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>una línea de tendencia</li>
                <li>un eje secundario</li>
                <li>una línea de referencia promedio</li>
                <li>dos medidas en el depósito de Valores</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Para permitir que los usuarios exploren en niveles más detallados hasta
                semanas o días, agregue los campos Semanas y Días al depósito [opción de respuesta].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Eje</li>
                <li>Valores</li>
                <li>Leyenda</li>
                <li>Valores secundarios</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p43.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s43.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: una línea de referencia de promedio</p>
            <p class="text-sm text-gray-400 mb-4">Con el panel Análisis en Power BI Desktop, puede agregar líneas de
                referencia dinámicas a los objetos visuales y enfocar tendencias o información importante.</p>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: Valores -</p>
            <p class="text-sm text-gray-400 mb-4">Agregar una medida para la obtención de detalles:</p>
            <p class="text-sm text-gray-400 mb-4">Puede agregar una medida o una columna numérica resumida al área de
                obtención de detalles. Arrastre el campo de obtención de detalles a la tarjeta Obtención de detalles en la
                página de destino de obtención de detalles para aplicarlo.</p>
            <p class="text-sm text-gray-400 mb-4">Cuando agrega una medida o columna numérica resumida, puede obtener
                detalles hasta la página cuando el campo se utiliza en el área de Valores de un objeto visual.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s43.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/transform-model/desktop-analytics-pane" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor147: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un panel que contiene mosaicos anclados desde un solo informe, como
                se muestra en la ilustración Panel Original. (Haga clic en la pestaña Panel Original.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p44.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita modificar el panel para que aparezca como se muestra en la
                ilustración Panel Modificado. (Haga clic en la pestaña Panel Modificado.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p44.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
                <li>A. Cambiar el tema del informe.</li>
                <li>B. Cambiar el tema del panel.</li>
                <li>C. Editar los detalles de cada mosaico.</li>
                <li>D. Crear un archivo CSS personalizado.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Con los temas de panel puede aplicar un tema de color a todo su panel,
                como colores corporativos, colores estacionales o cualquier otro tema de color que desee aplicar. Cuando
                aplica un tema de panel, todos los objetos visuales en su panel utilizan los colores del tema seleccionado.
            </p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es A: Con los temas de informe de Power BI Desktop, puede aplicar
                cambios de diseño a todo su informe, como usar colores corporativos, cambiar conjuntos de iconos o aplicar
                un nuevo formato visual predeterminado.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboard-themes" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor148: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI. El informe contiene un objeto visual que
                muestra las ventas brutas por fecha. El objeto visual tiene la detección de anomalías habilitada.</p>
            <p class="text-sm text-gray-400 mb-4">No se detectan anomalías.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita aumentar la probabilidad de que la detección de anomalías
                identifique anomalías en el informe.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Aumentar la configuración de Transparencia del rango esperado.</li>
                <li>B. Agregar un campo de datos al contenedor de campo Leyenda.</li>
                <li>C. Aumentar la configuración de Sensibilidad.</li>
                <li>D. Agregar un campo de datos al contenedor de campo Valores secundarios.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Agregar la detección de anomalías enriquece automáticamente el gráfico con
                anomalías y el rango esperado de valores. Cuando un valor sale de este límite esperado, se marca como una
                anomalía.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-anomaly-detection"
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
    contenedor149: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Mantiene un área de trabajo de Power BI que contiene un panel de calidad
                de proveedores. El panel contiene 10 objetos visuales de tarjeta, dos objetos visuales de mapa y cinco
                objetos visuales de gráfico de barras.</p>
            <p class="text-sm text-gray-400 mb-4">El diseño móvil del panel se muestra en la ilustración. (Haga clic en la
                pestaña Ilustración.)</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p46.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita modificar el diseño móvil del panel para cumplir con los
                siguientes requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Mostrar solo objetos visuales de un solo valor.</li>
                <li>Minimizar el desplazamiento.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Disminuir el tamaño de los objetos visuales de tarjeta. Eliminar los objetos visuales de mapa y
                    gráfico de barras.</li>
                <li>B. Disminuir el tamaño de los objetos visuales de mapa y gráfico de barras. Mover todos los objetos
                    visuales de tarjeta a la parte superior del diseño.</li>
                <li>C. Eliminar los objetos visuales de tarjeta. Aumentar el tamaño de los objetos visuales de mapa y
                    gráfico de barras.</li>
                <li>D. Mover los objetos visuales de gráfico de barras a la parte superior del diseño. Eliminar los objetos
                    visuales de mapa. Disminuir el tamaño de los objetos visuales de tarjeta.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
        </div>`
    },
    contenedor150: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla llamada Datos1 que contiene 10 millones de filas.</p>
            <p class="text-sm text-gray-400 mb-4">Datos1 se utiliza en los siguientes objetos visuales:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Una tarjeta que muestra el número de registros</li>
                <li>Un gráfico de barras que muestra el monto total de transacciones por territorio</li>
                <li>Un gráfico de dispersión que muestra el monto de transacción y el monto de ganancia en los ejes, y los
                    puntos coloreados por territorio</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita modificar el gráfico de dispersión para que sea más fácil para
                los usuarios identificar patrones significativos. La solución no debe afectar la precisión de los otros
                objetos visuales.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregar un campo de recuento del monto de transacción al contenedor de tamaño del gráfico de
                    dispersión.</li>
                <li>B. Agregar una línea de tendencia al gráfico de dispersión.</li>
                <li>C. Habilitar el muestreo de alta densidad en el gráfico de dispersión.</li>
                <li>D. Aplicar un filtro de filas a la consulta de Datos1 en el Editor de Power Query.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Una línea de tendencia es una línea recta que mejor representa los puntos
                en un gráfico de dispersión. La línea de tendencia puede pasar por algunos puntos, pero no es necesario que
                pase por todos ellos. La línea de tendencia se utiliza para mostrar el patrón de los datos. Esta línea de
                tendencia puede mostrar una tendencia positiva o una tendencia negativa.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://flexbooks.ck12.org/cbook/ck-12-interactive-middle-school-math-8-for-ccss/section/6.3/related/lesson/use-a-scatterplot-to-interpret-data-msm8/"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(79%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 79%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(19%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 19%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor151: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Power BI llamada Inventario que contiene un
                conjunto de datos, un informe y un panel.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita agregar un mosaico adicional al panel. El mosaico debe mostrar el
                inventario por ubicación. Esta información NO está visualizada en el informe. La solución debe minimizar el
                impacto en el informe.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debería realizar? Cada respuesta correcta presenta una
                parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Hacer una pregunta usando Preguntas y respuestas.</li>
                <li>B. Ocultar la página del informe.</li>
                <li>C. Anclar el objeto visual al panel.</li>
                <li>D. Usar información rápida en el panel.</li>
                <li>E. Agregar el objeto visual al informe.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AC</p>
            <p class="text-sm text-gray-400 mb-4">En el servicio Power BI (app.powerbi.com), un panel contiene mosaicos
                anclados desde uno o más conjuntos de datos, por lo que puede hacer preguntas sobre cualquiera de los datos
                contenidos en cualquiera de esos conjuntos de datos.</p>
            <p class="text-sm text-gray-400 mb-4">La respuesta a su pregunta se muestra como una visualización interactiva y
                se actualiza a medida que modifica la pregunta.</p>
            <p class="text-sm text-gray-400 mb-4">Abra un panel y coloque el cursor en el cuadro de preguntas. Incluso antes
                de empezar a escribir, Preguntas y respuestas muestra una nueva pantalla con sugerencias para ayudarle a
                formular su pregunta. Verá frases y preguntas completas que contienen los nombres de las tablas en los
                conjuntos de datos subyacentes, e incluso puede ver preguntas completas enumeradas si el propietario del
                conjunto de datos ha creado preguntas destacadas.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/s48.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/natural-language/power-bi-tutorial-q-and-a" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">AC</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(77%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 77%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">AD</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(23%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 23%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor152: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos llamado Plumas que contiene las siguientes
                columnas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Artículo (Item)</li>
                <li>Precio unitario (Unit Price)</li>
                <li>Cantidad pedida (Quantity Ordered)</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una visualización que muestre la relación entre el Precio
                unitario y la Cantidad pedida. La solución debe resaltar los pedidos que tienen un precio unitario y una
                cantidad pedida similares.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tipo de visualización y qué característica debería usar? Para
                responder, seleccione las opciones apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Visualización:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Un gráfico de columnas de Cantidad pedida y Precio unitario por año</li>
                <li>Un gráfico de líneas de Cantidad pedida y Precio unitario por artículo</li>
                <li>Un diagrama de dispersión de Cantidad pedida y Precio unitario por artículo</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Característica:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Encontrar automáticamente agrupaciones</li>
                <li>Explicar la disminución</li>
                <li>Encontrar dónde la distribución es diferente</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p49.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: Un gráfico de dispersión de Cantidad pedida y Precio unitario
                por artículo</p>
            <p class="text-sm text-gray-400 mb-4">Un gráfico de dispersión muestra la relación entre dos valores numéricos.
            </p>
            <p class="text-sm text-gray-400 mb-4">Los gráficos de dispersión son una excelente opción:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Para mostrar relaciones entre dos valores numéricos.</li>
                <li>Para trazar dos grupos de números como una serie de coordenadas x e y.</li>
                <li>Para usar en lugar de un gráfico de líneas cuando desea cambiar la escala del eje horizontal.</li>
                <li>Para convertir el eje horizontal en una escala logarítmica.</li>
                <li>Para mostrar datos de hoja de cálculo que incluyen pares o conjuntos de valores agrupados.</li>
                <li>Para mostrar patrones en grandes conjuntos de datos, por ejemplo, mostrando tendencias lineales o no
                    lineales, clústeres y valores atípicos.</li>
                <li>Para comparar un gran número de puntos de datos sin tener en cuenta el tiempo. Cuantos más datos incluya
                    en un gráfico de dispersión, mejores serán las comparaciones que pueda hacer.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: Encontrar clústeres automáticamente</p>
            <p class="text-sm text-gray-400 mb-4">Los gráficos de dispersión son una excelente opción:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li> Para mostrar patrones en grandes conjuntos de datos, por ejemplo, mostrando tendencias lineales o no
                    lineales, clústeres y valores atípicos.</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://github.com/Microsoft/powerbi-visuals-corrplot/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor153: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene tres páginas llamadas Página1, Página2 y Página3. Todas las páginas tienen las mismas segmentaciones.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que todos los filtros aplicados a la Página1 se apliquen solo a la Página1 y a la Página3.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. En cada página, modificar las interacciones de la segmentación.</li>
                <li>B. Habilitar la visibilidad de las segmentaciones en la Página1 y la Página3. Deshabilitar la visibilidad de la segmentación en la Página2.</li>
                <li>C. Sincronizar las segmentaciones en la Página1 y la Página3.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Controlar qué objetos visuales de la página se ven afectados por las
                segmentaciones</p>
            <p class="text-sm text-gray-400 mb-4">De forma predeterminada, las segmentaciones en las páginas del informe
                afectan a todas las demás visualizaciones de esa página, incluyéndose entre sí. A medida que elige valores
                en las segmentaciones de lista y de fecha que acaba de crear, observe los efectos en las otras
                visualizaciones. Los datos filtrados son una intersección de los valores seleccionados en ambas
                segmentaciones.</p>
            <p class="text-sm text-gray-400 mb-4">Utilice las interacciones visuales para excluir que algunas
                visualizaciones de la página se vean afectadas por otras. En la página Resumen, el gráfico Variación de
                ventas totales por mes fiscal y gerente de distrito muestra datos comparativos generales para los gerentes
                de distrito por mes, que es información que desea mantener visible. Utilice las interacciones visuales para
                evitar que las selecciones de la segmentación filtren este gráfico.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Vaya a la página Resumen del informe y luego seleccione la segmentación de Gerente de distrito que
                    creó anteriormente.</li>
                <li>2. En el menú de Power BI Desktop, seleccione el menú Formato en Herramientas visuales y luego
                    seleccione Editar interacciones.</li>
                <li>3. Aparecen controles de filtro, cada uno con una opción Filtrar y Ninguna, sobre todos los objetos
                    visuales de la página. Inicialmente, la opción Filtrar está preseleccionada en todos los controles.</li>
                <li>4. Seleccione la opción Ninguna en el control de filtro sobre el gráfico de Variación de ventas totales
                    por mes fiscal y gerente de distrito para evitar que la segmentación de Gerente de distrito lo filtre.
                </li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-slicers?tabs=powerbi-desktop"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(96%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 96%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 6% )</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 6%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor154: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene cinco páginas.</p>
            <p class="text-sm text-gray-400 mb-4">Las páginas 1 a 4 son visibles y la página 5 está oculta.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una solución que permita a los usuarios navegar rápidamente desde la primera página a todas las demás páginas visibles. La solución debe minimizar el esfuerzo de desarrollo y mantenimiento a medida que se agreguen páginas al informe.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer primero?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregar un botón en blanco a la página 1.</li>
                <li>B. Agregar un botón de navegación de página a la página 1.</li>
                <li>C. Crear un marcador para cada página.</li>
                <li>D. Agregar un botón de navegación de marcador a la página 1.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
        </div>`
    },
    contenedor155: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Crea un informe de Power BI que muestra datos de temperatura de IoT transmitidos desde un refrigerador.</p>
            <p class="text-sm text-gray-400 mb-4">Publica el informe en el servicio Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita que se le notifique cuando la temperatura supere los cuatro grados Celsius.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Establecer una alerta en un objeto visual de KPI en el informe.</li>
                <li>B. Anclar un objeto visual de tarjeta a un panel y crear una suscripción.</li>
                <li>C. Anclar un objeto visual de tarjeta a un panel y establecer una alerta en el mosaico.</li>
                <li>D. Anclar una página de informe a un panel y establecer una alerta en la página.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
        </div>`
    },
    contenedor156: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene el panel que se muestra en la siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p53.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Necesita modificar el panel para que se muestre como se indica en la
                siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p53.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear y aplicar un tema de panel personalizado.</li>
                <li>B. Cambiar los colores de los objetos visuales en el informe.</li>
                <li>C. Aplicar el tema de panel Oscuro.</li>
                <li>D. Cargar una imagen instantánea del panel.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(82%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 82%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(18%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 18%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor157: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un tema de Power BI que se utilizará en múltiples informes.
                El tema incluirá la imagen corporativa para el tamaño de fuente, el color y el formato del gráfico de
                barras.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde Power BI Desktop, personalizar el tema actual.</li>
                <li>B. Desde Power BI Desktop, usar un tema de informe integrado.</li>
                <li>C. Crear un tema como archivo PBIVIZ e importar el tema a Power BI Desktop.</li>
                <li>D. Crear un tema como archivo JSON e importar el tema a Power BI Desktop.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(81%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 81%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(19%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 19%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor158: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene una página. La página contiene dos gráficos de líneas y un gráfico de barras.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los usuarios puedan realizar las siguientes tareas para los tres objetos visuales:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Cambiar las medidas utilizadas en los objetos visuales.</li>
                <li>Cambiar el tipo de visualización.</li>
                <li>Agregar una leyenda.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">La solución debe minimizar el esfuerzo de desarrollo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear un marcador para cada combinación aceptable de tipo de visualización, medida y leyenda en el gráfico de barras.</li>
                <li>B. Editar las interacciones entre los tres objetos visuales.</li>
                <li>C. Habilitar la personalización para el informe.</li>
                <li>D. Habilitar la personalización para cada objeto visual.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
        </div>`
    },
    contenedor159: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un gráfico de barras agrupadas que contiene una medida llamada
                Salario como valor y un campo llamado Empleado como eje. El salario está presente en los datos como una
                cantidad numérica que representa dólares estadounidenses.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una línea de referencia para mostrar qué empleados están
                por encima del salario mediano.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Crea una línea de mediana utilizando la medida Salario.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor160: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene un gráfico de barras agrupadas que contiene una medida llamada
                Salario como valor y un campo llamado Empleado como eje. El salario está presente en los datos como una
                cantidad numérica que representa dólares estadounidenses.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una línea de referencia para mostrar qué empleados están
                por encima del salario mediano.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Crea una línea de mediana utilizando la medida Salario.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor161: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene un objeto visual de tabla con
                una medida llamada Ingresos (Revenue). La medida Ingresos devuelve valores dentro de un rango de 0 a 5.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita dar formato al objeto visual para que la columna Ingresos muestre
                un color de fondo específico basado en el rango de valores que se muestra en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p56.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debería realizar en secuencia en Power BI Desktop? Para
                responder, mueva las acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en la
                secuencia correcta.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Establecer el estilo de formato en Reglas.</li>
                <li>Agregar y configurar una nueva regla para cada rango de valores.</li>
                <li>Establecer el estilo de formato en Valor de campo.</li>
                <li>Abrir el cuadro de diálogo Color de fondo para la columna Ingresos.</li>
                <li>Abrir el cuadro de diálogo Color de fuente para la columna Ingresos.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p56.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s56.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor162: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene cuatro páginas.</p>
            <p class="text-sm text-gray-400 mb-4">Todas las páginas contienen una segmentación para un campo llamado País.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que cuando un usuario selecciona un país en la
                página 1, la selección se mantenga en la página 2 y la página 3. La solución debe evitar que la página 4 se
                vea afectada por las selecciones en las otras páginas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Eliminar la segmentación de País de la página 1, página 2 y página 3. Agregar el campo País a los
                    filtros de nivel de página.</li>
                <li>B. Eliminar la segmentación de País de la página 1, página 2 y página 3.</li>
                <li>C. Mover la segmentación de País de la página 2 y página 3 a la página 1.</li>
                <li>D. Sincronizar la segmentación de País en la página 1, página 2 y página 3.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
        </div>`
    },
    contenedor163: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Utiliza Power BI Desktop para crear un modelo de datos de Power BI y un
                informe en blanco.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita agregar el objeto visual de Nube de palabras que se muestra en la
                siguiente ilustración al informe.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p59.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La solución debe minimizar el esfuerzo de desarrollo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debería realizar en secuencia? Para responder, mueva
                las acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.</p>
                <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                    <li>Desde un navegador web, descargar el archivo PBIVIZ para el objeto visual Nube de palabras desde Microsoft
                        AppSource.</li>
                    <li>Formatear los colores de datos y el título.</li>
                    <li>Desde Power BI Desktop, obtener el objeto visual Nube de palabras desde Microsoft AppSource.</li>
                    <li>Completar los campos de obtención de detalles.</li>
                    <li>Completar los campos Categoría, Valor y Excluye.</li>
                </ul>
    </div>
            <div class="mt-4 mb-4">
                <img src="img/3/p59.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
            <img src="img/3/s59.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
        </div>`
    },
    contenedor164: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene cinco marcadores.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita agregar un objeto al informe desde el cual los usuarios puedan
                navegar entre tres marcadores específicos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debería completar la tarea? Para responder, arrastre las acciones
                apropiadas a los pasos correctos. Cada acción puede usarse una vez, más de una vez o no usarse. Es posible
                que deba arrastrar la barra divisoria entre los paneles o desplazarse para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Agregar un botón de Marcador.</li>
                <li>Cambiar la propiedad de Marcador para el botón.</li>
                <li>Agrupar los otros dos marcadores.</li>
                <li>Agrupar los tres marcadores.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p60.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s60.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor165: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Planea usar Power BI para crear facturas de ventas para los clientes. La
                solución debe cumplir con los siguientes requisitos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Las facturas de ventas deben exportarse en formato PDF.</li>
                <li>Las exportaciones en PDF deben mostrar todas las columnas y filas con claridad.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería crear?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. un informe paginado que contenga un tablix</li>
                <li>B. un panel que contenga una tabla</li>
                <li>C. un informe interactivo que contenga una tabla</li>
                <li>D. un informe interactivo que contenga una matriz</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
        </div>`
    },
    contenedor166: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene tres páginas. Las páginas se
                utilizan para analizar las ventas en varios países.</p>
            <p class="text-sm text-gray-400 mb-4">Agrega una segmentación llamada País a cada página del informe. </p>
            <p class="text-sm text-gray-400 mb-4">Necesita configurar el informe para cumplir con los siguientes requisitos:
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Cuando un usuario selecciona un país en la primera página, el informe debe filtrar las otras páginas.
                </li>
                <li>La segunda y tercera página deben mostrar solo los resultados filtrados.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué tarea debe realizar para cada requisito? Para responder, arrastre la
                tarea apropiada al requisito correcto. Cada tarea puede usarse una vez, más de una vez o no usarse. Es
                posible que deba arrastrar la barra divisoria entre los paneles o desplazarse para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tareas</p>
                <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                    <li>Agregar el campo País a los filtros en todas las páginas</li>
                    <li>Configurar la segmentación de datos de País para sincronizar en todas las páginas</li>
                    <li>Configurar la segmentación de datos de País para sincronizar solo en la segunda y tercera página</li>
                    <li>Ocultar la segmentación de datos de País en la segunda y tercera página</li>
                </ul>
            <p class="text-sm text-gray-400 mb-4">Área de respuesta</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Cuando un usuario selecciona un país en la primera página, el informe debe filtrar las otras páginas:</li>
                <li>La segunda y tercera página deben mostrar solo los resultados filtrados:</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p62.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s62.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor167: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene una página. La página contiene
                lo siguiente:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Una forma llamada Forma1</li>
                <li>Una tarjeta llamada Resumen de ventas</li>
                <li>Un gráfico de barras agrupadas llamado Ventas por región</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que Resumen de ventas se renderice encima de
                Forma1.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería modificar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Orden de tabulación en el panel Selección</li>
                <li>B. Orden de capas en el panel Selección</li>
                <li>C. Mantener el orden de capas en la configuración general del objeto visual</li>
                <li>D. Alineación vertical en la configuración del lienzo</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor168: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI llamado Informe1 y un panel llamado Panel1.
                El Informe1 contiene un gráfico de líneas llamado Ventas por mes.</p>
            <p class="text-sm text-gray-400 mb-4">Ancla el objeto visual Ventas por mes al Panel1.</p>
            <p class="text-sm text-gray-400 mb-4">En el Informe1, cambia el objeto visual Ventas por mes a un gráfico de
                barras.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que el gráfico de barras se muestre en el Panel1.
            </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Actualizar el conjunto de datos utilizado por el Informe1 y el Panel1.</li>
                <li>B. Anclar el gráfico de barras de Ventas por mes al Panel1.</li>
                <li>C. Seleccionar Actualizar objetos visuales para el Panel1.</li>
                <li>D. Editar los detalles del mosaico del panel para el Panel1.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor169: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">En Power BI Desktop, está creando un informe que contendrá tres páginas.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una página de información sobre herramientas personalizada
                y preparar la página para su uso.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debería realizar? Cada respuesta correcta presenta una
                parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Para la página de información sobre herramientas, establecer Permitir usar como información sobre
                    herramientas en Activado.</li>
                <li>B. Para la página de destino, establecer Permitir usar como información sobre herramientas en Activado.
                </li>
                <li>C. Configurar filtros en el objeto visual de destino.</li>
                <li>D. Para la página de información sobre herramientas, configurar filtros.</li>
                <li>E. Agregar y configurar objetos visuales en la página de información sobre herramientas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: BCE</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">ADE</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(59%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 59%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">BDE</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(22%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 22%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(19%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-yellow-500/50 bg- h-full rounded-full" style="width: 19%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor170: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita utilizar información de inteligencia artificial para agregar una
                columna de datos enriquecidos basados en los comentarios de los clientes. La solución debe identificar lo
                siguiente:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Sobre qué proporcionan comentarios los clientes con más frecuencia</li>
                <li>Si a los clientes les gusta el producto de su empresa</li>
                <li>El idioma de los comentarios</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué servicio de información de inteligencia artificial debería usar para
                cada resultado? Para responder, arrastre los servicios apropiados a los resultados correctos. Cada servicio
                puede usarse una vez, más de una vez o no usarse. Es posible que deba arrastrar la barra divisoria entre los
                paneles o desplazarse para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Servicios de información de IA</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Etiquetado de imágenes</li>
                <li>Extracción de frases clave</li>
                <li>Detección de idioma</li>
                <li>Análisis de sentimiento</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Área de respuesta</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Sobre qué brindan comentarios los clientes con mayor frecuencia:</li>
                <li>Si a los clientes les gusta el producto de su empresa:</li>
                <li>El idioma de los comentarios:</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p66.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s66.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor171: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI llamado InformeA.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un inquilino de Power BI que permite a los usuarios exportar datos.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los consumidores del InformeA no puedan exportar ningún dato desde los objetos visuales.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debería realizar? Cada respuesta correcta presenta una solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde Power BI Desktop, modificar la configuración del informe.</li>
                <li>B. Desde Power BI Desktop, modificar la configuración de Carga de datos.</li>
                <li>C. Desde el servicio Power BI, modificar los permisos del conjunto de datos.</li>
                <li>D. Desde el servicio Power BI, modificar la configuración del informe.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: AD</p>
        </div>`
    },
    contenedor172: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que se representará en una pantalla vertical.
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita maximizar la parte del área de la pantalla utilizada por el
                informe.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde la configuración de Fondo del lienzo de Power BI Desktop, configurar el ajuste de Ajuste de
                    imagen.</li>
                <li>B. Desde la configuración de Lienzo de Power BI Desktop, establecer un ancho y alto personalizados.</li>
                <li>C. Desde Power BI Desktop, seleccionar Personalizar objetos visuales.</li>
                <li>D. Desde el servicio Power BI, habilitar el panel Páginas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
        </div>`
    },
    contenedor173: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Necesita crear un objeto visual que compare las ganancias en 10 categorías de productos para el trimestre seleccionado.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cuál es el mejor objeto visual para usar y lograr el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. un gráfico de áreas</li>
                <li>B. un gráfico de embudo</li>
                <li>C. un gráfico de barras agrupadas</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
        </div>`
    },
    contenedor174: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos de Power BI llamado Finanzas que está alojado
                en un área de trabajo de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">El equipo de finanzas de su empresa NO es actualmente miembro de ningún
                rol del área de trabajo de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita permitir que el equipo de finanzas utilice Microsoft Excel para
                analizar el conjunto de datos de Finanzas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Conceder al equipo de finanzas permisos de compilación para el conjunto de datos de Finanzas.</li>
                <li>B. Proporcionar un libro de Excel que esté conectado al conjunto de datos de Finanzas.</li>
                <li>C. Crear un rol de seguridad a nivel de filas (RLS) y agregar al equipo de finanzas al rol como
                    miembros.</li>
                <li>D. Conceder al equipo de finanzas permisos de escritura para el conjunto de datos de Finanzas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
        </div>`
    },
    contenedor175: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene un objeto visual. El objeto
                visual contiene una medida.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que el informe cumpla con los siguientes
                requisitos:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Todos los valores deben tener dos decimales.</li>
                <li>Todos los valores negativos deben mostrarse en fuente roja y entre paréntesis.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debería realizar? Cada respuesta correcta presenta una
                parte de la solución.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Para el objeto visual, aplicar formato condicional al color de fondo.</li>
                <li>B. Configurar la medida para que use un formato personalizado.</li>
                <li>C. Para el objeto visual, aplicar formato condicional al color de fuente.</li>
                <li>D. Para el objeto visual, establecer Decimales de valor en 2.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: CD</p>
        </div>`
    },
    contenedor176: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Está utilizando el Editor de Power Query para previsualizar los datos en
                una columna llamada Temp Máx. Las estadísticas de columna y la distribución de valores se muestran en la
                siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/3/p72.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utilice los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado según la información presentada en el gráfico.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">El valor que aparece con mayor frecuencia en la columna es [opción de respuesta].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>25</li>
                <li>41</li>
                <li>45</li>
                <li>1431</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El valor no nulo más pequeño en la columna es [opción de respuesta].</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>0</li>
                <li>17</li>
                <li>24</li>
                <li>33</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p72.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s72.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor177: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que contiene una página. La página contiene
                los siguientes objetos visuales:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Una tarjeta</li>
                <li>Una matriz</li>
                <li>Un gráfico de barras</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita configurar la página para garantizar que la tarjeta y el gráfico
                de barras no se vean afectados cuando un usuario explore en profundidad la matriz. La tarjeta y el gráfico
                de barras deben cambiar cuando un usuario seleccione una celda en la matriz.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería configurar? Para responder, seleccione las opciones
                apropiadas en el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tipo de visual:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Gráfico de barras</li>
                <li>Matriz de tarjeta</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Configurar:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Editar interacciones para filtrar</li>
                <li>Editar interacciones para ninguna</li>
                <li>Aplicar filtros de exploración en profundidad al objeto visual seleccionado</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/3/p73.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/3/s73.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor178: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un inquilino de Power BI que aloja los conjuntos de datos que se
                muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/4/p1.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Tiene los siguientes requisitos:</p>
            <p class="text-sm text-gray-400 mb-4">Se debe evitar la exportación de informes que contengan Información de
                Identificación Personal (PII).</p>
            <p class="text-sm text-gray-400 mb-4">Los datos utilizados para decisiones financieras deben ser revisados y
                aprobados antes de su uso.</p>
            <p class="text-sm text-gray-400 mb-4">Para cada una de las siguientes declaraciones, seleccione Sí si la
                declaración es verdadera. De lo contrario, seleccione No.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Afirmaciones</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>El conjunto de datos de Ventas requiere una etiqueta de confidencialidad.</li>
                <li>El conjunto de datos de Operaciones requiere una etiqueta de confidencialidad y debe estar certificado.
                </li>
                <li>El conjunto de datos de Finanzas requiere una etiqueta de confidencialidad y debe estar certificado.
                </li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/4/p1.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/4/s1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/enterprise/powerbi/service-security-sensitivity-label-overview"
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
    contenedor179: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un inquilino de Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene informes que utilizan conjuntos de datos financieros y se exportan
                como archivos PDF.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los informes estén cifrados.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería implementar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. directivas de Microsoft Intune</li>
                <li>B. seguridad a nivel de filas (RLS)</li>
                <li>C. etiquetas de sensibilidad</li>
                <li>D. certificaciones de conjuntos de datos</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Cuando crea una etiqueta de sensibilidad, puede restringir el acceso al
                contenido al que se aplicará la etiqueta.</p>
            <p class="text-sm text-gray-400 mb-4">Cuando un documento o correo electrónico está cifrado, el acceso al
                contenido está restringido, de modo que:</p>
            <p class="text-sm text-gray-400 mb-4">Solo puede ser descifrado por usuarios autorizados por la configuración de
                cifrado de la etiqueta. </p>
            <p class="text-sm text-gray-400 mb-4">Permanece cifrado sin importar dónde se encuentre, dentro o fuera de su
                organización, incluso si se cambia el nombre del archivo.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es B: La seguridad a nivel de filas (RLS) con Power BI se puede
                utilizar para restringir el acceso a los datos para usuarios específicos. Los filtros restringen el acceso a
                los datos a nivel de fila y puede definir filtros dentro de los roles.</p>
            <p class="text-sm text-gray-400 mb-4">Limitaciones actuales para la seguridad a nivel de filas:</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/purview/encryption-sensitivity-labels" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor180: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un archivo de Microsoft Excel en un servidor de archivos.</p>
            <p class="text-sm text-gray-400 mb-4">Crea un informe de Power BI e importa una tabla desde el archivo de Excel.
            </p>
            <p class="text-sm text-gray-400 mb-4">Publica el informe.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los datos se actualicen cada cuatro horas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer primero?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cargar el archivo de Excel en un área de trabajo de Power BI.</li>
                <li>B. Crear una suscripción al informe.</li>
                <li>C. Implementar una puerta de enlace de datos local.</li>
                <li>D. Editar las credenciales del origen de datos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
        <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
        <p class="text-sm text-gray-400 mb-4">Puede programar la actualización para la puerta de enlace de datos local
            (modo personal) y la puerta de enlace de datos local. Especifique las opciones de actualización en las
            siguientes áreas del servicio Power BI: Conexión de puerta de enlace, Credenciales del origen de datos y
            Actualización programada.</p>
        <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium" href="linkHere" target="_blank"
            rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd" />
            </svg>
            Referencia
        </a>
        <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
        <div class="space-y-4">
            <div class="flex items-center">
                <div class="w-10 text-right text-[12px]">C</div>
                <div class="ml-2 text-gray-600 text-[12px]">(92%)</div>
                <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                    <div class="bg-green-500/50 h-full rounded-full" style="width: 92%"></div>
                </div>
            </div>
            <div class="flex items-center">
                <div class="w-10 text-right font-medium text-[12px]">otros</div>
                <div class="ml-2 text-gray-600 text-[12px]">( 8% )</div>
                <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                    <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 8%"></div>
                </div>
            </div>
        </div>
    </div>`
    },
    contenedor181: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos que se usa con poca frecuencia y se actualiza
                cada hora. Recibe una notificación de que la actualización se deshabilitó debido a la inactividad. ¿Qué dos
                acciones harán que se reanude la programación de actualización? Cada respuesta correcta presenta una
                solución completa.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Habilitar el almacenamiento en caché de consultas para el conjunto de datos.</li>
                <li>B. Importar el conjunto de datos a Microsoft Excel.</li>
                <li>C. Desde el servicio Power BI, abrir un panel que use el conjunto de datos.</li>
                <li>D. Desde el servicio Power BI, abrir un informe que use el conjunto de datos.</li>
                <li>E. Desde PowerShell, ejecutar el cmdlet get-powerbireport.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: CD</p>
            <p class="text-sm text-gray-400 mb-4">Después de dos meses de inactividad, la actualización programada en su
                conjunto de datos se pausa. Se considera que un conjunto de datos está inactivo cuando ningún usuario ha
                visitado ningún panel o informe creado sobre el conjunto de datos. En ese momento, se envía un correo
                electrónico al propietario del conjunto de datos indicando que la actualización programada está pausada. La
                programación de actualización del conjunto de datos se muestra entonces como deshabilitada. Para reanudar la
                actualización programada, simplemente vuelva a visitar cualquier panel o informe creado sobre el conjunto de
                datos.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es E: get-powerbireport recupera una lista de informes de Power BI que
                coinciden con los criterios de búsqueda y el ámbito especificados.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/refresh-scheduled-refresh" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor182: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Power BI que contiene un conjunto de datos, un
                informe y un panel. Los siguientes grupos tienen acceso:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Los usuarios externos pueden acceder al panel.</li>
                <li>Los gerentes pueden acceder al panel y a un informe específico para gerentes.</li>
                <li>Los empleados pueden acceder al panel y a un informe restringido con seguridad a nivel de filas (RLS).</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita que todos los usuarios, incluidos los usuarios externos, puedan etiquetar a los administradores del área de trabajo si identifican un problema con el panel. La solución debe garantizar que otros usuarios vean los problemas que se plantearon.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. comentarios</li>
                <li>B. chat en Microsoft Teams</li>
                <li>C. alertas</li>
                <li>D. suscripciones</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Agregue un comentario personal o inicie una conversación sobre un panel o
                informe con sus colegas. La función de comentarios es una de las formas en que un usuario empresarial puede
                colaborar con otros.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Se pueden agregar comentarios a un panel completo, a objetos visuales
                individuales en un panel, a una página de informe, a un informe paginado y a objetos visuales individuales
                en una página de informe. Agregue un comentario general o agregue un comentario dirigido a colegas
                específicos.
            </p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/consumer/end-user-comment" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor183: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un archivo PBIX que importa varias tablas de una base de datos de
                Azure SQL.</p>
            <p class="text-sm text-gray-400 mb-4">Los datos se migrarán a otra base de datos de Azure SQL.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita cambiar las conexiones en el archivo PBIX. La solución debe
                minimizar el esfuerzo administrativo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde el Editor de Power Query, crear nuevas consultas.</li>
                <li>B. Desde el Editor de Power Query, modificar el origen de cada consulta.</li>
                <li>C. Crear un archivo PBIT, abrir el archivo y cambiar los orígenes de datos cuando se le solicite.</li>
                <li>D. Modificar la configuración del origen de datos.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Abra el archivo PBIX con Microsoft Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">Luego elija Archivo -> Opciones y configuración -> Configuración del
                origen de datos -> Haga clic derecho en los orígenes de datos y cambie el origen.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es C: PBIT es un archivo de plantilla.</p>
            <p class="text-sm text-gray-400 mb-4">El archivo PBIT conserva la estructura de su informe y contiene 'Archivo
                DataModelSchema' en lugar de "Archivo DataModel". Sin embargo, si elige el modo de importación, el archivo
                PBIX almacena todos los datos importados de los orígenes de datos y la estructura del informe.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://windowsreport.com/open-pbix-file/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor184: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Power BI que contiene varios informes.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita proporcionar a un usuario la capacidad de crear un panel que
                utilizará los objetos visuales de los informes.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear un rol de seguridad a nivel de filas (RLS) y agregar al usuario al rol.</li>
                <li>B. Compartir los informes con el usuario.</li>
                <li>C. Conceder al usuario el permiso de Lectura para los conjuntos de datos.</li>
                <li>D. Agregar al usuario como miembro del área de trabajo.</li>
                <li>E. Agregar al usuario como Visor del área de trabajo.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Para conceder acceso a un área de trabajo nueva, asigne esos grupos de
                usuarios o individuos a uno de los roles del área de trabajo: Administrador, Miembro, Colaborador o Visor.
            </p>
            <p class="text-sm text-gray-400 mb-4">Roles del área de trabajo -</p>
            <div class="mt-4 mb-4">
                <img src="img/4/s7.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
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
    contenedor185: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Power BI que contiene un informe de una sola
                página llamado Ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita agregar todos los objetos visuales de Ventas a un panel. La
                solución debe garantizar que los objetos visuales adicionales agregados a la página se agreguen
                automáticamente al panel.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué tres acciones debería realizar en secuencia? Para responder, mueva
                las acciones apropiadas de la lista de acciones al área de respuesta y ordénelas en el orden correcto.</p>
            <div class="mt-4 mb-4">
                <p class="text-sm text-gray-400 mb-4">Acciones</p>
                <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                    <li>Abrir Power BI Desktop.</li>
                    <li>Anclar la página.</li>
                    <li>Anclar cada objeto visual.</li>
                    <li>Abrir powerbi.com.</li>
                    <li>Abrir el informe Ventas.</li>
                    <li>Crear un nuevo informe.</li>
                </ul>
                <img src="img/4/p8.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/4/s8.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Se puede anclar una página de informe completa a un panel, lo que se
                denomina anclar un mosaico en vivo. Se llama mosaico en vivo porque puede interactuar con el mosaico en el
                panel.</p>
            <p class="text-sm text-gray-400 mb-4">A diferencia de los mosaicos de visualización individuales, los cambios
                realizados en el informe se sincronizan automáticamente con el panel.</p>
            <p class="text-sm text-gray-400 mb-4">Paso 2: Abrir el informe de Ventas -</p>
            <p class="text-sm text-gray-400 mb-4">Paso 3: Anclar la página.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>1. Abra un informe en la vista de edición.</li>
                <li>2. Sin tener visualizaciones seleccionadas, en la barra de menú, seleccione Anclar a un panel.</li>
                <li>3. Ancle el mosaico a un panel existente o a un panel nuevo. Observe el texto resaltado: Anclar página
                    en vivo permite que los cambios en los informes aparezcan en el mosaico del panel cuando se actualiza la
                    página.</li>
                <div class="mt-4 mb-4">
                    <img src="img/4/s8.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
                </div>
                <li>Seleccione Anclar en vivo. Un mensaje de Éxito (cerca de la esquina superior derecha) le informa que la
                    página se agregó, como un mosaico, a su panel.</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-dashboard-pin-live-tile-from-report"
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
    contenedor186: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe en Power BI llamado informe1 que se basa en un conjunto
                de datos compartido.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita minimizar el riesgo de filtración de datos para el informe. La
                solución debe evitar que otros informes se vean afectados.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desactivar "Permitir a los destinatarios compartir su panel" y "Permitir a los usuarios crear nuevo
                    contenido usando los conjuntos de datos subyacentes" para el conjunto de datos.</li>
                <li>B. Aplicar seguridad a nivel de filas (RLS) al conjunto de datos compartido.</li>
                <li>C. Seleccionar la opción "Permitir a los usuarios finales exportar datos resumidos y subyacentes desde
                    el servicio o el servidor de informes" para el informe.</li>
                <li>D. Seleccionar la opción "No permitir a los usuarios finales exportar ningún dato desde el servicio o el
                    servidor de informes" para el informe.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Además de los diversos permisos que puede establecer, también hay dos
                opciones diferentes para deshabilitar la funcionalidad de exportación. En primer lugar, está la opción
                general de Exportar datos y, en segundo lugar, Exportar a Excel como una configuración específica. Ambas
                tienen la misma configuración para los permisos.</p>
            <p class="text-sm text-gray-400 mb-4">Exportar datos -</p>
            <div class="mt-4 mb-4">
                <img src="img/4/s9.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://data-marc.com/2020/04/13/power-bi-governance-why-you-should-consider-to-disable-export-to-excel/"
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
    contenedor187: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">En Power BI Desktop, está creando visualizaciones en un informe basado en un conjunto de datos importado.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita permitir que los usuarios de Power BI exporten los datos resumidos utilizados para crear las visualizaciones, pero impedir que exporten los datos subyacentes.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde el servicio Power BI, configurar los permisos del conjunto de datos.</li>
                <li>B. Desde Power BI Desktop, configurar la configuración de Carga de datos para el archivo actual.</li>
                <li>C. Desde Power BI Desktop, modificar los permisos del origen de datos.</li>
                <li>D. Desde Power BI Desktop, configurar la Configuración del informe para el archivo actual.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Permisos del conjunto de datos en el servicio Power BI</p>
            <p class="text-sm text-gray-400 mb-4">La siguiente tabla describe los cuatro niveles de permiso que controlan el
                acceso a los conjuntos de datos en el servicio Power BI.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Volver a compartir</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Permite al usuario compartir el contenido del conjunto de datos con otros
                usuarios, quienes obtendrán permisos de lectura, re-compartir o compilación sobre el mismo.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Leer</li>
                <li>Compilación</li>
                <li>Escribir</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/service-datasets-permissions" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor188: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un informe de Power BI que utiliza seguridad a nivel de filas (RLS).
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita transferir el mantenimiento de la membresía de RLS a un equipo de
                seguridad de red de Azure. La solución NO debe proporcionar al equipo de seguridad de red de Azure la
                capacidad de administrar informes, conjuntos de datos o paneles.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Conceder al equipo de seguridad de red de Azure los permisos de Lectura y Compilación para los
                    conjuntos de datos de Power BI.</li>
                <li>B. Configurar instrucciones personalizadas para la característica Solicitar acceso que indiquen a los
                    usuarios que se comuniquen con el equipo de seguridad de red de Azure.</li>
                <li>C. Instruir al equipo de seguridad de red de Azure para que cree grupos de seguridad. Configurar RLS
                    para que utilice los grupos.</li>
                <li>D. Agregar al equipo de seguridad de red de Azure como miembros del rol de RLS.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Configurar la pertenencia a grupos de seguridad a nivel de filas, Trabajar
                con miembros</p>
            <p class="text-sm text-gray-400 mb-4">Agregar miembros -</p>
            <p class="text-sm text-gray-400 mb-4">En el servicio Power BI, puede agregar un miembro al rol escribiendo la
                dirección de correo electrónico o el nombre del usuario o grupo de seguridad.</p>
            <p class="text-sm text-gray-400 mb-4">Puede utilizar los siguientes grupos para configurar la seguridad a nivel
                de filas.</p>
            <p class="text-sm text-gray-400 mb-4">Grupo de distribución -</p>
            <p class="text-sm text-gray-400 mb-4">Grupo habilitado para correo -</p>
            <p class="text-sm text-gray-400 mb-4">Grupo de seguridad -</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">No es A: El permiso de Compilación se aplica a los conjuntos de datos.
                Cuando concede a los usuarios permiso de Compilación, pueden crear nuevo contenido basado en su conjunto de
                datos, como informes.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor189: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene cuatro regiones de ventas. Cada región tiene múltiples gerentes de
                ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Implementa seguridad a nivel de filas (RLS) en un modelo de datos. Asigna
                el grupo de seguridad habilitado para correo relevante a cada rol.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene informes de ventas que permiten el análisis por región. Los gerentes
                de ventas pueden ver los registros de ventas de su región. Se impide que los gerentes de ventas vean
                registros de otras regiones.</p>
            <p class="text-sm text-gray-400 mb-4">Un gerente de ventas cambia a una región diferente.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que el gerente de ventas pueda ver los datos de
                ventas correctos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Cambiar el tipo de licencia de Microsoft Power BI del gerente de ventas.</li>
                <li>B. Desde Microsoft Power BI Desktop, editar la configuración de Seguridad a nivel de filas para los
                    informes.</li>
                <li>C. Administrar los permisos del conjunto de datos subyacente.</li>
                <li>D. Solicitar que el gerente de ventas sea agregado al grupo correcto de Azure Active Directory.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: D</p>
            <p class="text-sm text-gray-400 mb-4">Puede utilizar los siguientes grupos para configurar la seguridad a nivel
                de filas.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Grupo de distribución</li>
                <li>Grupo habilitado para correo - Este grupo también contiene una lista de direcciones de correo
                    electrónico de los miembros y también se puede usar para controlar el acceso a OneDrive y SharePoint.
                </li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El Grupo de Seguridad habilitado para correo se puede crear en el Portal
                de administración de Office 365.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li> Grupo de seguridad - También se conoce como Grupo de seguridad de Active Directory. Este grupo reside
                    dentro de Active Directory y Azure Active Directory.</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor190: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene más de 100 conjuntos de datos publicados.</p>
            <p class="text-sm text-gray-400 mb-4">Diez de los conjuntos de datos fueron verificados para cumplir con sus estándares de calidad corporativos.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los 10 conjuntos de datos verificados aparezcan al principio de la lista de conjuntos de datos publicados siempre que los usuarios busquen conjuntos de datos existentes.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Promocionar los conjuntos de datos.</li>
                <li>B. Certificar los conjuntos de datos.</li>
                <li>C. Destacar el conjunto de datos en la página de inicio.</li>
                <li>D. Publicar los conjuntos de datos en una aplicación.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Una vez que haya iniciado sesión, se le presentará una lista de conjuntos
                de datos a los que puede acceder desde sus diversas áreas de trabajo. Esta es una de las razones por las que
                se recomienda tener conjuntos de datos oficiales promocionados y certificados, ya que estos aparecerán al
                principio de la lista, apareciendo los conjuntos de datos certificados antes que los promocionados.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Power BI proporciona dos formas de respaldar su contenido valioso y de
                alta calidad para aumentar su visibilidad: promoción y certificación.
                <p class="text-sm text-gray-400 mb-4">Promoción: La promoción es una forma
                    de destacar el contenido que cree que es valioso y que vale la pena que otros utilicen. Fomenta el uso
                    colaborativo y la difusión del contenido dentro de una organización.</p>
                <p class="text-sm text-gray-400 mb-4">Cualquier propietario de contenido, así como cualquier miembro con
                    permisos de escritura en el área de trabajo donde se encuentra el contenido, puede promocionar el
                    contenido cuando considere que es lo suficientemente bueno para compartirlo.</p>
                <p class="text-sm text-gray-400 mb-4">Certificación: La certificación significa que el contenido cumple con
                    los estándares de calidad de la organización y puede considerarse confiable, autorizado y listo para su
                    uso en toda la organización.</p>
            </p>
            <p class="text-sm text-gray-400 mb-4">Actualmente es posible respaldar</p>
            <p class="text-sm text-gray-400 mb-4">Conjuntos de datos -</p>
            <p class="text-sm text-gray-400 mb-4">Flujos de datos -</p>
            <p class="text-sm text-gray-400 mb-4">Informes -</p>
            <p class="text-sm text-gray-400 mb-4">Aplicaciones -</p>
            <p class="text-sm text-gray-400 mb-4">Si la detectabilidad de conjuntos de datos se ha habilitado en su
                organización, los conjuntos de datos respaldados pueden ser detectables. Cuando un conjunto de datos es
                detectable, los usuarios que no tienen acceso a él podrán encontrarlo y solicitar acceso.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://exceleratorbi.com.au/new-power-bi-reports-golden-dataset/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor191: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Microsoft Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita otorgar al usuario las capacidades que se muestran en la
                siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/4/p14.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La solución debe utilizar el principio de privilegio mínimo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué rol de usuario debería asignar a cada usuario? Para responder,
                arrastre los roles apropiados a los usuarios correctos. Cada rol puede usarse una vez, más de una vez o no
                usarse. Es posible que deba arrastrar la barra divisoria.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/4/p14.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: Miembro -</p>
            <p class="text-sm text-gray-400 mb-4">Solo el Administrador y el Miembro pueden publicar, anular la publicación
                y cambiar permisos para una aplicación.</p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">Los Colaboradores pueden actualizar la aplicación asociada al área de
                trabajo, si el Administrador del área de trabajo les delega este permiso. Sin embargo, no pueden publicar
                una nueva aplicación ni cambiar quién tiene permiso para ella.</p>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: Colaborador -</p>
            <p class="text-sm text-gray-400 mb-4">El Administrador, el Miembro y el Colaborador pueden crear, editar y
                eliminar contenido, como informes, en el área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Colaborador - Este rol puede acceder e interactuar con informes y
                paneles. Además, este rol puede crear, editar, copiar y eliminar elementos en un área de trabajo, publicar
                informes, programar actualizaciones y modificar puertas de enlace.
            </p>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <p class="text-sm text-gray-400 mb-4">Visor - Este rol proporciona acceso de solo lectura a los elementos del
                área de trabajo. El acceso de lectura permite a los consumidores de informes/paneles no solo ver, sino
                también interactuar con los objetos visuales. La interacción no significa cambiar un objeto visual.</p>
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
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://www.mssqltips.com/sqlservertip/6487/power-bi-workspace-permissions-and-roles/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor192: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Crea un panel utilizando el Servicio Microsoft Power BI. El panel contiene un objeto visual de tarjeta que muestra las ventas totales del año actual.</p>
            <p class="text-sm text-gray-400 mb-4">Concede a los usuarios acceso al panel mediante el rol de Visor en el área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">Un usuario desea recibir notificaciones diarias del número que se muestra en el objeto visual de la tarjeta.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita automatizar las notificaciones.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Crear una suscripción.</li>
                <li>B. Crear una alerta de datos.</li>
                <li>C. Compartir el panel con el usuario.</li>
                <li>D. Etiquetar al usuario en un comentario.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Configure alertas para que le notifiquen cuando los datos en sus paneles
                cambien más allá de los límites que estableció.</p>
            <p class="text-sm text-gray-400 mb-4">Las alertas solo se pueden establecer en mosaicos anclados desde objetos
                visuales de informes, y solo en medidores, KPI y tarjetas.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/create-reports/service-set-data-alerts" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor193: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Power BI llamada EspacioTrabajo1 que contiene
                un conjunto de datos llamado DS1 y un informe llamado INF1.</p>
            <p class="text-sm text-gray-400 mb-4">Un usuario desea crear un informe utilizando los datos en DS1 y publicar
                el informe en otra área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita proporcionar al usuario el acceso adecuado. La solución debe
                minimizar la cantidad de permisos de acceso otorgados al usuario.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Agregar al usuario como Visor de EspacioTrabajo1.</li>
                <li>B. Conceder al usuario el permiso de Compilación para DS1.</li>
                <li>C. Compartir INF1 con el usuario.</li>
                <li>D. Agregar al usuario como miembro de EspacioTrabajo1.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Permisos más granulares -</p>
            <p class="text-sm text-gray-400 mb-4">Power BI proporciona el permiso de Compilación como complemento de los
                permisos existentes, Leer y Volver a compartir. Todos los usuarios que ya tenían permiso de Lectura para
                conjuntos de datos a través de permisos de aplicación, uso compartido o acceso al área de trabajo en ese
                momento también obtuvieron permiso de Compilación para esos mismos conjuntos de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Obtuvieron permiso de Compilación automáticamente porque el permiso de
                Lectura ya les otorgaba el derecho a crear nuevo contenido sobre el conjunto de datos, utilizando Analizar
                en Excel o Exportar.</p>
            <p class="text-sm text-gray-400 mb-4">Con este permiso de Compilación más granular, puede elegir quién puede
                solo ver el contenido en el informe o panel existente y quién puede crear contenido conectado a los
                conjuntos de datos subyacentes.</p>
            <p class="text-sm text-gray-400 mb-4">Si su conjunto de datos está siendo utilizado por un informe fuera del
                área de trabajo del conjunto de datos, no puede eliminar ese conjunto de datos. En su lugar, verá un mensaje
                de error.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/service-datasets-build-permissions"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(89%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 89%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(11%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 11%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor194: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene cinco informes y dos paneles en un área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita conceder a todos los usuarios de la organización acceso de
                lectura a un panel y tres informes.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Publica una aplicación para toda la organización.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Crea un grupo de Azure Active Directory que contenga a todos
                los usuarios. Comparte cada informe seleccionado y el panel único con el grupo.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-share-dashboards" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(92%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 92%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">otros</div>
                    <div class="ml-2 text-gray-600 text-[12px]">( 8% )</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 8%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor195: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene cinco informes y dos paneles en un área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita conceder a todos los usuarios de la organización acceso de
                lectura a un panel y tres informes.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Habilita incluido en la aplicación para todos los activos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Necesita especificar el panel y los tres informes que se incluirán en la
                aplicación.</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Crea un grupo de Azure Active Directory que contenga a todos
                los usuarios. Comparte cada informe seleccionado y el panel único con el grupo.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Una aplicación publicada puede proporcionar el acceso requerido.
            </p>
            <p class="text-sm text-gray-400 mb-4">Cuando los paneles e informes en su área de trabajo estén listos, elige
                qué paneles e informes desea publicar y luego publíquelos como una aplicación.</p>
            <p class="text-sm text-gray-400 mb-4">En Power BI, puede crear contenido empaquetado oficial y luego
                distribuirlo a una amplia audiencia como una aplicación. Crea aplicaciones en áreas de trabajo, donde puede
                colaborar en contenido de Power BI con sus colegas. Luego puede publicar la aplicación terminada para
                grandes grupos de personas en su organización.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-create-distribute-apps"
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
    contenedor196: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene cinco informes y dos paneles en un área de trabajo. </p>
            <p class="text-sm text-gray-400 mb-4">Necesita conceder a todos los usuarios de la organización acceso de lectura a un panel y tres informes.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Asigna a todos los usuarios el rol de Visor en el área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">En su lugar: Crea un grupo de Azure Active Directory que contenga a todos
                los usuarios. Comparte cada informe seleccionado y el panel único con el grupo.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-share-dashboards" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor197: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Desde Power BI Desktop, publica un nuevo conjunto de datos e informe en un
                área de trabajo de Power BI. El conjunto de datos tiene un rol de seguridad a nivel de filas (RLS) llamado
                RR.HH.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los miembros del equipo de RR.HH. tengan RLS
                aplicado cuando vean informes basados en el conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Desde powerbi.com, agregar usuarios al rol RR.HH. para el conjunto de datos.</li>
                <li>B. Desde powerbi.com, compartir el conjunto de datos con los miembros del equipo de RR.HH.</li>
                <li>C. Desde Power BI Desktop, cambiar la configuración de Seguridad a nivel de filas.</li>
                <li>D. Desde Power BI Desktop, importar una tabla que contenga los miembros del equipo de RR.HH.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Trabajar con miembros -</p>
            <p class="text-sm text-gray-400 mb-4">Agregar miembros -</p>
            <p class="text-sm text-gray-400 mb-4">En el servicio Power BI, puede agregar un miembro al rol escribiendo la
                dirección de correo electrónico o el nombre del usuario o grupo de seguridad.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor198: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un panel de Power BI que supervisa la calidad de los procesos de
                fabricación. El panel contiene los siguientes elementos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Un gráfico de líneas que muestra el número de productos defectuosos fabricados por día</li>
                <li>Un objeto visual de KPI que muestra el porcentaje diario actual de productos defectuosos fabricados</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Necesita que se le notifique cuando el porcentaje diario de productos
                defectuosos fabricados supere el 3%.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería crear?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. una suscripción</li>
                <li>B. una alerta</li>
                <li>C. un objeto visual de narrativa inteligente</li>
                <li>D. un objeto visual de Preguntas y respuestas</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Configure alertas en el servicio Power BI para que le notifiquen cuando
                los datos en un panel cambien por encima o por debajo de los límites que estableció. Las alertas se pueden
                establecer en mosaicos anclados desde objetos visuales de informes o desde Power BI Preguntas y respuestas,
                y solo en medidores, KPI y tarjetas.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/consumer/end-user-alerts" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor199: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Crea un informe utilizando Microsoft Power BI Desktop.</p>
            <p class="text-sm text-gray-400 mb-4">El informe utiliza datos de un cubo de Microsoft SQL Server Analysis
                Services (SSAS) ubicado en la red interna de su empresa.</p>
            <p class="text-sm text-gray-400 mb-4">Planea publicar el informe en el Servicio Power BI.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería implementar para garantizar que los usuarios que consumen el
                informe desde el Servicio Power BI tengan los datos más actualizados del cubo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. una fuente ODATA</li>
                <li>B. una puerta de enlace de datos local</li>
                <li>C. una suscripción</li>
                <li>D. una actualización programada del conjunto de datos</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Después de instalar la puerta de enlace de datos local, debe agregar
                orígenes de datos que puedan usarse con la puerta de enlace. Puede trabajar con puertas de enlace y orígenes
                de datos de SQL Server Analysis Services (SSAS) que se utilizan para la actualización programada o para
                conexiones activas.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>El servicio Power BI es un servicio de visualización de datos y
                análisis empresarial basado en la nube que permite a cualquier persona visualizar y analizar datos con mayor
                velocidad, eficiencia y comprensión.
            </p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/service-gateway-enterprise-manage-ssas"
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
    contenedor200: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene cinco regiones de ventas. A cada región se le asigna un único
                vendedor.</p>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos importado que tiene un rol de seguridad a nivel
                de filas (RLS) dinámico llamado Ventas. El rol Ventas filtra los datos de transacciones de ventas por
                vendedor.</p>
            <p class="text-sm text-gray-400 mb-4">Los vendedores deben ver solo los datos de su región.</p>
            <p class="text-sm text-gray-400 mb-4">Publica el conjunto de datos en powerbi.com, establece la membresía del
                rol RLS y distribuye el conjunto de datos y los informes relacionados a los vendedores.</p>
            <p class="text-sm text-gray-400 mb-4">Un vendedor informa que cree que debería ver más datos.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita verificar qué datos ve actualmente el vendedor.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Usar la opción Probar como rol para ver los datos como la cuenta de usuario del vendedor.</li>
                <li>B. Usar la opción Probar como rol para ver los datos como el rol Ventas.</li>
                <li>C. Indicar al vendedor que abra el informe en Microsoft Power BI Desktop.</li>
                <li>D. Filtrar los datos en los informes para que coincidan con la lógica prevista en el filtro de la tabla
                    de transacciones de ventas.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: B</p>
            <p class="text-sm text-gray-400 mb-4">Validación del rol dentro del servicio Power BI</p>
            <p class="text-sm text-gray-400 mb-4">Puede validar que el rol que definió está funcionando correctamente en el
                servicio Power BI probando el rol.</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Seleccione Más opciones (...) junto al rol.</li>
                <li>Seleccione Probar datos como rol.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/4/s23.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Verá los informes que están disponibles para este rol. Los paneles no se
                muestran en esta vista. En el encabezado de la página, se muestra el rol que se está aplicando.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/security/service-admin-row-level-security" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
        </div>`
    },
    contenedor201: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene múltiples paneles.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que cuando los usuarios naveguen por los paneles
                disponibles desde powerbi.com, puedan ver qué paneles contienen Información de Identificación Personal
                (PII). La solución debe minimizar el esfuerzo de configuración y el impacto en el diseño del panel.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Etiquetas de sensibilidad de Microsoft Information Protection</li>
                <li>B. mosaicos</li>
                <li>C. comentarios</li>
                <li>D. grupos de Active Directory</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">En el servicio Power BI, las etiquetas de sensibilidad se pueden aplicar a
                conjuntos de datos, informes, paneles y flujos de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Las etiquetas de sensibilidad en informes, paneles, conjuntos de datos y
                flujos de datos son visibles desde muchos lugares en el servicio Power BI. Las etiquetas de sensibilidad en
                informes y paneles también son visibles en las aplicaciones móviles de Power BI para iOS y Android y en
                objetos visuales insertados. En Desktop, puede ver la etiqueta de sensibilidad en la barra de estado.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/fabric/enterprise/powerbi/service-security-sensitivity-label-overview"
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
    contenedor202: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos que tiene los permisos que se muestran en la
                siguiente ilustración.</p>
            <div class="mt-4 mb-4">
                <img src="img/4/p25.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Utilice los menús desplegables para seleccionar la opción de respuesta que
                complete cada enunciado según la información presentada en el gráfico.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios del grupo de finanzas pueden [opción de respuesta] el
                conjunto de datos.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>asignar etiquetas de confidencialidad a</li>
                <li>utilizar Analizar en Excel con</li>
                <li>eliminar</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Los usuarios del grupo corporativo pueden [opción de respuesta] el
                conjunto de datos.</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>otorgar permiso de compilación para</li>
                <li>otorgar permiso de lectura para</li>
                <li>eliminar una tabla de</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/4/p25.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/4/s25.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Recuadro 1: usar Analizar en Excel -</p>
            <p class="text-sm text-gray-400 mb-4">El permiso de Compilación se aplica a los conjuntos de datos. Cuando
                concede a los usuarios permiso de Compilación, pueden crear nuevo contenido basado en su conjunto de datos,
                como informes, paneles, mosaicos anclados desde Preguntas y respuestas, informes paginados y Detección de
                información.</p>
            <p class="text-sm text-gray-400 mb-4">Los usuarios también necesitan permisos de Compilación para trabajar con
                los datos fuera de Power BI:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Para exportar los datos subyacentes.</li>
                <li>Para crear nuevo contenido sobre el conjunto de datos, como con Analizar en Excel.</li>
                <li>Para acceder a los datos a través del punto de conexión XMLA.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Recuadro 2: conceder el permiso de Lectura para</p>
            <p class="text-sm text-gray-400 mb-4">El grupo Corp tiene permisos de lectura, uso compartido y recompilación.
            </p>
            <p class="text-sm text-gray-400 mb-4">Como propiedad de la aplicación Power BI, puede permitir a los usuarios
                compartir la aplicación y el conjunto de datos subyacente con permisos de uso compartido.</p>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/connect-data/service-datasets-build-permissions"
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
    contenedor203: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Esta pregunta es parte de una serie de preguntas que presentan el
                mismo escenario. Cada pregunta de la serie contiene una solución única que podría cumplir los objetivos
                planteados. Algunos conjuntos de preguntas pueden tener más de una solución correcta, mientras que otros
                pueden no tener una solución correcta. Después de responder una pregunta en esta sección, NO podrá volver a
                ella.
                Como resultado, estas preguntas no aparecerán en la pantalla de revisión.
            </p>
            <p class="text-sm text-gray-400 mb-4">Tiene cinco informes y dos paneles en un área de trabajo.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita conceder a todos los usuarios de la organización acceso de lectura a un panel y tres informes.</p>
            <p class="text-sm text-gray-400 mb-4">Solución: Crea un grupo de Azure Active Directory que contenga a todos los usuarios. Comparte cada informe seleccionado y el panel único con el grupo.</p>
            <p class="text-sm text-gray-400 mb-4">¿Esto cumple con el objetivo?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Sí</li>
                <li>B. No</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: A</p>
            <p class="text-sm text-gray-400 mb-4">Compartir con más de 100 usuarios separados</p>
            <p class="text-sm text-gray-400 mb-4">Como máximo, puede compartir con 100 usuarios o grupos en una sola acción
                de compartir. Sin embargo, puede dar acceso a más de 500 usuarios a un elemento. Aquí hay algunas
                sugerencias:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Comparta varias veces especificando los usuarios individualmente.</li>
                <li>Comparta con un grupo de usuarios que contenga a todos los usuarios.</li>
                <li>Cree el informe o panel en un área de trabajo y luego cree una aplicación desde el área de trabajo.
                    Puede compartir la aplicación con muchas más personas.</li>
            </ul>
            <a class=" inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                href="https://learn.microsoft.com/es-es/power-bi/collaborate-share/service-share-dashboards" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd" />
                </svg>
                Referencia
            </a>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(86%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 86%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">B</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(14%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 14%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor204: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene una tabla de Power BI llamada Cliente que contiene un campo llamado
                Dirección de correo electrónico.</p>
            <p class="text-sm text-gray-400 mb-4">Descubre que varios registros contienen la misma dirección de correo
                electrónico.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear una columna calculada para identificar qué registros tienen
                direcciones de correo electrónico duplicadas.</p>
            <p class="text-sm text-gray-400 mb-4">¿Cómo debería completar la expresión DAX para la columna calculada? Para
                responder, arrastre los valores apropiados a los objetivos correctos. Cada valor puede usarse una vez, más
                de una vez o no usarse. Es posible que deba arrastrar la barra divisoria entre los paneles o desplazarse
                para ver el contenido.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <div class="mt-4 mb-4">
                <img src="img/4/p27.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/4/s27.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor205: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene un conjunto de datos de Power BI y un informe conectado.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita asegurarse de que los usuarios puedan analizar datos en Microsoft Excel solo conectándose directamente al conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">Concede a los usuarios el permiso de Compilación para el conjunto de datos.   </p>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer a continuación?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Certificar el conjunto de datos utilizado por el informe.</li>
                <li>B. Cambiar la interacción visual predeterminada para el informe.</li>
                <li>C. Para el informe, cambiar la configuración de Exportar datos a Ninguno.</li>
                <li>D. Para el informe, cambiar la configuración de Exportar datos a Datos resumidos, datos con diseño actual y datos subyacentes.</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(74%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 74%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">D</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(26%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 26%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor206: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">Tiene dos áreas de trabajo de Power BI llamadas EspacioA y EspacioB.
                EspacioA contiene dos conjuntos de datos llamados Ventas y RR.HH.</p>
            <p class="text-sm text-gray-400 mb-4">Necesita proporcionar a un usuario llamado Usuario1 acceso a EspacioB. La
                solución debe cumplir con los siguientes requisitos:</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>Crear informes que utilicen el conjunto de datos RR.HH.</li>
                <li>Publicar los informes en EspacioB.</li>
                <li>Evitar la capacidad de modificar el conjunto de datos RR.HH.</li>
                <li>Evitar la capacidad de agregar usuarios a las Áreas de trabajo.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">¿Qué debería hacer? Para responder, seleccione las opciones apropiadas en
                el área de respuesta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
            </p>
            <p class="text-sm text-gray-400 mb-4">Para acceder al conjunto de datos de RRHH:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Asignar a Usuario1 el rol de Colaborador en EspacioTrabajoA.</li>
                <li>Conceder a Usuario1 permiso de Compilación para el conjunto de datos de RRHH.</li>
                <li>Conceder a Usuario1 permisos de lectura para el conjunto de datos de RRHH.to</li>
                <li>Conceder a Usuario1 permisos de uso compartido para el conjunto de datos de RRHH.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Para publicar informes en EspacioTrabajoB:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Asignar a Usuario1 el rol de Administrador para Espacios de Trabajo.</li>
                <li>Asignar a Usuario1 el rol de Colaborador en EspacioTrabajoA.</li>
                <li>Asignar a Usuario1 el rol de Colaborador en EspacioTrabajoB.</li>
                <li>Asignar a Usuario1 el rol de Miembro en EspacioTrabajoB.</li>
            </ul>
            <div class="mt-4 mb-4">
                <img src="img/4/p29.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <div class="mt-4 mb-4">
                <img src="img/4/s29.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
        </div>`
    },
    contenedor207: {
        pregunta: `<div>
        <p class="text-sm text-gray-400 mb-4">Tiene un área de trabajo de Power BI llamada Datos de BI que contiene un conjunto de datos llamado Finanzas de BI.</p>
        <p class="text-sm text-gray-400 mb-4">Tiene el permiso de Compilación para el conjunto de datos Finanzas de BI, pero NO tiene permisos para el área de trabajo.</p>
        <p class="text-sm text-gray-400 mb-4">Necesita conectarse a Finanzas de BI y crear un informe.</p>
        <p class="text-sm text-gray-400 mb-4">¿Qué dos acciones debería realizar? Cada respuesta correcta presenta una solución completa.</p>
        <p class="text-sm text-gray-400 mb-4">
            <span class="font-bold">Nota: </span>Cada selección correcta vale un punto.
        </p>
        <ul class="list-inside text-sm text-gray-400 mb-4">
            <li>A. Desde el servicio Power BI, crear un flujo de datos hacia el conjunto de datos usando DirectQuery.</li>
            <li>B. Desde Power BI Desktop, conectarse a un origen de datos de Dataverse.</li>
            <li>C. Desde el servicio Power BI, crear un nuevo informe y seleccionar un conjunto de datos publicado.</li>
            <li>D. Desde Power BI Desktop, conectarse a un conjunto de datos compartido.</li>
        </ul>
    </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: CD</p>
        </div>`
    },
    contenedor208: {
        pregunta: `<div>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Información Introductoria</span>
            </p>
            <p class="text-sm text-gray-400 mb-4"></p>
            <p class="text-sm text-gray-400 mb-4">Caso práctico -</p>
            <p class="text-sm text-gray-400 mb-4">Este es un caso práctico. Los casos prácticos no tienen un tiempo
                separado. Puede usar todo el tiempo del examen que desee para completar cada caso. Sin embargo, puede haber
                casos prácticos y secciones adicionales en este examen. Debe administrar su tiempo para asegurarse de poder
                completar todas las preguntas incluidas en este examen en el tiempo proporcionado.</p>
            <p class="text-sm text-gray-400 mb-4">Para responder a las preguntas incluidas en un caso práctico, deberá
                consultar la información proporcionada en el caso práctico. Los casos prácticos pueden contener anexos y
                otros recursos que proporcionan más información sobre el escenario descrito en el caso práctico. Cada
                pregunta es independiente de las otras preguntas de este caso práctico.</p>
            <p class="text-sm text-gray-400 mb-4">Al final de este caso práctico, aparecerá una pantalla de revisión. Esta
                pantalla le permite revisar sus respuestas y realizar cambios antes de pasar a la siguiente sección del
                examen. Después de comenzar una nueva sección, no podrá volver a esta sección.</p>
            <p class="text-sm text-gray-400 mb-4">Para comenzar el caso práctico -</p>
            <p class="text-sm text-gray-400 mb-4">Para mostrar la primera pregunta de este caso práctico, haga clic en el
                botón Siguiente. Utilice los botones del panel izquierdo para explorar el contenido del caso práctico antes
                de responder las preguntas. Al hacer clic en estos botones, se muestra información como los requisitos
                empresariales, el entorno existente y los enunciados de los problemas. Si el caso práctico tiene una pestaña
                Información de IA, tenga en cuenta que la información mostrada es idéntica a la información mostrada en las
                pestañas subsiguientes. Cuando esté listo para responder una pregunta, haga clic en el botón Pregunta para
                volver a la pregunta.</p>
            <p class="text-sm text-gray-400 mb-4">Descripción General -</p>
            <p class="text-sm text-gray-400 mb-4">Northwind Traders es una empresa importadora de alimentos especializados.
            </p>
            <p class="text-sm text-gray-400 mb-4">La empresa implementó recientemente Power BI para comprender mejor a sus
                principales clientes, productos y proveedores.</p>
            <p class="text-sm text-gray-400 mb-4">Problemas Empresariales -</p>
            <p class="text-sm text-gray-400 mb-4">El departamento de ventas depende del departamento de TI para generar
                informes en Microsoft SQL Server Reporting Services (SSRS). El departamento de TI tarda demasiado en generar
                los informes y, a menudo, malinterpreta los requisitos de los informes.</p>
            <p class="text-sm text-gray-400 mb-4">Entorno Existente. Fuentes de Datos</p>
            <p class="text-sm text-gray-400 mb-4">Northwind Traders utiliza las fuentes de datos que se muestran en la
                siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.1.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Source2 se exporta diariamente desde un sistema de terceros y se almacena
                en Microsoft SharePoint Online.</p>
            <p class="text-sm text-gray-400 mb-4">Entorno Existente. Hoja de trabajo del Cliente</p>
            <p class="text-sm text-gray-400 mb-4">Source2 contiene una única hoja de trabajo llamada Detalles del Cliente.
                Las primeras 11 filas de la hoja de trabajo se muestran en la siguiente tabla.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.2.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Todos los campos en Source2 son obligatorios.</p>
            <p class="text-sm text-gray-400 mb-4">La columna Dirección en Detalles del Cliente es la dirección de
                facturación, que puede diferir de la dirección de envío.</p>
            <p class="text-sm text-gray-400 mb-4">Entorno Existente. Base de datos de Azure SQL</p>
            <p class="text-sm text-gray-400 mb-4">Source1 contiene las siguientes tablas:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Pedidos</li>
                <li>Productos</li>
                <li>Proveedores</li>
                <li>Categorías</li>
                <li>Detalles del Pedido</li>
                <li>Empleados de Ventas</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">La tabla Pedidos contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.3.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Detalles del Pedido contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.4.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La dirección en la tabla Pedidos es la dirección de envío, que puede
                diferir de la dirección de facturación.</p>
            <p class="text-sm text-gray-400 mb-4">La tabla Productos contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.5.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Categorías contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.6.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Proveedores contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.7.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">La tabla Empleados de Ventas contiene las siguientes columnas.</p>
            <div class="mt-4 mb-4">
                <img src="img/5/p1.8.jpg" class="object-cover mx-auto  shadow-lg md:mx-0" />
            </div>
            <p class="text-sm text-gray-400 mb-4">Cada empleado en la tabla Empleados de Ventas está asignado a una región
                de ventas. Se pueden asignar múltiples empleados a cada región.</p>
            <p class="text-sm text-gray-400 mb-4">Requisitos. Requisitos de los informes</p>
            <p class="text-sm text-gray-400 mb-4">Northwind Traders requiere los siguientes informes:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Principales Productos</li>
                <li>Principales Clientes</li>
                <li>Envíos a Tiempo</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">El informe Principales Clientes mostrará los 20 principales clientes
                basados en los montos de ventas más altos en un mes o trimestre de pedido seleccionado, categoría de
                producto y región de ventas.</p>
            <p class="text-sm text-gray-400 mb-4">El informe Principales Productos mostrará los 20 principales productos
                basados en los montos de ventas más altos vendidos en un mes o trimestre de pedido seleccionado, región de
                ventas y categoría de producto. El informe también debe mostrar qué proveedores proporcionan los principales
                productos.</p>
            <p class="text-sm text-gray-400 mb-4">El informe Envíos a Tiempo mostrará las siguientes métricas para un mes o
                trimestre de envío seleccionado:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>El porcentaje de pedidos que se enviaron con retraso por país y región de envío</li>
                <li>Clientes que tuvieron múltiples envíos con retraso durante el último trimestre</li>
                <li>Northwind Traders define los pedidos con retraso como aquellos enviados después de la fecha de envío
                    requerida.</li>
                <li>El departamento de envíos del almacén debe ser notificado si el porcentaje de pedidos con retraso dentro
                    del mes actual supera el 5%.</li>
                <li>Los informes deben mostrar datos históricos para el año calendario actual y los últimos tres años
                    calendario.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Requisitos. Requisitos técnicos</p>
            <p class="text-sm text-gray-400 mb-4">Northwind Traders identifica los siguientes requisitos técnicos:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Un único conjunto de datos debe soportar los tres informes.</li>
                <li>Los informes deben almacenarse en una única área de trabajo de Power BI.</li>
                <li>Los datos del informe deben estar actualizados a las 7 a.m., hora del Pacífico, cada día.</li>
                <li>Los informes deben proporcionar tiempos de respuesta rápidos cuando los usuarios interactúan con una
                    visualización.</li>
                <li>El modelo de datos debe minimizar el tamaño del conjunto de datos tanto como sea posible, cumpliendo al
                    mismo tiempo con los requisitos del informe y los requisitos técnicos.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Requisitos. Requisitos de seguridad</p>
            <p class="text-sm text-gray-400 mb-4">El acceso a los informes debe concederse únicamente a grupos de seguridad
                de Azure Active Directory (Azure AD). Existe un grupo de seguridad de Azure AD para cada departamento.</p>
            <p class="text-sm text-gray-400 mb-4">El departamento de ventas debe poder realizar las siguientes tareas en
                Power BI:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Crear, editar y eliminar contenido en los informes.</li>
                <li>Administrar permisos para áreas de trabajo, conjuntos de datos e informes.</li>
                <li>Publicar, anular la publicación, actualizar y cambiar los permisos de una aplicación.</li>
                <li>Asignar a los grupos de Azure AD acceso basado en roles al área de trabajo de los informes.</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Los usuarios del departamento de ventas deben poder acceder únicamente a
                los datos de la región de ventas a la que están asignados en la tabla Empleados de Ventas.</p>
            <p class="text-sm text-gray-400 mb-4">Power BI tiene la siguiente expresión DAX de filtro de tabla de seguridad
                a nivel de filas (RLS) para la tabla Empleados de Ventas.</p>
            <p class="text-sm text-gray-400 mb-4">[EmailAddress] = USERNAME()</p>
            <p class="text-sm text-gray-400 mb-4">RLS se aplicará solo a los usuarios del departamento de ventas. Los
                usuarios de todos los demás departamentos deben poder ver todos los datos.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Pregunta</span>
            </p>
            <p class="text-sm text-gray-400 mb-4">Necesita crear el conjunto de datos.</p>
            <p class="text-sm text-gray-400 mb-4">¿Qué modo de conjunto de datos debería usar?</p>
            <ul class="list-inside text-sm text-gray-400 mb-4">
                <li>A. Importar</li>
                <li>B. DirectQuery</li>
                <li>C. Compuesto</li>
                <li>D. conexión activa</li>
            </ul>
        </div>`,
        solucion: `<div class="bg-emerald-800/30 text-gray-100 px-4 py-4 rounded-lg border border-gray-700 ring-2 ring-emerald-500/50">
            <p class="text-sm text-gray-400 mb-4">Respuesta Correcta: C</p>
            <p class="text-sm text-gray-400 mb-4">Los tres modos de conjunto de datos son:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Importar -</li>
                <li>DirectQuery -</li>
                <li>Compuesto -</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Modo compuesto -</p>
            <p class="text-sm text-gray-400 mb-4">El modo compuesto puede mezclar modos Importar y DirectQuery, o integrar
                múltiples fuentes de datos de DirectQuery. Los modelos desarrollados en modo compuesto admiten la
                configuración del modo de almacenamiento para cada tabla del modelo. Este modo también admite tablas
                calculadas (definidas con DAX).</p>
            <p class="text-sm text-gray-400 mb-4">El modo de almacenamiento de la tabla se puede configurar como Importar,
                DirectQuery o Dual. Una tabla configurada en modo de almacenamiento Dual es tanto Importar como DirectQuery,
                y esta configuración permite que el servicio Power BI determine el modo más eficiente a utilizar en cada
                consulta.</p>
            <p class="text-sm text-gray-400 mb-4">
                <span class="font-bold">Nota: </span>Un único conjunto de datos debe soportar los tres informes.
            </p>
            <p class="text-sm text-gray-400 mb-4">El modelo de datos debe minimizar el tamaño del conjunto de datos tanto
                como sea posible, cumpliendo al mismo tiempo con los requisitos del informe y los requisitos técnicos.</p>
            <p class="text-sm text-gray-400 mb-4">Northwind Traders requiere los siguientes informes:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>Principales Productos -</li>
                <li>Principales Clientes -</li>
                <li>Envíos a Tiempo -</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Incorrecto:</p>
            <ul class="list-disc list-inside md:list-disc text-sm text-gray-400 mb-4">
                <li>DirectQuery: El modo DirectQuery es una alternativa al modo Importar. Los modelos desarrollados en modo
                    DirectQuery
                    no importan datos. En cambio, consisten solo en metadatos que definen la estructura del modelo. Cuando
                    se consulta el modelo, se utilizan consultas nativas para recuperar datos de la fuente de datos
                    subyacente.b</li>
                <li>Importar</li>
            </ul>
            <p class="text-sm text-gray-400 mb-4">Sin embargo, aunque hay ventajas convincentes asociadas con los modelos de
                Importación, también hay desventajas:</p>
            <p class="text-sm text-gray-400 mb-4">Todo el modelo debe cargarse en la memoria antes de que Power BI pueda
                consultar el modelo, lo que puede ejercer presión sobre los recursos de capacidad disponibles, especialmente
                a medida que crecen el número y el tamaño de los modelos de Importación.</p>
            <p class="text-sm text-gray-400 mt-4 italic text-[12px]">Distribución de votos de la comunidad</p>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-10 text-right text-[12px]">C</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(53%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-green-500/50 h-full rounded-full" style="width: 53%"></div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-10 text-right font-medium text-[12px]">A</div>
                    <div class="ml-2 text-gray-600 text-[12px]">(47%)</div>
                    <div class="ml-8 w-48 bg-gray-200 h-2 rounded-full">
                        <div class="bg-red-500/50 bg- h-full rounded-full" style="width: 47%"></div>
                    </div>
                </div>
            </div>
        </div>`
    },
    contenedor209: {
        pregunta: ``,
        solucion: ``
    },
    contenedor210: {
        pregunta: ``,
        solucion: ``
    },
    contenedor211: {
        pregunta: ``,
        solucion: ``
    },
    contenedor212: {
        pregunta: ``,
        solucion: ``
    },
    contenedor213: {
        pregunta: ``,
        solucion: ``
    },
    contenedor214: {
        pregunta: ``,
        solucion: ``
    },
    contenedor215: {
        pregunta: ``,
        solucion: ``
    },
    contenedor216: {
        pregunta: ``,
        solucion: ``
    },
    contenedor217: {
        pregunta: ``,
        solucion: ``
    },
    contenedor218: {
        pregunta: ``,
        solucion: ``
    },
    contenedor219: {
        pregunta: ``,
        solucion: ``
    },
    contenedor220: {
        pregunta: ``,
        solucion: ``
    },
    contenedor221: {
        pregunta: ``,
        solucion: ``
    },
    contenedor222: {
        pregunta: ``,
        solucion: ``
    },
    contenedor223: {
        pregunta: ``,
        solucion: ``
    },
    contenedor224: {
        pregunta: ``,
        solucion: ``
    },
    contenedor225: {
        pregunta: ``,
        solucion: ``
    },
    contenedor226: {
        pregunta: ``,
        solucion: ``
    },
    contenedor227: {
        pregunta: ``,
        solucion: ``
    },
    contenedor228: {
        pregunta: ``,
        solucion: ``
    },
    contenedor229: {
        pregunta: ``,
        solucion: ``
    },
    contenedor230: {
        pregunta: ``,
        solucion: ``
    },
    contenedor231: {
        pregunta: ``,
        solucion: ``
    },
    contenedor232: {
        pregunta: ``,
        solucion: ``
    },
    contenedor233: {
        pregunta: ``,
        solucion: ``
    },
    contenedor234: {
        pregunta: ``,
        solucion: ``
    },
    contenedor235: {
        pregunta: ``,
        solucion: ``
    },
    contenedor236: {
        pregunta: ``,
        solucion: ``
    },
    contenedor237: {
        pregunta: ``,
        solucion: ``
    },
    contenedor238: {
        pregunta: ``,
        solucion: ``
    },
    contenedor239: {
        pregunta: ``,
        solucion: ``
    },
    contenedor240: {
        pregunta: ``,
        solucion: ``
    },
    contenedor241: {
        pregunta: ``,
        solucion: ``
    },
    contenedor242: {
        pregunta: ``,
        solucion: ``
    },
    contenedor243: {
        pregunta: ``,
        solucion: ``
    },
    contenedor244: {
        pregunta: ``,
        solucion: ``
    },
    contenedor245: {
        pregunta: ``,
        solucion: ``
    },
    contenedor246: {
        pregunta: ``,
        solucion: ``
    },
    contenedor247: {
        pregunta: ``,
        solucion: ``
    },
    contenedor248: {
        pregunta: ``,
        solucion: ``
    },
    contenedor249: {
        pregunta: ``,
        solucion: ``
    },
    contenedor250: {
        pregunta: ``,
        solucion: ``
    },
    contenedor251: {
        pregunta: ``,
        solucion: ``
    },
    contenedor252: {
        pregunta: ``,
        solucion: ``
    },
    contenedor253: {
        pregunta: ``,
        solucion: ``
    },
    contenedor254: {
        pregunta: ``,
        solucion: ``
    },
    contenedor255: {
        pregunta: ``,
        solucion: ``
    },
    contenedor256: {
        pregunta: ``,
        solucion: ``
    },
    contenedor257: {
        pregunta: ``,
        solucion: ``
    }
};

/*contenedor7: {
    pregunta: ``,
    solucion: ``
}*/