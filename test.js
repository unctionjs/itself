/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import isType from "./source"

test(({same, end}) => {
  same(
    itself("a"),
    "a"
  )

  end()
})

test(({same, end}) => {
  same(
    itself(true),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    itself(null),
    null
  )

  end()
})
