import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./button";


describe("Button component", () => {
    test("Button без текста рендерится без ошибок", () => {
        render(<Button />);
        const btn = screen.getByRole("button");
        expect(btn).toMatchSnapshot();
      });
      test("Button c текстом рендерится без ошибок", () => {
        render(<Button text={'text'} />);
        const btn = screen.getByRole("button");
        expect(btn).toMatchSnapshot();
      });
      test("Button заблокированная рендерится без ошибок", () => {
        render(<Button disabled={true} />);
        const btn = screen.getByRole("button");
        expect(btn).toMatchSnapshot();
      });
      test("Button с индикацией загрузки рендерится без ошибок", () => {
        render(<Button isLoader={true} />);
        const btn = screen.getByRole("button");
        expect(btn).toMatchSnapshot();
      });
      test ("Нажатие Button вызывает коллбэк", () => {
        window.alert = jest.fn();
        render(<Button onClick={() => alert("коллбэк вызван")} />);
        const btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(window.alert).toHaveBeenCalledWith("коллбэк вызван");
      })
})

