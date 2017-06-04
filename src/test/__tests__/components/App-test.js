import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../components/App';

it('renders correctly', () => {
    localStorage.setItem('uid', 'uidTest123');
    localStorage.setItem('owner', 'johnDoe');
    const tree = renderer.create(
        <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
