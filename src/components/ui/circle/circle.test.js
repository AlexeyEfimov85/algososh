//import renderer from "react-test-renderer";


import { Circle } from "./circle";
import { ElementStates } from "../../../types/element-states";

const renderer = require('react-test-renderer'); 

describe("Circle component", () => {
  test("Circle рендерится без буквы", () => {
    const circle = renderer.create(<Circle />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится c буквами", () => {
    const circle = renderer.create(<Circle letter={'letter'} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится c head", () => {
    const circle = renderer.create(<Circle head={'letter'} />).toJSON();
    expect(circle).toMatchSnapshot();
  });

  test("Circle рендерится c react элементом в head", () => {
    const circle = renderer.create(<Circle head={< Circle />} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится c tail", () => {
    const circle = renderer.create(<Circle tail={'letter'} />).toJSON();
    expect(circle).toMatchSnapshot();
  });

  test("Circle рендерится c react элементом в tail", () => {
    const circle = renderer.create(<Circle tail={< Circle />} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится c index", () => {
    const circle = renderer.create(<Circle index={5} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится c пропом isSmall ===  true", () => {
    const circle = renderer.create(<Circle isSmall={true} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится в состоянии default", () => {
    const circle = renderer.create(<Circle state={ElementStates.Default} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится в состоянии changing", () => {
    const circle = renderer.create(<Circle state={ElementStates.Changing} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Circle рендерится в состоянии modified", () => {
    const circle = renderer.create(<Circle state={ElementStates.Modified} />).toJSON();
    expect(circle).toMatchSnapshot();
  });

});
