'use strict'

import Title from './app'
import React from 'react'
import { render as reactDomRender } from './react-dom'

reactDomRender(
	<Title />,
	document.querySelector('[data-js="app"]')
)

