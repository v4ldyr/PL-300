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
        pregunta: ``,
        solucion: ``
    },
    contenedor109: {
        pregunta: ``,
        solucion: ``
    },
    contenedor110: {
        pregunta: ``,
        solucion: ``
    },
    contenedor111: {
        pregunta: ``,
        solucion: ``
    },
    contenedor112: {
        pregunta: ``,
        solucion: ``
    },
    contenedor113: {
        pregunta: ``,
        solucion: ``
    },
    contenedor114: {
        pregunta: ``,
        solucion: ``
    },
    contenedor115: {
        pregunta: ``,
        solucion: ``
    },
    contenedor116: {
        pregunta: ``,
        solucion: ``
    },
    contenedor117: {
        pregunta: ``,
        solucion: ``
    },
    contenedor118: {
        pregunta: ``,
        solucion: ``
    },
    contenedor119: {
        pregunta: ``,
        solucion: ``
    },
    contenedor120: {
        pregunta: ``,
        solucion: ``
    },
    contenedor121: {
        pregunta: ``,
        solucion: ``
    },
    contenedor122: {
        pregunta: ``,
        solucion: ``
    },
    contenedor123: {
        pregunta: ``,
        solucion: ``
    },
    contenedor124: {
        pregunta: ``,
        solucion: ``
    },
    contenedor125: {
        pregunta: ``,
        solucion: ``
    },
    contenedor126: {
        pregunta: ``,
        solucion: ``
    },
    contenedor127: {
        pregunta: ``,
        solucion: ``
    },
    contenedor128: {
        pregunta: ``,
        solucion: ``
    },
    contenedor129: {
        pregunta: ``,
        solucion: ``
    },
    contenedor130: {
        pregunta: ``,
        solucion: ``
    },
    contenedor131: {
        pregunta: ``,
        solucion: ``
    },
    contenedor132: {
        pregunta: ``,
        solucion: ``
    },
    contenedor133: {
        pregunta: ``,
        solucion: ``
    },
    contenedor134: {
        pregunta: ``,
        solucion: ``
    },
    contenedor135: {
        pregunta: ``,
        solucion: ``
    },
    contenedor136: {
        pregunta: ``,
        solucion: ``
    },
    contenedor137: {
        pregunta: ``,
        solucion: ``
    },
    contenedor138: {
        pregunta: ``,
        solucion: ``
    },
    contenedor139: {
        pregunta: ``,
        solucion: ``
    },
    contenedor140: {
        pregunta: ``,
        solucion: ``
    },
    contenedor141: {
        pregunta: ``,
        solucion: ``
    },
    contenedor142: {
        pregunta: ``,
        solucion: ``
    },
    contenedor143: {
        pregunta: ``,
        solucion: ``
    },
    contenedor144: {
        pregunta: ``,
        solucion: ``
    },
    contenedor145: {
        pregunta: ``,
        solucion: ``
    },
    contenedor146: {
        pregunta: ``,
        solucion: ``
    },
    contenedor147: {
        pregunta: ``,
        solucion: ``
    },
    contenedor148: {
        pregunta: ``,
        solucion: ``
    },
    contenedor149: {
        pregunta: ``,
        solucion: ``
    },
    contenedor150: {
        pregunta: ``,
        solucion: ``
    },
    contenedor151: {
        pregunta: ``,
        solucion: ``
    },
    contenedor152: {
        pregunta: ``,
        solucion: ``
    },
    contenedor153: {
        pregunta: ``,
        solucion: ``
    },
    contenedor154: {
        pregunta: ``,
        solucion: ``
    },
    contenedor155: {
        pregunta: ``,
        solucion: ``
    },
    contenedor156: {
        pregunta: ``,
        solucion: ``
    },
    contenedor157: {
        pregunta: ``,
        solucion: ``
    },
    contenedor158: {
        pregunta: ``,
        solucion: ``
    },
    contenedor159: {
        pregunta: ``,
        solucion: ``
    },
    contenedor160: {
        pregunta: ``,
        solucion: ``
    },
    contenedor161: {
        pregunta: ``,
        solucion: ``
    },
    contenedor162: {
        pregunta: ``,
        solucion: ``
    },
    contenedor163: {
        pregunta: ``,
        solucion: ``
    },
    contenedor164: {
        pregunta: ``,
        solucion: ``
    },
    contenedor165: {
        pregunta: ``,
        solucion: ``
    },
    contenedor166: {
        pregunta: ``,
        solucion: ``
    },
    contenedor167: {
        pregunta: ``,
        solucion: ``
    },
    contenedor168: {
        pregunta: ``,
        solucion: ``
    },
    contenedor169: {
        pregunta: ``,
        solucion: ``
    },
    contenedor170: {
        pregunta: ``,
        solucion: ``
    },
    contenedor171: {
        pregunta: ``,
        solucion: ``
    },
    contenedor172: {
        pregunta: ``,
        solucion: ``
    },
    contenedor173: {
        pregunta: ``,
        solucion: ``
    },
    contenedor174: {
        pregunta: ``,
        solucion: ``
    },
    contenedor175: {
        pregunta: ``,
        solucion: ``
    },
    contenedor176: {
        pregunta: ``,
        solucion: ``
    },
    contenedor177: {
        pregunta: ``,
        solucion: ``
    },
    contenedor178: {
        pregunta: ``,
        solucion: ``
    },
    contenedor179: {
        pregunta: ``,
        solucion: ``
    },
    contenedor180: {
        pregunta: ``,
        solucion: ``
    },
    contenedor181: {
        pregunta: ``,
        solucion: ``
    }
};

/*contenedor7: {
    pregunta: ``,
    solucion: ``
}*/