import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: .5rem;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-column-gap: 0.5rem;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px 10px 0 0;

  h1 {
    font-size: 24px;
    color: orange;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
`;

export const Search = styled.div`
  grid-area: search;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const NewNote = styled.button`
  grid-area: newnote;
`;