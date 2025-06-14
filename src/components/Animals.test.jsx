import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Animals from "./Animals";

describe("Animals Component", () => {
  it("shows the no-pets message when the array is empty", () => {
    render(
      <Animals
        animals={[]}
        title="random string"
        nopets="No pets here"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );

    expect(screen.getByText("No pets here")).toBeInTheDocument();
  });

  it("shows the no-pets message when the array has pets", () => {
    const samplePets = [
      {
        species: "Bear",
        vaccinated: true,
        imageUrl: "https://placebear.com/500/407",
        kidFriendly: true,
        id: "22789fd0-e4cb-439c-a5a6-0a028101a5da",
        adopted: true,
        name: "Polo",
        age: "16",
      },
      {
        species: "Cat",
        vaccinated: true,
        imageUrl: "https://placebear.com/500/407",
        kidFriendly: true,
        id: "22789fd0-e4cb-439c-a5a6-0a028101a5da",
        adopted: true,
        name: "Mooo",
        age: "16",
      },
      {
        species: "Bird",
        vaccinated: true,
        imageUrl: "https://placebear.com/500/407",
        kidFriendly: true,
        id: "22789fd0-e4cb-439c-a5a6-0a028101a5da",
        adopted: false,
        name: "kracken",
        age: "16",
      },
    ];
    render(
      <Animals
        animals={samplePets}
        title="random string"
        nopets="No pets here"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );
    expect(screen.getAllByText("🗑️")).toHaveLength(3);
    expect(screen.getAllByText("🗑️")[0]).toBeInTheDocument();
  });
});
