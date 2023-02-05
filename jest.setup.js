import '@testing-library/jest-dom/extend-expect'

import { installGlobals } from '@remix-run/node'
import { configure } from '@testing-library/react'

configure({ testIdAttribute: 'data-test' })

installGlobals()
