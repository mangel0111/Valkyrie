import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../components/Login';
//import { mockComponent } from '../../utils/testUtils';

jest.mock('react-google-login',  () => 'googleLogin');

it('renders correctly', () => {
    const tree = renderer.create(
        <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
