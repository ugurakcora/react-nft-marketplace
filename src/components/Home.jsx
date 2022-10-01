import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import Button from './Button';
import hero from '../assets/hero.png';
import heroText from '../assets/heroText.png';
export default function Home() {
  return (
    <Section>
     <Navbar /> 
     <div className="ellipse"></div>
     <div className="container">
      <div className="content">
          <h1> Explore Our 
            <span>
              <img src={heroText} alt="hero text" />
            </span>
            Hero Text Digital NFT Market Place 
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto totam porro error eaque nesciunt autem numquam nihil eligendi praesentium?</p>
          <div className="buttons">
            <Button blue text="Explore Now"/>
            <Button text="Create NTF"/>
          </div>
          <div className="data">
            <div className="dataTab">
              <h2>40K</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTab">
              <h2>12K</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTab">
              <h2>20K</h2>
              <h5>Artist</h5>
            </div>
          </div>
      </div>
     <div className="image">
      <img src={hero} alt="hero" />
     </div>
     </div>
    </Section>
  )
}

const Section = styled.section`
  margin: .5rem;
  background-color: #232835;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  height: 100vh;
  .ellipse{
    height: 30rem;
    width: 30rem;
    background-color: #ae54c27d;
    opacity: .5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }
  .container{
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content{
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;
      h1{
        font-size: 5rem;
        color: #fff;
      }
      p{
        color: #a6a6a6;
      }
      .buttons{
        display: flex;
        gap: 2rem;
      }
      .data{
        display: flex;
        gap: 5rem;
        .dataTab{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h2{
            font-size: 2rem;
            color: #fff;
          }
          h5{
            text-align: center;
            color: #a6a6a6;
          }
        }
      }
    }
    .image{
      img{
        height: 40rem;
      }
    }
  }
`;
