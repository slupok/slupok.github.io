const NULL_INFO = {
    attribute: 0,
    title: "null",
    description: "null",
    resources: ["null", "null"]
}

const MATH_ANALYSIS_INFO = {
    attribute: 1,
    title: "Математический анализ",
    description: "Математический анализ обобщает математические операции и концепции, которые применимы в компьютерной графике. Он охватывает такие аспекты, как переходы между системами координат, параметрические модели, объекты вращения и т.п. Все эти элементы могут быть описаны и преобразованы с помощью математических функций и уравнений.",
    resources: ['[easy] <a href="https://www.youtube.com/playlist?list=PLVjLpKXnAGLVbrcJdDb0a2RS6MmRCgxJz">Суть математического анадиза</a>. Интерактивное введение',
                '[easy] <a href="http://mathprofi.ru/predely_primery_reshenii.html">Теория пределов</a>. Теория пределов от mathprofi',
                '[easy] <a href="http://mathprofi.ru/kak_naiti_proizvodnuju.html">Производные</a>. Производные от mathprofi',
                '[easy] <a href="http://mathprofi.ru/grafiki_i_svoistva_funkcij.html">Графики и функции</a>. Графики и функции от mathprofi',
                '[easy] <a href="http://mathprofi.ru/funkcija_dvuh_peremennyh_oblast_opredelenija_linii_urovnja.html">Функции нескольких переменных</a>. Функции нескольких переменных от mathprofi',
                '[easy] <a href="http://mathprofi.ru/integraly_primery_reshenij.html">Интеграллы</a>. Интеграллы от mathprofi',
                '[easy] <a href="http://mathprofi.ru/ryady_dlya_chajnikov.html">Числовые ряды</a>. Числовые ряды от mathprofi',
                '[medium] Фихтенгольц Г.М. "Основы математического анализа (Часть 1-2)". Классический университетский учебник, ',
                '[medium] Ильин В.А. "Основы математического анализа (Часть 1-2)". Классический университетский учебник',
                '[medium] Ильин В. А., Садовничий В. А. "Математический анализ. Начальный курс". Классический университетский учебник',
                '[easy] Бохан К. А. "Курс математического анализа (Том 1-2)". Учебник для студентов педагогических вузов, простое изложение материала',
                '[medium] Демидович Б. П., Садовничий В. А. "Легендарный сборник задач и упражнений по математическому анализу". Сборник с задачами по математическому анализу'
            ]
}

const ALGEBRA_INFO = {
    attribute: 2,
    title: "Линейная алгебра",
    description: "Дает фундаментальные знания работы с векторами, матрицами и пространствами. Которые представляют собой инструменты работы с геометрическими объектами",
    resources: ['[easy] <a href="https://www.youtube.com/playlist?list=PLVjLpKXnAGLXPaS7FRBjd5yZeXwJxZil2">Сущность Линейной Алгебры</a>. Интерактивное введение',
                '[easy] <a href="https://habr.com/ru/articles/131931/">Линейная алгебра для разработчиков игр</a>. Базовые концепции линейной алгебры',
                '[easy] <a href="http://mathprofi.ru/mnozhestva.html">Алгебра</a>. Линейная алгебра от mathprofi',
                '[medium] Ильин В.А. Позняк Э.Г. "Линейная алгебра". Классический университетский учебник'
            ]
}

const ANALYTICAL_GEOMETRY_INFO = {
    attribute: 3,
    title: "Аналитическая геометрия",
    description: "Геометрия является областью изучающая пространственные фигуры. Компьютерная графика повсеместно состоит из геометрических фигур",
    resources: ['[easy] <a href="http://mathprofi.ru/vektory_dlya_chainikov.html">Аналитическая геометрия</a>. Аналитическая геометрия от mathprofi',
                '[medium] Ильин В.А. Позняк Э.Г. "Аналитическая геометрия". Классический университетский учебник'
            ]
}

const DISCRETE_MATH_INFO = {
    attribute: 4,
    title: "Дискретная математика",
    description: "Дает теоретические основы для работы с разными структурами данных. Логика, графы, деревья, множества, отношения и т.д. - все это важные элементы прикладной математики в целом",
    resources: ['[medium] Новиков Ф.А. "Дискретная математика для программистов"']
}

const STATISTICS_AND_PROBABILITY_INFO = {
    attribute: 5,
    title: "Теория вероятностей и математическая статистика",
    description: "Компьютерная графика активно использует вероятностные и статистические методы, например, для симуляции отражения и преломления света, моделирования физических процессов, обработки изображений и задач компьютерного зрения",
    resources: ['[easy] <a href="http://mathprofi.ru/teorija_verojatnostei.html">Теория вероятностей</a>. Теория вероятностей от mathprofi',
                '[easy] <a href="https://stepik.org/course/3089/promo">Основы теории вероятностей</a>. Курс по основам теории вероятностей на stepik',
                '[easy] <a href="https://stepik.org/course/57281/promo">Основы теории вероятностей 2</a>. Продолжение курса по основам теории вероятностей на stepik',
                '[easy] <a href="http://mathprofi.ru/matematicheskaya_statistika.html">Математическая статистика</a>. Математическая статистика от mathprofi',
                '[easy] <a href="https://stepik.org/course/76/promo">Основы статистики</a>. Курс по основам статистики на stepik',
                '[easy] Гмурман В. Е. "Теория вероятностей и математическая статистика". Легендарный университетский учебник',
                '[easy] Гмурман В. Е. "Руководство к решению задач по теории вероятностей и математической статистике". Решебник' 
            ]
}

const PROGRAMMING_LANGUAGE_INFO = {
    attribute: 6,
    title: "Языки программирования",
    description: "Первым делом, язык программирования - это инструмент, инструмент для общения с компьютером. Важно еще понимать, что не существует универсального ЯП, каждый ЯП решает определенный задачи",
    resources: ['[easy] <a href="https://education.yandex.ru/handbook/cpp">Основы C++</a>. Яндекс хендбук',
                '[medium] <a href="https://habr.com/ru/articles/599801/">Просто о шаблонах С++</a>. Введение в метапрограммирование на C++',
                '[medium] <a href="https://www.youtube.com/playlist?list=PLmGioT8z4uobADCfbspDyzZtshzFFCRyj">Лекции C++</a>. Продвинутые лекции по современным стандартам C++',
                '[easy] <a href="https://education.yandex.ru/handbook/python">Основы python</a>. Яндекс хендбук',
                '[easy] <a href="https://senjun.ru/courses/python/">Курс python</a>. Opensource курс по python',
                '[medium] Андрей Александреску "Современное проектирование на С++". Хорошее книга по метапрограммированию']
}

const ALGORITHMS_AND_DATA_STRUCT_INFO = {
    attribute: 7,
    title: "Алгоритмы и структуры данных",
    description: "Алгоритм — это последовательность шагов, необходимых для решения задачи. Они являются основой любого программного обеспечения и могут быть описаны с помощью ЯП. \n Структуры данных — это способ хранения и организации данных, облегчающий доступ, добавление, удаление и изменение данных. Они используются для оптимизации производительности программы и сокращения количества используемой памяти",
    resources: ['[easy] <a href="https://education.yandex.ru/handbook/algorithms">Основы алгоритмов</a>. Яндекс хендбук',
                '[hard] Дональд Кнут "Искусство программирования (Том 1-4)". Легендарный четырехтомник, который не так просто осилить',
                '[medium] Кормен Т. "Алгоритмы. Построение и анализ". Классическая книга',
                '[medium] Никлаус Вирт. "Алгоритмы и структуры данных". Классическая книга'
            ]
}

const DIP_INFO = {
    attribute: 8,
    title: "Основы цифровой обработки изображений",
    description: "Изучает алгоритмы и методы обработки цифровых изображений. Чаще всего цифровая обработка изображений (ЦОИ) сводится к цифровой фильтрации изображения: устранение шумов, сглаживание, повышение резкости и т.д. ЦОИ - это очень большой раздел математики",
    resources: ['<a href="https://www.youtube.com/playlist?list=PLlb7e2G7aSpR6L3pqVh8124ZITsmWckQZ">Анализ изображений и видео, часть 1</a>. Хороший курс, местами упоминаются термины анализа данных',
                '<a href="https://www.youtube.com/playlist?list=PLlb7e2G7aSpQdGYOtlbo1_2yDcewW3G0m">Анализ изображений и видео, часть 2</a>. Хороший курс, местами упоминаются термины анализа данных',
                '[en] <a href="https://www.youtube.com/@firstprinciplesofcomputerv3258">First Principles of Computer Vision</a>. Youtube-канал с описанием основных алгоритмов ЦОИ и компьютерного зрения',
                'Гонсалес Р. "Цифровая обработка изображений". Одн из фундаментальных книг, охватывающая все аспекты ЦОИ'
                ]
}

const MATH_CG_INFO = {
    attribute: 9,
    title: "Математические основы компьютерной графики",
    description: "Компьютерная графика (КГ) - Раздел математики изучающий совокупность методов и приемов для преобразования данных в графическое представление. Машинная графика представляет собой симбиоз линейной алгебры и аналитической геометрии",
    resources: ['[en/ru] <a href="https://github.com/ssloy/tinyrenderer/wiki/Lesson-0:-getting-started">Render tutorial</a>. Создание упрощенной графической библиотеки на подобии OpenGL',
                '[en/ru] <a href="https://github.com/ssloy/tinyraycaster/wiki/Part-0:-getting-started">Ray cast tutorial</a>. Создание клона игры Wolfenstein 3D без использования графических библиотек',
                '[en/ru] <a href="https://github.com/ssloy/tinyraytracer/wiki/Part-1:-understandable-raytracing">Ray trace tutorial</a>. Написание трассировщика лучей на C++',
                '[en/ru] <a href="https://github.com/ssloy/tinykaboom/wiki/KABOOM!-in-180-lines-of-code">Ray trace KABOOM tutorial</a>. Рендер взрыва трассировкой лучей на C++',
                '[en] <a href="https://pbr-book.org/">Physically Based Rendering: From Theory To Implementation</a>. Онлайн-книга с теорией и реализацией физически корректного рендеринга',
                '[en] <a href="https://www.scratchapixel.com/index.html">Scratchapixel</a>. Сборник обучающих материалов программированию компьютерной графики',
                '[en] Eric Lengyel "Mathematics for 3D Game Programming and Computer Graphics". Одна из фундаментальных книг по КГ, описывающая академическим языком аспекты математических основ КГ'
        ]
}

const GRAPHICS_LIB_INFO = {
    attribute: 10,
    title: "Графические библиотеки",
    description: "Графическая библиотека - это программная библиотека, предназначенная для рендеринга компьютерной графики. Как правило, она предоставляет оптимизированные версии функций, которые выполняют распространённые задачи рендеринга (отрисовка треугольников, растеризация и т.д.\n Основные технологии: OpenGL, Vulkan, Metal, DirectX3D",
    resources: ['[en] <a href="https://vulkan-tutorial.com/">Vulkan tutorial</a>. Официальный обучающий материал по Vulkan',
                '[en] <a href="https://thebookofshaders.com/">The book of shaders</a>. Руководство по написанию шейдеров',
                '[en] <a href="https://developer.apple.com/metal/sample-code/">Metal Sample Code</a>. Официальное руководство с примерами Metal',
                '[en] <a href="https://www.3dgep.com/learning-directx-12-1/">DirectX tutorial</a>. Серия уровков по DorectX',
                '[en] <a href="https://github.com/microsoft/DirectX-Graphics-Samples">DirectX Graphics Samples</a>. Официальные примеры кода DirectX',
                '[en] <a href="https://learnopengl.com/Introduction">Lern OpenGL</a>. Обучающий материал по OpenGL',
                '[en/ru] Джейсон Грегори "Игровой движок. Программирование и внутреннее устройство". Бестселлер, лучшая книга про проектирование игровых движков. Говорят, в рускоязычном издании иллюстрации черно-белые'
            ]
}

const GAME_ENGINE_INFO = {
    attribute: 11,
    title: "Игровые движки",
    description: "Игровой движок - это фреймворк, предназначенный в первую очередь для разработки видеоигр и обычно включающий соответствующие библиотеки и вспомогательные программы.\n Рекомендация по обучению: в изучении игровых движков гораздо большое влияние имеет практика, чем теория",
    resources: ['[en/ru] <a href="https://learn.unity.com/tutorials">Unity Lern</a>. Официальные обучающие материалы по Unity с разными уровнями сложности',
                '[en] <a href="https://dev.epicgames.com/community/unreal-engine/learning">Learn Unreal Engine</a>. Библиотека обучающих материалов по Unreal Engine',
                '[en/ru] Джейсон Грегори "Игровой движок. Программирование и внутреннее устройство". Бестселлер, лучшая книга про проектирование игровых движков. Говорят, в рускоязычном издании иллюстрации черно-белые'
            ]
}

const GPGPU_INFO = {
    attribute: 12,
    title: "Вычисления на видеокартах (GPGPU)",
    description: "Вычисления на графических процессорах - методика использование графического процессора видеокарты для математических вычислений.\n В основном выделяют технологии: CUDA (NVidia devices), OpenCL (most devices), Metal (Apple devices), ROCm (AMD devices)",
    resources: ['[ru] <a href="https://www.youtube.com/playlist?list=PLlb7e2G7aSpSptbl_yI5uvMlpRc1mwsCL">Вычисления на видеокартах</a>. Курс, в котором рассказываются общие концепции GPGPU без привязки к какой-то конкретной технологии',
                '[ru] <a href="https://github.com/GPGPUCourse/GPGPUSpeedupGuidelines?tab=readme-ov-file">Профилирование и ускорение GPGPU</a>. Короткий курс из двух лекции по ускорению работы GPGPU',
                '[en] <a href="https://developer.apple.com/metal/sample-code/">Metal Sample Code</a>. Официальное руководство с примерами Metal'
            ]
}

const NUMERICAL_METHODS_INFO = {
    attribute: 13,
    title: "Численные методы",
    description: "Численные методы изучают алгоритмы, которые позволяют находить приближённые, но достаточно точные решения широкого спектра сложных задач. Например: решение систем линейных и нелинейных уравнений, численное решение дифференциальные и интегральные уравнения, интерполирование и приближённое вычисление функций, решения задач численной линейной алгебры и т.д.",
    resources: ['Бахвалов Н.С., Жидков Н.П., Кобельков Г.М. "Численные методы". Классический университетский учебник',
                '[ru] <a href="https://teach-in.ru/course/numerical-methods-part-1">Численные методы. Часть 1</a>. Лекции МехМата МГУ. Лектор также соавтор популярной одноименной книги',
                '[ru] <a href="https://teach-in.ru/course/numerical-methods-part-2">Численные методы. Часть 2</a>. Лекции МехМата МГУ. Лектор также соавтор популярной одноименной книги',
                '[ru] <a href="https://teach-in.ru/course/numerical-methods-part-1-seminars-kobelkov">Численные методы. Семинары. Часть 1</a>. Семинары МехМата МГУ. Лектор также соавтор популярной одноименной книги',
                '[ru] <a href="https://teach-in.ru/course/numerical-methods-part-2-seminars-kobelkov">Численные методы. Семинары. Часть 2</a>. Семинары МехМата МГУ. Лектор также соавтор популярной одноименной книги',
        ]
}

const COMPUTATIONAL_GEOMETRY_INFO = {
    attribute: 14,
    title: "Вычислительная геометрия",
    description: "Вычислительная геометрия изучает алгоритмы для решения геометрических задач. В ней рассматриваются такие задачи как триангуляция, построение выпуклой оболочки, определение принадлежности одного объекта другому, поиск их пересечения и т. п. Она оперируют с такими геометрическими объектами как: точка, отрезок, многоугольник, окружность и т. д.",
    resources: ['Фокс А., Пратт М. "Вычислительная геометрия. Применение в проектировании и на производстве"',
                "..",
                ".."]
}

const OPTIMIZATION_METHODS_INFO = {
    attribute: 15,
    title: "Методы оптимизаций",
    description: "Оптимизация в математике — задача нахождения экстремума (минимума или максимума) целевой функции в некоторой области конечномерного векторного пространства. Методы оптимизаций играют вазжейшую роль в машинном обучении, именно на этих методах основаны все алгоритмы обучения",
    resources: ["..", "..", ".."]
}

const DATA_ANALYSIS_INFO = {
    attribute: 16,
    title: "Статистический анализ данных",
    description: "Скоро будет описание...",
    resources: ["..", "..", ".."]
}

const TOMOGRAPHIC_CG_INFO = {
    attribute: 17,
    title: "Обработка и визуализация томмографических данных",
    description: "Скоро будет описание...",
    resources: ['[en] <a href="https://www.imaios.com/en/e-mri">Курсы по основам МРТ</a>. Курс ориентирован больше на медицинские аспекты, чем математические.',
                'Наттерер Ф. "Математические аспекты компьютерной томографии".',
                'Аганов А.В. "Введение в магнитно-резонансную томографию". Учебно-методическое пособие'
            ]
}

const PHOTOGRAMMETRY_INFO = {
    attribute: 18,
    title: "Фотограмметрия",
    description: "Методика сканирования объектов, который использует фотокамеры или их комбинации для точного измерения формы, размера и положения объектов в пространстве",
    resources: ['[ru] <a href="https://www.youtube.com/watch?v=dowgzvj9M6I&list=PL5p-5hHpsHBrtQQptYgT3kdt3Egb5QNci">Видео-курс по фотограмметрии</a>']
}

const CAD_INFO = {
    attribute: 19,
    title: "Системы автоматизированного проектирования",
    description: "Скоро будет описание...",
    resources: ["..", "..", ".."]
}

const FUNC_ANALYSIS_INFO = {
    attribute: 20,
    title: "Функциональный анализ",
    description: "Скоро будет описание...",
    resources: ['А.Н. Колмогоров, С.В. Фомин. "Элементы теории функций и функционального анализа". Университетский учебник',
                'Люстерник Л.А., Соболев В.И. "Элементы функционального анализа". Университетский учебник'
            ]
}

const COMPLEX_ANALYSIS_INFO = {
    attribute: 21,
    title: "Комплексный анализ",
    description: "Скоро будет описание...",
    resources: ["..", "..", ".."]
}

const MATH_PHYS_INFO = {
    attribute: 22,
    title: "Уравнения математической физики",
    description: "Скоро будет описание...",
    resources: ["..", "..", ".."]
}

const DIFF_INFO = {
    attribute: 23,
    title: "Дифференциальные уравнения",
    description: "Скоро будет описание...",
    resources: ['Петровский И. Г. "Лекции по теории обыкновенных дифференциальных уравнений". Университетский учебник'
            ]
}

const TOPOLOGICAL_ANALYSIS_INFO = {
    attribute: 24,
    title: "Топологический анализ",
    description: "Скоро будет описание...",
    resources: ['[ru] <a href="https://www.youtube.com/playlist?list=PLKXEsFnBcT5BD47xO19UsKshsQ7DMU3Sa">Что такое топологический анализ данных</a>']
}

const PBR_INFO = {
    attribute: 25,
    title: "Физически корректный рендеринг",
    description: "Physically based rendering (PBR) - это метод компьютерной графики, который позволяет рендерить фотореалистичные изображения.",
    resources: ['[en] <a href="https://pbr-book.org/">Physically Based Rendering: From Theory To Implementation</a> Основная книга по PBR',
                '[en] Julian Fong, Magnus Wrenninge, Christopher Kulla and Ralf Habel "Production volume rendering: SIGGRAPH 2017 course". Большая статья, описывающая техники современного объемного рендеринге в кинопроизводстве'
            ]
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

subjectsArray.set(FUNC_ANALYSIS_INFO.attribute, FUNC_ANALYSIS_INFO);
subjectsArray.set(COMPLEX_ANALYSIS_INFO.attribute, COMPLEX_ANALYSIS_INFO);
subjectsArray.set(MATH_PHYS_INFO.attribute, MATH_PHYS_INFO);
subjectsArray.set(DIFF_INFO.attribute, DIFF_INFO);
subjectsArray.set(TOPOLOGICAL_ANALYSIS_INFO.attribute, TOPOLOGICAL_ANALYSIS_INFO);

subjectsArray.set(PBR_INFO.attribute, PBR_INFO);