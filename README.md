# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- ============================================== -->

1—— Створення проєкту :
-Створити порожній репозиторій (проєкт) на GitHub.
-Клонувати цей репозиторій на свій комп'ютер.

- npm create vite@latest

2—— Використовуйте клавіші вгору/вниз для навігації по опціям, та Enter для підтвердження вибору.  
React - JS+SWC

3—— На запитання, як назвати проєкт, вводимо крапку і натискаєм Enter. Це означає, що ми хочемо створити проєкт у поточній папці.

4—— Встановіть залежності проєкту командою npm install

5—— .prettierrc.json
{
"printWidth": 80,
"tabWidth": 2,
"useTabs": false,
"semi": true,
"singleQuote": true,
"trailingComma": "all",
"bracketSpacing": true,
"bracketSameLine": false,
"arrowParens": "always",
"proseWrap": "preserve",
"endOfLine": "lf"
}

6—— eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": 0,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];

7—— vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  }
});

8—— npm install modern-normalize

9—— npm install clsx

<!-- ============================== -->

Двари варианта записи

const updateFeedback = (feedbackType) => {
// if (feedbackType === 'good') {
// setClicks((prev) => ({ ...prev, good: prev.good + 1 }));
// }
// if (feedbackType === 'neutral') {
// setClicks((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
// }
// if (feedbackType === 'bad') {
// setClicks((prev) => ({ ...prev, bad: prev.bad + 1 }));
// }

    setClicks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));

};

<!-- ============================== -->

Два варианта записи один просто а другой с помощю map

export default function Feedback({
clicks,
totalFeedback,
positiveFeedback,
btnOptions,
}) {
return (

<section className={s.feedback_section}>
<Container className={s.feedback_container}>
<ul className={s.feedback_list}>
{btnOptions.map((feedbackType) => (
<li key={feedbackType}>
<p>
{feedbackType}: {clicks[feedbackType]}
</p>
</li>
))}

          <li>
            <p>Total:{totalFeedback}</p>
          </li>
          <li>
            <p>Positive:{positiveFeedback}%</p>
          </li>
        </ul>
      </Container>
    </section>

);
}

// export default function Feedback({ clicks, totalFeedback, positiveFeedback }) {
// return (
// <section className={s.feedback_section}>
// <Container className={s.feedback_container}>
// <ul className={s.feedback_list}>
// <li>
// <p>Good:{clicks.good}</p>
// </li>
// <li>
// <p>Neutral:{clicks.neutral}</p>
// </li>
// <li>
// <p>Bad:{clicks.bad}</p>
// </li>
// <li>
// <p>Total:{totalFeedback}</p>
// </li>
// <li>
// <p>Positive:{positiveFeedback}%</p>
// </li>
// </ul>
// </Container>
// </section>
// );
// }

<!-- ============================== -->

Два варианта записи один просто а другой с помощю map

export default function Options({
updateFeedback,
resetFeedback,
showResetButton,
btnOptions,
}) {
return (

<section className={s.options_section}>
<Container className={s.options_container}>
<ul className={s.options_list_btn}>
{btnOptions.map((feedbackType) => (
<li key={feedbackType}>
<button onClick={() => updateFeedback(feedbackType)}>
{feedbackType}
</button>
</li>
))}

          {showResetButton && (
            <li>
              <button className={s.options_btn_reset} onClick={resetFeedback}>
                Reset
              </button>
            </li>
          )}
        </ul>
      </Container>
    </section>

);
}

// export default function Options({
// updateFeedback,
// resetFeedback,
// showResetButton,
// }) {
// return (
// <section className={s.options_section}>
// <Container className={s.options_container}>
// <ul className={s.options_list_btn}>
// <li>
// <button onClick={() => updateFeedback('good')}>Good</button>
// </li>
// <li>
// <button onClick={() => updateFeedback('neutral')}>Neutral</button>
// </li>
// <li>
// <button onClick={() => updateFeedback('bad')}>Bad</button>
// </li>

// {showResetButton && (
// <li>
// <button className={s.options_btn_reset} onClick={resetFeedback}>
// Reset
// </button>
// </li>
// )}
// </ul>
// </Container>
// </section>
// );
// }

<!-- ============================== -->

Разные варианты записи вторая более маштабированная

// const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

const totalFeedback = Object.values(clicks).reduce(
(sum, value) => sum + value,
0,
);

  <!-- ============================== -->

Разные варианты записи вторая более маштабированная

// const resetFeedback = () => {
// setClicks({ good: 0, neutral: 0, bad: 0 });
// };

const resetFeedback = () => {
setClicks(
Object.keys(clicks).reduce((acc, key) => ({ ...acc, [key]: 0 }), {}),
);
};

  <!-- ==============localStorage ================ -->

Когда данные извлекаются из localStorage с помощью JSON.parse(localStorage.getItem('saved-clicks')), они могут:

Отсутствовать (если в localStorage ничего не сохранено для ключа saved-clicks).
Быть поврежденными (например, если вместо корректного JSON была записана строка или что-то другое).
Иметь неправильный формат (например, массив вместо ожидаемого объекта).
Чтобы избежать ошибок и некорректного поведения в приложении, мы проверяем извлеченные данные перед использованием. Если данные не проходят проверку, устанавливается объект по умолчанию.

    const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));

    return savedClicks &&
      typeof savedClicks === 'object' &&
      !Array.isArray(savedClicks)
      ? savedClicks
      : {
          good: 0,
          neutral: 0,
          bad: 0,
          macOS: 0,
          windows: 0,
          linux: 0,
        };

});

1. savedClicks &&
   Проверка: существует ли savedClicks (не null, не undefined, не false).
   Если savedClicks равно null или undefined, всё выражение сразу возвращает объект по умолчанию (блок после :).
2. typeof savedClicks === 'object'
   Проверка: является ли savedClicks объектом.
   В JavaScript массивы, функции, объекты и null имеют тип 'object', поэтому требуется дополнительная проверка.
3. !Array.isArray(savedClicks)
   Проверка: не является ли savedClicks массивом.
   Array.isArray() возвращает true, если аргумент — массив, и false для любых других типов данных.
   Итог проверки:
   Все три условия должны быть истинными:

savedClicks должно существовать.
savedClicks должен быть объектом.
savedClicks не должен быть массивом.

  <!-- ===========localStorage  еще 2 варианта записи =================== -->

// const [clicks, setClicks] = useState(
// () =>
// JSON.parse(localStorage.getItem('saved-clicks')) ?? {
// good: 0,
// neutral: 0,
// bad: 0,
// macOS: 0,
// windows: 0,
// linux: 0,
// },
// );

  <!-- ================== -->

// const [clicks, setClicks] = useState(() => {
// const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));
// if (savedClicks?.length) {
// return savedClicks;
// }
// });

<!-- ======================localStorage  со всеми проверками и изменениям localStorage если ключь удален из кода ================================================= -->

const [clicks, setClicks] = useState(() => {
const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));

    const defaultClicks = {
      good: 0,
      neutral: 0,
      bad: 0,
      // www: 0,
      // rrrr: 0,
    };

    // Проверяем, что savedClicks - объект и не является массивом
    if (
      savedClicks &&
      typeof savedClicks === 'object' &&
      !Array.isArray(savedClicks)
    ) {
      // Фильтруем только те ключи, которые есть в defaultClicks
      return Object.keys(defaultClicks).reduce((acc, key) => {
        acc[key] = savedClicks[key] ?? defaultClicks[key]; // Используем ?? для корректной работы с 0
        return acc;
      }, {});
    }

    // Если savedClicks некорректен, возвращаем defaultClicks
    return { ...defaultClicks };

});

1. Общий контекст
   useState используется для создания состояния clicks и функции для его обновления setClicks.
   В данном случае, состояние отвечает за подсчет кликов (good, neutral, bad).
   Состояние инициализируется с помощью функции, переданной как аргумент.
2. Ленивая инициализация (() => { ... })
   В useState передается функция:
   javascript
   Копировать
   Редактировать
   () => {
   // Логика инициализации состояния
   }
   Это называется ленивая инициализация состояния. Она используется, чтобы сложные вычисления выполнялись только один раз, при первом рендере компонента. После этого состояние сохраняется и при дальнейших рендерах логика не запускается заново.
3. Чтение сохраненных данных
   javascript
   Копировать
   Редактировать
   const savedClicks = JSON.parse(localStorage.getItem('saved-clicks'));
   Из localStorage пытаются получить данные с ключом 'saved-clicks'.
   Эти данные парсятся из строки в объект с помощью JSON.parse.
   Если в localStorage ничего не сохранено, savedClicks будет null.
4. Создание объекта по умолчанию
   javascript
   Копировать
   Редактировать
   const defaultClicks = {
   good: 0,
   neutral: 0,
   bad: 0,
   };
   defaultClicks определяет объект с начальными значениями состояния.
   Если данные из localStorage отсутствуют или некорректны, эти значения используются как базовые.
5. Проверка корректности данных
   javascript
   Копировать
   Редактировать
   if (
   savedClicks &&
   typeof savedClicks === 'object' &&
   !Array.isArray(savedClicks)
   ) {
   Здесь проверяется, что:
   savedClicks не null или undefined.
   savedClicks — это объект (а не строка, число и т. д.).
   savedClicks не является массивом (массивы в JavaScript тоже считаются объектами, поэтому это отдельно проверяется).
6. Фильтрация данных
   Если данные из localStorage валидны, их фильтруют:

javascript
Копировать
Редактировать
return Object.keys(defaultClicks).reduce((acc, key) => {
acc[key] = savedClicks[key] ?? defaultClicks[key];
return acc;
}, {});
Разберем по шагам:
Итерация по ключам defaultClicks:

Object.keys(defaultClicks) возвращает массив ключей: ['good', 'neutral', 'bad'].
Сбор значений в новый объект:

Используется метод .reduce, чтобы создать объект, в который добавляются только те ключи, которые есть в defaultClicks.
Проверка наличия ключей в savedClicks:

savedClicks[key] ?? defaultClicks[key] означает:
Если savedClicks[key] определено (включая значение 0), оно берется.
Если savedClicks[key] отсутствует (undefined или null), используется значение из defaultClicks.
Итог:

Если в сохраненных данных отсутствуют какие-либо ключи, они получают значения по умолчанию из defaultClicks. 7. Возврат данных
Если данные из localStorage некорректны или их нет, возвращается копия объекта defaultClicks:

javascript
Копировать
Редактировать
return { ...defaultClicks };
Пример работы
localStorage содержит: {"good": 5, "neutral": 2}
После фильтрации: { good: 5, neutral: 2, bad: 0 }.
localStorage содержит некорректные данные: "not-an-object".
Возвращается: { good: 0, neutral: 0, bad: 0 }.
localStorage отсутствует:
Возвращается: { good: 0, neutral: 0, bad: 0 }.
Зачем это нужно?
Сохранение данных между сеансами:
Позволяет загружать состояние из localStorage при повторном открытии приложения.
Гибкость и защита:
Гарантирует корректность данных (защищает от поврежденного или отсутствующего объекта).
Производительность:
Ленивая инициализация экономит ресурсы, выполняясь только при первом рендере.

<!-- ================localStorage useEffect= два варианта с проверкой и без======================== -->

// useEffect(() => {
// window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
// }, [clicks]);

// --------------

useEffect(() => {
if (
typeof clicks !== 'object' ||
Array.isArray(clicks) ||
clicks === null
) {
return;
}

    const allowedKeys = btnOptions;
    const isValidKeys = Object.keys(clicks).every((key) =>
      allowedKeys.includes(key),
    );
    if (!isValidKeys) {
      console.error('Object contains invalid keys:', clicks);
      return;
    }

    const areValuesValid = Object.values(clicks).every(
      (value) => typeof value === 'number' && value >= 0,
    );
    if (!areValuesValid) {
      return;
    }

    try {
      const previousClicks = JSON.parse(
        window.localStorage.getItem('saved-clicks'),
      );
      if (JSON.stringify(previousClicks) !== JSON.stringify(clicks)) {
        window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
      }
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }

}, [clicks, btnOptions]);
