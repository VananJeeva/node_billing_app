import React from "react"
import { render } from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import {
    CardTitle,
    CardSubtitle,
    h2,
    h1
} from "reactstrap"

import { App } from "./App"

render(<App />, document.getElementById("app"))