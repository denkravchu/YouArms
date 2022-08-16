import './index.css'

import { loop } from './loop'
import { useTransform } from './transform'

(function() {
    const armLeft = document.querySelector('#armLeft')
    const armRight = document.querySelector('#armRight')

    loop(() => {
        useTransform(armLeft, -3)
        useTransform(armRight, 3)
    })
}())
