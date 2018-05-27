/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import itself from "./index"

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
