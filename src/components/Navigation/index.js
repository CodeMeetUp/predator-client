import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const GradientDown = keyframes`
    0%{
    
        opacity: 0;
    }
    60%{

        opacity: 1;
    }
    100%{
        background: #333;
        opacity: 1;
    }
`;

const StyledNavigation = styled.div`
  user-select: none;

  background-color: #eee;

  ul {
    // max-width: 1200px;
    // margin: 0 auto;

    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 5px;
    background-color: #eee;
    font-size: 16px;
    height: 50px;
    align-items: center;
    transition: height 200ms linear;

    button.mobile-menu-toggle {
      position: absolute;
      top: 12px;
      right: 12px;
      color: white;
      font-weight: 800;
      font-size: 20px;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      opacity: 0;
      transform: rotate(0deg);
      transition: transform 2ms linear;
    }

    li {
      margin: 0px 20px;
      list-style: none;
      //   display: inline-block;
      justify-content: center;
      span.title {
        font-weight: bold;
        font-size: 20px;
        color: #000;
        margin-left: 20px;
      }
      a {
        color: #aaa;
        text-decoration: none;
        font-weight: light;
        transition: color 200ms linear, font-weight 200ms linear;
        &:hover,
        &.active {
          color: black;
          transition: color 200ms linear, font-weight 200ms linear;
        }
        &.active {
          font-weight: bold;
        }
      }
    }
  }
  a:visited {
  }
  .push-rest-to-right {
    margin-left: auto;
  }
  @media screen and (max-width: 500px) {
    ul {
      flex-direction: column;
      align-items: start;
      background-color: black;
      height: auto;
      transition: height 200ms linear;
      overflow-y: hidden;

      .vertical-line {
        content: " ";
        position: absolute;
        right: calc(100vw - 80px);
        // // // // // // // // // // // // // //   border-right: 1px #222 solid;

        top: 60px;
        max-width: 1px;
        min-width: 1px;
        // height:  216px;
        height: ${({ pageLength }) =>
          pageLength > 0 ? pageLength * 50 + 16 : 216}px;
        transform: rotate(-10deg);
        &:before,
        &:after {
          position: absolute;
          content: " ";
          height: 100%;
          width: 100%;
          display: block;
        }

        // Just for covering some excess lines
        &:before {
          opacity: 0;
          width: 40px;
          background-color: black;
          transform: translateX(-40px);
        }
        &:after {
          opacity: 0;
        }
      }

      li.page-link {
        display: none;
      }

      button.mobile-menu-toggle {
        opacity: 1;
        transform: rotate(0deg);
        transition: transform 2ms linear;
      }

      &.open {
        .vertical-line {
          &:before {
            opacity: 1;
            transition: opacity 600ms linear;
          }
          &:after {
            background: linear-gradient(
              180deg,
              rgba(20, 20, 20, 1) 0%,
              rgba(34, 34, 34, 1) 100%
            );
            animation-name: ${GradientDown};
            animation-duration: 300ms;
            animation-fill-mode: forwards;
          }
        }

        button.mobile-menu-toggle {
          transform: rotate(270deg);
          transition: transform 200ms linear;
        }
        ${({ pageLength }) =>
          `
        height: ${pageLength * 50 + 100}px;
    `}

        li.page-link {
          display: flex;
          border-bottom: 1px solid #222;
          width: calc(100vw - 80px);
          justify-content: end;
          a {
            margin-right: 15px;
            cursor: pointer;
            &:hover {
              color: yellow;
            }
          }
        }
      }
      li {
        margin-left: auto;
        display: flex;
        align-items: center;
        min-height: 50px;
        a {
          color: #888;
        }
        a.active,
        span.title {
          color: white;
        }
        &.title-list-item {
          margin-left: 0px;
        }
      }
    }
  }
`;

const Navigation = ({ pages }) => {
  let [mobileNavOpen, _mobileNavOpen] = useState(false);

  return (
    <StyledNavigation pageLength={pages.length}>
      <ul className={mobileNavOpen ? "open" : ""}>
        <div className="vertical-line" />
        <li className="title-list-item">
          <span className="title">Predator</span>
        </li>
        <button
          className={`mobile-menu-toggle ${mobileNavOpen ? "open" : ""}`}
          onClick={() => _mobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? "ⓧ" : "︙"}
        </button>
        {pages.map((p, k) => (
          <li
            key={k}
            className={`page-link ${p.pushRight ? "push-rest-to-right" : ""}`}
          >
            <NavLink to={p.to}>{p.label}</NavLink>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
