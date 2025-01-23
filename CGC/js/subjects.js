const NULL_INFO = {
    attribute: 0,
    title: "null",
    description: "null",
    resources: ["null", "null"]
}

const MATH_ANALYSIS_INFO = {
    attribute: 1,
    title: "Математический анализ",
    description: "...",
    resources: ['<a href="https://www.youtube.com/playlist?list=PLVjLpKXnAGLVbrcJdDb0a2RS6MmRCgxJz">Суть математического анадиза</a>. Интерактивное введение',
                '<a href="http://mathprofi.ru/predely_primery_reshenii.html">Теория пределов</a>. Теория пределов от mathprofi',
                '<a href="http://mathprofi.ru/kak_naiti_proizvodnuju.html">Производные</a>. Производные от mathprofi',
                '<a href="http://mathprofi.ru/grafiki_i_svoistva_funkcij.html">Графики и функции</a>. Графики и функции от mathprofi',
                '<a href="http://mathprofi.ru/funkcija_dvuh_peremennyh_oblast_opredelenija_linii_urovnja.html">Функции нескольких переменных</a>. Функции нескольких переменных от mathprofi',
                '<a href="http://mathprofi.ru/integraly_primery_reshenij.html">Интеграллы</a>. Интеграллы от mathprofi',
                '<a href="http://mathprofi.ru/ryady_dlya_chajnikov.html">Числовые ряды</a>. Числовые ряды от mathprofi',
                'Фихтенгольц Г.М. "Основы математического анализа (Часть 1-2)". Легендарный университетский учебник',
                'Ильин В.А. "Основы математического анализа (Часть 1-2)". Классический университетский учебник',
                'Ильин В. А., Садовничий В. А. "Математический анализ. Начальный курс". Классический университетский учебник',
                'Демидович Б. П., Садовничий В. А. "Легендарный сборник задач и упражнений по математическому анализу". Сборник с задачами по математическому анализу'
            ]
}

const ALGEBRA_INFO = {
    attribute: 2,
    title: "Линейная алгебра",
    description: "Дает фундаментальные знания работы с векторами, матрицами и пространствами. Которые представляют собой инструменты работы с геометрическими объектами",
    resources: ['<a href="https://www.youtube.com/playlist?list=PLVjLpKXnAGLXPaS7FRBjd5yZeXwJxZil2">Сущность Линейной Алгебры</a>. Интерактивное введение',
                '<a href="https://habr.com/ru/articles/131931/">Линейная алгебра для разработчиков игр</a>. Базовые концепции линейной алгебры',
                '<a href="http://mathprofi.ru/mnozhestva.html">Алгебра</a>. Линейная алгебра от mathprofi',
                'Ильин В.А. Позняк Э.Г. "Линейная алгебра". Легендарный университетский учебник',
                ".."
            ]
}

const ANALYTICAL_GEOMETRY_INFO = {
    attribute: 3,
    title: "Аналитическая геометрия",
    description: "Геометрия является областью изучающая пространственные фигуры. Компьютерная графика повсеместно состоит из геометрических фигур",
    resources: ['<a href="http://mathprofi.ru/vektory_dlya_chainikov.html">Аналитическая геометрия</a>. Аналитическая геометрия от mathprofi',
                'Ильин В.А. Позняк Э.Г. "Аналитическая геометрия". Легендарный университетский учебник',
                ".."
            ]
}

const DISCRETE_MATH_INFO = {
    attribute: 4,
    title: "Дискретная математика",
    description: "Дает теоретические основы для работы с разными структурами данных. Логика, графы, деревья, множества, отношения и т.д. - все это важные элементы прикладной математики в целом",
    resources: ['Новиков Ф.А. "Дискретная математика для программистов"']
}

const STATISTICS_AND_PROBABILITY_INFO = {
    attribute: 5,
    title: "Теория вероятностей и математическая статистика",
    description: "...",
    resources: ['<a href="http://mathprofi.ru/teorija_verojatnostei.html">Теория вероятностей</a>. Теория вероятностей от mathprofi',
                '<a href="https://stepik.org/course/3089/promo">Основы теории вероятностей</a>. Курс по основам теории вероятностей на stepik',
                '<a href="http://mathprofi.ru/matematicheskaya_statistika.html">Математическая статистика</a>. Математическая статистика от mathprofi',
                '<a href="https://stepik.org/course/76/promo">Основы статистики</a>. Курс по основам статистики на stepik',
                'Гмурман В. Е. "Теория вероятностей и математическая статистика". Легендарный университетский учебник',
                'Гмурман В. Е. "Руководство к решению задач по теории вероятностей и математической статистике". Решебник' 
            ]
}

const PROGRAMMING_LANGUAGE_INFO = {
    attribute: 6,
    title: "Языки программирования",
    description: "Первым делом, язык программирования - это инструмент, инструмент для общения с компьютером. Важно еще понимать, что не существует универсального ЯП, каждый ЯП решает определенный задачи",
    resources: ["..", "..", ".."]
}

const ALGORITHMS_AND_DATA_STRUCT_INFO = {
    attribute: 7,
    title: "Алгоритмы и структуры данных",
    description: "Алгоритм — это последовательность шагов, необходимых для решения задачи. Они являются основой любого программного обеспечения и могут быть описаны с помощью ЯП.\n Структуры данных — это способ хранения и организации данных, облегчающий доступ, добавление, удаление и изменение данных. Они используются для оптимизации производительности программы и сокращения количества используемой памяти",
    resources: ['Дональд Кнут "Искусство программирования (Том 1-4)". Легендарный четырехтомник, который не так просто осилить',
                'Кормен Т. "Алгоритмы. Построение и анализ". Классическая книга',
                'Никлаус Вирт. "Алгоритмы и структуры данных". Классическая книга']
}

const DIP_INFO = {
    attribute: 8,
    title: "Основы цифровой обработки изображений",
    description: "Изучает алгоритмы и методы обработки цифровых изображений. Чаще всего цифровая обработка изображений (ЦОИ) сводится к цифровой фильтрации изображения: устранение шумов, сглаживание, повышение резкости и т.д. ЦОИ - это очень большой раздел математики",
    resources: ["..", "..", ".."]
}

const MATH_CG_INFO = {
    attribute: 9,
    title: "Математические основы компьютерной графики",
    description: "Компьютерная графика (КГ) - Раздел математики изучающий совокупность методов и приемов для преобразования данных в графическое представление. Машинная графика представляет собой симбиоз линейной алгебры и аналитической геометрии",
    resources: ["..", "..", ".."]
}

const GRAPHICS_LIB_INFO = {
    attribute: 10,
    title: "Графические библиотеки",
    description: "Графическая библиотека - это программная библиотека, предназначенная для рендеринга компьютерной графики. Как правило, она предоставляет оптимизированные версии функций, которые выполняют распространённые задачи рендеринга (отрисовка треугольников, растеризация и т.д.)",
    resources: ["..", "..", ".."]
}

const GAME_ENGINE_INFO = {
    attribute: 11,
    title: "Игровые движки",
    description: "Игровой движок - это фреймворк, предназначенный в первую очередь для разработки видеоигр и обычно включающий соответствующие библиотеки и вспомогательные программы",
    resources: ["..", "..", ".."]
}

const GPGPU_INFO = {
    attribute: 12,
    title: "Вычисления на видеокартах (GPGPU)",
    description: "...",
    resources: ["..", "..", ".."]
}

const NUMERICAL_METHODS_INFO = {
    attribute: 13,
    title: "Численные методы",
    description: "Численные методы изучают алгоритмы, которые позволяют находить приближённые, но достаточно точные решения широкого спектра сложных задач. Например: решение систем линейных и нелинейных уравнений, численное решение дифференциальные и интегральные уравнения, интерполирование и приближённое вычисление функций, решения задач численной линейной алгебры и т.д.",
    resources: ["..", "..", ".."]
}

const COMPUTATIONAL_GEOMETRY_INFO = {
    attribute: 14,
    title: "Вычислительная геометрия",
    description: "Вычислительная геометрия изучает алгоритмы для решения геометрических задач. В ней рассматриваются такие задачи как триангуляция, построение выпуклой оболочки, определение принадлежности одного объекта другому, поиск их пересечения и т. п. Она оперируют с такими геометрическими объектами как: точка, отрезок, многоугольник, окружность и т. д.",
    resources: ["..", "..", ".."]
}

const OPTIMIZATION_METHODS_INFO = {
    attribute: 15,
    title: "Методы оптимизаций",
    description: "Вычисления на графических процессорах - методика использование графического процессора видеокарты для математических вычислений",
    resources: ["..", "..", ".."]
}

const DATA_ANALYSIS_INFO = {
    attribute: 16,
    title: "Статистический анализ данных",
    description: "В основном для компьютерного зрения",
    resources: ["..", "..", ".."]
}

const TOMOGRAPHIC_CG_INFO = {
    attribute: 17,
    title: "Обработка и визуализация томмографических данных",
    description: "...",
    resources: ["..", "..", ".."]
}

const PHOTOGRAMMETRY_INFO = {
    attribute: 18,
    title: "Фотограмметрия",
    description: "Методика сканирования объектов, который использует фотокамеры или их комбинации для точного измерения формы, размера и положения объектов в пространстве",
    resources: ["..", "..", ".."]
}

const CAD_INFO = {
    attribute: 19,
    title: "Системы автоматизированного проектирования",
    description: "...",
    resources: ["..", "..", ".."]
}

const subjectsArray = new Map();
subjectsArray.set(NULL_INFO.attribute, NULL_INFO);
subjectsArray.set(MATH_ANALYSIS_INFO.attribute, MATH_ANALYSIS_INFO);
subjectsArray.set(ALGEBRA_INFO.attribute, ALGEBRA_INFO);
subjectsArray.set(ANALYTICAL_GEOMETRY_INFO.attribute, ANALYTICAL_GEOMETRY_INFO);
subjectsArray.set(DISCRETE_MATH_INFO.attribute, DISCRETE_MATH_INFO);
subjectsArray.set(STATISTICS_AND_PROBABILITY_INFO.attribute, STATISTICS_AND_PROBABILITY_INFO);
subjectsArray.set(PROGRAMMING_LANGUAGE_INFO.attribute, PROGRAMMING_LANGUAGE_INFO);
subjectsArray.set(ALGORITHMS_AND_DATA_STRUCT_INFO.attribute, ALGORITHMS_AND_DATA_STRUCT_INFO);
subjectsArray.set(DIP_INFO.attribute, DIP_INFO);
subjectsArray.set(MATH_CG_INFO.attribute, MATH_CG_INFO);
subjectsArray.set(GRAPHICS_LIB_INFO.attribute, GRAPHICS_LIB_INFO);
subjectsArray.set(GAME_ENGINE_INFO.attribute, GAME_ENGINE_INFO);
subjectsArray.set(GPGPU_INFO.attribute, GPGPU_INFO);
subjectsArray.set(NUMERICAL_METHODS_INFO.attribute, NUMERICAL_METHODS_INFO);
subjectsArray.set(COMPUTATIONAL_GEOMETRY_INFO.attribute, COMPUTATIONAL_GEOMETRY_INFO);
subjectsArray.set(OPTIMIZATION_METHODS_INFO.attribute, OPTIMIZATION_METHODS_INFO);
subjectsArray.set(DATA_ANALYSIS_INFO.attribute, DATA_ANALYSIS_INFO);
subjectsArray.set(TOMOGRAPHIC_CG_INFO.attribute, TOMOGRAPHIC_CG_INFO);
subjectsArray.set(PHOTOGRAMMETRY_INFO.attribute, PHOTOGRAMMETRY_INFO);
subjectsArray.set(CAD_INFO.attribute, CAD_INFO);