import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import styled from 'styled-components';

const SpotlightName = styled.h2`
  text-align: center;
`;

const CoinSpotlight = () => {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => {
        return (
          <Tile>
            <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
            <CoinImage spotlight coin={coinList[currentFavorite]} />
          </Tile>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinSpotlight;
