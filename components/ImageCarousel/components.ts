import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageWrapper = styled.div`
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        user-select: none;
    }
`;

export const ArrowContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    user-select: none;
    cursor: pointer;
`;

export const Arrow = styled.div<{ direction: "left" | "right"}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
    height: 100%;

    &:hover {
        opacity: 1;
    }

    &:before, &:after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.2;
        padding: 10px;
        z-index: -1;
    }

    ${({ direction }) => direction === "left" && css`
        left: 10px;
    `}

    ${({ direction }) => direction === "right" && css`
        right: 10px;
        &:only-child {
            right: calc(-100% + 31px);
        }
    `}
`;

