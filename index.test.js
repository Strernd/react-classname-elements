const enzyme = require('enzyme');
const React = require('react');
const generator = require('./index');


describe('generator', () => {
  test('should set className for string arguments', () => {
    const Foo = generator.div('some-class another-one');
    const wrapper = enzyme.shallow(React.createElement(Foo));
    expect(wrapper.hasClass('some-class')).toEqual(true);
    expect(wrapper.hasClass('another-one')).toEqual(true);
  });
});