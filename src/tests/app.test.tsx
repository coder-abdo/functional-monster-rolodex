import { describe, expect, it } from "vitest";
import App from "../App";
import { getByTestId, render } from "@testing-library/react";

describe("App Component", () => {
  it("should render the app container", () => {
    render(<App />);
    const appContainer = getByTestId(document.body, "app-container");
    expect(appContainer).toBeInTheDocument();
    expect(getByTestId(appContainer, "app-title")).toBeInTheDocument();
  })
  it("should render the app title", () => {
    render(<App />);
    const appContainer = getByTestId(document.body, "app-container");
    expect(getByTestId(appContainer, "app-title")).toBeInTheDocument();
    expect(getByTestId(appContainer, "app-title")).toHaveTextContent("monster rolodex");
  })
  it("should render the monster search box", () => {
    render(<App />);
    const appContainer = getByTestId(document.body, "app-container");
    expect(getByTestId(appContainer, "monster-search-box")).toBeInTheDocument();
  })
  it("should render the monsters", () => {
    render(<App />);
    const appContainer = getByTestId(document.body, "app-container");
    expect(getByTestId(appContainer, "monsters-container")).toBeInTheDocument();
  })
})
