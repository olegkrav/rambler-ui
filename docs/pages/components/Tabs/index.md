import Playground from 'docs/components/Playground'
import PropTypesTable from 'docs/components/PropTypesTable'
import examples from '!!raw-loader!./examples'
import examplesRouter from '!!raw-loader!./examples-react-router'
import codeTabs from '!!raw-loader!rambler-ui/Tabs/Tabs'
import codeTabsItem from '!!raw-loader!rambler-ui/Tabs/TabsItem'

# Tabs

### Пример
<Playground code={examples} />

### Пример использования с `react-router`
<Playground code={examplesRouter} canEdit={false} showPreview={false} />

### Свойства `<Tabs />`
<PropTypesTable code={codeTabs} />

### Свойства `<TabsItem />`
<PropTypesTable code={codeTabsItem} />
