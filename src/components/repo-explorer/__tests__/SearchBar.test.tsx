import SearchBar from "@/components/repo-explorer/SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("SearchBar", () => {
  it("renders the input and button", () => {
    render(<SearchBar onSearch={() => {}} />);

    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("calls onSearch with the entered username", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter username");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "john_doe" } });
    fireEvent.submit(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("john_doe");
  });

  it("disables the button when isLoading is true", () => {
    render(<SearchBar onSearch={() => {}} isLoading={true} />);

    const button = screen.getByRole("button", { name: "Searching..." });

    expect(button).toBeDisabled();
  });
});
