/* eslint-disable react/prop-types */
import styled from 'styled-components';

// Styled components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 770px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
`;

const ImageContainer = styled.div`
  flex-basis: 100%;
  background-image: url('path_to_your_floral_image.jpg');
  background-size: cover;
`;

const ContentContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const AlbumTitle = styled.h2`
  margin: 0;
  color: #000;
  font-size: 1.2em;
`;

const AlbumSubtitle = styled.h3`
  color: #666;
  font-size: 1em;
`;

const Year = styled.span`
  color: #666;
  font-size: 0.8em;
`;

const RateSection = styled.div`
  display: flex;
  align-items: center; // Alignement vertical des enfants
  justify-content: space-between; // Répartition de l'espace horizontalement entre les enfants
  padding: 10px;
  background-color: #f8f8f8; // Un fond légèrement différent pour distinguer la section
`;


const RateText = styled.div`
  font-size: 0.8em;
  margin-bottom: 5px;
`;

const StarRating = styled.div`
  display: flex;
`;


// Functional component
const Card = ({ title, subtitle, year, image }) => {
  return (
    <CardWrapper>
      <TopSection>
        <ImageContainer style={{ backgroundImage: `url(${image})` }} />
        <ContentContainer>
          <AlbumTitle>{title}</AlbumTitle>
          <AlbumSubtitle>{subtitle}</AlbumSubtitle>
          <Year>{year}</Year>
        </ContentContainer>
      </TopSection>
      <RateSection>
        <RateText>Rate this album</RateText>
        <StarRating>
        {'★★★☆☆'}
        </StarRating>
      </RateSection>
    </CardWrapper>
  );
};

export default Card;


