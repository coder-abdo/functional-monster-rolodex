import { describe, expect, it, vi } from "vitest";
import { MonsterSearchBox } from '../components/monsterSearch'
import { fireEvent, render } from "@testing-library/react";

describe("monsterSearch Component", () => {
  const monsterSearchProps = {
    searchTerm: "test",
    handleChange: vi.fn()
  }
  it("renders monsterSearch", () => {
    render(<MonsterSearchBox searchTerm={monsterSearchProps.searchTerm} handleChange={monsterSearchProps.handleChange} />)
    const monsterSearchBox = document.querySelector('[data-testid="monster-search-box"]')
    expect(monsterSearchBox).toBeInTheDocument()
  })
  it("should change value", () => {
    render(<MonsterSearchBox searchTerm={monsterSearchProps.searchTerm} handleChange={monsterSearchProps.handleChange} />)
    const monsterSearchBox = document.querySelector('[data-testid="monster-search-box"]')
    expect(monsterSearchBox).toHaveValue('test')
    fireEvent.change(monsterSearchBox!, { target: { value: 'test2' } })
    expect(monsterSearchBox).toHaveValue('test2')
  })

});
