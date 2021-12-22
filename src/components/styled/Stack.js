import {
  space,
  layout,
  border,
  flexbox,
  color,
  position,
  compose,
} from "styled-system";

import styled from "styled-components";
import { css } from "@styled-system/css"; //E' una funziona che ci serve per scrivere direttamente del css compilato in maniera nativa.

const StackWrapper = styled("div")(
  ({
    childrenMarginTop,
    childrenMarginBottom,
    childremMarginRight,
    childrenMarginLeft,
    align,
    justify,
    direction,
  }) =>
    css({
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      "& > * + *": {
        //rispetto a se stesso ( a questo div), tutti i children  successivi a tutti i children.
        marginTop: childrenMarginTop,
        marginBottom: childrenMarginBottom,
        marginRight: childremMarginRight,
        marginLeft: childrenMarginLeft,
      },
    }),
  compose(flexbox, border, layout, color, space, position)
);

//Ora creo un vero e proprio componente.
const Stack = ({
  align,
  justify,
  direction = "row",
  spacing,
  children,
  ...rest
}) => {
  return (
    <StackWrapper
      {...rest}
      align={align}
      justify={justify}
      direction={direction}
      childrenMarginTop={direction === "column" ? spacing : 0}
      childrenMarginBottom={direction === "column-reverse" ? spacing : 0}
      childrenMarginLeft={direction === "row" ? spacing : 0}
      childrenMarginRight={direction === "row-reverse" ? spacing : 0}
    >
      {children}
    </StackWrapper>
  );
};

export default Stack;
