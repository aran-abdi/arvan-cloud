import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { TableRowNumber } from "./TableRowNumber";

describe("Table", () => {
  it("renders structured table content", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead align="index">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead align="center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell align="index">
              <TableRowNumber>1</TableRowNumber>
            </TableCell>
            <TableCell strong>Ada</TableCell>
            <TableCell align="center">Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const table = screen.getByRole("table");
    expect(within(table).getByRole("columnheader", { name: "#" })).toHaveAttribute(
      "scope",
      "col"
    );
    expect(
      within(table).getByRole("columnheader", { name: "Name" })
    ).toBeInTheDocument();
    expect(
      within(table).getByRole("columnheader", { name: "Status" })
    ).toBeInTheDocument();
    expect(within(table).getByText("1")).toBeInTheDocument();
    expect(within(table).getByText("Ada")).toBeInTheDocument();
    expect(within(table).getByText("Active")).toBeInTheDocument();
  });
});
