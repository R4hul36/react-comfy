import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  console.log(stars);
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    console.log(index);
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  // l  et starCount = stars;
  // let result = [];
  // console.log(starCount);
  // for (let i = 0; i < 5; i++) {
  //   if (starCount < 1 && starCount > 0.5) {
  //     result.push(<BsStarHalf />);
  //     starCount -= 1;
  //   } else if (starCount > 1) {
  //     result.push(<BsStarFill />);
  //     starCount -= 1;
  //   } else {
  //     result.push(<BsStar />);
  //     starCount -= 1;
  //   }
  // }
  // console.log(result);
  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
