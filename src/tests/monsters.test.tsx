import { describe, expect, it } from "vitest";
import { Monsters } from '../components/monsters/monsters'
import { render } from "@testing-library/react";

describe("monsters Component", () => {
  const body = document.body;
  const monstersProps = [
    { id: 1, name: "Monster 1", email: "monster1@mail.com" },
    { id: 2, name: "Monster 2", email: "monster2@mail.com" },
  ]
  it("renders monsters", () => {
    render(<Monsters monsters={monstersProps} />)
    const monstersContiner = body.querySelector('[data-testid="monsters-container"]')
    expect(monstersContiner).toBeInTheDocument()
    expect(monstersContiner?.children.length).toBe(2)
  })
});
