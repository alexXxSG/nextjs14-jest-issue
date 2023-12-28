/**
 * @jest-environment jest-environment-node
 */

import { GET } from "../app/api/me/route"

describe("/api/me", () => {
  it("returns message", async () => {
    const expected = { message: "It's me, Mario" }

    const response = await GET()
    const data = await response.json()

    expect(data).toEqual(expected)
  })
})
