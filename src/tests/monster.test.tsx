import { describe, expect, it } from "vitest";
import { Monster } from '../components/monster/monster'
import { render } from "@testing-library/react";

describe("Monster Component", () => {
  const monsterProps = {
    id: 1,
    name: "Monster",
    email: "monster@mail.com"
  }
  const body = document.body;
  it("should render the monster", () => {
    render(<Monster monster={monsterProps} />)
    const monsterContainer = body.querySelector("[data-testid='monster-container']");
    expect(monsterContainer).toBeInTheDocument();
  })
  it("should render the monster name", () => {
    render(<Monster monster={monsterProps} />)
    const monsterTitle = body.querySelector("[data-testid='monster-title']");
    expect(monsterTitle).toBeInTheDocument();
    expect(monsterTitle).toHaveTextContent("Monster");
  })
  it("should render the monster email", () => {
    render(<Monster monster={monsterProps} />)
    const monsterEmail = body.querySelector("[data-testid='monster-email']");
    expect(monsterEmail).toBeInTheDocument();
    expect(monsterEmail).toHaveTextContent("monster@mail.com")
  })
  it("should render the monster image", () => {
    render(<Monster monster={monsterProps} />)
    const monsterImage = body.querySelector("[data-testid='monster-image']");
    expect(monsterImage).toBeInTheDocument();
    expect(monsterImage).toHaveAttribute("src", "https://robohash.org/1?set=set2")
    expect(monsterImage).toHaveAttribute("alt", "Monster")
  });
})
