/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";
import '@testing-library/jest-dom';

describe("Dropdown Component", () => {
  const mockHandleChangeData = jest.fn();
  const options = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ];

  test("renders dropdown with placeholder", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    expect(screen.getByText("Select a fruit")).toBeInTheDocument();
  });

  test("opens dropdown when clicked", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  test("selects an option and calls handleChangeData", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const option = screen.getByText("Banana");
    fireEvent.click(option);

    expect(mockHandleChangeData).toHaveBeenCalledWith("fruits", { id: 2, name: "Banana" });
  });

  test("does not open dropdown when disabled", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit",
          disabled:true
        }}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
  });

  test("shows 'not_found' message when options are empty", () => {
    render(
      <Dropdown
        options={[]}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("No Data")).toBeInTheDocument();
  });

  test("applies custom container class when provided", () => {
    const customClass = "custom-container-class";
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
        className={{ container: customClass }}
      />
    );

    const container = screen.getByRole("button").parentElement;
    expect(container).toHaveClass(customClass);
  });

  test("renders selected value when provided", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={{ id: 2, name: "Banana" }}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  test("renders placeholder when value is null", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    expect(screen.getByText("Select a fruit")).toBeInTheDocument();
  });

  test("applies active class to selected option", () => {
    render(
      <Dropdown
        options={options}
        name="fruits"
        value={{ id: 2, name: "Banana" }}
        handleChangeData={mockHandleChangeData}
        config={{
          placeholder:"Select a fruit"
        }}
      />
    );

    fireEvent.click(screen.getByRole("button")); // Open dropdown
    const dropdownOptions = screen.getAllByRole("button", { name: "Banana" });
    const dropdownOption = dropdownOptions.find(option => option.classList.contains("container-base-dropdown__option-item"));

    expect(dropdownOption).toBeDefined();
    expect(dropdownOption).toHaveClass("container-base-dropdown__option-item--active");
  });

  
  test("undefined data", () => {
    render(
      <Dropdown
        options={undefined as any}
        name="fruits"
        value={undefined as any}
        handleChangeData={mockHandleChangeData}
        config={undefined}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  

  test("undefined config", () => {
    render(
      <Dropdown
        options={[]}
        name="fruits"
        value={null}
        handleChangeData={mockHandleChangeData}
        config={undefined}
      />
    );
    const button = screen.getByTestId("dropdown");
    fireEvent.click(button);
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("dt-not-found")).toBeInTheDocument();
  });

});
