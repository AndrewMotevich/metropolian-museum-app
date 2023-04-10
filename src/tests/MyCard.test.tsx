import React from 'react';
import { render } from '@testing-library/react';
import MyCard from '../components/UI/main-card/MyCard';

describe('MyCard', () => {
  const onClickHandler = jest.fn();
  const modal = jest.fn();
  it('render MyCard component', () => {
    render(
      <MyCard
        onClickHandler={onClickHandler}
        modal={modal}
        key={123456}
        elem={{
          title: 'String',
          objectID: 123456,
          primaryImage: 'String',
          primaryImageSmall: 'String',
          artistDisplayName: 'String',
          artistDisplayBio: 'String',
          artistNationality: 'String',
          artistBeginDate: 'String',
          artistEndDate: 'String',
          objectDate: 'String',
          objectName: 'String',
          geoLocation: 'String',
        }}
      />
    );
    expect(document.querySelector('.myCardImage')).toBeDefined();
  });
});
