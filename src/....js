import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./themeContext";
import { BrowserRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
  const { getByText } = render(
    <Router>
      <ThemeProvider value={{ theme: "", toggleTheme: jest.fn() }}>
        <App />
      </ThemeProvider>
    </Router>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
