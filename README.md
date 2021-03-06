# Rambler UI

> Общие React компоненты для проектов вертикалей Рамблера.

## Установка

```sh
npm install --save rambler-ui
```

## Использование

```js
// src/index.js
import React from 'react'
import { render } from 'react-dom'
import { ApplyTheme } from 'rambler-ui/theme'
import App from './App'

const app = (
  <ApplyTheme>
    <App />
  </ApplyTheme>
)

render(app, document.getElementById('app'))

// src/App.js
import React from 'react'
import Button from 'rambler-ui/Button'

export default () => (
  <div>
    <Button buttonType="button">
      Кнопка
    </Button>
  </div>
)
```

Более подробно про установку и использование можно прочитать в [документации](https://ui-kit.rambler.ru/#/install) и в описании [API компонентов](https://ui-kit.rambler.ru/#/components/Avatar).

## [Разработка](https://ui-kit.rambler.ru/#/contribute)

## Лицензия

MIT
