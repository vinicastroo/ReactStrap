import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
`;

export const Logo = styled.div`
    padding: 25px 55px;
    background: lightblue;
    margin-right: 50px;
    border-radius: 40px;
    border: 1.5px solid lightskyblue;
`;

export const Grid = styled.div`
    display:grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-gap: 16px;
`;

export const Card = styled.div`
margin: 16px 0;
padding: 10px;
border-radius: 4px;

div {
    padding: 60px;
    background: #eee;
}
`;

export const Map = styled.div`
    background:#eee;
    height: 75%;
    padding: 40px;
`;