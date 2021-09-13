import { ContainerWrapper } from "./ContainerStyled";

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    );
}

export default Container;