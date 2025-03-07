import RepoCard from "@/components/repo-finder/RepoCard";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("RepoCard", () => {
  it("renders the title, description, and star count correctly", () => {
    const props = {
      title: "React Repo",
      description: "A library for building user interfaces",
      star: 12000,
    };

    render(<RepoCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.star.toString())).toBeInTheDocument(); // Star count
  });
});
